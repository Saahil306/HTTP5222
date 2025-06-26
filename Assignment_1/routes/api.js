// routes/api.js

const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const Service = require('../models/Service');

// GET all products as JSON
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET all services as JSON
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

module.exports = router;
