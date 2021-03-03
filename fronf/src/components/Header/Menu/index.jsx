import React from 'react'
/* import { useSelector } from 'react-redux' */
import { Link, useLocation } from 'react-router-dom'
 
import './style.css'

const Menu = () => {
  const location = useLocation()
  /* const counter = useSelector( state => state.card.counter ) */

  return (
    <div className="header__menu">
      <div className="header__menu--item">
        {location.pathname === '/catalog' ? (
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Главная</span>
          </Link>
        ):(
          <Link to="/catalog">
            <i className="material-icons">widgets</i>
            <span>Каталог</span>
          </Link>
        )}
      </div>
      <div className="header__menu--item">
        {location.pathname === '/delivery' ? (
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Главная</span>
          </Link>
        ):(
          <Link to="/delivery">
            <i className="material-icons">local_shipping</i>
            <span>Доставка</span>        
          </Link>
        )}
      </div>
      <div className="header__menu--item">
        {location.pathname === '/payment' ? (
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Главная</span>
          </Link>
        ):(
          <Link to="/payment">
            <i className="material-icons">account_balance_wallet</i>
            <span>Оплата</span>
          </Link>
        )}
      </div>
      <div className="header__menu--item">
        {location.pathname === '/documents' ? (
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Главная</span>
          </Link>
        ):(
          <Link to="/documents">
            <i className="material-icons">local_police</i>
            <span>Сертификаты</span>
          </Link>
        )}
      </div>
      <div className="header__menu--item">
        {location.pathname === '/contacts' ? (
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Главная</span>
          </Link>
        ):(
          <Link to="/contacts">
            <i className="material-icons">contacts</i>
            <span>Контакты</span>
          </Link>
        )}
      </div>
{/*       <div className="header__menu--item">
        {location.pathname === '/card' ? (
          <Link to="/">
            <i className="material-icons">home</i>
            <span>Главная</span>
          </Link>
        ):(
          counter !== 0 ? (
            <Link to="/card">
              <i className="material-icons ico__title">add_shopping_cart</i>
              <strong>{counter}</strong>
              <span>Корзина</span>
            </Link>
          ):(
            <Link to="/card">
              <i className="material-icons ico__title">add_shopping_cart</i>
              <span>Корзина</span>
            </Link>
          )
        )}
      </div> */}
    </div>
  )
}

export default Menu