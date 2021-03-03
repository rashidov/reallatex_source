import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

const CardEmpty = () => (
  <div className="card__empty">
    <h1>Корзина пуста!</h1>
    <Link to="/catalog">Вернуться к покупкам</Link>
  </div>
  
)

export default CardEmpty