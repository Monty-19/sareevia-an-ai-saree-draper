import express from 'express';

const router = express.Router();

// Health check endpoint
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Backend API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

router.get('/status', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

export default router;
