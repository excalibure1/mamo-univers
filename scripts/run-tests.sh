#!/bin/bash
echo " Exécution des tests..."

# Backend tests
echo " Tests backend..."
cd apps/backend
source .venv/bin/activate
pytest -v
cd ../..

# Blockchain tests
echo "⛓️ Tests blockchain..."
cd packages/blockchain
npx hardhat test
cd ../..

echo "✅ Tous les tests terminés!"
