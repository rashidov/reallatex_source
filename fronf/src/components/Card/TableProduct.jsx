import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCountLocalStore, delProductCard, incrementCountLocalStore } from '../redux/actions/actionCard'

import './Card.css'

const TableProduct = () => {
  const dispatch = useDispatch()
  const products = useSelector( state => state.card.products )

  return (
    <div className="table">
      <div className="col-12">
        <div className="row table_header">
          <div className="col-4 table_header"><span><strong>Наименование:</strong></span></div>
          <div className="col-3 table_header"><span><strong>Стоимость:</strong></span></div>
          <div className="col-3 table_header"><span><strong>Колличество:</strong></span></div>
          <div className="col-2 table_header"><span><strong>Удалить:</strong></span></div>
        </div>
          {products.map( product => (
            <div className="row table_content" key={product.id}>
              <div className="col-4 table_content--title"><span>{product.title}</span></div>
              <div className="col-3 table_content--price"><span>{product.price}</span>₽/шт.</div>
              <div className="col-3 table_content--counter">
                <i className="material-icons" onClick={() => dispatch(incrementCountLocalStore(product.id))}>add</i>
                <span>{product.count}</span>
                <i className="material-icons" onClick={() => dispatch(decrementCountLocalStore(product.id))}>remove</i>
              </div>
              <div className="col-2 table_content--del">
                <span><i className="material-icons ico__item" onClick={() => {
                  dispatch(delProductCard(product.id))
                }}>clear</i></span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TableProduct