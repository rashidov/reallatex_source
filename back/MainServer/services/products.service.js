const ProductModel = require('../models/products.model')

class ProductsService {
  getProductsSubTypes(data) {
    return new Promise( (res, rej) => {
      ProductModel.find({ subTypes: data }).then( (data, err) => {
        if (err) return res(false)
        return res(data)
      })
    })
  }

  getProductsId(data) {
    return new Promise( (res, rej) => {
      ProductModel.findOne({ _id: data}).then( (data, err) => {
        if (err) return res(false)
        return res(data)
      })
    })
  }

  createProducts(data) {
    return new Promise( (res, rej) => {
      const product = new ProductModel({
        title: data.title,
        img: data.img,
        size: data.size,
        severity: data.severity,
        fullDescription: data.fullDescription,
        composition: data.composition,
        coating: data.coating,
        manufacturer: data.manufacturer,
        countryOfManufacture: data.countryOfManufacture,
        idVidio: data.idVidio,
        price: data.price,
        types: data.types,
        subTypes: data.subTypes,
        arrayImg: data.arrayImg
      })

      product.save().then(() => {
        return res({ message: 'Product created.' })
      })
    })
  }

  searchProducts(data) {
    return new Promise( (res, rej) => {
      let result = new RegExp(data.title)
      ProductModel.find({ title: result }).then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }

  updateProducts() {
    return
  }

  deleteProducts(data) {
    return new Promise( (res, rej) => {
      ProductModel.remove({_id: data}).then( product => {
        if (product) return res({ message: 'Product deleted.' })
        return res(false)
      })
    })
  }
}

module.exports = new ProductsService()