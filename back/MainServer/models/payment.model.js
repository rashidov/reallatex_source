const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  data: String
});

const PaymentModel = mongoose.model('payment', PaymentSchema);

module.exports = PaymentModel