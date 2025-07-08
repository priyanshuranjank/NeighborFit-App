require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false
  });
});

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT}`);
});