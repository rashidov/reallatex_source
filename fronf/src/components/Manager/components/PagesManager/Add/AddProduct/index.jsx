import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
 
import './style.css'

const AddProduct = () => {
  const user = useSelector( state => state.app.user )

  if (!user) return <Redirect to="/manager" />

  return (
    <div className="addproduct__block">
      Какой тип продукта желаете добавить?
      Динамическое название(цена одна для несколько типов товара) \ Динамически настраевыемые параметры (длина\ширина\высота) \ Стандартный компонент
    </div>
  )
}

export default AddProduct


{/* <div className="have__block">
<div className="have__block--checkbox__group">
  <label>Выбрать все</label>
  <input type="checkbox" name="" id=""/>
  <div className="have__block--checkbox__group--one">
    <label>Производитель</label> 
    <input type="checkbox" name="" id=""/><br/>
    <label>Страна производитель</label>
    <input type="checkbox" name="" id=""/> <br/>
  </div>
  <div className="have__block--checkbox__group--two">
    <label>Состав ()</label>
    <input type="checkbox" name="" id=""/> <br/>
    <label>Покрытие</label>
    <input type="checkbox" name="" id=""/><br/>
  </div>
</div>


<div className="have__block--form">
  <form>
    <input type="text" className="have__block--input__long" placeholder="Название продукта"  /><br/>
    <input type="text" className="have__block--input__long" placeholder="Ссылка на картинку" /><br/>
    <input type="text" className="have__block--input__short" placeholder="Размеры 0x0x0 см."  />
    <input type="text" className="have__block--input__short" placeholder="Вес"/><br/>
    <input type="text" className="have__block--input__short" placeholder="Покрытие"/>
    <input type="text" className="have__block--input__short" placeholder="Состав"/  ><br/>
    <input type="text" className="have__block--input__long" placeholder="Полное описание"  /><br/>
    <input type="text" className="have__block--input__short" placeholder="Производитель"  />
    <input type="text" className="have__block--input__short" placeholder="Страна производитель" /><br/>
    <input type="text" className="have__block--input__short" placeholder="Цена" />
    <input type="text" className="have__block--input__short" placeholder="Плотность"  /><br/>
    <input type="text" className="have__block--input__short" placeholder="Тип"  />
    <input type="text" className="have__block--input__short" placeholder="Подтип" />
    <br/><br/>
    <button>Сохранить</button>
  </form>
</div>

</div> */}