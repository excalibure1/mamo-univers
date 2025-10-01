import pytest
from src.api import app

def test_health_check():
    with app.test_client() as client:
        response = client.get('/healthz')
        assert response.status_code == 200
        data = response.get_json()
        assert data['status'] == 'healthy'

def test_status():
    with app.test_client() as client:
        response = client.get('/api/status')
        assert response.status_code == 200
        data = response.get_json()
        assert data['ready'] == True
