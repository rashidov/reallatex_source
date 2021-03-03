import React, { useEffect } from 'react'

import './Payment.css'

const Payment = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="payment__block">
      <div className="payment__block--title">
        <h2>ОПЛАТА</h2>
      </div>

      <div className="payment__block--content">
        <div className="payment__block--content__title">
         В нашем интернет-магазине Вы можете оплатить наличными курьеру при получении.
        </div>

        <div className="payment__block--content__text">
          Как только вы закажите у нас на сайте подходяший для вас продукт, на вашу электронную почту будет отправлено письмо с номером заказа. 
          В близжайшее время после заказа с вами свяжется по телефону (или электронной почте) наш менеджер. 
          Вы можете оплатить заказ наличными деньгами курьеру при получении товара, 
          после проверки посылки на соответствие содержимого. (Действует на всей территории РФ)
        </div>
      </div>
    </div>
  )
}

export default Payment