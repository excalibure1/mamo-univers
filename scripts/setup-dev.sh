#!/bin/bash
echo " Configuration de MAMO-UNIVERS..."

# Backend
echo " Installation backend..."
cd apps/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd ../..

# Frontend
echo " Installation frontend..."
cd apps/frontend
npm install
cd ../..

# Blockchain
echo "⛓️ Installation blockchain..."
cd packages/blockchain
npm install
cd ../..

echo "✅ Configuration terminée!"
echo ""
echo "Pour démarrer:"
echo "  Backend:    cd apps/backend && source .venv/bin/activate && python -m flask run"
echo "  Frontend:   cd apps/frontend && npm run dev"
echo "  Blockchain: cd packages/blockchain && npx hardhat node"
