import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { addProductCard } from '../../redux/actions/actionCard'
import { fetchProduct } from '../../redux/actions/actionCatalog'

/* import SpecialCardProduct from './SpecialCardProduct' */
import Gallery from './Gallery'
import YouTubeContent from './YouTubeContent'

import './CardProducts.css'

const CardProducts = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()
  const dispatch = useDispatch()
  const product = useSelector( state => state.catalog.product )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchProduct(location.pathname.split("/").pop()))
  }, [location.pathname, dispatch])

  const histoty = useHistory()

  const redirectCard = () => {
    histoty.push('/card')
  }
  
  function changeSelect(event) {
    if(event.target.value === '------') {
      setTitle('')
      return
    } else {
      setTitle(event.target.value)
    }
  }

  function changeTitle() {
    if (title.length > 1) {
      if (product.select === true) {
        product.title += " " + title
        dispatch(addProductCard(product))
        setTitle('')
        return redirectCard()
      } else {
        dispatch(addProductCard(product))
        return redirectCard()
      }
    } else {
      if(product.select) {
        return
      } else {
        dispatch(addProductCard(product))
        return redirectCard()
      }
    }
  }

  return (
    <div className="products">
{/*       <div className="product_categoryList">
        <ul>
          {categories.map( category => (
            category.isSubCategories ? (
              <Link to={`/catalog/subcategories/${category.types}`} key={category._id}><li>{category.title}</li></Link>
            ):(
              <Link to={`/catalog/products/${category.types}`} key={category._id}><li>{category.title}</li></Link>
            )
          ))}
        </ul>
      </div> */}
      <div className="product_desk">

        <div className="row">
          <div className="col-4"><img alt="img-product" src={product.img} /> </div>
          <div className="col-8">
            <h3>{product.title}</h3>
            <span>Размер: <strong>{product.size}</strong></span> <br/>
            <span>Вес: <strong>{product.severity} кг.</strong></span> <br/>
            <span>Состав: <strong>{product.composition}</strong>, </span><span>технология: <strong>DONLOOP</strong></span> <br/>
            <span>Покрытие: <strong>{product.coating}</strong></span> <br/>
            {product.density ? ( <><span>Плотность латекса: <strong>{product.density}</strong> </span> <br/></> ):( <></>)}
            <span>Производитель: <strong>{product.manufacturer}</strong></span> <br/>
            <span>Страна производитель: <strong>{product.countryOfManufacture}</strong></span> <br/><br/>
            <span>Цена: <strong>{product.price} ₽/шт.</strong></span> <br/> <br/>
              {product.select === true ? (
                <div className="select_card_product">
                  <select onChange={changeSelect}>
                    <option>------</option>
                    {product.selectArry.map( (productTitle, index) => (
                      <option key={index} value={productTitle}>{productTitle}</option>
                    ))}
                  </select>
                </div>
              ):(
                <span></span>
              )}
              <button className="product__button" onClick={
                () => { changeTitle(); /* dispatch(addProductCard(product)); */ /* redirectCard(); */ return false 
              }}>В коризну</button>
            </div>
            <div className="gallery">
              <Gallery array={product.arrayImg} />
            </div>
            <div className="description">
              <span><strong>Полное описание:</strong></span>
              <p>{product.fullDescription}</p>
            </div>
            {product.idVidio ? (
              <div className="products__youtube">
                <YouTubeContent id={product.idVidio} />
              </div>
            ):(
              <div className="products__youtube"></div>
            )}
        </div>
      
{/*         <div className="row">
          <div className="col-4"><img alt="img-product" src={product.img} /> </div>
          <div className="col-8">
            <h3>{product.title}</h3>
            <span>Размер: <strong>{product.size}</strong></span> <br/>
            <span>Вес: <strong>{product.severity} кг.</strong></span> <br/>
            <span>Состав: <strong>{product.composition}</strong>, </span><span>технология: <strong>DONLOOP</strong></span> <br/>
            <span>Покрытие: <strong>{product.coating}</strong></span> <br/>
            <span>Плотность латекса: <strong>sadasd</strong> </span> <br/>
            <span>Производитель: <strong>{product.manufacturer}</strong></span> <br/>
            <span>Страна производитель: <strong>{product.countryOfManufacture}</strong></span> <br/><br/>
            <span>Цена: <strong>{product.price} ₽/шт.</strong></span> <br/> <br/>
            {product.select === true ? (
              <div className="select_card_product">
                <select onChange={changeSelect}>
                  <option>------</option>
                  {product.selectArry.map( (productTitle, index) => (
                    <option key={index} value={productTitle}>{productTitle}</option>
                  ))}
                </select>
              </div>
            ):(
              <span></span>
            )}
            <button className="product__button" onClick={
              () => { dispatch(addProductCard(product)); redirectCard(); return false 
            }}>В коризну</button>
          </div>
          <div className="gallery">
            <Gallery array={product.arrayImg} />
          </div>
          <div className="description">
            <span><strong>Полное описание:</strong></span>
            <p>{product.fullDescription}</p>
          </div>
          {product.idVidio ? (
            <div className="products__youtube">
              <YouTubeContent id={product.idVidio} />
            </div>
          ):(
            <div className="products__youtube"></div>
          )}
          
        </div> */}
      </div>
    </div>
  )
}

export default CardProducts