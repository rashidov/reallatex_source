const mongoose = require('mongoose')

const CategoriesSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    img: String,
    types: Number,
    isSubCategories: String
})

const CategoriesModel = mongoose.model('categories', CategoriesSchema)

module.exports = CategoriesModel