from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import json
import re
from datetime import datetime
import sqlite3
from werkzeug.utils import secure_filename
import PyPDF2
import docx
from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import spacy

app = Flask(__name__)
CORS(app)

# Configuration
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Initialize models
try:
    model = SentenceTransformer('all-MiniLM-L6-v2')
    nlp = spacy.load('en_core_web_sm')
except:
    model = None
    nlp = None

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

class ResumeParser:
    @staticmethod
    def extract_text_from_pdf(file_path):
        text = ""
        try:
            with open(file_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                for page in pdf_reader.pages:
                    text += page.extract_text()
        except:
            pass
        return text

    @staticmethod
    def extract_text_from_docx(file_path):
        text = ""
        try:
            doc = docx.Document(file_path)
            for paragraph in doc.paragraphs:
                text += paragraph.text + "\n"
        except:
            pass
        return text

    @staticmethod
    def extract_skills(text):
        skills_pattern = r'\b(?:Python|Java|JavaScript|React|Node\.js|SQL|MongoDB|AWS|Docker|Kubernetes|Git|HTML|CSS|C\+\+|C#|Ruby|PHP|Go|Rust|Swift|Kotlin|TypeScript|Angular|Vue\.js|Django|Flask|Spring|Express|PostgreSQL|MySQL|Redis|Elasticsearch|Jenkins|CI/CD|Agile|Scrum|Machine Learning|AI|Data Science|Pandas|NumPy|TensorFlow|PyTorch|Scikit-learn|Tableau|Power BI|Excel|Photoshop|Illustrator|Figma|Sketch)\b'
        skills = re.findall(skills_pattern, text, re.IGNORECASE)
        return list(set(skills))

    @staticmethod
    def extract_experience(text):
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

class JobDescriptionParser:
    @staticmethod
    def extract_requirements(jd_text):
        requirements = {
            'skills': ResumeParser.extract_skills(jd_text),
            'experience': ResumeParser.extract_experience(jd_text),
            'education': JobDescriptionParser.extract_education(jd_text),
            'keywords': JobDescriptionParser.extract_keywords(jd_text)
        }
        return requirements

    @staticmethod
    def extract_education(text):
        edu_patterns = [
            r'\b(?:Bachelor|Master|PhD|B\.Tech|M\.Tech|MBA|BCA|MCA|B\.Sc|M\.Sc)\b',
            r'\b(?:Engineering|Computer Science|Information Technology|Software)\b'
        ]
        
        education = []
        for pattern in edu_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            education.extend(matches)
        return list(set(education))

    @staticmethod
    def extract_keywords(text):
        if nlp:
            doc = nlp(text)
            keywords = [token.lemma_.lower() for token in doc 
                       if token.pos_ in ['NOUN', 'ADJ'] and len(token.text) > 2]
            return list(set(keywords))
        return []

class RelevanceAnalyzer:
    @staticmethod
    def calculate_relevance_score(resume_data, jd_requirements):
        scores = {
            'skills_match': 0,
            'experience_match': 0,
            'education_match': 0,
            'semantic_match': 0
        }

        # Skills matching
        resume_skills = set([skill.lower() for skill in resume_data.get('skills', [])])
        jd_skills = set([skill.lower() for skill in jd_requirements.get('skills', [])])
        
        if jd_skills:
            skills_intersection = resume_skills.intersection(jd_skills)
            scores['skills_match'] = (len(skills_intersection) / len(jd_skills)) * 100

        # Experience matching
        resume_exp = resume_data.get('experience', 0)
        required_exp = jd_requirements.get('experience', 0)
        
        if required_exp > 0:
            if resume_exp >= required_exp:
                scores['experience_match'] = 100
            else:
                scores['experience_match'] = (resume_exp / required_exp) * 100

        # Education matching
        resume_edu = set([edu.lower() for edu in resume_data.get('education', [])])
        jd_edu = set([edu.lower() for edu in jd_requirements.get('education', [])])
        
        if jd_edu:
            edu_intersection = resume_edu.intersection(jd_edu)
            scores['education_match'] = (len(edu_intersection) / len(jd_edu)) * 100

        # Semantic matching using sentence transformers
        if model:
            resume_text = resume_data.get('raw_text', '')
            jd_text = ' '.join(jd_requirements.get('keywords', []))
            
            if resume_text and jd_text:
                resume_embedding = model.encode([resume_text])
                jd_embedding = model.encode([jd_text])
                similarity = cosine_similarity(resume_embedding, jd_embedding)[0][0]
                scores['semantic_match'] = similarity * 100

        # Calculate overall score
        weights = {'skills_match': 0.4, 'experience_match': 0.3, 'education_match': 0.2, 'semantic_match': 0.1}
        overall_score = sum(scores[key] * weights[key] for key in scores)
        
        return int(overall_score), scores

    @staticmethod
    def generate_verdict(score):
        if score >= 75:
            return "High"
        elif score >= 50:
            return "Medium"
        else:
            return "Low"

    @staticmethod
    def generate_suggestions(resume_data, jd_requirements, detailed_scores):
        suggestions = []
        missing_skills = []

        # Missing skills
        resume_skills = set([skill.lower() for skill in resume_data.get('skills', [])])
        jd_skills = set([skill.lower() for skill in jd_requirements.get('skills', [])])
        missing = jd_skills - resume_skills
        
        if missing:
            missing_skills = list(missing)
            suggestions.append(f"Add missing technical skills: {', '.join(missing)}")

        # Experience gap
        if detailed_scores['experience_match'] < 100:
            required_exp = jd_requirements.get('experience', 0)
            resume_exp = resume_data.get('experience', 0)
            if required_exp > resume_exp:
                suggestions.append(f"Gain {required_exp - resume_exp} more years of experience")

        # ATS optimization
        if detailed_scores['skills_match'] < 80:
            suggestions.append("Include more relevant keywords from the job description")

        return suggestions, missing_skills

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/analyze', methods=['POST'])
def analyze_resume():
    try:
        # Get job description
        jd_text = request.form.get('job_description', '')
        if not jd_text:
            return jsonify({'error': 'Job description is required'}), 400

        # Get resume file
        if 'resume' not in request.files:
            return jsonify({'error': 'Resume file is required'}), 400
        
        resume_file = request.files['resume']
        if resume_file.filename == '':
            return jsonify({'error': 'No resume file selected'}), 400

        # Save uploaded file
        filename = secure_filename(resume_file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        resume_file.save(file_path)

        # Extract text from resume
        if filename.lower().endswith('.pdf'):
            resume_text = ResumeParser.extract_text_from_pdf(file_path)
        elif filename.lower().endswith(('.docx', '.doc')):
            resume_text = ResumeParser.extract_text_from_docx(file_path)
        else:
            return jsonify({'error': 'Unsupported file format'}), 400

        # Parse resume data
        resume_data = {
            'raw_text': resume_text,
            'skills': ResumeParser.extract_skills(resume_text),
            'experience': ResumeParser.extract_experience(resume_text),
            'education': ResumeParser.extract_skills(resume_text)  # Simplified
        }

        # Parse job description
        jd_requirements = JobDescriptionParser.extract_requirements(jd_text)

        # Calculate relevance score
        overall_score, detailed_scores = RelevanceAnalyzer.calculate_relevance_score(
            resume_data, jd_requirements
        )

        # Generate verdict and suggestions
        verdict = RelevanceAnalyzer.generate_verdict(overall_score)
        suggestions, missing_skills = RelevanceAnalyzer.generate_suggestions(
            resume_data, jd_requirements, detailed_scores
        )

        # Store in database
        conn = sqlite3.connect('resume_checker.db')
        c = conn.cursor()
        c.execute('''INSERT INTO evaluations 
                     (job_title, candidate_name, relevance_score, verdict, missing_skills, suggestions)
                     VALUES (?, ?, ?, ?, ?, ?)''',
                  ('Job Position', filename, overall_score, verdict, 
                   json.dumps(missing_skills), json.dumps(suggestions)))
        conn.commit()
        conn.close()

        # Clean up uploaded file
        os.remove(file_path)

        return jsonify({
            'relevance_score': overall_score,
            'verdict': verdict,
            'detailed_scores': detailed_scores,
            'missing_skills': missing_skills,
            'suggestions': suggestions,
            'resume_skills': resume_data['skills'],
            'required_skills': jd_requirements['skills']
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/batch-analyze', methods=['POST'])
def batch_analyze():
    try:
        results = []
        jd_text = request.form.get('job_description', '')
        
        if not jd_text:
            return jsonify({'error': 'Job description is required'}), 400

        files = request.files.getlist('resumes')
        
        for resume_file in files:
            if resume_file.filename == '':
                continue
                
            # Process each resume similar to single analysis
            filename = secure_filename(resume_file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            resume_file.save(file_path)

            # Extract and analyze
            if filename.lower().endswith('.pdf'):
                resume_text = ResumeParser.extract_text_from_pdf(file_path)
            elif filename.lower().endswith(('.docx', '.doc')):
                resume_text = ResumeParser.extract_text_from_docx(file_path)
            else:
                continue

            resume_data = {
                'raw_text': resume_text,
                'skills': ResumeParser.extract_skills(resume_text),
                'experience': ResumeParser.extract_experience(resume_text),
                'education': ResumeParser.extract_skills(resume_text)
            }

            jd_requirements = JobDescriptionParser.extract_requirements(jd_text)
            overall_score, detailed_scores = RelevanceAnalyzer.calculate_relevance_score(
                resume_data, jd_requirements
            )
            verdict = RelevanceAnalyzer.generate_verdict(overall_score)

            results.append({
                'filename': filename,
                'relevance_score': overall_score,
                'verdict': verdict,
                'detailed_scores': detailed_scores
            })

            os.remove(file_path)

        return jsonify({'results': results})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/evaluations', methods=['GET'])
def get_evaluations():
    try:
        conn = sqlite3.connect('resume_checker.db')
        c = conn.cursor()
        c.execute('SELECT * FROM evaluations ORDER BY created_at DESC LIMIT 50')
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
    app.run(debug=True, host='0.0.0.0', port=5000)