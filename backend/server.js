// const express = require('express');
import express from 'express'
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Define your API endpoint
app.get('/api/exchange-rates', async (req, res) => {
  try {
    const response = await axios.get('https://api.exchangeratesapi.io/latest'); // Replace with your API endpoint
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching exchange rates');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
