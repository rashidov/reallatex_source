/* import React, { useState } from 'react'

import Gallery from '../Gallery'
 
import '../CardProducts.css'
import './style.css'

const SpecialCardProduct = ({ product }) => {
  const [itemLengt, setItemLengt] = useState('')
  const [itemWidth, setItemWidth] = useState('')
  const [itemHeight, setItemHengt] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState(0)

  function changeSelectLengt(event) {
    setItemLengt(event.target.value)
    sizeProduct(event.target.value, itemWidth, itemHeight)
  }

  function changeSelectWidth(event) {
    setItemWidth(event.target.value)
    sizeProduct(itemLengt, event.target.value, itemHeight)
  }

  function changeSelectHengt(event) {
    setItemHengt(event.target.value)
    sizeProduct(itemLengt, itemWidth, event.target.value)
  }

  function sizeProduct(length, width, height) {
    let title = ''

    if(length === '---'){
      setItemLengt('')
      length = ' '
    } else if(width === '---'){
      setItemWidth('')
      width = ' '
    } else if(height === '---'){
      setItemHengt('')
      height = ' '
    } 

    if (!product.option.length){
      title = `${product.title} ширина: ${width} высота: ${height}`
      setSize(`ширина: ${width} высота: ${height}`)
    } else if (!product.option.width){
      title = `${product.title} длина: ${length} высота: ${height}`
      setSize(`длина: ${length} высота: ${height}`)
    } else if (!product.option.height){
      title = `${product.title} длина: ${length} ширина: ${width}`
      setSize(`длина: ${length} ширина: ${width}`)
    } else {
      title = `${product.title} длина: ${length} ширина: ${width} высота: ${height}`
      setSize(`длина: ${length} ширина: ${width} высота: ${height}`)
    }


    console.log(title)
  }

  return (
    <div className="specialcardproduct__block">
      <div className="specialcardproduct__block--title">
        <div className="specialcardproduct__block--title__img">
          <img src={product.img} alt='crad specila product' />
        </div>
        <div className="specialcardproduct__block--title__text">
          <h3>{product.title}</h3>
        </div>
      </div>
      
      <div className="specialcardproduct__block--content">

        <div className="specialcardproduct__block--content__option">
          <div className="specialcardproduct__block--content__options">
            <div className="specialcardproduct__block--content__option--title">
              Выберите размер:
            </div>

            {product.option.length ? (
              <div className="specialcardproduct__block--content__option--length opt">
                {product.option.length.title}
                <div className="specialcardproduct__block--content__option--length__options">
                  <select onChange={changeSelectLengt}>
                  <option>---</option>
                    {product.option.length.array.map( (item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            ):(
              <span></span>
            )}
          
            {product.option.width ? (
              <div className="specialcardproduct__block--content__option--width opt">
                {product.option.width.title}
                <div className="specialcardproduct__block--content__option--width__options">
                  <select onChange={changeSelectWidth}>
                    <option>---</option>
                    {product.option.width.array.map( (item,index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            ):(
              <span></span>
            )}

            {product.option.height ? (
              <div className="specialcardproduct__block--content__option--height opt">
                {product.option.height.title}
                <div className="specialcardproduct__block--content__option--height__options">
                  <select onChange={changeSelectHengt}>
                    <option>---</option>
                    {product.option.height.array.map( (item,index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            ):(
              <span></span>
            )}
          </div>
        
          <div className="specialcardproduct__block--content__optionsDescription">
            <div className="specialcardproduct__block--content__optionsDescription--price">
              <span>{size}</span> <br/>
              {price === 0 ? (
                <span>Укажите желаемый размер</span>
              ):(
                <span>Цена: {price} руб.</span>
              )}
              
            </div>
            <div className="specialcardproduct__block--content__optionsDescription--btn">
              <button className="product__button">В корзину</button>
            </div>
          </div>
        </div>

        <div className="specialcardproduct__block--content__description">
          {product.fullDescription}
        </div>

        <div className="gallery">
          <Gallery array={product.arrayImg} />
        </div>
      </div>
    </div>
  )
}

export default SpecialCardProduct */