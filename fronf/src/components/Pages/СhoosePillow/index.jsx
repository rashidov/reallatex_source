import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
import './style.css'

const ChoosePillow = () => {
  const [arrayItem, setArrayItem] = useState([])

  const [activeInterview, setActiveInterview]  = useState(false)
  const [sex, setSex] = useState('')

  const [positionActiveX, setPositionActiveX] = useState(false)
  const [positionX, setPositionX] = useState('')
  
  const [positionActiveY, setPositionActiveY] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  function content(num) {
    setActiveInterview(false)
    setPositionActiveX(false)
    setPositionActiveY(false)

    if (num === 1){
      setArrayItem([
        { title: 'Набор детских подушек до 1 года', url: '/catalog/product/60020f93fa8acc23002539a8'}
      ])
    } else if (num === 3){
      setArrayItem([
        { title: 'Подушка "ВЕГА" от 1 до 3-х лет', url: '/catalog/product/60020c86fa8acc230025399e'},
        { title: 'Подушка "КЛАССИК" от 1 до 3-х лет', url: '/catalog/product/602a5e74524c9f34a4cfd064'},
        { title: 'Подушка "КОНТУР" от 1 до 3-х лет', url: '/catalog/product/60020cb6fa8acc230025399f'}
      ])
    } else if (num === 7){
      setArrayItem([
        { title: 'Подушка "КОНТУР" от 3-х до 7 лет', url: '/catalog/product/60020d32fa8acc23002539a1'},
        { title: 'Подушка "Классик" от 3-х до 7 лет', url: '/catalog/product/60020d6efa8acc23002539a2'}
      ])
    } else if (num === 18){
      setArrayItem([
        { title: 'Подушка "ЮНИОР"', url: '/catalog/product/600205aafa8acc2300253992'}
      ])
    }
  }

  function interview(variant) {
    if (variant === 'a'){
      setArrayItem([])
      setActiveInterview(false)
      setPositionActiveX(true)
      setSex('man')
    } else if (variant === 'b'){
      setArrayItem([])
      setActiveInterview(false)
      setPositionActiveX(true)
      setSex('girl')
    }
  }

  function positionY(positions) {
    setPositionActiveX(false)
    setPositionActiveY(false)

    if (sex === 'man'){
      if (positions === 'higher') {
        if(positionX === 'stomach'){
          setArrayItem([{ title: 'Подушка "КЛАССИК"', url: '/catalog/product/600201e2fa8acc2300253987'}])
        }
        if(positionX === 'side'){
          setArrayItem([{ title: 'Подушка "КИНГ"', url: '/catalog/product/600202a9fa8acc2300253988'}])
        }
        if(positionX === 'back'){
          setArrayItem([{ title: 'Подушка "КЛАССИК"', url: '/catalog/product/600201e2fa8acc2300253987'}])
        }
      } else if (positions === 'lower') {
        if(positionX === 'stomach'){
          setArrayItem([{ title: 'Подушка "КОНТУР"', url: '/catalog/product/6002011bfa8acc2300253985'}])
        }
        if(positionX === 'side'){
          setArrayItem([{ title: 'Подушка "КОНТУР МАССАЖНАЯ"', url: '/catalog/product/600204bbfa8acc230025398e'}])
        }
        if(positionX === 'back'){
          setArrayItem([{ title: 'Подушка "ВЕГА"', url: '/catalog/product/6001ffaafa8acc2300253983'}])
        }
      }
    } else if (sex === 'girl') {
      if (positions === 'higher') {
        if(positionX === 'stomach'){
          setArrayItem([{ title: 'Подушка "КОНТУР"', url: '/catalog/product/6002011bfa8acc2300253985'}])
        }
        if(positionX === 'side'){
          setArrayItem([{ title: 'Подушка "КИНГ"', url: '/catalog/product/600202a9fa8acc2300253988'}])
        }
        if(positionX === 'back'){
          setArrayItem([{ title: 'Подушка "КОНТУР МАССАЖНАЯ"', url: '/catalog/product/600204bbfa8acc230025398e'}])
        }
      } else if (positions === 'lower') {
        if(positionX === 'stomach'){
          setArrayItem([
            { title: 'Подушка "ВЕГА"', url: '/catalog/product/6001ffaafa8acc2300253983'},
            { title: 'Подушка "ВЕГА МАССАЖНАЯ"', url: '/catalog/product/60020042fa8acc2300253984'},
          ])
        }
        if(positionX === 'side'){
          setArrayItem([{ title: 'Подушка "КЛАССИК"', url: '/catalog/product/600201e2fa8acc2300253987'}])
        }
        if(positionX === 'back'){
          setArrayItem([{ title: 'Подушка "ВЕГА МАССАЖНАЯ"', url: '/catalog/product/60020042fa8acc2300253984'}])
        }
      }
    }
  }

  return (
    <div className="choosepillow__block">
      <div className="choosepillow__block--title">
        <h2>Как выбрать латексную подушку?</h2>
      </div>

      <div className="choosepillow__block--content">
        
        <div className="choosepillow__block--content--item">
          <div className="choosepillow__block--content--item__title">
            Ваш возраст ?
          </div>

          <div className="choosepillow__block--content--item__content">
              <div className="choosepillow__block--content--item__content--buttons">
                <div 
                  className="choosepillow__block--content--item__content--button"
                  onClick={() => content(1)}
                >
                  <i className="material-icons">accessibility_new</i>
                  до 1 года
                </div>
                <div 
                  className="choosepillow__block--content--item__content--button"
                  onClick={() => content(3)}
                >
                  <i className="material-icons">accessibility_new</i>
                  от 1 года - 3 лет
                </div>
                <div
                  className="choosepillow__block--content--item__content--button"
                  onClick={() => content(7)}
                >
                  <i className="material-icons">accessibility_new</i>
                  от 3 лет - 7 лет
                </div>
                <div
                  className="choosepillow__block--content--item__content--button"
                  onClick={() => content(18)}
                >
                  <i className="material-icons">accessibility_new</i>
                  от 7 лет - 18 лет
                </div>
                <div 
                  className="choosepillow__block--content--item__content--button"
                  onClick={() => {setActiveInterview(true); setArrayItem([]); setPositionActiveX(false); setPositionActiveY(false)}}
                >
                  <i className="material-icons">accessibility_new</i>
                  от 18 лет
                </div>

              </div>
              <div className="choosepillow__block--content--item__content--result">
                {activeInterview ? (                       /* Показать опрос ?  */
                  <div>
                    <div 
                      className="choosepillow__block--content--item__content--button"
                      onClick={() => interview('a')}
                    >
                      Мужчина
                    </div>
                    <div 
                      className="choosepillow__block--content--item__content--button"
                      onClick={() => interview('b')}
                    >
                    Женщина
                    </div>
                  </div>
                ):(

                    <span></span>
                  
                )}

                {arrayItem ? (
                  arrayItem.map( (item, index) => (
                    <div className="link__result">
                      <Link to={item.url} key={index}>{item.title}</Link><br/>
                    </div>
                  ))
                  ):(
                    <span></span>
                  )}

                {positionActiveX ? (      /* Позиция по X */
                  <div>
                    <div className="choosepillow__block--content--item__content--button" onClick={() => {setPositionX('stomach'); setPositionActiveX(false); setPositionActiveY(true) }} >
                      На животе
                    </div>
                    <div className="choosepillow__block--content--item__content--button" onClick={() => {setPositionX('side'); setPositionActiveX(false); setPositionActiveY(true) }} >
                      На боку
                    </div>
                    <div className="choosepillow__block--content--item__content--button" onClick={() => {setPositionX('back'); setPositionActiveX(false); setPositionActiveY(true) }} >
                      На спине
                    </div>
                  </div>
                ):(
                  <span></span>
                )}

                {positionActiveY ? (        /* Позиця по Y */
                  <div>
                    <div className="choosepillow__block--content--item__content--button" onClick={() => {positionY('higher');}}>Повыше</div>
                    <div className="choosepillow__block--content--item__content--button" onClick={() => {positionY('lower');}}>Пониже</div>
                  </div>
                ):(
                  <span></span>
                )}
              </div>
          </div>
        </div>

        <div className="choosepillow__block--content--item">
          <div className="choosepillow__block--content--item__title">
            Основные правила при выборе подушки:  
          </div>
          
          <div className="choosepillow__block--content--item__content">
            <div className="choosepillow__block--content--item__content--text">
              <p>
                1) Чем шире плечи, тем более высокая подушка требуется для хорошего сна.
              </p>
              <p>
                2) Если человек спит на спине, то ему нужна более низкая подушка, чем при сне на боку.
              </p>
              <p>
                3) Если матрас мягкий, то подушка должна быть более низкой, чем при сне на более твердой поверхности.
              </p>
              <p>
                4) Если рука постоянно устраивается под подушку или под голову, то подушка слишком низкая.
              </p>
              <p>
                5) Если возникает ощущение неудобства, причиной может быть слишком высокая подушка.
              </p>
              <p>
                6) Если шея утром болит, а плечи деревенеют, то подушка слишком низкая, а матрас слишком жесткий.
              </p>
            </div>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default ChoosePillow