import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askMamo = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    try {
      const result = await axios.post(`${API_URL}/api/ask`, { question });
      setResponse(result.data.response);
    } catch (error) {
      setResponse('Erreur de connexion avec MAMO');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #0f0c29, #302b63)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1> MAMO-UNIVERS</h1>
      <p>Votre assistant quantique d'investissement</p>
      
      <div style={{ marginTop: '2rem' }}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Posez votre question à MAMO..."
          style={{
            padding: '0.5rem',
            width: '300px',
            marginRight: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          onClick={askMamo} 
          disabled={loading}
          style={{
            padding: '0.5rem 1rem',
            background: '#0066ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? '...' : 'Demander'}
        </button>
      </div>

      {response && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '8px'
        }}>
          <strong>MAMO:</strong> {response}
        </div>
      )}

      <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.7 }}>
        <p>Backend: {API_URL}</p>
        <p>Frontend: http://localhost:5173</p>
      </div>
    </div>
  );
}

export default App;
