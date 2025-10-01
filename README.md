#  MAMO-UNIVERS

Univers énergétique où les artefacts blockchain prennent vie.

##  Démarrage Rapide

### Avec Docker (Recommandé)
```bash
# 1. Cloner le projet
git clone <repository> mamo-univers
cd mamo-univers

# 2. Démarrer avec Docker
docker-compose up --build

# 3. Accéder aux services
# Frontend: http://localhost:8080
# Backend:  http://localhost:8000
# Database: localhost:5432
```

### Développement Local
```bash
# Backend
cd apps/backend
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows
pip install -r requirements.txt
python -m flask run

# Frontend
cd apps/frontend
npm install
npm run dev

# Blockchain
cd packages/blockchain
npm install
npx hardhat node
```

##  Architecture

- `apps/backend/` - API Flask + Agent MAMO
- `apps/frontend/` - Interface React/TypeScript
- `packages/blockchain/` - Contrats intelligents Hardhat
- `docker/` - Configuration Docker

##  Commandes Utiles

```bash
# Tests
npm run test

# Linting
npm run lint

# Build production
npm run build

# Déploiement Docker
npm run docker:up
```

##  Développement

Voir [REPORT.md](REPORT.md) pour les détails techniques et les procédures de déploiement.
