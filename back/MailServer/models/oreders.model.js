const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  region: String,
  city: String,
  address: String,
  comments: String,
  data : String,
  numbersOrder: Number,
  orderArray: Array
});

const OrderModel = mongoose.model('orders', OrderSchema);

module.exports = OrderModel