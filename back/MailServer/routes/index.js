const express = require('express')
const router = express.Router()

const mailRoutes = require('./mail.routes')

router.use('/mail', mailRoutes)

module.exports = router 