import React, { useState } from 'react'
 
import './style.css'

const Select = () => {
  const [itemLengt, setItemLengt] = useState('')
  const [itemWidth, setItemWidth] = useState('')
  const [itemHeight, setItemHengt] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState(0)

  return (
  <div className="select__box">
    select
  </div>
  )
}

export default Select