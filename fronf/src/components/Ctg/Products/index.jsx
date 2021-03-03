import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { setParams } from '../../redux/actions/actionApp'
import { fetchProducts } from '../../redux/actions/actionCatalog'
 
import './style.css'

const Products = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const products = useSelector( state => state.catalog.products )

  useEffect(() => {
    dispatch(setParams(match.params.subtypes))
    dispatch(fetchProducts(match.params.subtypes))
  },[dispatch, match])

  return (
    <div className="products__block">
      {products.map( product => (
      <Link key={product._id} to={`/catalog/product/${product._id}`} >
        <div className="products__block--item">
          <div className="products__block--item__img">
            <img src={product.img} alt='product' />
          </div>
          <div className="products__block--item__title">
            <span>{product.title}</span><br/>
            <span className="price__num">цена: {product.price} ₽/шт.</span>
          </div>
        </div>
      </Link> 
      ))}
    </div>
  )
}

export default Products