import React from 'react'

import ButtonCatalog from './ButtonCatalog'
import SearchForm from './SearchForm'

import main from '../../../assets/img/main-img-min.jpg'

const ContentMain = () => {
  function closeSearchBlock() {
    let urlImg = `url(${main})`

    let contentMain        = document.getElementsByClassName("content__main")
    let conetntMainImg     = document.getElementsByClassName("content__main--blockSearchAndCatalogButton")
    let contentMainIcon    = document.getElementsByClassName("content__main--icon")
    let contentMainBtn     = document.getElementsByClassName("content__main--Button")
    let searchInput        = document.getElementsByClassName("content__main--Search") 
    let contentCategories  = document.getElementsByClassName("content__categories")
    let contentOther       = document.getElementsByClassName("content__other")
    let contentSearch      = document.getElementsByClassName("search__block--content")

    contentSearch[0].style.visibility             = "hidden"

    contentMainIcon[0].style.display              = "none"

    conetntMainImg[0].style.transitionProperty    = "background-image"
    conetntMainImg[0].style.transitionDuration    = "500ms"
    conetntMainImg[0].style.backgroundImage       = urlImg

    contentMainBtn[0].style.display               = "flex"
    contentMainBtn[0].style.width                 = "150px"
    contentMainBtn[0].style.alignItems            = "center"
    contentMainBtn[0].style.justifyContent        = "center"
    contentMainBtn[0].style.marginLeft            = "60px"
    contentMainBtn[0].style.padding               = "5px"
    contentMainBtn[0].style.background            = "#ffffff"
    contentMainBtn[0].style.fontSize              = "20px"
    contentMainBtn[0].style.borderRadius          = "5px"
    contentMainBtn[0].style.opacity               = "1"
    contentMainBtn[0].style.transitionProperty    = "opacity"
    contentMainBtn[0].style.transitionDuration    = "500ms"

    searchInput[0].style.marginLeft               = "30px"
    searchInput[0].style.width                    = "400px"

    contentMain[0].style.height                   = "auto"
    contentMain[0].style.transitionProperty       = "height"
    contentMain[0].style.transitionDuration       = "500ms"

    contentCategories[0].style.display            = "block"
    contentCategories[0].style.marginTop          = "60px"
    contentCategories[0].style.marginLeft         = "6.3%"
    contentCategories[0].style.marginRight        = "6.3%"
    contentCategories[0].style.marginBottom       = "60px"
    contentCategories[0].style.transitionProperty = "opacity"
    contentCategories[0].style.transitionDuration = "500ms"
    contentCategories[0].style.opacity            = "1"

    contentOther[0].style.display                 = "block"
    contentOther[0].style.width                   = "auto"
    contentOther[0].style.marginRight             = "6.3%"
    contentOther[0].style.marginLeft              = "6.3%"
    contentOther[0].style.marginBottom            = "40px"
    contentOther[0].style.transitionProperty      = "opacity"
    contentOther[0].style.transitionDuration      = "500ms"
    contentOther[0].style.opacity                 = "1" 
    /* window.location.reload() */ 
  }

  return (
    <div className="content__main">
      <div className="content__main--blockSearchAndCatalogButton">
        <i 
          className="material-icons content__main--icon" 
          onClick={closeSearchBlock}>
          close
        </i>
        <ButtonCatalog />
        <SearchForm />
      </div>
    </div>
  )
}

export default ContentMain
