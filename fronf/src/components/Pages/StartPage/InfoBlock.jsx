import React from 'react'
import { Link } from 'react-router-dom'

import InfoBlockSlick from './InfoBlockSlick'

import './StartPage.css'

const InfoBlock = () => {
  return (
    <div className="content__info">
      <div className="content__info--title">
        ИНФОРМАЦИЯ
      </div>
      <div className="content__info--link">
        <div className="content__info--link__questions">
           <span>&#10004; ЗНАКОМСТВО С НАМИ:</span><br/>
          <div className="content__info--link__info__company--url inf">
            <Link to="/documents">Сертификаты</Link>
            <Link to="/gallery">Видео и фотогалерея</Link>
          </div>
          <hr/>
          <span>&#10004; ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</span><br/>
          <div className="content__info--link__questions--url inf">
            <div className="link__questions--url">
              <Link to="/howtoorder">Как заказать?</Link>
              <Link to="/whatislatex">Что такое 100% натуральный латекс?</Link>
              <Link to="/benefitslatex">Преимущества натурального латекса</Link>
            </div>
            <div className="link__questions--url">
              <Link to="/countryoforigin">Где производят 100% природный латекс?</Link>
              <Link to="/difference">Как отличить натуральный латекс от синтетического?</Link>
            </div>
            <div className="link__questions--url">
              <Link to="/smell">Запах латекса</Link>
              <Link to="/returnproduct">Сроки и порядок возврата товаров</Link>
            </div>  
            <InfoBlockSlick />
          </div>
          <hr/>
          <span>&#10004; КАК ПОДОБРАТЬ СЕБЕ ПОДХОДЯЩУЮ ПРОДУКЦИЮ:</span><br/>
          <div className="content__info--link__questions_products--url inf">
            <Link to="/choosemattress">Как выбрать латексный матрас?</Link>
            <Link to="/mattressthickness">Как выбрать толщину латексного матраса?</Link>
            <Link to="/choosepillow">Как выбрать латексную подушку?</Link>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock