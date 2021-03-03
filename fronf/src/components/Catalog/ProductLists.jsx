import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { fetchProducts } from '../redux/actions/actionCatalog'

import './Catalog.css'

const ProductLists = ({ categories }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const products = useSelector( state => state.catalog.products )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchProducts(location.pathname.slice(-2)))
  }, [location.pathname, dispatch])

  return (
    <div className="wrapper">
      <div className="wrapper__leftList">
        <ul className="wrapper__leftList--mainLinks">
          {categories.map( category => (
            category.isSubCategories ? (
              location.pathname.slice(-1) === category.types.toString() ? (
                <Link to={`/catalog/subcategories/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                  <ul className="wrapper__leftList--subLinks">
                    {products.map( product => (
                      <Link to={`/catalog/product/${product._id}`} key={product._id}>
                        <li>{product.title}</li>
                      </Link>
                    ))}
                  </ul>
                </Link>
              ):(
                <Link to={`/catalog/subcategories/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                </Link>
              )
            ):(
              location.pathname.slice(-1) === category.types.toString() ? (
                <Link to={`/catalog/products/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                  <ul className="wrapper__leftList--subLinks">
                    {products.map( product => (
                      <Link to={`/catalog/product/${product._id}`} key={product._id} >
                        <li>{product.title}</li>
                      </Link>
                    ))}
                  </ul>
                </Link>
              ):(
                <Link to={`/catalog/products/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                </Link>
              )
            )

/*             category.isSubCategories ? (
              location.pathname.slice(-1) === category.types.toString() ? ( 
                <Link to={`/catalog/subcategories/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                  <ul className="wrapper__leftList--subLinks">
                    {products.map( product => (
                      <Link to={`/catalog/product/${product._id}`} key={product._id}>
                        <li>{product.title}</li>
                      </Link>
                    ))}
                  </ul>
                </Link>
              ):(
                <Link to={`/catalog/subcategories/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                </Link>
              )
            ):(
              location.pathname.slice(-1) === category.types.toString() ? (
                <Link to={`/catalog/products/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                  <ul className="wrapper__leftList--subLinks">
                    {products.map( product => (
                      <Link to={`/catalog/product/${product._id}`} key={product._id} >
                        <li>{product.title}</li>
                      </Link>
                    ))}
                  </ul>
                </Link>
              ):(
                <Link to={`/catalog/products/${category.types}`} key={category._id} >
                  <li>{category.title}</li>
                </Link>
              )
            ) */
          ))}
        </ul>
      </div>
      <div className="wrapper__rightList">
        <div className="row">
          {products.map( product => (
            <div className="col-3 item" key={product._id}>
              <div className="wrapper__item prod__item">
                <Link to={`/catalog/product/${product._id}`}>
                  <img src={product.img} alt="img"/> <br/><br/>
                  <span>{product.title}</span> <br/>
                  <span>вес: {product.severity}кг.</span><br/><br/>
                  <span className="item__price">цена: {product.price}руб.</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductLists