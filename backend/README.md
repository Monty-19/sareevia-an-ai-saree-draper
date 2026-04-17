# Sareevia Magic Draping Backend API

Node.js Express backend for the Sareevia Magic Draping application.

## Features

- 🤖 AI Saree Analysis - Analyze saree type, fabric, and patterns from images
- 👤 Body Scanning - Analyze body measurements and recommend sarees
- 👗 Saree Catalog - Browse different saree varieties
- 📋 Draping Guides - Step-by-step instructions for different draping styles
- 🔍 Smart Recommendations - Get personalized saree recommendations based on body type

## Project Structure

```
backend/
├── src/
│   ├── server.js              # Main Express server
│   ├── routes/                 # API route handlers
│   │   ├── health.js          # Health check endpoints
│   │   ├── ai.js              # AI analysis endpoints
│   │   ├── scanner.js         # Body scanner endpoints
│   │   └── saree.js           # Saree catalog endpoints
│   ├── middleware/             # Express middleware
│   │   ├── cors.js            # CORS configuration
│   │   └── errorHandler.js    # Error handling middleware
│   └── utils/                  # Utility functions
│       ├── database.js        # Mock database and data
│       └── ai.js              # AI analysis functions
├── uploads/                    # Uploaded files directory
├── .env.example               # Environment variables template
├── package.json               # Dependencies
└── README.md                  # This file
```

## Installation

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration (optional):
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check if server is running
- `GET /api/health/status` - Get detailed server status

### AI Analysis
- `POST /api/ai/analyze-saree` - Analyze saree from image
- `GET /api/ai/sarees` - Get all saree varieties
- `GET /api/ai/sarees/:id` - Get specific saree details

### Body Scanner
- `POST /api/scanner/analyze` - Analyze body and get recommendations
- `GET /api/scanner/recommendations/:bodyType` - Get recommendations for body type
- `GET /api/scanner/draping-guide/:sareeType` - Get draping guide

### Saree Catalog
- `GET /api/sarees` - Get all sarees
- `GET /api/sarees/:id` - Get saree by ID
- `GET /api/sarees/filter/search` - Filter sarees by criteria

## Example Requests

### Analyze Saree
```bash
curl -X POST http://localhost:5000/api/ai/analyze-saree \
  -H "Content-Type: application/json" \
  -d '{"imageData": "base64_encoded_image_data"}'
```

### Get Body Recommendations
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

### Get All Sarees
```bash
curl http://localhost:5000/api/sarees
```

### Get Specific Saree
```bash
curl http://localhost:5000/api/sarees/1
```

## Current Implementation

This is a **mock/simulation** backend with the following features:

- ✅ API structure and routes ready
- ✅ Mock database with saree varieties and recommendations
- ✅ Simulated AI analysis functions
- ✅ Error handling and CORS configuration
- ⏳ Real AI/ML integration (Future)
- ⏳ Database integration (Future)
- ⏳ Authentication (Future)
- ⏳ Image processing (Future)

## Future Enhancements

1. **Database Integration**
   - MongoDB or PostgreSQL for persistent data storage
   - User profiles and preferences
   - Saree inventory management

2. **Real AI/ML Integration**
   - TensorFlow.js for browser-based analysis
   - Cloud Vision API for advanced image recognition
   - ML models for body type classification

3. **Authentication**
   - JWT-based authentication
   - User login/signup
   - Profile management

4. **File Uploads**
   - Image upload handling with Multer
   - Image storage and retrieval
   - Thumbnail generation

5. **Advanced Features**
   - Real-time recommendations
   - User history and favorites
   - Social sharing features

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 5000 | Port number for the server |
| NODE_ENV | development | Environment (development/production) |
| CORS_ORIGIN | http://localhost:5173 | Frontend URL for CORS |

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

ISC
