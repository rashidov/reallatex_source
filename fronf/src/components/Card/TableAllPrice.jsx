import React from 'react'
import { useSelector } from 'react-redux'

import './Card.css'

const TableAllPrice = () => {
  const price = useSelector ( state => state.card.price )

  return(
    <span className="table_content--allPrice">
      Общая сумма вашего заказа: <strong>{price}₽</strong>
    </span>
  )
}

export default TableAllPrice