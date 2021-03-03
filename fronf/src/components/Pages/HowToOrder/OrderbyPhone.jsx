import React from 'react'

import './style.css'

const OrderByPhone = () => {
  return (
    <div className="option__phone">
      <div className="option__phone__actOne option">
        <div className="option__phone--title">
          <div className="option__phone--title__num">1</div>
          <span className="option__phone--title__text">Позвоните на наш контактный номер или написать нам почту</span>
        </div>
        <div className="option__phone--title__img">
          <img src="https://i.ibb.co/HFPDLKF/contact.png" alt="contact" border="0" />
        </div>
      </div>

      <div className="option__phone__actTwo option">
        <div className="option__phone--title">
          <div className="option__phone--title__num">2</div>
          <span className="option__phone--title__text">Назовите название товара и его количество</span>
        </div>
      </div>
      <div className="option__phone--title__imgOrderName">
        <img src="https://i.ibb.co/DgGYRK0/phone.png" alt="phone" border="0" />
      </div>
    </div>
  )
}

export default OrderByPhone 