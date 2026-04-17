# Project Structure & Setup

Your project has been reorganized into a monorepo with separate frontend and backend folders.

## Current Structure

```
sareevia-magic-draping/
├── frontend/          # React + Vite frontend
├── backend/           # Express.js API
├── package.json       # Root workspace config
└── README.md
```

## Installation Issues & Solution

The npm dependencies are installing (with canvas needing system libraries). While that completes, you can use bun for faster package installation:

### Option 1: Use Bun (Recommended - Faster)

```bash
cd /workspaces/sareevia-magic-draping
bun install
```

### Option 2: Use NPM (Standard)

```bash
cd /workspaces/sareevia-magic-draping
npm install --legacy-peer-deps
```

## Running the Project

### Both Frontend & Backend
```bash
npm run dev
```

### Frontend Only
```bash
npm run dev:frontend
```

### Backend Only
```bash
npm run dev:backend
```

## What Changed

1. ✅ Moved all frontend code to `/frontend/` folder with:
   - src/, public/, index.html
   - vite.config.ts, tailwind.config.ts, other configs

2. ✅ Backend remains in `/backend/` folder with:
   - All Express routes, middleware, controllers
   - package.json with backend dependencies

3. ✅ Created root `package.json` with npm workspaces configuration

4. ✅ Updated backend dev script to run with `node` directly (no nodemon initially)

## Port Configuration

- **Frontend**: Runs on `http://localhost:8080` (Vite)
- **Backend**: Runs on `http://localhost:5000` (Express, configurable via PORT env var)

## Notes

- The root workspace configuration allows you to run scripts from either folder
- Each folder has independent node_modules and package-lock.json
- Use `-w backend` or `-w frontend` flag with npm to run scripts in specific workspaces

---

Once dependencies are installed, the dev servers will work smoothly with `npm run dev` commands!
