import React from 'react'
import { useSelector } from 'react-redux'

import '../../Pages.css'

const List = () => {
  const product = useSelector( state => state.products.productarr )

  console.log(product)

  return (
    <div>
{/*       {!product ? (
        <span>галерея пуста</span>
      ):(
        product.arrayImg.map( (url, index) => {
          <img key={index} src={url} alt="img" />
        })
      )} */}
    </div>
  )
}

export default List