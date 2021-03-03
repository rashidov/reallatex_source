import React from 'react'

import ContentMain from './ContentMain/index'
import CarouselCategories from './CarouselCategories'
import CarouselContent from './CarouselContent'
import LinkUrl from './Link'
/* import InfoBlockSlick from './InfoBlockSlick' */

import './StartPage.css'

const StartPage = () => {
  return (
    <div className="start__page">
      <ContentMain />
      {/* <InfoBlockSlick /> */}
      <CarouselCategories />
      <LinkUrl url="/choosepillow" title="ПОДОБРАТЬ ПОДУШКУ СЕБЕ" />
      <CarouselContent />
      <LinkUrl url="/choosemattress" title="КАК ПОДОБРАТЬ МАТРАС" />
      {/* <InfoBlockSlick /> */}
    </div>
  )
}

export default StartPage
