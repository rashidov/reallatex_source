const mongoose = require('mongoose')

const NumbersOrderSchema = new mongoose.Schema({
  numbersOrder: Number
});

const NumbersOrderModel = mongoose.model('numbersorder', NumbersOrderSchema);

module.exports = NumbersOrderModel