import express from 'express';
import { analyzeBodyForScanning, generateDrapingGuide } from '../utils/ai.js';
import { sareeDatabase } from '../utils/database.js';

const router = express.Router();

// Analyze body measurements and provide recommendations
router.post('/analyze', (req, res) => {
  try {
    const { height, measurements, imageData } = req.body;

    if (!measurements) {
      return res.status(400).json({
        success: false,
        message: 'Body measurements are required'
      });
    }

    // Simulate body scan analysis
    const bodyAnalysis = analyzeBodyForScanning({
      height,
      measurements,
      imageData
    });

    // Get recommendations based on body type
    const bodyTypeKey = bodyAnalysis.bodyShape;
    const recommendations = sareeDatabase.recommendations[bodyTypeKey] || sareeDatabase.recommendations['rectangle'];

    res.json({
      success: true,
      data: {
        bodyAnalysis,
        recommendations: {
          ...recommendations,
          sarees: recommendations.recommendations.map(rec => ({
            ...rec,
            sareeDetails: sareeDatabase.varieties.find(s => s.id === rec.sareeId)
          }))
        },
        message: 'Body analysis and recommendations completed'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to analyze body',
      error: error.message
    });
  }
});

// Get body type recommendations
router.get('/recommendations/:bodyType', (req, res) => {
  try {
    const { bodyType } = req.params;
    const recommendations = sareeDatabase.recommendations[bodyType.toLowerCase()];

    if (!recommendations) {
      return res.status(404).json({
        success: false,
        message: `No recommendations found for body type: ${bodyType}`
      });
    }

    res.json({
      success: true,
      data: {
        ...recommendations,
        sarees: recommendations.recommendations.map(rec => ({
          ...rec,
          sareeDetails: sareeDatabase.varieties.find(s => s.id === rec.sareeId)
        }))
      },
      message: 'Recommendations retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve recommendations',
      error: error.message
    });
  }
});

// Get draping guide for a specific saree type
router.get('/draping-guide/:sareeType', (req, res) => {
  try {
    const { sareeType } = req.params;

    const guide = generateDrapingGuide(sareeType, null);

    if (!guide) {
      return res.status(404).json({
        success: false,
        message: `No draping guide found for saree type: ${sareeType}`
      });
    }

    res.json({
      success: true,
      data: guide,
      message: 'Draping guide retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve draping guide',
      error: error.message
    });
  }
});

export default router;
