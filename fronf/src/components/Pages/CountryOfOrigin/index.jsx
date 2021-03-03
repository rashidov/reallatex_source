import React, { useEffect } from 'react'
 

import contry from '../../assets/img/contry.jpg'
import wood from '../../assets/img/wood.jpg'
import './style.css'

const CountryOfOrigin = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="countryoforigin__block">
      <div className="countryoforigin__block--title">
        <h2>Где производят натуральный латекс?</h2>
      </div>

      <div className="countryoforigin__block--content">
        <div className="countryoforigin__block--content--img">
          <img src={contry} alt='contry' />
          
        </div>

        <div className="countryoforigin__block--content--text">
          <p className="description__img">Традиционные (красный цвет) и молодые (синий цвет) плантации Гевеи в Южной Азии.</p>
          <p>
            Сегодня более 90% всех поставок 100% природного каучука на мировой рынок 
            осуществляется из стран Юго-Восточной Азии, потому что каучуковые деревья (Гевея бразильская) 
            требуют теплый и влажный климат, и растут они только в так называемом «Латексном поясе», 
            экваториальной зоне, которая тянется по всему миру.
          </p>
          <p>
            Вьетнам является одним из крупнейших в мире владельцем земель, 
            на которых культивируется Гевея. Общая площадь каучуковых плантаций 
            во Вьетнаме 800.000 гектар, со сбором свежего сока 1-1,5 млн. тонн ежегодно, 
            что эквивалентно 10% всей мировой добычи латекса за год.
          </p>
        </div>

        <div className="countryoforigin__block--content--img">
          <img src={wood} alt='wood' />
        </div>

        <div className="countryoforigin__block--content--text b">
          <p className="description__img">Каучуковые плантации во Вьетнаме</p>
          <p>
            В 2013 году Вьетнам поднялся в рейтинге и стал третьим в мире по объему экспорта натурального каучука. 
            Согласно последним статистическим данным Ассоциации стран-производителей натурального каучука (ANRPC), 
            добыча каучука во Вьетнаме в 2013 году была оценена в 1043000 тонн.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryOfOrigin