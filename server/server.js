const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Restaurant API - Iqra Asad FA2026 - WORKING on 5001');
});

app.get('/api/dishes', (req, res) => {
  res.json([
    { name: "Biryani", price: 500 },
    { name: "Karahi", price: 800 },
    { name: "Naan", price: 50 }
  ]);
});

app.listen(5001, () => {
  console.log('*** SERVER STARTED on 5001 - Iqra Asad ***');
});