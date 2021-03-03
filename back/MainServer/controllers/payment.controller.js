const PaymentService = require('../services/payment.service')

/* Контроллер категорий */
class PaymentController {
    async getPayment(req, res) {
      let result = await PaymentService.getPayment()
      if (result.length >= 1) return res.status(200).send(result)
      return res.status(404).send({ message: 'Payment not found.' })
    }

    async createPayment(req, res) {
      if (req.body){
        let result = await PaymentService.createPayment(req.body)
        if (result) return res.status(200).send(result) 
        return res.status(500).send({ message: 'Unable create payment.' })
      } else {
        return res.status(400).send({ message: 'Bad request.' })
      }
    }

    async updatePayment(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deletePayment(req, res) {
      return res.send({ message: 'Not found'})
    }
}

module.exports = new PaymentController()