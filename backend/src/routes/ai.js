import express from 'express';
import { analyzeSareeWithAI, analyzeBodyForScanning } from '../utils/ai.js';
import { sareeDatabase, generateAnalysisId } from '../utils/database.js';

const router = express.Router();

// Analyze saree from image
router.post('/analyze-saree', (req, res) => {
  try {
    const { imageData } = req.body;

    if (!imageData) {
      return res.status(400).json({
        success: false,
        message: 'Image data is required'
      });
    }

    // Simulate AI analysis
    const analysis = analyzeSareeWithAI(null, imageData);

    res.json({
      success: true,
      analysisId: generateAnalysisId(),
      data: {
        type: analysis.type,
        fabric: analysis.fabric,
        color: analysis.color,
        pattern: analysis.pattern,
        occasion: analysis.occasion,
        drapingStyle: analysis.drapingStyle,
        confidence: analysis.confidence,
        estimatedOrigin: analysis.estimatedOrigin,
        qualityRating: analysis.qualityRating
      },
      message: 'Saree analysis completed successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to analyze saree',
      error: error.message
    });
  }
});

// Get all saree varieties
router.get('/sarees', (req, res) => {
  try {
    res.json({
      success: true,
      data: sareeDatabase.varieties,
      count: sareeDatabase.varieties.length,
      message: 'Sarees retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve sarees',
      error: error.message
    });
  }
});

// Get saree by ID
router.get('/sarees/:id', (req, res) => {
  try {
    const { id } = req.params;
    const saree = sareeDatabase.varieties.find(s => s.id === id);

    if (!saree) {
      return res.status(404).json({
        success: false,
        message: 'Saree not found'
      });
    }

    res.json({
      success: true,
      data: saree,
      message: 'Saree retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve saree',
      error: error.message
    });
  }
});

export default router;
