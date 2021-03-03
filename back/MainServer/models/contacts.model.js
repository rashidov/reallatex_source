const mongoose = require('mongoose')

const ContactsSchema = new mongoose.Schema({
  name: String,
  number: String
});

const ContactsModel = mongoose.model('contacts', ContactsSchema);

module.exports = ContactsModel