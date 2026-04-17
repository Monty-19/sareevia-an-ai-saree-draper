import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import routes
import aiRoutes from './routes/ai.js';
import scannerRoutes from './routes/scanner.js';
import sareeRoutes from './routes/saree.js';
import healthRoutes from './routes/health.js';

// Import middleware
import { errorHandler } from './middleware/errorHandler.js';
import { corsMiddleware } from './middleware/cors.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(corsMiddleware);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/scanner', scannerRoutes);
app.use('/api/sarees', sareeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Sareevia Backend Server running on http://localhost:${PORT}`);
  console.log(`📡 CORS enabled for ${process.env.CORS_ORIGIN || 'unknown origin'}`);
});

export default app;
