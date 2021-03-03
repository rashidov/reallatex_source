import React, { useEffect, useState } from 'react'

import OrderBySite from './OrderBySite'
import OrderByPhone from './OrderbyPhone'

import './style.css'

const HowToOrder = () => {
  const [active, setActive] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  async function isActive(bol) {
    const pageB = await document.getElementById('button__pages')
    const phoneB = await document.getElementById('button_phone')

    if (bol) {
      setActive(bol)
      pageB.classList.remove('noActive')
      pageB.classList.add('actives')
      phoneB.classList.remove('actives')
      phoneB.classList.add('noActive')
    } else {
      setActive(bol)
      pageB.classList.remove('actives')
      pageB.classList.add('noActive')
      phoneB.classList.remove('noActive')
      phoneB.classList.add('actives')
    }
  }

  return (
    <div className="howToOrder__block">
      <div className="howToOrder__block--title">
        <h2>КАК ЗАКАЗАТЬ НА САЙТЕ</h2>
      </div>
      <div className="howToOrder__block--content">
        <div className="howToOrder__block--content__optionOrder">
          <div className="howToOrder__block--content__optionOrder--title">
            Вы можeте оформить заказ удобным вам способом: на сайте или по телефону.
          </div>
          <div className="howToOrder__block--content__optionOrder--content">
            <div onClick={() => isActive(true)} id="button__pages" className="actives">
              <i class="material-icons">wysiwyg</i>
              <span>На сайте</span>
              </div>
            <div onClick={() => isActive(false)} id="button_phone" className="noActive">
              <i className="material-icons">
                tty
              </i>
              <span>По телефону</span>
            </div>
          </div>
        </div>
        {active ? (
          <div className="howToOrder__block--content__option--site">
            <OrderBySite />
          </div>
        ):(
          <div className="howToOrder__block--content__option--phone">
            <OrderByPhone />
          </div>
        )}
      </div>
    </div>
  )
}

export default HowToOrder