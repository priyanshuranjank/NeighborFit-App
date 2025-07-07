const axios = require('axios');
require('dotenv').config();

let NEIGHBORHOOD_DATA = null;

async function loadNeighborhoodData() {
  try {
    const apiUrl = process.env.NEIGHBORHOOD_API_URL;
    if (!apiUrl) {
      throw new Error('NEIGHBORHOOD_API_URL environment variable is not set');
    }
    const response = await axios.get(apiUrl);
    const records = response.data;
    
    // Filter out null entries and convert numeric fields
    return records
      .filter(record => record.id !== null && record.name !== null) 
      .map((n) => ({
        id: Number(n.id),
        name: n.name,
        avg_rent: Number(n.avg_rent),
        safety_score: Number(n.safety_score),
        walkability: Number(n.walkability),
        family_friendly: Number(n.family_friendly),
        noise_level: Number(n.noise_level),
        description: n.description,
        highlights: n.highlights,
        rent_category: n.rent_category,
        overall_quality: Number(n.overall_quality),
        quietness_score: Number(n.quietness_score),
      }));
  } catch (err) {
    console.error('Error from API:', err.message);
    console.warn('Warning: Failed to fetch data from API');
    console.warn('Check API in .env file');
    return [];
  }
}

async function getNeighborhoodData() {
  if (!NEIGHBORHOOD_DATA) {
    NEIGHBORHOOD_DATA = await loadNeighborhoodData();
  }
  return NEIGHBORHOOD_DATA;
}

module.exports = { getNeighborhoodData }; 