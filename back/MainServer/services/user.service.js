const UserModel = require('../models/user.model')

class UserService {
  getUser(data) {
    return new Promise( (res, rej) => {
      UserModel.find({ login: data }).then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }
  
  createUser(data) {
    return new Promise( (res, rej) => {
      const user = new UserModel({
        login: data.login,
        pwd: data.pwd
      })

      user.save().then(() => {
        return res({ message: 'User created.' })
      })
    })
  }
}

module.exports = new UserService()