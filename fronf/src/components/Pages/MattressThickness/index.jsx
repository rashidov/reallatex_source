import React, { useEffect } from 'react'

import YouTubeContent from '../../Catalog/CardProducts.jsx/YouTubeContent'

import dsc from '../../assets/img/dsc.jpg'
import mtrs from '../../assets/img/mtrs15.jpg'
import './style.css'

const MattressThickness = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="mattressthickness__block">
      <div className="mattressthickness__block--title">
        <h2>Как выбрать толщину латексного матраса?</h2>
      </div>

      <div className="mattressthickness__block--content">

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">1</div>
            <div className="mattressthickness__block--content__item--title">
              На какую поверхность класть матрас?
            </div>  
          </div>
          <div className="mattressthickness__block--content__item--text">
            <p>
              Вам необходимо определиться на какую поверхность  Вы будете класть матрас. 
              Если Вам достался по наследству матрас  или у Вас есть диван, в том числе раскладной, но спать некомфортно, 
              то Вам необходимо приобретать тонкий матрас - накладку(топпер) толщиной 5 или 7,5 см 
              в зависимости от Вашего веса.
            </p>
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">2</div>
            <div className="mattressthickness__block--content__item--title">
                Какую накладку выбрать?
              </div>
          </div>
          <div className="mattressthickness__block--content__item--text">
            <p>
              Если вы остановились на топпере (наматраснике),  то вспомните или проверьте на весах свой вес. 
              Если масса спящего не превышает 80 кг (сейчас мы говорим об одном спальном месте), то Вам будет 
              достаточно накладки  толщиной 5 см, если же нагрузка на одно спальное место превышает 80 кг, 
              то следует задуматься о наматраснике толщиной 7,5 см, так как накладка 5 см при таком весе не сможет 
              обеспечить достойный комфорт.
            </p>
          </div>
        </div>

        <div className="mattressthickness__block--content__description">
          <div className="mattressthickness__block--content__description--main">
            <div className="mattressthickness__block--content__description--num">
              ?
            </div>
            <div className="mattressthickness__block--content__description--title">
              Для справки
            </div>
          </div>
          <div className="mattressthickness__block--content__description--text">
            <p>
              Топперы изготавливаются на заводе путем нарезки, вдоль по толщине, 
              15 см латексных матрасов на 2 или 3 части, в зависимости от того, 
              какая толщина топпера требуется. Если нужны наматрасники 7,5 см , 
              то 15 см режется пополам, если нужны 5 см, то на 3 части.
            </p>
            <p>
              Таким образом на некоторых накладках может отсутствовать клеймо (5см), 
              или видна половина клейма (7,5см). Наглядно это показано здесь:
            </p>
          </div>
          <div className="mattressthickness__block--content__description--media">
            <img src={dsc} alt='dsc' />
            <YouTubeContent id="et5Wv-9Hi1s" />
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">3</div>
            <div className="mattressthickness__block--content__description--title">
              Что делать если нет пружинного матраса?
            </div>
          </div>         
          <div className="mattressthickness__block--content__item--text">
            <p>
              Если у Вас нет пружинного матраса и Вы не спите на диване, а есть кровать 
              без матраса и очень хочется спать комфортно и удобно на 100% натуральном латексе, 
              то необходимо обратить взор на полноценные матрасы толщиной 10см и 15 см.
            </p>
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">4</div>
            <div className="mattressthickness__block--content__description--title">
              Какой выбрать марас ? 10см. или 15см. ?
            </div>
          </div>
          <div className="mattressthickness__block--content__item--text">
            <p>
              Для того чтобы выбрать между 10 и 15 см, посмотрите на основание кровати, 
              если основание ровное и жесткое, а Ваш вес не более 95 кг, 
              то Вам будет достаточно матраса высотой 10 см
            </p>
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
           <div className="mattressthickness__block--content__item--num">5</div> 
           <div className="mattressthickness__block--content__description--title">
              Какое основание вашей кровати?
            </div>
          </div>
          <div className="mattressthickness__block--content__item--text">
            <p>
              Если основание у кровати решетчатое или Ваш вес более 95 кг, 
              то тут без вариантов – только 15 см матрас. Вот такой:
            </p>
          </div>

          <div className="mattressthickness__block--content__item--img">
            <img src={mtrs} alt='mtrs' />
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">6</div>
            <div className="mattressthickness__block--content__description--title">
              Как сэкономить ?
            </div>
          </div>
          <div className="mattressthickness__block--content__item--text">
            <p>
              Хорошо, скажете Вы, а если основание решетчатое, вес спящего, например, 70 кг,
               а бюджета на 15 см матрас не хватает. Как поступить в таком случае ? 
               Элементарно, ответим мы – положите на Вашу решетку лист ДСП, ДВП или фанеры и спите 
               на здоровье на матрасе толщиной 10 см.
            </p>
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">7</div>
            <div className="mattressthickness__block--content__description--title">
              Почему матрасов толще 15см. у нас не бывает?
            </div>
          </div>
          
          <div className="mattressthickness__block--content__item--text">
            <p>
              Хотелось бы отметить, что в нашем магазине не представлены матрасы выше чем 15 см, 
              а некоторые производители выпускают и 20 см и 25 см и даже 30 см. 
              Поясню почему мы не импортируем такие матрасы, во-первых такие высокие матрасы в основном 
              получаются путем склейки двух более тонких, а это, за счет использования клея, напрочь убивает 
              экологичность и гипоалергенность, во-вторых комфорта больше не становится, разницы в удовольствии 
              между 15 см и 25 см Вы не почувствуете, в-третьих такие матрасы получаются очень тяжелыми, 
              неподъемными и безумно дорогими. Как сами видите, плюсов нет, а минусов достаточно.
            </p>
          </div>
        </div>

        <div className="mattressthickness__block--content__item">
          <div className="mattressthickness__block--content__item--main">
            <div className="mattressthickness__block--content__item--num">8</div>
            <div className="mattressthickness__block--content__description--title">
              Что делать если нужен матрас толще чем 15см.?
            </div>
          </div>
          <div className="mattressthickness__block--content__item--text">
            <p>
              Однако бывает так, что углубление в кровати настолько большое, что 15 см не будет выступать за края ложа, 
              а очень хочется латекс и бюджет на матрас выделен приличный. В таком случае можем порекомендовать Вам заказать 
              жаккардовый чехол необходимой высоты здесь и купить у нас 2 матраса с одинаковой длиной и шириной. Например, 
              Вам нужен матрас 200х160х25см, запросто, заказываете чехол такого размера и покупаете 2 матраса -200х160х10 см и 200х160х15см. 
              Кладете матрасы в чехол, застегиваете молнию и вуаля !!! Вы получаете матрас высотой 25 см, который не будет 
              отличаться от монолитного блока, но будет иметь преимущество: при необходимости снять его с кровати или перевезти, 
              вы легко, расстегнув молнию сможете разделить его на 2 более легких матраса. 
              Чехол при таком варианте изготавливается для Вас бесплатно. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MattressThickness