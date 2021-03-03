const nodemailer = require('nodemailer')

const trans = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'reallatex@mail.ru',
    pass: '---'
  }
})

trans.verify(function(error, success) {
  if (error) {
    console.log("Верификация пользователя прошла:", success, error);
  } else {
    console.log("Верификация пользователя прошла:", success);
  }
});

const mailer = mess => {
  trans.sendMail(mess, (err, inf) => {
    if(err) return console.log(err)
    /* console.log(inf.response) */
  })
}

module.exports = mailer