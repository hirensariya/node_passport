const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  application_for: {
    type: String,
    required: true,
  },
  application_type: {
    type: String,
    required: true,
  },
  application_booklet: {
    type: String,
    required: true
  },
  application_name: {
    type: String,
    required: true
  },
  application_phone: {
    type: Number,
    required: true
  },
  application_email: {
    type: String,
    required: true
  },
  application_age: {
    type: Number,
    required: true
  },
  amount: {
      type: String,
      required: true
    }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;