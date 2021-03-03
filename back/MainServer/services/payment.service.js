const PaymentModel = require('../models/payment.model')

class PaymentService {
  getPayment() {
    return new Promise( (res, rej) => {
      PaymentModel.find().then( (data, err) => {
        if(err) return res(false)
        return res(data)
      })
    })
  }

  createPayment(data) {
    return new Promise( (res, rej) => {
      const payment = new PaymentModel({
        data: data.data
      })

      payment.save().then(() => {
        return res({ message: 'Payment created.' })
      })
    })
  }

  deletePayment(data) {
    return new Promise( (res, rej) => {
      return
    })
  }
}

module.exports = new PaymentService