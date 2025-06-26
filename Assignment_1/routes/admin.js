// routes/admin.js

const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const Service = require('../models/Service');

// ------------------ PRODUCT ROUTES ------------------

// Show all products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.render('admin/products', { products });
});

// Add new product
router.post('/products', async (req, res) => {
  const { name, description, price, available } = req.body;
  await Product.create({
    name,
    description,
    price,
    available: available === 'on'
  });
  res.redirect('/admin/products');
});

// Delete product
router.post('/products/delete/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/admin/products');
});

// ------------------ SERVICE ROUTES ------------------

// Show all services
router.get('/services', async (req, res) => {
  const services = await Service.find();
  res.render('admin/services', { services });
});

// Add new service
router.post('/services', async (req, res) => {
  const { name, summary, duration, active } = req.body;
  await Service.create({
    name,
    summary,
    duration,
    active: active === 'on'
  });
  res.redirect('/admin/services');
});

// Delete service
router.post('/services/delete/:id', async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.redirect('/admin/services');
});

module.exports = router;
