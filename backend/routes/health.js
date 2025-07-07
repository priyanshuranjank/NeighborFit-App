const express = require('express');
const router = express.Router();

const { getNeighborhoodData } = require('../data/loadNeighborhoodData');

router.get('/', async (req, res) => {
  try {
    const neighborhoods = await getNeighborhoodData();
    res.json({
      status: 'healthy',
      neighborhoods_loaded: neighborhoods.length,
    });
  } catch (error) {
    console.error('Error in health check:', error);
    res.status(500).json({
      status: 'unhealthy',
      error: 'Failed to fetch neighborhood data'
    });
  }
});

module.exports = router; 