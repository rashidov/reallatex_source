import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { reqUrlSearch } from '../../../../requests/requestsURL'
import SendRequestPOST from '../../../../requests/SendRequestPOST'

const urlImg = "url(https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png)"

const contentMain        = document.getElementsByClassName("content__main")
const conetntMainImg     = document.getElementsByClassName("content__main--blockSearchAndCatalogButton")
const contentMainIcon    = document.getElementsByClassName("content__main--icon")
const contentMainBtn     = document.getElementsByClassName("content__main--Button")
const searchInput        = document.getElementsByClassName("content__main--Search") 
const contentCategories  = document.getElementsByClassName("content__categories")
const contentOther       = document.getElementsByClassName("content__other")
const contentSearch      = document.getElementsByClassName("search__block--content")

export default class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      resData: []
    }
  }

  changeTitle = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  submitTitle = e =>{
    e.preventDefault();
    
    let str = '' 
    if(this.state.search.length === 0) str = ''
    if(this.state.search.length > 0) str = this.state.search[0].toUpperCase() + this.state.search.slice(1)

    let obJtitle = {
      title: str
    }

    SendRequestPOST(reqUrlSearch, obJtitle).then((resData) =>{
      this.setState({ 
        resData
      })
      
      console.log(this.state.resData, obJtitle)
      this.searchBlockContent()
    } ).catch(err => console.log(err))
  }

  searchBlockContent = e => {
    /* searchInput[0].style.paddintBottom = "40px" */
    contentSearch[0].style.display                = "block"
    contentSearch[0].style.position               = "absolute"
    contentSearch[0].style.visibility             = "visible"

    contentMain[0].style.height                   = "1000px"
  }

  modifyPages = e => {
    contentMainIcon[0].style.display              = "block"

    contentMain[0].style.height                   = "1000px"
    contentMain[0].style.transitionProperty       = "height"
    contentMain[0].style.transitionDuration       = "500ms"

    conetntMainImg[0].style.transitionProperty    = "background-image"
    conetntMainImg[0].style.transitionDuration    = "500ms"
    conetntMainImg[0].style.backgroundImage       = urlImg

    contentMainBtn[0].style.transitionProperty    = "opacity"
    contentMainBtn[0].style.transitionDuration    = "500ms"
    contentMainBtn[0].style.opacity               = "0"
    contentMainBtn[0].style.display               = "none"

    contentCategories[0].style.transitionProperty = "opacity"
    contentCategories[0].style.transitionDuration = "500ms"
    contentCategories[0].style.opacity            = "0"
    contentCategories[0].style.display            = "none"

    contentOther[0].style.transitionProperty      = "opacity"
    contentOther[0].style.transitionDuration      = "500ms"
    contentOther[0].style.opacity                 = "0"
    contentOther[0].style.display                 = "none"

    searchInput[0].style.width                    = "700px"
    searchInput[0].style.border                   = "1px solid #43A047"
    searchInput[0].style.marginLeft               = "300px"
  }

  render(){
    return(
    <div className="search__block">
      <form onSubmit={this.submitTitle} >
        <div className="content__main--Search" onClick={this.modifyPages}>
          <input
            type="text"
            onChange={this.changeTitle}
            value={this.state.search}
            id="search"
            name="search"
            placeholder="Поиск" 
          />
          <button type="submit">
            <i className="material-icons">search</i>
          </button>
        </div>
      </form>
      {this.state.resData.length <= 0 ? (
        <div className="search__block--content">
          Поиск "{this.state.search}" не дал результатов
        </div>
      ):(
        <div className="search__block--content">
          {this.state.resData.map(item => (
            <Link to={`/catalog/product/${item._id}`}>
              <div className="search__block--item" key={item._id}>
                <img src={item.img} alt="search__img" />
                <h4>{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div> 
    )
  }
}