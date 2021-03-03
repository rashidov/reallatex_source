const express = require('express')
const router = express.Router()

const PaymentController = require('../controllers/payment.controller')

router.route('/').get(PaymentController.getPayment)
router.route('/').post(PaymentController.createPayment)
/* router.route('/:id').delete(PaymentController.deletePayment) */

module.exports = router