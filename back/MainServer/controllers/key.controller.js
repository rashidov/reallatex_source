const UserService = require('../services/user.service')
const pkey = require('../config/public.key')
const skey = require('../config/secret.key')

class KeyController {
  getKey(req, res) {
    if (req.body.key === 'latexreal12'){
      return res.send({ pkey })
    }
  }

  async getSKey(req, res) {
    if (req.body.pkey === pkey){
      let result = await UserService.getUser(req.body.login)
      if (result[0].pwd === req.body.pwd) return res.status(200).send(JSON.stringify(skey))
      return res.status(200).send({ message: 'User not found.' })
    } else {
      return res.status(404).send({ message: 'Key not found.'})
    }
  }

  async createUser(req, res) {
    let result = await UserService.createUser(req.body)
    if (result) return res.status(200).send(result) 
    return res.status(500).send({ message: 'Unable create contact.' })
  }
}

module.exports = new KeyController()