import React, { Component } from "react";
import Slider from "react-slick";

import lat from '../../../assets/img/lat.jpg'
import './style.css'
 
class CarouselContent extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (
      <div className="carouselcontent__block">
        <Slider {...settings}>

        <div className="carouselcontent__block--content">
            <div className="carouselcontent__block--content__info">
              <div className="carouselcontent__block--content__info--left">
                <div className="carouselcontent__block--content__info--title">
                  Преимущество натурального латекса LIEN`A
                </div>
                <div className="carouselcontent__block--content__info--text">
                  <p>
                    <li><strong>Эластичость</strong> - 100% натуральный латекс LIEN'A состоит из миллионов ячеек, которые обеспечивают поддержку и комфорт во время сна. При этом движения партнера на матрасе вам не передаются.</li>
                    <li><strong>Прогрессивная поддержка</strong> - при первом прикосновении ощущается комфортно мягким, а при дальнейшем углублении в матрас обеспечивается растущая упругость, поэтому ваш позвоночник занимает оптимальное положение.</li>
                    <li><strong>Равномерное распределение веса тела</strong> - обеспечивает равномерность распределения веса тела, что улучшает кровообращение. Это уменьшает “ворочание” во время сна, следовательно, улучшает его качество.</li>
                    <li><strong>Гипоаллергенность</strong> - препятствует размножению пылевых клещей и является антимикробным и антибактериальным природным материалом, поэтому рекомендуется для людей, страдающих аллергией.</li>
                  </p>

                </div>
              </div>
              <div className="carouselcontent__block--content__info--right">
                <div className="carouselcontent__block--content__info--img">
                  <img src={lat} alt='lat' />
                </div>
              </div>
            </div>
          </div>

          <div className="carouselcontent__block--content">
            <div className="carouselcontent__block--content__info">
              <div className="carouselcontent__block--content__info--left">
                <div className="carouselcontent__block--content__info--title">
                  Латексные матрасы
                </div>
                <div className="carouselcontent__block--content__info--text">
                  <p> 
                    Ортопедический матрас из 100% натурального латекса примет ваше тело, подарив ощущение невесомости и ни с чем не сравнимый комфорт. Исправление искривления позвонков, снятие усталости, нормализация кровообращения, глубокий сон - все это лишь малая доля уникальных полезных свойств, которые Вам сможет подарить латексный матрас.
                  </p>
                </div>
              </div>
              <div className="carouselcontent__block--content__info--right">
                <div className="carouselcontent__block--content__info--img">
                  <img src= 'https://latex.ru/assets/cache/images/416x269-_mg_1177.483.jpg' alt="homePageCarousel__img" />
                </div>
              </div>
            </div>
          </div>

          <div className="carouselcontent__block--content">
            <div className="carouselcontent__block--content__info">
              <div className="carouselcontent__block--content__info--left">
                <div className="carouselcontent__block--content__info--title">
                  Латексные подушки
                </div>
                <div className="carouselcontent__block--content__info--text">
                  <p> 
                    Подушки из латекса имеют недостижимую для искусственных материалов эластичность и продуманный дизайн, при этом они дадут вам не только комфорт, но и лечебный эффект. Пористый состав обеспечивает великолепную вентиляцию, а значит препятствует накоплению влаги и появлению бактерий, поэтому Вы всегда будете отлично отдохнувшими и полными сил.
                  </p>
                </div>
              </div>
              <div className="carouselcontent__block--content__info--right">
                <div className="carouselcontent__block--content__info--img">
                  <img src= 'https://latex.ru/assets/cache/images/416x269-_mg_1833.483.jpg' alt="homePageCarousel__img" />
                </div>
              </div>
            </div>
          </div>

          <div className="carouselcontent__block--content">
            <div className="carouselcontent__block--content__info">
              <div className="carouselcontent__block--content__info--left">
                <div className="carouselcontent__block--content__info--title">
                  Латексные валики
                </div>
                <div className="carouselcontent__block--content__info--text">
                  <p>
                    Использование валика ограничивается только Вашим воображением. Его можно использовать в виде обычной подушки, подкладывать под ноги или под поясницу. Многие люди используют валик, чтобы принять максимально комфортную позу во время сна. В Таиланде и Вьетнаме валики часто именуют "второй женой (мужем)"
                  </p>
                </div>
              </div>
              <div className="carouselcontent__block--content__info--right">
                <div className="carouselcontent__block--content__info--img">
                  <img src= 'https://latex.ru/assets/cache/images/416x269-_mg_1870.483.jpg' alt="homePageCarousel__img" />
                </div>
              </div>
            </div>
          </div>

{/*           <div className="carouselcontent__block--content">
            <div className="carouselcontent__block--content__info">
              <div className="carouselcontent__block--content__info--left">
                <div className="carouselcontent__block--content__info--title"></div>
                <div className="carouselcontent__block--content__info--text"></div>
              </div>
              <div className="carouselcontent__block--content__info--right">
                <div className="carouselcontent__block--content__info--img"></div>
              </div>
            </div>
          </div> */}

        </Slider>
      </div>
    );
  }
}

export default CarouselContent