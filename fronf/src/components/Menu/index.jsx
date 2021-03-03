import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => {
  const counter = useSelector ( state => state.card.counter )

  return(
    <div className="menu__list">
      <ul>
        <li><Link to="/">Главная</Link></li>
{/*         <i className="material-icons">maximize</i>
        <li><Link to="/description">Наша компания</Link></li> */}
        <i className="material-icons">maximize</i>
        <li><Link to="/catalog">Каталог</Link></li>
        <i className="material-icons">maximize</i>
        <li><Link to="/delivery">Доставка</Link></li>
        <i className="material-icons">maximize</i>
        <li><Link to="/payment">Оплата</Link></li>
        <i className="material-icons">maximize</i>
        <li><Link to="/howtoorder">Как заказать</Link></li>
        <i className="material-icons">maximize</i>
        {counter === 0 ? (
          <li><Link to="/card">Корзина пуста</Link></li>
        ):(
          <li><Link to="/card">Корзина {counter}шт.</Link></li>
        )}
      </ul>
    </div>

  )
}

export default Menu