from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from datetime import datetime

app = Flask(__name__)
CORS(app, origins=os.getenv('CORS_ORIGINS', 'http://localhost:8080').split(','))

@app.route('/healthz', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "mamo-backend",
        "timestamp": datetime.utcnow().isoformat()
    })

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({
        "version": "1.0.0",
        "environment": os.getenv('FLASK_ENV', 'development'),
        "ready": True
    })

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.get_json()
    question = data.get('question', '')
    
    # Réponse simulée de l'IA MAMO
    response = "Je suis MAMO, votre assistant quantique. Analyse des marchés en cours..."
    
    return jsonify({
        "question": question,
        "response": response,
        "timestamp": datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
