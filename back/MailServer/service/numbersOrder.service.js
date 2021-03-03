const NumbersOrderModel = require('../models/numbers.order.model')

class NumbersOrderService {
  getNumbers() {
    return new Promise( (res, rej) => {
      NumbersOrderModel.find().then( (data, err) => {
        if (err) return res(false)
        if (data.length == 0) return res(false)
        return res(data)
      })
    })
  }

  createNumebers() {
    return new Promise( (res, rej) => {
      const number = new NumbersOrderModel({
        numbersOrder: 112358
      })

      number.save().then(() => {
        return res({ message: 112358 })
      })
    })
  }

  createNewNumbers(data) {
    return new Promise( (res, rej) => {
      const newNumber = new NumbersOrderModel({
        numbersOrder: data
      })

      newNumber.save().then(() => {
        return res({ message: 'New number created' })
      })
    })
  }

  deleteNumbers(data) {
    return new Promise( (res, rej) => {
      NumbersOrderModel.deleteOne({ _id: data }).then( number => {
        if (number) return res({ message: 'Number deleted' })
        return res(false)
      })
    })
  }
}

module.exports = new NumbersOrderService()