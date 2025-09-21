from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import json
import re
from datetime import datetime

app = Flask(__name__)
CORS(app)

class SimpleAnalyzer:
    def __init__(self):
        self.skills = ['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'SQL', 'HTML', 'CSS', 'Git', 'Docker', 'AWS']
    
    def analyze_resume(self, resume_text, jd_text):
        # Simple keyword matching
        resume_lower = resume_text.lower()
        jd_lower = jd_text.lower()
        
        matched_skills = [skill for skill in self.skills if skill.lower() in resume_lower and skill.lower() in jd_lower]
        missing_skills = [skill for skill in self.skills if skill.lower() in jd_lower and skill.lower() not in resume_lower]
        
        # Calculate scores
        skills_match = (len(matched_skills) / max(len(self.skills), 1)) * 100
        overall_score = min(int(skills_match + 30), 95)  # Add base score
        
        return {
            'overall_score': overall_score,
            'verdict': 'High' if overall_score >= 75 else 'Medium' if overall_score >= 50 else 'Low',
            'detailed_scores': {
                'skills_match': int(skills_match),
                'ats_compatibility': 85,
                'experience_match': 75,
                'semantic_match': 70
            },
            'matched_skills': matched_skills,
            'missing_skills': missing_skills[:5],
            'suggestions': [
                f"Add missing skills: {', '.join(missing_skills[:3])}" if missing_skills else "Great skill coverage!",
                "Optimize ATS compatibility with standard formatting",
                "Add quantifiable achievements to experience section"
            ]
        }

analyzer = SimpleAnalyzer()

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

@app.route('/api/analyze', methods=['POST'])
def analyze_resume():
    try:
        resume_text = request.form.get('resume_text', '')
        jd_text = request.form.get('job_description', '')
        
        if not resume_text or not jd_text:
            return jsonify({'error': 'Both resume and job description required'}), 400
        
        results = analyzer.analyze_resume(resume_text, jd_text)
        return jsonify(results)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/batch-analyze', methods=['POST'])
def batch_analyze():
    try:
        # Simulate batch processing
        results = [
            {'filename': 'resume1.pdf', 'overall_score': 85, 'verdict': 'High'},
            {'filename': 'resume2.pdf', 'overall_score': 72, 'verdict': 'Medium'},
            {'filename': 'resume3.pdf', 'overall_score': 68, 'verdict': 'Medium'}
        ]
        return jsonify({'results': results})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/generate-questions', methods=['POST'])
def generate_questions():
    questions = [
        {'type': 'Technical', 'question': 'Explain your experience with the technologies mentioned in your resume.', 'tips': 'Be specific about projects and outcomes.'},
        {'type': 'Behavioral', 'question': 'Tell me about a challenging project you worked on.', 'tips': 'Use the STAR method.'}
    ]
    return jsonify({'questions': questions})

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    print("🚀 Resume Checker System Starting...")
    print("🌐 Access at: http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)