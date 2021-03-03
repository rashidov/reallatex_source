const express = require('express')
const router = express.Router()

const ContactsController = require('../controllers/contacts.controller')

router.route('/').get(ContactsController.getContacts)
router.route('/').post(ContactsController.createContacts)
/* router.route('/:id').delete(ContactsController.deleteContacts) */

module.exports = router