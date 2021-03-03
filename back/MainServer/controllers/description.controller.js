const DescriptionService = require('../services/description.service')

/* Контроллер категорий */
class DescriptionController {
    async getDescription(req, res) {
      let result = await DescriptionService.getDescription()
      if (result.length >= 1) return res.status(200).send(result)
      return res.status(404).send({ message: 'Description not found.' })
    }

    async createDescription(req, res) {
      if (req.body){
        let result = await DescriptionService.createDescription(req.body)
        if (result) return res.status(200).send(result) 
        return res.status(500).send({ message: 'Unable create description.' })
      } else {
        return res.status(400).send({ message: 'Bad request.' })
      }
    }

    async updateDescription(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deleteDescription(req, res) {
      return res.send({ message: 'Not found'})
    }
}

module.exports = new DescriptionController()