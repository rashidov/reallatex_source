const OrderModel = require('../models/oreders.model')

class OrderService {
  getOrders() {
    OrderModel.find().then( (data, err) => {
      if(err) return res(false)
      return res(data)
    })
  }

  createOrder(data) {
    return new Promise( (res, rej) => {
      const order = new OrderModel({
        name: data.name,
        email: data.email,
        phone: data.phone,
        region: data.region,
        city: data.city,
        address: data.address,
        comments: data.comments,
        data : data.data,
        numbersOrder: data.numbersOrder,
        orderArray: data.orderArray
      })

      order.save().then(() => {
        return res({ message: 'Order created.' })
      })
    })
  }

  deleteOrder() {

  }
}

module.exports = new OrderService()