import React, { useEffect } from 'react'

import phone from '../../assets/img/phone.png'
import mail from '../../assets/img/mail.png'
import './Contacts.css'

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contacts__block">
      <div className="contacts__block--title">
        <h2>КОНТАКТЫ</h2>
      </div>
      <div className="contacts__block--content">
        <div className="contacts__block--content__title">
          Что бы связаться с нами Вы можите:
        </div>
        <div className="contacts__block--content__phone">
          <div className="contacts__block--content__phone--text">
            <li>позвонить нам на телефон</li> 
          </div>
          <div className="contacts__block--content__phone--img">
            <img src={phone} alt='phone' />
          </div>
          <div className="contacts__block--content__line"></div>
        </div>
        <div className="contacts__block--content__mail">
          <div className="contacts__block--content__mail--text">
            <li>написать нам на почту</li>
          </div>
          <div className="contacts__block--content__mail--img">
            <img src={mail} alt='mail' />
          </div>
          <div className="contacts__block--content__line"></div>
        </div>
      </div>
    </div>
  )
}

export default Contacts