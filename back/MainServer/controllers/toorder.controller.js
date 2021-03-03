const ToOrderService = require('../services/toorder.service')

/* Контроллер категорий */
class ToOrderController {
    async getToOrder(req, res) {
      let result = await ToOrderService.getToOrder()
      if (result.length >= 1) return res.status(200).send(result)
      return res.status(404).send({ message: 'ToOrder not found.' })
    }

    async createToOrder(req, res) {
      if (req.body){
        let result = await ToOrderService.createToOrder(req.body)
        if (result) return res.status(200).send(result) 
        return res.status(500).send({ message: 'Unable create to order.' })
      } else {
        return res.status(400).send({ message: 'Bad request.' })
      }
    }

    async updateToOrder(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deleteToOrder(req, res) {
      return res.send({ message: 'Not found'})
    }
}

module.exports = new ToOrderController()