const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const secondSchema = new Schema({
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
}, { timestamps: true });

const Second = mongoose.model('Second', secondSchema);
module.exports = Second;