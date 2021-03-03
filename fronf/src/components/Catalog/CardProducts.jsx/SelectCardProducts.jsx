import React from 'react'

import './CardProducts.css'

const SelectCardProducts = ({ array }) => {

  return (
    <div className="select_card_product">
      <select name="sel" id="1" required>
        {array.map( (product, index) => (
          <option key={index}>{product}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectCardProducts