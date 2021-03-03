const ProductsService = require('../services/products.service')
const pkey = require('../config/public.key')
const skey = require('../config/secret.key')
const key = pkey + '-' + skey

class ProductController {
  async getProductsSubTypes(req, res) {
    if (req.params.subTypes) {
      let result = await ProductsService.getProductsSubTypes(req.params.subTypes)
      if (result) return res.status(200).send(result) 
      return res.status(500).send({ message: 'Products (subtypes) not found.' })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  }

  async getProductsId(req, res) {
    if (req.params.id) {
      let result = await ProductsService.getProductsId(req.params.id)
      if (result) return res.status(200).send(result) 
      return res.status(500).send({ message: 'Products (id) not found.' })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  }


  async createProduct(req, res) {
    if (req.body.key === key) {
      let result = await ProductsService.createProducts(req.body)
      if (result) return res.status(200).send(result) 
      return res.status(500).send({ message: 'Unable create product.' })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  }

  async searchProduct(req, res) {
    if (req.body) {
      let result = await ProductsService.searchProducts(req.body)
      if (result) return res.status(200).send(result)
      return res.status(500).send({ message: 'Not found product.' })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  }

  async updateProduct(req, res) {
    return res.send({ message: 'Not found'})
  }

  async deleteProduct(req, res) {
    if (req.body.key === key) {
      let result = await ProductsService.deleteProducts(req.body.id)
      if (result) return res.status(200).send(result)
      return res.status(500).send({ message: 'Unable delete product.' })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  }
}

module.exports = new ProductController()