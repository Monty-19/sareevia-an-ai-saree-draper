# Sareevia Magic Draping

AI-powered Virtual Saree Draping Application - A monorepo with separate frontend and backend.

## Project Structure

```
sareevia-magic-draping/
├── frontend/          # React + Vite frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
├── backend/           # Node.js Express backend API
│   ├── src/
│   ├── package.json
│   └── ...
└── package.json       # Root monorepo configuration
```

## Quick Start

### Install Dependencies

```bash
# Install root dependencies
npm install
# or with bun
bun install
```

### Development

```bash
# Run both frontend and backend in development mode
npm run dev

# Run frontend only
npm run dev:frontend

# Run backend only
npm run dev:backend
```

### Build

```bash
# Build frontend for production
npm run build

# Build frontend in development mode
npm run build:dev
```

### Testing

```bash
# Run frontend tests
npm test

# Watch mode
npm run test:watch
```

## Documentation

- See [BACKEND_SETUP.md](./BACKEND_SETUP.md) for backend setup instructions
- See [frontend/README.md](./frontend/README.md) for frontend documentation
- See [backend/README.md](./backend/README.md) for backend API documentation
