from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS
import os
import json
import re
from datetime import datetime
import sqlite3
from werkzeug.utils import secure_filename
import PyPDF2
import docx
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Configuration
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Database setup
def init_db():
    conn = sqlite3.connect('resume_checker.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS evaluations
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  job_title TEXT,
                  candidate_name TEXT,
                  relevance_score INTEGER,
                  verdict TEXT,
                  missing_skills TEXT,
                  suggestions TEXT,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
    conn.commit()
    conn.close()

init_db()

class ResumeAnalyzer:
    def __init__(self):
        self.technical_skills = [
            'Python', 'Java', 'JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB', 'AWS', 
            'Docker', 'Kubernetes', 'Git', 'HTML', 'CSS', 'C++', 'C#', 'Ruby', 'PHP', 
            'Go', 'Rust', 'Swift', 'Kotlin', 'TypeScript', 'Angular', 'Vue.js', 'Django', 
            'Flask', 'Spring', 'Express', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch',
            'Jenkins', 'CI/CD', 'Agile', 'Scrum', 'Machine Learning', 'AI', 'Data Science',
            'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Tableau', 'Power BI'
        ]
    
    def extract_text_from_pdf(self, file_path):
        text = ""
        try:
            with open(file_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                for page in pdf_reader.pages:
                    text += page.extract_text()
        except Exception as e:
            print(f"Error reading PDF: {e}")
        return text

    def extract_text_from_docx(self, file_path):
        text = ""
        try:
            doc = docx.Document(file_path)
            for paragraph in doc.paragraphs:
                text += paragraph.text + "\n"
        except Exception as e:
            print(f"Error reading DOCX: {e}")
        return text

    def extract_skills(self, text):
        found_skills = []
        text_lower = text.lower()
        for skill in self.technical_skills:
            if skill.lower() in text_lower:
                found_skills.append(skill)
        return found_skills

    def extract_experience(self, text):
        exp_patterns = [
            r'(\d+)\+?\s*years?\s*(?:of\s*)?experience',
            r'experience\s*:?\s*(\d+)\+?\s*years?',
            r'(\d+)\+?\s*yrs?\s*(?:of\s*)?experience'
        ]
        
        for pattern in exp_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return int(match.group(1))
        return 0

    def calculate_ats_score(self, resume_text):
        # Simple ATS scoring based on formatting and keywords
        score = 70  # Base score
        
        # Check for common ATS-friendly elements
        if len(resume_text.split()) > 200:
            score += 10
        if '@' in resume_text:  # Email present
            score += 5
        if re.search(r'\d{3}[-.]?\d{3}[-.]?\d{4}', resume_text):  # Phone number
            score += 5
        if any(word in resume_text.lower() for word in ['experience', 'education', 'skills']):
            score += 10
            
        return min(score, 100)

    def calculate_semantic_similarity(self, resume_text, jd_text):
        try:
            vectorizer = TfidfVectorizer(stop_words='english', max_features=1000)
            tfidf_matrix = vectorizer.fit_transform([resume_text, jd_text])
            similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
            return similarity * 100
        except:
            return 50  # Default similarity

    def analyze_resume(self, resume_text, jd_text):
        # Extract skills from both texts
        resume_skills = self.extract_skills(resume_text)
        jd_skills = self.extract_skills(jd_text)
        
        # Calculate matches
        matched_skills = list(set(resume_skills) & set(jd_skills))
        missing_skills = list(set(jd_skills) - set(resume_skills))
        
        # Calculate scores
        skills_match = (len(matched_skills) / max(len(jd_skills), 1)) * 100 if jd_skills else 0
        ats_score = self.calculate_ats_score(resume_text)
        semantic_score = self.calculate_semantic_similarity(resume_text, jd_text)
        
        # Experience matching
        resume_exp = self.extract_experience(resume_text)
        jd_exp = self.extract_experience(jd_text)
        exp_match = min((resume_exp / max(jd_exp, 1)) * 100, 100) if jd_exp > 0 else 80
        
        # Overall score calculation
        overall_score = int((skills_match * 0.4 + ats_score * 0.3 + semantic_score * 0.2 + exp_match * 0.1))
        
        # Generate verdict
        if overall_score >= 75:
            verdict = "High"
        elif overall_score >= 50:
            verdict = "Medium"
        else:
            verdict = "Low"
        
        # Generate suggestions
        suggestions = []
        if len(missing_skills) > 0:
            suggestions.append(f"Add missing skills: {', '.join(missing_skills[:5])}")
        if ats_score < 80:
            suggestions.append("Improve ATS compatibility by using standard section headers")
        if semantic_score < 60:
            suggestions.append("Include more relevant keywords from the job description")
        if exp_match < 80:
            suggestions.append("Highlight relevant experience more prominently")
        
        return {
            'overall_score': overall_score,
            'verdict': verdict,
            'detailed_scores': {
                'skills_match': int(skills_match),
                'ats_compatibility': int(ats_score),
                'semantic_match': int(semantic_score),
                'experience_match': int(exp_match)
            },
            'matched_skills': matched_skills,
            'missing_skills': missing_skills,
            'suggestions': suggestions
        }

analyzer = ResumeAnalyzer()

@app.route('/')
def index():
    # Serve your existing index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        return f.read()

@app.route('/api/analyze', methods=['POST'])
def analyze_resume():
    try:
        # Handle both file upload and text input
        resume_text = ""
        
        if 'resume_file' in request.files:
            file = request.files['resume_file']
            if file.filename != '':
                filename = secure_filename(file.filename)
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(file_path)
                
                if filename.lower().endswith('.pdf'):
                    resume_text = analyzer.extract_text_from_pdf(file_path)
                elif filename.lower().endswith(('.docx', '.doc')):
                    resume_text = analyzer.extract_text_from_docx(file_path)
                
                os.remove(file_path)  # Clean up
        
        # If no file or text from file, try text input
        if not resume_text:
            resume_text = request.form.get('resume_text', '')
        
        jd_text = request.form.get('job_description', '')
        
        if not resume_text or not jd_text:
            return jsonify({'error': 'Both resume and job description are required'}), 400
        
        # Analyze resume
        results = analyzer.analyze_resume(resume_text, jd_text)
        
        # Store in database
        conn = sqlite3.connect('resume_checker.db')
        c = conn.cursor()
        c.execute('''INSERT INTO evaluations 
                     (job_title, candidate_name, relevance_score, verdict, missing_skills, suggestions)
                     VALUES (?, ?, ?, ?, ?, ?)''',
                  ('Job Analysis', 'Candidate', results['overall_score'], results['verdict'], 
                   json.dumps(results['missing_skills']), json.dumps(results['suggestions'])))
        conn.commit()
        conn.close()
        
        return jsonify(results)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/batch-analyze', methods=['POST'])
def batch_analyze():
    try:
        jd_text = request.form.get('job_description', '')
        if not jd_text:
            return jsonify({'error': 'Job description is required'}), 400
        
        files = request.files.getlist('resume_files')
        results = []
        
        for file in files:
            if file.filename == '':
                continue
                
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            
            resume_text = ""
            if filename.lower().endswith('.pdf'):
                resume_text = analyzer.extract_text_from_pdf(file_path)
            elif filename.lower().endswith(('.docx', '.doc')):
                resume_text = analyzer.extract_text_from_docx(file_path)
            
            if resume_text:
                analysis = analyzer.analyze_resume(resume_text, jd_text)
                results.append({
                    'filename': filename,
                    'overall_score': analysis['overall_score'],
                    'verdict': analysis['verdict'],
                    'detailed_scores': analysis['detailed_scores']
                })
            
            os.remove(file_path)  # Clean up
        
        return jsonify({'results': results})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/generate-questions', methods=['POST'])
def generate_questions():
    try:
        resume_text = request.form.get('resume_text', '')
        difficulty = request.form.get('difficulty', 'mid')
        question_type = request.form.get('type', 'mixed')
        
        # Simple question generation based on skills found
        skills = analyzer.extract_skills(resume_text)
        
        questions = []
        
        if question_type in ['technical', 'mixed']:
            for skill in skills[:3]:  # Top 3 skills
                questions.append({
                    'type': 'Technical',
                    'question': f"Can you explain your experience with {skill} and provide an example of a project where you used it?",
                    'tips': f"Focus on specific projects and quantifiable results when discussing {skill}."
                })
        
        if question_type in ['behavioral', 'mixed']:
            behavioral_questions = [
                "Tell me about a challenging project you worked on and how you overcame obstacles.",
                "Describe a time when you had to work with a difficult team member.",
                "How do you prioritize tasks when working on multiple projects?",
                "Give an example of when you had to learn a new technology quickly."
            ]
            
            for q in behavioral_questions[:2]:
                questions.append({
                    'type': 'Behavioral',
                    'question': q,
                    'tips': "Use the STAR method (Situation, Task, Action, Result) to structure your answer."
                })
        
        return jsonify({'questions': questions})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/history', methods=['GET'])
def get_history():
    try:
        conn = sqlite3.connect('resume_checker.db')
        c = conn.cursor()
        c.execute('SELECT * FROM evaluations ORDER BY created_at DESC LIMIT 20')
        evaluations = c.fetchall()
        conn.close()
        
        results = []
        for eval in evaluations:
            results.append({
                'id': eval[0],
                'job_title': eval[1],
                'candidate_name': eval[2],
                'relevance_score': eval[3],
                'verdict': eval[4],
                'created_at': eval[7]
            })
        
        return jsonify({'evaluations': results})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("🚀 Resume Relevance Check System Starting...")
    print("📊 Features: Resume Analysis, Batch Processing, Interview Prep")
    print("🌐 Access at: http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)