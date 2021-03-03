const express = require('express')
const router = express.Router()

const ToOrderController = require('../controllers/toorder.controller')

router.route('/').get(ToOrderController.getToOrder)
router.route('/').post(ToOrderController.createToOrder)
/* router.route('/:id').delete(ToOrderController.deleteToOrder) */

module.exports = router