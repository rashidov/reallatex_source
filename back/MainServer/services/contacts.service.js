const ContactsModel = require('../models/contacts.model')

class ContactsService {
  getContacts() {
    return new Promise( (res, rej) => {
      ContactsModel.find().then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }

  createContacts(data) {
    return new Promise( (res, rej) => {
      const contact = new ContactsModel({
        name: data.name,
        number: data.number
      })

      contact.save().then(() => {
        return res({ message: 'Contact created.' })
      })
    })
  }

  deleteContacts(data) {
    return new Promise( (res, rej) => {
      return
    })
  }
}

module.exports = new ContactsService