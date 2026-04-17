import express from 'express';
import { sareeDatabase } from '../utils/database.js';

const router = express.Router();

// Get all saree varieties
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: sareeDatabase.varieties,
      count: sareeDatabase.varieties.length,
      message: 'All sarees retrieved successfully'
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
router.get('/:id', (req, res) => {
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

// Filter sarees by criteria
router.get('/filter/search', (req, res) => {
  try {
    const { occasion, bodyType, color, occasion: searchOccasion } = req.query;
    let filteredSarees = [...sareeDatabase.varieties];

    if (occasion) {
      filteredSarees = filteredSarees.filter(s =>
        s.occasion.some(o => o.toLowerCase().includes(occasion.toLowerCase()))
      );
    }

    if (bodyType) {
      filteredSarees = filteredSarees.filter(s =>
        s.bestBodyTypes.some(b => b.toLowerCase() === bodyType.toLowerCase())
      );
    }

    if (color) {
      filteredSarees = filteredSarees.filter(s =>
        s.color.some(c => c.toLowerCase().includes(color.toLowerCase()))
      );
    }

    res.json({
      success: true,
      data: filteredSarees,
      count: filteredSarees.length,
      filters: { occasion, bodyType, color },
      message: 'Sarees filtered successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to filter sarees',
      error: error.message
    });
  }
});

export default router;
