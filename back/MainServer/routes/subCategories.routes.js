const express = require('express')
const router = express.Router()

const SubCategoriesController = require('../controllers/subCategories.controller')

router.route('/all').get(SubCategoriesController.getAllSubcategories)
router.route('/:types').get(SubCategoriesController.getSubCategories)
router.route('/').post(SubCategoriesController.createSubCategories)
router.route('/delete').post(SubCategoriesController.deleteSubCategories)

/* router
    .route('/')
    .get(SubCategoriesController.getSubCategories)
    .post(SubCategoriesController.createSubCategories)
    .put(SubCategoriesController.updateSubCategories)
    .delete(SubCategoriesController.deleteSubCategories) */

module.exports = router