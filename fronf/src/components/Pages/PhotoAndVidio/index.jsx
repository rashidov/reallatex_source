import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import PhotoSlider from './PhotoSlider'
import YouTubeContent from './YouTubeContent'

import international from '../../assets/js/international.photo.array'
import expo from '../../assets/js/expo.photo.array'
import other from '../../assets/js/other.photo.array'

import './styles.css'

const PhotoAndVidio = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="photoandvidio__block">
      <div className="photoandvidio__block--title"><h2>ФОТО И ВИДEО</h2></div>
      <div className="photoandvidio__block--photos_from_exhibition">
        <div className="photoandvidio__block--photos_from_exhibition-international">
          <div className="photoandvidio__block--photos_from_exhibition-international--title">
            Фото с междунароной выставки intrzum 2019г. (Кельн, Германия)
          </div>
          <div className="photoandvidio__block--photos_from_exhibition-international--content">
            <div className="international--content__text">
            Interzum - ведущая выставка в мире поставщиков для производства мебели и интерьеров. Более 200 международных фирм-участников представят всеобъемлющий ассортимент продукции. Проходила с 21.05.2019 по 24.05.2019 в Кёльне (Германия). <br/><br/>
            Тематические разделы выставки: 
            <ul>
              <li>Материалы и комплектующие для мебели, производство и внутренняя отделка</li>
              <li>Машины, материалы и компоненты для производства мягкой мебели и матрасов</li>
              <li>Материалы, кожа для изготовления обивки, чехлов</li>
              <li>Инновационные материалы</li>
            </ul>
            На выставке фирма LIEN'A представляла свою продукцию для здорового сна,
             в том числе и новинку - 
            <Link to="/catalog/products/7">угольный латекс</Link>.
            </div>
            <PhotoSlider array={international} />
          </div>
        </div>
        <div className="photoandvidio__block--photos_from_exhibition-EXPO">
          <div className="photoandvidio__block--photos_from_exhibition-EXPO--title">
            Фото с выставки Мебель ЭКСПО 2017
          </div>
          <div className="photoandvidio__block--photos_from_exhibition-EXPO--content">
            <div className="exhibition-EXPO--content__text">
              <p>
                «Мебель ЭКСПО 2017» – это крупная отраслевая выставка, которая каждый год становится главным событием мебельного рынка в России и Восточной Европе.
                В «Экспоцентре» собираются ведущие мировые бренды и производители, 
                дизайнеры и специалисты по интерьеру для демонстрации новых коллекций и лучших образцов мебельной моды, 
                эффективного делового общения и развития бизнеса.
              </p>
              <p>
                Выставка определяет актуальные тенденции мебельного рынка и объединяет на своей площадке производителей и дистрибьюторов различных направлений с потребителями. 
                Здесь представлен широкий выбор элитной и бюджетной мебели для спален, столовых, гостиных, детских, а также кухни от производителя, диваны и кресла, 
                мебельная фурнитура, отделочные материалы и разнообразные предметы интерьера.
              </p>
              <p>
                Наша компания ООО "Патекс" совместно с производителем LIENA из Вьетнама представляла 
                продукцию из 100% натурального латекса:
              </p>
                <li><Link to="/catalog/subcategories/0">Матрасы</Link></li>
                <li><Link to="/catalog/products/1">Подушки</Link></li>
                <li><Link to="/catalog/products/2">Валики</Link></li>
            </div>
            <PhotoSlider array={expo} />
          </div>
        </div>
      </div>

      <div className="photoandvidio__block--vidio">
        <div className="photoandvidio__block--vidio--title">
          Видео
        </div>
        <div className="photoandvidio__block--vidio--contetn">
          <YouTubeContent id="2r8nEqQK5VA" />
          <YouTubeContent id="FRsWI00j4YA" />
        </div>
      </div>

      <div className="photoandvidio__block--photos_other">
        <div className="photoandvidio__block--photos_other--title">
          Прочие фотографии
        </div>
        <div className="photoandvidio__block--photos_other--content">
          <PhotoSlider array={other} />
        </div>
      </div>
    </div>
  )
}

export default PhotoAndVidio