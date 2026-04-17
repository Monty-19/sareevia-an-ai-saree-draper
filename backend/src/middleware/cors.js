import cors from 'cors';

const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

export const corsMiddleware = cors({
  origin: corsOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});
