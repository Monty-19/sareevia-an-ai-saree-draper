# Setup & Running Guide for Sareevia Magic Draping

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## Project Structure

```
sareevia-magic-draping/
├── frontend/          # React + Vite frontend
├── backend/           # Express.js backend API
├── package.json       # Root package.json
└── README.md
```

## Backend Setup

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

### 3. Start Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

## Frontend Setup

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

The `.env.local` should contain:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

### 3. Start Frontend Development Server
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Running Both Simultaneously (Recommended)

### Option 1: Using Two Terminals

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### Option 2: Using npm Concurrently (Optional)

First install concurrently at root (optional):
```bash
npm install -D concurrently
```

Then add to root `package.json`:
```json
{
  "scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"npm run dev\""
  }
}
```

## API Integration

The frontend communicates with the backend via the API client in `src/lib/api.ts`

### Key API Endpoints:

**Health Check**
```
GET /api/health
```

**Analyze Saree**
```
POST /api/ai/analyze-saree
Body: { imageData: "base64_string" }
```

**Body Analysis**
```
POST /api/scanner/analyze
Body: {
  height: "5'6\"",
  measurements: { bust: 34, waist: 26, hips: 36 }
}
```

**Get Recommendations**
```
GET /api/scanner/recommendations/:bodyType
```

**Get Sarees Catalog**
```
GET /api/sarees
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run test:watch` - Run tests in watch mode

### Backend
- `npm run dev` - Start with auto-reload (nodemon)
- `npm start` - Start production server

## Troubleshooting

### Backend won't start
- Check if port 5000 is already in use: `lsof -i :5000`
- Make sure dependencies are installed: `cd backend && npm install`
- Check the `.env` file configuration

### Frontend can't connect to backend
- Ensure backend is running on `http://localhost:5000`
- Check `VITE_API_BASE_URL` in `.env.local`
- Check browser console for CORS errors
- Make sure CORS_ORIGIN in backend `.env` matches your frontend URL

### Port conflicts
- Frontend default: 5173 (can be changed in `vite.config.ts`)
- Backend default: 5000 (can be changed in backend `.env`)

## Current Status

### ✅ Implemented
- Express server with all routes
- AI analysis mock endpoints
- Body scanner endpoints
- Saree catalog endpoints
- CORS configuration
- Error handling middleware
- Frontend API client
- Health check endpoints

### ⏳ To Be Implemented
- Real AI/ML models
- Database integration
- User authentication
- File upload handling
- Image processing
- WebSocket for real-time updates

## Testing the API

### Using cURL

Check health:
```bash
curl http://localhost:5000/api/health
```

Get all sarees:
```bash
curl http://localhost:5000/api/sarees
```

Analyze body:
```bash
curl -X POST http://localhost:5000/api/scanner/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "height": "5'\''6\"",
    "measurements": {
      "bust": 34,
      "waist": 26,
      "hips": 36
    }
  }'
```

### Using API Client in Components

```typescript
import { analyzeBody, getRecommendations } from '@/lib/api';

// Analyze body
const result = await analyzeBody({
  height: "5'6\"",
  measurements: { bust: 34, waist: 26, hips: 36 }
});

// Get recommendations
const recommendations = await getRecommendations('pear-shape');
```

## Documentation

- Frontend: See [src/README.md] or `README.md` in project root
- Backend: See [backend/README.md]

## Support

For issues or questions, check:
1. The troubleshooting section above
2. API documentation in backend/README.md
3. Browser console for error messages
4. Terminal output for server logs
