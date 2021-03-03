import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

import { delProduct } from '../../../../redux/actions/products.action' 

import '../Pages.css'

const List = () => {
  const dispatch = useDispatch()
  const array = useSelector( state => state.products.products )
  const history = useHistory()

  useEffect(() => {
    
  }, [array])

  function del(id) {
    dispatch(delProduct(id))
  }

  function edit(id) {
    history.push(`/products/editproduct/${id}`)
  }

  return (
    <div className="pages__products--list">
      {array.length === 0 ? (
        <span>поиск не дал результата</span>
      ):(
        array.map( product => (
          <div key={product._id} className="product">
            <div className="product__info">
              наименование:<span>{product.title}</span> <br/>
              цена: <span>{product.price} руб.</span> <br/>
              ссылка на картинку: <span className="url">{product.img}</span> <br/>
              тип: <span>{product.types}</span> <br/>
              подтип: <span>{product.subTypes}</span> <br/>
              характеристики: <p>
                длинаXширинаXтолщина: <span className="inf">{product.size}</span><br/>
                вес: <span className="inf">{product.severity}</span><br/>
                производитель: <span className="inf">{product.manufacturer}</span><br/>
                страна производителя: <span className="inf">{product.countryOfManufacture}</span><br/>
                покрытие: <span className="inf">{product.coating}</span><br/>
                состав: <span className="inf">{product.composition}</span><br/>
                id видио: <span className="inf">{product.idVidio.length === 0 ? ( <span>не имеет</span> ):( product.idVidio )}</span><br/>
              </p>
              полное описание: <p>{product.fullDescription}</p>
              <div className="product__info--img">
                {product.length === 0 ? ( 
                <span>галерея пуста</span> 
                ):(
                  product.arrayImg.map( (img, index) => (
                    <img key={index} src={img} alt="gallery img" />
                  ))
                )}
              </div>

            </div>
            <div className="product__img">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="product__del">
              <i className="material-icons" onClick={() => del(product._id)}>clear</i><br/><br/>
              {/* <i className="material-icons" onClick={() => edit(product._id)}>create</i> */}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default List