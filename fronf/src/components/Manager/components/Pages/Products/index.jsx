import React from 'react'

import AddProduct from './AddProduct.form'
import SearchProduct from './Search.form'

import '../Pages.css'

const Products = () => {
  return (
    <div className="pages__products">
      <div className="pages__products--add_product">
        <AddProduct />
      </div>
      <div className="pages__products--search">
        <div className="pages__products--search__products">
          <SearchProduct />
        </div>
      </div>
    </div>
    )
}

export default Products