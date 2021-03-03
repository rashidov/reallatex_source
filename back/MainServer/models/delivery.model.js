const mongoose = require('mongoose')

const DeliverySchema = new mongoose.Schema({
  data: String
});

const DeliveryModel = mongoose.model('delivery', DeliverySchema);

module.exports = DeliveryModel