import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import CardEmpty from './CardEmpty'
import TableProduct from './TableProduct'

import './Card.css'
import FormOrder from './FormOreder'
import TableAllPrice from './TableAllPrice'

const Cards = () => {
  const counter = useSelector( state => state.card.counter )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if(counter === 0){
    return (
      <div className="container card_emty">
        <div className="col-12">
          <CardEmpty />
        </div>
      </div>
      
    )
  }

  return (
    <div className="container cards">
      <div className="col-12">
          <TableProduct />
          <TableAllPrice />
          <FormOrder />
      </div>
    </div>
  )
}

export default Cards