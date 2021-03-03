import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../Pages.css'

class ProductEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      urlimg: '',

      arrayImg: this.props.arrayImg || []
    }
  }

  submitForm = e => {
    e.preventDefault()
  }

  inputChange =  e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    return (
      <div className="pages__products--form">
        <h3>Редактирование товара:</h3>
        <form onSubmit={this.submitForm}>
          <div className="section">
            <div className="pages__products--form__edit--title">
              редактировать название: <br/>
              <input
               value={this.state.title}
               onChange={this.inputChange} 
               id="title"
               name="title" 
               placeholder={this.props.product.title}
              /> <br/>
              редактировать ссылку на картинку: <br/>
              <input
               value={this.state.urlimg} 
               onChange={this.inputChange}
               id="urlimg"
               name="urlimg"
               placeholder={this.props.product.img} 
              /> 
            </div>
          </div>    
          <div className="section">
            <div className="pages__products--form__edit--description">
              Характеристики: <br/>
              <span>размер:</span> <input placeholder={this.props.product.size} /> *размер указывается с (см.) <br/>
              <span>вес:</span> <input placeholder={`${this.props.product.severity} кг.`} /> *вес указывается без (кг.) <br/>
              <span>цена:</span> <input placeholder={`${this.props.product.price} руб.`} /> *цена указывается без (руб.) <br/> <br/>
              Прочие характеристики: <br/>
              <span>cостав:</span> <input placeholder={this.props.product.composition} /><br/>
              <span>покрытие:</span> <input placeholder={this.props.product.coating} /><br/>
              <span>производитель:</span> <input placeholder={this.props.product.manufacturer} /><br/>
              <span>страна производитель:</span> <input placeholder={this.props.product.countryOfManufacture} /><br/>
            </div>
          </div>
          <div className="section">
            <div className="pages__products--form__edit--fulldescription">
              Полное описание:
              <textarea></textarea>
            </div>
          </div>
          <div className="section">
            <div className="pages__products--form__edit--gallery">


{/*               {!this.props.product ? (
                <span>галерея пуста</span>
              ):(
                this.props.product.arrayImg.map( (url, index) => (
                  <div>
                    ссылка {index}__
                   <input placeholder={url} /> 
                  </div>
                ))
              )} */}
            </div>
          </div>
          <button>Сохранить</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.editproduct
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditForm)