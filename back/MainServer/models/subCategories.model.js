const mongoose = require('mongoose')

const SubCategoriesSchema = new mongoose.Schema({
  title: String,
  img: String,
  types: Number,
  subTypes: Number
})

const SubCategoriesModel = mongoose.model('subcategories', SubCategoriesSchema)

module.exports = SubCategoriesModel