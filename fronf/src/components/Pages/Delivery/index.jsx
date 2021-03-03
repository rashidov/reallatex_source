import React, { useEffect } from 'react'


import './Delivery.css'

const Delivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="delivery__block">
      <div className="delivery__block--title">
        <h2>ДОСТАВКА</h2> 
      </div>
      <div className="delivery__block--content">
        <div className="delivery__block--content__description--Russia">
          <div className="delivery__block--content__description--Russia__title">
            <div className="delivery__block--content__description--Russia__title--num">1</div>
            <span>Доставка по России</span>
          </div>  
          <div className="delivery__block--content__description--Russia__content">
            <p>
              Доставка заказа на сумму 2500 руб. и выше, по всей территории России 
              осуществляется абсолютно бесплатно курьерской службой до Вашей двери.
            </p>
            <p>
              Для Москвы и других центральных регионов России сроки доставки минимальны и составляют 1-3 дня.   
              Для удаленных областей  3-10 дней,  в зависимости от расстояния.
            </p>
            <p>
              Если Ваш заказ менее 2500 руб, то стоимость доставки составит 300 руб.
            </p>
          </div>
        </div>
        <div className="delivery__block--content__description--SNG">
          <div className="delivery__block--content__description--SNG__title">
            <div className="delivery__block--content__description--SNG__title--num">2</div>
            <span>Доставка в страны Таможенного Союза</span>
          </div>
          <div className="delivery__block--content__description--SNG__content">
            <p>
              Для наших клиентов из Республик Беларусь и Казахстан мы рады предложить 
              качественную доставку полного ассортимента продукции нашего магазина. 
            </p>
            <li>1) При заказе до 5 000 руб - стоимость доставки 300 руб.</li>
            <li>2) При заказе от 5 000 до 10 000 руб - стоимость доставки 500 руб.</li>
            <li>3) При заказе от 10 000 руб - стоимость доставки 1 000 руб.</li>
            <p>
              До отгрузки товара в Казахстан или Беларусь, заказ должен 
              быть оплачен на 100% любым удобным для Вас способом.
            </p>
          </div>
        </div>
      </div>

      <div className="delivery__block--content__description--wrning">
        <div className="delivery__block--content__description--wrning__content">
          <p>
            Мы не несем ответственности за работу транспортных компаний, 
            но мы всегда на связи и готовы помочь с решением возникающих 
            логистических проблем.
          </p>
          <p> 
            Спасибо за понимание!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Delivery