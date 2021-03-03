import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { getProduct } from '../../../../../redux/actions/products.action'
import ProductEditForm from './ProductEdit.form'
import List from './list'

import '../../Pages.css'

const EditProduct = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const product = useSelector( state => state.products.editproduct )
  const load = useSelector( state => state.app.loadproduct )

  useEffect(() => {
    dispatch(getProduct(location.pathname.split('/').pop()))
  }, [dispatch])

  if(load) {
    return (
      <div className="load">
        Загрузка...
      </div>
    )
  }

  return (
    <div className="pages__products--edit">
      <div className="pages__products--edit__old__product">
        <div className="section">
          <div className="pages__products--edit__title">
            {product.title} 
          </div>
          <div className="pages__products--edit__img">
            <img src={product.img} alt="product image" />
          </div>
        </div>
        <div className="section">
          <div className="pages__products--edit__description">
            Характеристики: <br/>
            <span>Размер:</span> <strong>{product.size}</strong><br/>
            <span>Вес:</span> <strong>{product.severity} кг.</strong>
            <br/><br/>
            <span>Цена:</span> <strong>{product.price}руб.</strong>
            <br/><br/>
            Прочие характеристики: <br/>
            <span>Состав:</span> <strong>{product.composition}</strong><br/>
            <span>Покрытие:</span> <strong>{product.coating}</strong><br/>
            <span>Производтель:</span><strong>{product.manufacturer}</strong><br/>
            <span>Страна производитель:</span> <strong>{product.countryOfManufacture}</strong>
            <span></span>
          </div>
        </div>
        <div className="section">
          <div className="pages__products--edit__fulldescription">
            Полное описание: <br/>
            {product.fullDescription}
          </div>
        </div>
        <div className="section">
          <div className="pages__products--edit__gallery">
            Галерея: <br/><br/>
            <List />
          </div>
        </div>
      </div>
      <div className="pages__products--edit__new__product">
        <ProductEditForm />
      </div>
    </div>
  )
}

export default EditProduct

