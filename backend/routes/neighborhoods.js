const express = require('express');
const router = express.Router();

const { getNeighborhoodData } = require('../data/loadNeighborhoodData');
const { calculateNeighborhoodMatches } = require('../matching/matching');

// GET/neighborhoods
router.get('/', async (req, res) => {
  try {
    const neighborhoods = await getNeighborhoodData();
    res.json({
      neighborhoods,
      count: neighborhoods.length,
    });
  } catch (error) {
    console.error('Error fetching neighborhoods:', error);
    res.status(500).json({ error: 'Failed to fetch neighborhoods' });
  }
});

// POST/match
router.post('/', async (req, res) => {
  const preferences = req.body;
  const required = ['budget', 'safetyImportance', 'walkabilityImportance', 'familyFriendly', 'quietEnvironment'];
  for (const field of required) {
    if (!(field in preferences)) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }
  if (!['low', 'medium', 'high'].includes(preferences.budget)) {
    return res.status(400).json({ error: 'Budget must be low, medium, or high' });
  }
  if (typeof preferences.safetyImportance !== 'number' || preferences.safetyImportance < 1 || preferences.safetyImportance > 5) {
    return res.status(400).json({ error: 'Safety importance must be between 1 and 5' });
  }
  if (typeof preferences.walkabilityImportance !== 'number' || preferences.walkabilityImportance < 1 || preferences.walkabilityImportance > 5) {
    return res.status(400).json({ error: 'Walkability importance must be between 1 and 5' });
  }
  if (typeof preferences.familyFriendly !== 'boolean') {
    return res.status(400).json({ error: 'Family friendly must be true or false' });
  }
  if (typeof preferences.quietEnvironment !== 'boolean') {
    return res.status(400).json({ error: 'Quiet environment must be true or false' });
  }
  try {
    const neighborhoods = await getNeighborhoodData();
    const matches = calculateNeighborhoodMatches(neighborhoods, preferences);
    res.json({
      success: true,
      matches,
      total_neighborhoods: neighborhoods.length,
    });
  } catch (e) {
    console.error('Error in /match:', e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;