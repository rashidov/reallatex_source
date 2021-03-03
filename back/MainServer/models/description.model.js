const mongoose = require('mongoose')

const DescriptionSchema = new mongoose.Schema({
  data: String
});

const DescriptionModel = mongoose.model('description', DescriptionSchema);

module.exports = DescriptionModel