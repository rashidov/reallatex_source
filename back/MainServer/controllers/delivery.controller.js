const DeliveryService = require('../services/delivery.service')

/* Контроллер категорий */
class DeliveryController {
    async getDelivery(req, res) {
      let result = await DeliveryService.getDelivery()
      if (result.length >= 1) return res.status(200).send(result)
      return res.status(404).send({ message: 'Delivery not found.' })
    }

    async createDelivery(req, res) {
      if (req.body){
        let result = await DeliveryService.createDelivery(req.body)
        if (result) return res.status(200).send(result) 
        return res.status(500).send({ message: 'Unable create delivery.' })
      } else {
        return res.status(400).send({ message: 'Bad request.' })
      }
    }

    async updateDelivery(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deleteDelivery(req, res) {
      return res.send({ message: 'Not found'})
    }
}

module.exports = new DeliveryController()