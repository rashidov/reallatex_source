const mongoose = require('mongoose')

const ToOrderSchema = new mongoose.Schema({
  data: String
});

const ToOrderModel = mongoose.model('toorder', ToOrderSchema);

module.exports = ToOrderModel