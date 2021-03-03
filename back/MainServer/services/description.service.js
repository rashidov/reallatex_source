const DescriptionModel = require('../models/description.model')

class DescriptionService {
  getDescription() {
    return new Promise( (res, rej) => {
      DescriptionModel.find().then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }

  createDescription(data) {
    return new Promise( (res, rej) => {
      const description = new DescriptionModel({
        data: data.data
      })

      description.save().then(() => {
        return res({ message: 'Description created.' })
      })
    })
  }

  deleteDescription(data) {
    return new Promise( (res, rej) => {
      return
    })
  }
}

module.exports = new DescriptionService