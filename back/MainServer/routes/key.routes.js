const express = require('express')
const router = express.Router()
const KeyController = require('../controllers/key.controller')

router.route('/gk').post(KeyController.getKey)
/* router.route('/pk').post() */
router.route('/gsk').post(KeyController.getSKey)
/* router.route('/crt').post(KeyController.createUser) */
/* создание нового пользователя */

module.exports = router