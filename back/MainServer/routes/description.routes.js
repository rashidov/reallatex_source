const express = require('express')
const router = express.Router()

const DescriptionController = require('../controllers/description.controller')

router.route('/').get(DescriptionController.getDescription)
router.route('/').post(DescriptionController.createDescription)
/* router.route('/:id').delete(DescriptionController.deleteDescription) */

module.exports = router