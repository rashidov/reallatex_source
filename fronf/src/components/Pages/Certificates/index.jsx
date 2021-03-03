import React, { useEffect } from 'react'

import sert1 from '../../assets/img/certificates/sert1.png'
import sert2 from '../../assets/img/certificates/sert2.png'
import sert3 from '../../assets/img/certificates/sert3.png'
import sert4 from '../../assets/img/certificates/sert4.png'
import sert5 from '../../assets/img/certificates/sert5.png'
import sert6 from '../../assets/img/certificates/sert6.png'
import sert7 from '../../assets/img/certificates/sert7.png'
import sert8 from '../../assets/img/certificates/sert8.png'
import sert9 from '../../assets/img/certificates/sert9.png'
import sert10 from '../../assets/img/certificates/sert10.png'
import sert11 from '../../assets/img/certificates/sert11.png'
import sert12 from '../../assets/img/certificates/sert12.png'
import sert13 from '../../assets/img/certificates/sert13.png'
import sert14 from '../../assets/img/certificates/sert14.png'
import sert15 from '../../assets/img/certificates/sert15.png'
import sert16 from '../../assets/img/certificates/sert16.png'
import sert17 from '../../assets/img/certificates/sert17.png'
import sert18 from '../../assets/img/certificates/sert18.png'
import sert19 from '../../assets/img/certificates/sert19.png'
import './style.css'

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="certificates__block">
      <div className="certificates__block--title">
        <h2>СЕРТИФИКАТЫ КАЧЕСТВА</h2> 
      </div>
      <div className="certificates__block--content">
        <div className="certificates__block--content__info">

          <div className="certificates__block--content__info--blockOne">
            <div className="certificates__block--content__info--blockOne__img">
              <img src={sert1} alt="sert1" border="0" />
            </div>
            <div className="certificates__block--content__info--blockOne__content">
              &nbsp;	&nbsp;Уважаемые клиенты, вся продукция из 100% натурального латекса, предлагаемая на нашем сайте, сертифицирована не только в России, но и во всех остальных странах.
            </div>
          </div>

          <hr/>

          <div className="certificates__block--content__info--blockTwo">
            <div className="certificates__block--content__info--blockTwo__content">
              &nbsp;	&nbsp;Проверить Декларации Соответствия на 100% натуральный латекс (подушки, матрасы, детские товары) из Вьетнама, можно на Государственном сайте РосАккредитации - <a href="https://fsa.gov.ru/">www.fsa.gov.ru</a>, для этого достаточно перейти по ссылке:
            </div>
            <div className="certificates__block--content__info--blockTwo__img">
            <a href="https://fsa.gov.ru/"><img src={sert2} alt="sert2" border="0" /></a>
            </div>
          </div>

          <div className="certificates__block--content__info--blockThree">
            <div className="certificates__block--content__info--blockThree__content">
              <div className="blockThree__content--sectionOne sect">
                <div className="blockThree__content--link">
                  <li><a href="https://pub.fsa.gov.ru/rds/declaration/view/13022005/common">Подушки из 100% натурального латекса</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://pub.fsa.gov.ru/rds/declaration/view/13022005/common"><img src={sert3} alt="sert3" border="0" /></a>
                </div>
                <div className="brdr"></div>
              </div>
              

              <div className="blockThree__content--sectionTwo sect">
                <div className="blockThree__content--link">
                  <li><a href="https://pub.fsa.gov.ru/rds/declaration/view/13022654/common">Матрасы из 100% натурального латекса</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://pub.fsa.gov.ru/rds/declaration/view/13022654/common"><img src={sert4} alt="sert4" border="0" /></a>
                </div>
                <div className="brdr"></div>
              </div>


              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://pub.fsa.gov.ru/rds/declaration/view/13138406/common">Детская продукция</a></li>
                </div>
                <div className="blockThree__img">
                  <a href="https://pub.fsa.gov.ru/rds/declaration/view/13138406/common"><img src={sert5} alt="sert5" border="0" /></a>  
                </div>
                <div className="brdr"></div>
              </div>

              <hr/> 
              <div className="dop">
                <span>Так же вы можете:</span>
              </div>

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/LIEN_A-GOLS_CERTIFICATION-112020.pdf">Сертификат GOLS - Global Organic Latex Standart - выдается только тем производителям, у которых содержание латекса в продукции &ge; 95%.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/LIEN_A-GOLS_CERTIFICATION-112020.pdf"><img src={sert12} alt="sert12" border="0" /></a> 
                </div>
                <div className="brdr"></div>
              </div>
              

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/ECO-2014-2016-Test-report.pdf">Посмотреть или скачать отчет ECO - института GMBH (Германия) об исследовании 100% натурального латекса
                LIEN`A (Вьетнам) - 2014-2016г.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/ECO-2014-2016-Test-report.pdf"><img src={sert6} alt="sert6" border="0" /></a> 
                </div>
                <div className="brdr"></div>
              </div>

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/ECO-2016.pdf">ECO - отчет на 2016-2018г.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/ECO-2016.pdf"><img src={sert7} alt="sert7" border="0" /></a>
                </div>
                <div className="brdr"></div>
              </div>

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/Test-report-2018-2020.pdf">ECO - отчет на 2016-2018г.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/Test-report-2018-2020.pdf"><img src={sert8} alt="sert8" border="0" /></a> 
                </div>
                <div className="brdr"></div>
              </div>

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/Test-report-2020-2022.pdf">ECO - отчет на 2020-2022г.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/Test-report-2020-2022.pdf"><img src={sert9} alt="sert9" border="0" /></a> 
                </div>
                <div className="brdr"></div>
              </div>

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/LGA.pdf">Посмотреть/скачать тест на прочность и износостойкость латекса.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/LGA.pdf"><img src={sert10} alt="sert10" border="0" /></a>
                </div>
                <div className="brdr"></div>
              </div>

              <div className="blockThree__content--sectionThree sect">
                <div className="blockThree__content--link">
                  <li><a href="https://latex.ru/protokol.pdf">Посмотреть отчет отечественной лабаратории о качестве нашей продукции.</a></li>
                </div>
                <div className="blockThree__img">
                <a href="https://latex.ru/protokol.pdf"><img src={sert11} alt="sert11" border="0" /></a>  
                </div>
                <div className="brdr"></div>
              </div>
              <hr/>

            </div>
          </div>

          <div className="certificates__block--footer">
            <span>Желаем Вам приятных покупок и хорошего сна.</span><br/>
            <div className="certificates__block--footer__img">
              <div className="certificates__block--footer__img-item">
                <img src={sert13} alt="sert13" border="0" />
              </div>

              <div className="certificates__block--footer__img-item">
                <img src={sert14} alt="sert14" border="0" />
              </div>

              <div className="certificates__block--footer__img-item">
                <img src={sert15} alt="sert15" border="0" />
              </div>

              <div className="certificates__block--footer__img-item">
                <img src={sert16} alt="sert16" border="0" />
              </div>

              <div className="certificates__block--footer__img-item">
                <img src={sert17} alt="sert17" border="0" />
              </div>

              <div className="certificates__block--footer__img-item">
                <img src={sert18} alt="sert18" border="0" />
              </div>

              <div className="certificates__block--footer__img-item">
                <img src={sert19} alt="sert19" border="0" />
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates