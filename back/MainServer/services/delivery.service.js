const DeliveryModel = require('../models/delivery.model')

class DeliveryService {
  getDelivery() {
    return new Promise( (res, rej) => {
      DeliveryModel.find().then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }

  createDelivery(data) {
    return new Promise( (res, rej) => {
      const delivery = new DeliveryModel({
        data: data.data
      })

      delivery.save().then(() => {
        return res({ message: 'Delivery created.' })
      })
    })
  }

  deleteDelivery(data) {
    return new Promise( (res, rej) => {
      return
    })
  }
}

module.exports = new DeliveryService