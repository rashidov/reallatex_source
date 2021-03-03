const ContactsService = require('../services/contacts.service')

/* Контроллер категорий */
class ContactsController {
    async getContacts(req, res) {
      let result = await ContactsService.getContacts()
      if (result.length >= 1) return res.status(200).send(result)
      return res.status(404).send({ message: 'Contacts not found.' })
    }

    async createContacts(req, res) {
      if (req.body){
        let result = await ContactsService.createContacts(req.body)
        if (result) return res.status(200).send(result) 
        return res.status(500).send({ message: 'Unable create contact.' })
      } else {
        return res.status(400).send({ message: 'Bad request.' })
      }
    }

    async updateContacts(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deleteContacts(req, res) {
      return res.send({ message: 'Not found'})
    }
}

module.exports = new ContactsController()