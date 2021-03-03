const ToOrderModel = require('../models/toorder.model')

class ToOrderService {
  getToOrder() {
    return new Promise( (res, rej) => {
      ToOrderModel.find().then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }

  createToOrder(data) {
    return new Promise( (res, rej) => {
      const toorder = new ToOrderModel({
        data: data.data
      })

      toorder.save().then(() => {
        return res({ message: 'To order created.' })
      })
    })
  }

  deleteToOrder(data) {
    return new Promise( (res, rej) => {
      return
    })
  }
}

module.exports = new ToOrderService