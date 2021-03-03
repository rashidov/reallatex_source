const express = require('express')
const router = express.Router()

const CategoriesController = require('../controllers/categories.controller')

router.route('/').get(CategoriesController.getCategories)
router.route('/').post(CategoriesController.createCategories)
router.route('/delete').post(CategoriesController.deleteCategories)

module.exports = router