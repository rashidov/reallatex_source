const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: String,
    img: String,
    size: String,
    severity: String,
    fullDescription: String,
    composition: String,
    coating: String,
    manufacturer: String,
    countryOfManufacture: String,
    idVidio: String,
    price: Number,
    types: Number,
    subTypes: Number,
    arrayImg: Array
});

const ProductModel = mongoose.model('products', ProductSchema);
 
module.exports = ProductModel