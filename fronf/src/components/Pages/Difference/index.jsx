import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import mtrs3 from '../../assets/img/mtrs3.jpg' 
import label from '../../assets/img/label.jpg'
import klem from '../../assets/img/klem.jpg'

import klem1 from '../../assets/img/klem1.jpg'
import klem2 from '../../assets/img/klem2.jpg'
import klem3 from '../../assets/img/klem3.jpg'
import klem4 from '../../assets/img/klem4.jpg'
import './style.css'

const Difference = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
  <div className="difference__block">
    <div className="difference__block--title">
      <h2>Как отличить натуральный латекс от синтетического?</h2>
    </div>
    <div className="difference__block--content">
      
      <div className="difference__block--content--item">
        <div className="difference__block--content--item__title">
          <div className="difference__block--content--item__title--num">1</div>
          <span>Страна производителя.</span>
        </div>
        <div className="difference__block--content--item__content">
          <div className="difference__block--content--item__content--text">
            <p>
              Дело в том, что существует Ассоциация стран производителей 100% натурального каучука (англ. аббревиатура ANRPC). Официальный сайт организации - <a href="http://www.anrpc.org">http://www.anrpc.org</a> . Эти страны на 2014-2015 года контролируют 97% мирового рынка натурального латекса. В настоящее время в эту организацию входит 11 стран. - Камбоджа, Китай, Индия, Индонезия, Малайзия, Папуа-Новая Гвинея, Филиппины, Сингапур, Шри-Ланка, Таиланд и Вьетнам. Вы спросите почему именно эти страны? Ответ достаточно прост – именно в этих странах произрастает каучуковое дерево – Гевея бразильская, из сока которого изготавливается латексная пена. А сок Гевеи  в жидком состоянии сохраняется всего 12 часов, в течение этого времени его необходимо вспенить (далее латекс превращается в каучук, вспенить его нельзя). Экспортировать чистый сок, необходимый для технологии DUNLOP невозможно. Экспорт сока возможен только в виде каучука (коагулированный латекс), готовой продукции из латексной пены (подушки, матрасы и пр.) или при условии насыщения латекса аммиаком с добавлением пентахлорфенолята натрия и тетраметилтиурамдисульфида (возможно добавление диэтилдитиокарбамата натрия и оксида цинка) . Таким образом все изделия произведенные за пределами  указанных стран, заведомо производятся из смеси каучука, стабилизаторов,  антибактериальных добавок и синтетического латекса (бутадиен-стирол). Вряд ли вы увидите на упаковке/этикетке такого латекса надпись "100% натуральный латекс". Качественный природный латекс не может быть дешевым.  
            </p>
          </div>
          <div className="difference__block--content--item__content--img">
            <img src={mtrs3} alt='mtrs3' />
          </div>
        </div>
      </div>

      <div className="difference__block--content--item">
        <div className="difference__block--content--item__title">
          <div className="difference__block--content--item__title--num">2</div>
          <span>Внешний вид и запах латекса.</span>
        </div>
        <div className="difference__block--content--item__content">
          <div className="difference__block--content--item__content--text">
            <p>
              100% натуральная латексная пена –  имеет слегка желтоватый оттенок и смешанный запах резиновых шариков и выпечки или сухого молока. На ощупь она жирная, но не оставляет следов. Неохотно впитывает воду. Синтетический латекс – или смешанный латекс с добавкой даже 20% синтетических примесей имеет как правило белый цвет, приятный запах парфюмерии, которая скрывает химический запах. На ощупь такой латекс сухой и шершавый. Воду впитывает как губка. Со временем синтетический латекс становится грязно-желтым, более хрупким и легко ломается.
            </p>
          </div>
        </div>
      </div>

      <div className="difference__block--content--item">
        <div className="difference__block--content--item__title">
          <div className="difference__block--content--item__title--num">3</div>
          <span>Фабричный ярлык</span>
        </div>
        <div className="difference__block--content--item__content">
          <div className="difference__block--content--item__content--text">
            <p>
              На этикетке обязательно должен быть указан состав "100% натуральный латекс" и компания производитель.  Если на ярлыке указан состав - "Латекс" или "Натуральный латекс", то скорее всего Вы приобрели так называемый латекс-микс 60/40% или 15/85%, так как по законодательству многих стран, в том числе и России, латекс имееет право называться натуральным даже в том случае, если в конечном продукте имеется всего лишь 15% сока дерева Гевеи. Если на лейбе не указано название производителя , то стоит задуматься о приобретении такого изделия, так как неизвестно кем и где оно было произведено.
            </p>
          </div>
          <div className="difference__block--content--item__content--description">
            <span>Наши фирменные лейбы выглядят так:</span>
          </div>
          <div className="difference__block--content--item__content--img">
            <img src={label} alt='label' />
          </div>
        </div>
      </div>

      <div className="difference__block--content--item">
        <div className="difference__block--content--item__title">
          <div className="difference__block--content--item__title--num">4</div>
          <span>Сертификаты</span>
        </div>
        <div className="difference__block--content--item__content">
          <div className="difference__block--content--item__content--text">
            <p>
              Российская сертификация подушек и матрасов из натурального латекса подразделяется на обязательную (декларации соответствия) и добровольную (сертификаты соответствия). Подлинность деклараций соответствия можно проверить на государственном сайте Росаккредитации - <a href="http://fsa.gov.ru/">http://fsa.gov.ru/</a>  . Для этого достаточно перейти в реестр и вбить номер декларации или название компании-импортера.
            </p>
            <Link to="/documents">Наши сертификаты</Link>
          </div>
          <div className="difference__block--content--item__content--description"></div>
          <div className="difference__block--content--item__content--img"></div>
        </div>
      </div>

      <div className="difference__block--content--item">
        <div className="difference__block--content--item__title">
          <div className="difference__block--content--item__title--num">5</div>
          <span>Сам латекс</span>
        </div>
        <div className="difference__block--content--item__content">
          <div className="difference__block--content--item__content--text">
            <p>
              Если производитель гордится и дорожит свои именем, то он обязательно поставит на своей латексной продукции клеймо.
            </p>
          </div>
          <div className="difference__block--content--item__content--description">
            <span>на наших матрасах клеймо выглядит так:</span>
          </div>
          <div className="difference__block--content--item__content--img">
            <img src={klem} alt='klem' />
          </div>
          <div className="difference__block--content--item__content--description">
            <span>на наших на подушках так:</span>
          </div>
          <div className="difference__block--content--item__content--img">
            <img src={klem1} alt='klem1' />
            <img src={klem2} alt='klem2' />
            <img src={klem3} alt='klem3' />
            <img src={klem4} alt='klem4' />
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Difference