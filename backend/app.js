const express = require('express');
const cors = require('cors');

const healthRoutes = require('./routes/health');
const neighborhoodsRoutes = require('./routes/neighborhoods');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/health', healthRoutes);
app.use('/neighborhoods', neighborhoodsRoutes);
app.use('/match', neighborhoodsRoutes);

// Add root route for health/debugging
app.get('/', (req, res) => {
  res.json({ message: 'NeighborFit backend is running!' });
});

// 404 handling here
app.use((req, res) => {
  console.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Endpoint not found' });
});

module.exports = app; 