const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/products.controller')

router.route('/:subTypes').get(ProductController.getProductsSubTypes)
router.route('/id/:id').get(ProductController.getProductsId)
router.route('/').post(ProductController.createProduct)
router.route('/search').post(ProductController.searchProduct)
router.route('/delete').post(ProductController.deleteProduct)

module.exports = router