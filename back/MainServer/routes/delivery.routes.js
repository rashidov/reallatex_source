const express = require('express')
const router = express.Router()

const DeliveryController = require('../controllers/delivery.controller')

router.route('/').get(DeliveryController.getDelivery)
router.route('/').post(DeliveryController.createDelivery)
/* router.route('/:id').delete(DeliveryController.deleteDelivery) */

module.exports = router