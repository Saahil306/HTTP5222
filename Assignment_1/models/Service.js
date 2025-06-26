// models/Service.js

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  summary: String,
  duration: String,
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Service', serviceSchema);
