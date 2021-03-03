import React, { useEffect } from 'react'

import './style.css'

const OrderBySite = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="option__site">
      <div className="option__site__actOne option">
        <div className="option__site--title">
          <div className="option__site--title__num">1</div>
          <span className="option__site--title__text">Выберите понравившийся вам товар в каталоге</span>
          <img className="catalogBtn" src="https://i.ibb.co/B3Z3Hfg/catalog.png" alt="catalog" border="0" />
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/J3LNFxZ/catalog-Page.png" alt="catalog-Page" border="0" />
        </div>
        <div className="brdrOne line"></div>
      </div>
      <div className="option__site__actTwo option">
        <div className="option__site--title">
          <div className="option__site--title__num">2</div>
          <span className="option__site--title__text">Нажмите кнопку 	&laquo;В корзину&raquo;</span><br/>
          <img className="cardBtn" src="https://i.ibb.co/8XtHfTn/card-Button.png" alt="card-Button" border="0" />
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/Hd5khzQ/catalog-Page.png" alt="card-Page" border="0" />
        </div>
        <div className="brdrTwo line"></div>
      </div>
      <div className="option__site__actThree option">
        <div className="option__site--title">
          <div className="option__site--title__num">3</div>
          <span className="option__site--title__text">Теперь вы перешли в корзину</span> <br/>
          <img className="cardsBtn" src="https://i.ibb.co/2jjLqrm/cardIcon.png" alt="cardIcon" border="0" />
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/jGw7CWk/cards-Page.png" alt="cards-Page" border="0" />
        </div>
        <div className="brdrThree line"></div>
      </div>
      <div className="option__site__actFour option">
        <div className="option__site--title">
          <div className="option__site--title__num">4</div>
          <span className="option__site--title__text">Скорректируйте количество товаров</span><br/>
          <div className="imgsBtnCrad">
            <img src="https://i.ibb.co/4jvm7py/plus.png" alt="plus" border="0" />
            <img src="https://i.ibb.co/DLVmBpn/min.png" alt="min" border="0" />
            <img src="https://i.ibb.co/1KtGZS4/del.png" alt="del" border="0" />
          </div>
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/rx367pJ/cards-Page-Isp.png" alt="cards-Page-Isp" border="0" />
        </div>
        <div className="brdrFour"></div>
      </div>
      <div className="option__site__actFive option">
        <div className="option__site--title">
          <div className="option__site--title__num">5</div>
          <span className="option__site--title__text">Ознакомьтесь с составом корзины</span>
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/z5fhLC3/content-Card.png" alt="content-Card" border="0" />
        </div>
        <div className="brdrFive line"></div>
      </div>
      <div className="option__site__actSix option">
        <div className="option__site--title">
          <div className="option__site--title__num">6</div>
          <span className="option__site--title__text">Заполните форму с контактными данными</span><br/>
          <img className="cardAddCmt" src="https://i.ibb.co/jJxL96q/add-Comment-Form-Card.png" alt="add-Comment-Form-Card" border="0" />
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/fC61LDY/formCard.png" alt="formCard" border="0" />
        </div>
        <div className="brdrSix line"></div>
      </div>
      <div className="option__site__actSeven option">
        <div className="option__site--title">
          <div className="option__site--title__num">7</div>
          <span className="option__site--title__text">Нажмите кнопку отправить</span><br/>
          <img className="cardSenBtn" src="https://i.ibb.co/5cn4rdV/sendBtn.png" alt="sendBtn" border="0" />
        </div>
        <div className="option__site--img">
        <img src="https://i.ibb.co/k1mWSjL/SendForm.png" alt="SendForm" border="0" />
        </div>
        <div className="brdrSeven line"></div>
      </div>
      <div className="option__site__actEigth option">
        <div className="option__site--title">
          <div className="option__site--title__num">8</div>
          <span className="option__site--title__text">Наши менеджеры свяжутся с вами в течение суток</span><br/>
          <img className="homeBtn" src="https://i.ibb.co/GCt9wdX/homeBtn.png" alt="homeBtn" border="0" />
        </div>
        <div className="option__site--img">
          <img src="https://i.ibb.co/phJ2Hd4/by.png" alt="by" border="0" />
        </div>
        <div className="brdrEigth line"></div>
      </div>
    </div>
  )
}

export default OrderBySite