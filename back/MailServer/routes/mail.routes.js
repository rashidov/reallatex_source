const express = require('express')
const router = express.Router()

const MailController = require('../controllers/mail.controller')

router.route('/').post(MailController.sendMail)

module.exports = router