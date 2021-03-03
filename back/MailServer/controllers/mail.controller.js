const mailer = require('../config/nodemailer')
const NumbersOrderService = require('../service/numbersOrder.service')
const MailService = require('../service/mail.service')

class MailController {
  async sendMail(req, res){
    if (req.body.name) {
      let num = 0
      let getNum = await NumbersOrderService.getNumbers()
      if (typeof getNum !== 'boolean') {
        num = getNum[0].numbersOrder + 1
        let delNum = await NumbersOrderService.deleteNumbers(getNum[0]._id)
        if (typeof delNum === 'object') await NumbersOrderService.createNewNumbers(num)
      } else {
        let createNum = await NumbersOrderService.createNumebers()
        num = createNum.message
      }
      MailService.sendMailClient(num, req.body)
      MailService.sendMailAdministrator(num, req.body)
      return res.send({ message: `ok ${num}` })   
    } else {
      return
      /* Нужно создать логирование (что не удалось отправить письмо) */
    }
  }
}

module.exports = new MailController()