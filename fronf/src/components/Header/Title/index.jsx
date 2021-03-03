import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/img/RealLatex-logo.png' 
import './style.css'

const Title = () => {
  const location = useLocation()
  const counter = useSelector( state => state.card.counter )

  return (
    <div className="header__title">
      <div className="header__title--logo">
        {location.pathname !== '/' ? (
          <Link to="/"><img src={logo} alt='logo' /></Link>
        ):(
          <img src={logo} alt='logo' />
        )}
      </div>
      <div className="header__title--contacts">
        <div className="header__title--contacts--number">
          8(902)671-90-50
        </div>
        <div className="header__title--contacts--mail">
          latexreal@gmail.com
        </div>
      </div>
      <div className="header__title--card">
        {counter !== 0 ? (
          <Link to="/card">
            <i className="material-icons ico__title">add_shopping_cart</i>
            <strong>{counter}</strong>
          </Link>
        ):(
          <Link to="/card">
            <i className="material-icons ico__title">add_shopping_cart</i>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Title