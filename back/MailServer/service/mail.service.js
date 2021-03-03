const mailer = require('../config/nodemailer')

class MailService {
  sendMailClient(num, order) {
    let str = ''
    let totalPrice = 0

    for(let i = 0; i < order.array.length; i++) {
      str = str + `<div style="width:350px;border: 1px dashed #000000;margin-top:10px;padding:10px;"><strong>${order.array[i].title}</strong><br/>в количестве <strong>${order.array[i].count}</strong> шт.<br/>Цена за 1шт: <strong>${order.array[i].price}</strong> руб.</div>`
      totalPrice = totalPrice + order.array[i].price * order.array[i].count
    }

    let modyfidedStr = '<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">' + str + '</table>'

    let amp = `
      <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
              body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
              table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
              img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
              p { display:block;margin:13px 0; }</style><!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]--><!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
            .mj-column-per-100 { width:100% !important; max-width: 100%; }
    .mj-column-per-50 { width:50% !important; max-width: 50%; }
          }</style><style type="text/css"></style><style type="text/css">@media (max-width: 479px) {
    .hide-on-mobile {
    display: none !important;
    }
    }.gr-mltext-ufjbhb a,
    .gr-mltext-ufjbhb a:visited {
    text-decoration: none;
    }.gr-mltext-xhqjly a,
    .gr-mltext-xhqjly a:visited {
    text-decoration: none;
    }.gr-mltext-yfxgqh a,
    .gr-mltext-yfxgqh a:visited {
    text-decoration: none;
    }.gr-mltext-xqnigi a,
    .gr-mltext-xqnigi a:visited {
    text-decoration: none;
    }.gr-mltext-jqdekn a,
    .gr-mltext-jqdekn a:visited {
    text-decoration: none;
    }.gr-mltext-muyqat a,
    .gr-mltext-muyqat a:visited {
    text-decoration: none;
    }.gr-footer-drthse a,
    .gr-footer-drthse a:visited {
    color: #00BAFF;
    text-decoration: underline;
    }</style><link href="https://fonts.googleapis.com/css?display=swap&family=Quicksand:400,400i,700,700i|Roboto:400,400i,700,700i&subset=cyrillic,greek,latin-ext,vietnamese" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?display=swap&family=Quicksand:400,400i,700,700i|Roboto:400,400i,700,700i&subset=cyrillic,greek,latin-ext,vietnamese);</style></head>
    <body style="background-color:#EEEEEE;">
      <div style="background-color:#EEEEEE;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
            <tbody>
              <tr>
                <td style="border-bottom:0 none #000000;border-left:0 none #000000;border-right:0 none #000000;border-top:0 none #000000;direction:ltr;font-size:0px;padding:20px 30px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:540px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                      <tbody>
                        <tr>
                          <td style="background-color:transparent;border-bottom:none;border-left:none;border-right:none;border-top:none;vertical-align:top;padding:0;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" class="gr-mltext-oiftgj gr-mltext-ufjbhb" style="font-size:0px;padding:10px 0;word-break:break-word;">
                                  <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.4;text-align:left;color:#000000;">
                                    <div style="text-align: center;">
                                      <p style="font-family:Arial;font-size:14px;margin-top:0px;margin-bottom:0px;font-weight:normal;color:#000000;">
                                        <span style="font-family: Quicksand, Arial, sans-serif;">
                                          <span style="font-size: 28px">
                                            <strong>RealLatex.ru</strong>
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;padding:0;word-break:break-word;">
                                  <p style="border-top:solid 10px #66C05D;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 10px #66C05D;font-size:1px;margin:0px auto;width:540px;" role="presentation" width="540px" ><tr><td style="height:0;line-height:0;"> &nbsp;
    </td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
            <tbody>
              <tr>
                <td style="border-bottom:0 none #000000;border-left:0 none #000000;border-right:0 none #000000;border-top:0 none #000000;direction:ltr;font-size:0px;padding:10px 30px 0 30px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:540px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                      <tbody>
                        <tr>
                          <td style="background-color:transparent;border-bottom:none;border-left:none;border-right:none;border-top:none;vertical-align:top;padding:0;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" class="gr-mltext-oiftgj gr-mltext-xhqjly" style="font-size:0px;padding:10px;word-break:break-word;">
                                  <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.6;text-align:left;color:#000000;">
                                    <div style="text-align: center;">
                                      <p style="font-family:Arial;font-size:14px;margin-top:0px;margin-bottom:0px;font-weight:normal;color:#000000;">
                                        <span style="font-family: Roboto, Arial, sans-serif;">
                                          <span style="font-size: 16px">
                                            Здравствуйте ${order.name}
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" class="gr-mltext-oiftgj gr-mltext-yfxgqh" style="font-size:0px;padding:10px;word-break:break-word;">
                                  <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.4;text-align:left;color:#000000;">
                                    <p style="font-family:Arial;font-size:14px;margin-top:0px;margin-bottom:0px;font-weight:normal;color:#000000;">
                                      Вы сделали заказ: №${num}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><![endif]--></td>
                </tr></tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
                <tbody>
                  <tr>
                    <td style="border-bottom:0 none #000000;border-left:0 none #000000;border-right:0 none #000000;border-top:0 none #000000;direction:ltr;font-size:0px;padding:25px 30px 30px 30px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:540px;" ><![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                          <tbody>
                            ${modyfidedStr}
                          </tbody>
                          <br/>Заказ общей стоимостью: ${totalPrice} руб.
                        </table>
                      </div><!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:400px;" width="400" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="background:#66C05D;background-color:#66C05D;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#66C05D;background-color:#66C05D;width:100%;">
                  <tbody>
                    <tr>
                      <td style="border-bottom:0 none #000000;border-left:0 none #000000;border-right:0 none #000000;border-top:0 none #000000;direction:ltr;font-size:0px;padding:5px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:295px;" ><![endif]-->
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;border-bottom:none;border-left:none;border-right:none;border-top:none;vertical-align:top;padding:0;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tr>
                                      <td align="left" class="gr-mltext-oiftgj gr-mltext-muyqat" style="background:#66C05D;font-size:0px;padding:10px;word-break:break-word;">
                                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.4;text-align:left;color:#000000;">
                                          <p style="font-family:Arial;font-size:14px;margin-top:0px;margin-bottom:0px;font-weight:normal;color:#000000;">
                                            Связь с нами:
                                          </p>
                                          <p style="font-family:Arial;font-size:14px;margin-top:0px;margin-bottom:0px;font-weight:normal;color:#000000;">
                                            8(902)-671-90-50
                                          </p>
                                          <p style="font-family:Arial;font-size:14px;margin-top:0px;margin-bottom:0px;font-weight:normal;color:#000000;">
                                            latexreal@gmail.com
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:295px;" ><![endif]-->
                          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tbody>
                                <tr>
                                  <td style="background-color:transparent;border-bottom:none;border-left:none;border-right:none;border-top:none;vertical-align:top;padding:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tr>
                                        <td align="right" style="font-size:0px;padding:20px 5px 5px 5px;word-break:break-word;"><!--[if mso | IE]><table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                          <table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                            <tr>
                                              <td style="padding:0 10px;vertical-align:middle;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0;width:40px;">
                                                  <tr>
                                                    <td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
                                                      <a href="https://instagram.com/reallatex?igshid=knhly05jyyx4" target="_blank">
                                                        <img height="40" src="https://app.getresponse.com/images/common/templates/messages/v2/social/instagram9.png" style="border-radius:0;display:block;" width="40">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                            <table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                              <tr>
                                                <td style="padding:0 10px;vertical-align:middle;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:0;width:40px;">
                                                    <tr>
                                                      <td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
                                                        <a href="https://vk.com/club201045124" target="_blank">
                                                          <img height="40" src="https://app.getresponse.com/images/common/templates/messages/v2/social/vk9.png" style="border-radius:0;display:block;" width="40">
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table><!--[if mso | IE]></td></tr></table><![endif]-->
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div><!--[if mso | IE]></td></tr></table><![endif]-->
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:400px;" width="400" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="margin:0px auto;max-width:400px;"></div><!--[if mso | IE]></td></tr></table><![endif]-->
              </div>
        </body>
      </html>
    `

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Заказа из интернет магазина</title>
    </head>
    <body>
    <section style="background-color:#FFFFFF;">
      <div style="padding-bottom: 10px;border-bottom: 10px solid #43A047;font-size: 35px;text-align:center;color:#000000;"><strong>RealLatex.ru</strong></div>
      <div style="font-size: 20px;padding:20px;margin-top:10px;">
        Здравствуйте ${order.name} <br/> 
        Вы сделали заказ: №${num} <br/><br/>
        <div style="margin-top:10px;margin-bottom: 10px;">
          ${modyfidedStr}
        </div>
        
        Заказ общей стоимостью: <strong>${totalPrice}</strong> руб.
        <br/><br/>
      </div>
      <div style="background-color:#43A047;color:#FFFFFF;font-size: 20px;">
        <div style="padding: 10px;margin-left:15px;">
          Cвязь с нами: <br/>
          8(902)671-90-50<br/>
          latexreal@gmail.com
        </div>
      </div>
    </section>
    </body>
    </html>

    `
    let message = {
      from: 'RealLatex.ru <reallatex@mail.ru>',
      to: order.email,
      subject: `Заказ из интернет-магазина RealLatex.ru`,
      html: html
    }
    mailer(message)
  }

  sendMailAdministrator(num, order) {
    let data = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString().slice(0, -3)
    let footer = `<footer><strong>Дата и время заказа: ${time}&ensp;${data}</strong></footer>`
    let str = ''
    let totalPrice = 0
    for(let i = 0; i < order.array.length; i++){
      str = str + `<li>Наименование: <strong>${order.array[i].title}</strong><br/> Количество: <strong>${order.array[i].count}</strong><br/> Цена: <strong>${order.array[i].price}руб.</strong></li> `
      totalPrice = totalPrice + order.array[i].price * order.array[i].count
    }
    let modyfidedStr = '<ul>' + str + '</ul>'

    let message = {
      from: 'RealLatex.ru <reallatex@mail.ru>',
      to: '<latexreal@gmail.com>',
      subject: `<info>Закявка от ${data} ${time}`,
      html: `<!DOCTYPE html>
      <html>
        <head>
        <style>
        section{
          background: #FFFFFF;
        }
        footer{
          height: 40px;
          text-align: center
          background: #43A047;
        }
    </style>
        </head>
        <body>
          <section>
            <h3>Заказ от ${order.name}</h3>
            <h4>Заказ №${num}</h4>
  
            <p>Список заказываемого товара:</p>
            ${modyfidedStr}
  
            <p>Заказ общей стоимостью: <strong>${totalPrice}руб.</strong></p>
  
            <p>Данные покупателя:</p>
  
            <ul>
              <li>ФИО:<br/> <strong>${order.name}</strong></li>
              <li>E-mail:<br/> <strong>${order.email}</strong></li>
              <li>номер телефона:<br/> <strong>${order.phone}</strong></li>
              <li>Регион:<br/> <strong>${order.region}</strong></li>
              <li>Город, улица дом:<br/> <strong>${order.city},&ensp;${order.address}</strong></li>
              <li>Комментарий:<br/> <strong>${order.comments}</strong></li>
            </ul>
          </section>
          ${footer}
        </body>
      </html>
      `
    }
    mailer(message)
  }
}

module.exports = new MailService()