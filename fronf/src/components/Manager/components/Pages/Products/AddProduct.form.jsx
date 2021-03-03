import React, {Component} from 'react'
import { connect } from 'react-redux'

import { addProduct } from '../../../../redux/actions/products.action'

import '../Pages.css'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      img: '',
      size: '',
      severity: '',
      fullDescription: '',
      composition: '',
      coating: '',
      manufacturer: '',
      countryOfManufacture: '',
      idVidio: '',
      price: null,
      types: null,
      subTypes: null,
      url1: '',
      url2: '',
      url3: '',
      url4: '',
      url5: '',
      url6: '',
      url7: '',
      url8: '',
      key: this.props.pkey + '-' + this.props.skey
    }
  }

  submitForm = e => {
    e.preventDefault()

    const product = {
      key: this.state.key,
      title: this.state.title,
      img: this.state.img,
      size: this.state.size,
      severity: this.state.severity,
      fullDescription: this.state.fullDescription,
      composition: this.state.composition,
      coating: this.state.coating,
      manufacturer: this.state.manufacturer,
      countryOfManufacture: this.state.countryOfManufacture,
      idVidio: this.state.idVidio,
      price: this.state.price,
      types: this.state.types,
      subTypes: this.state.subTypes,
      arrayImg: [
        this.state.url1,
        this.state.url2,
        this.state.url3,
        this.state.url4,
        this.state.url5,
        this.state.url6,
        this.state.url7,
        this.state.url8,
      ]
    }

    this.props.addProduct(product)

    this.setState({
      title: '',
      img: '',
      size: '',
      severity: '',
      fullDescription: '',
      composition: '',
      coating: '',
      manufacturer: '',
      countryOfManufacture: '',
      idVidio: '',
      price: '',
      types: '',
      subTypes: '',
      url1: '',
      url2: '',
      url3: '',
      url4: '',
      url5: '',
      url6: '',
      url7: '',
      url8: ''
    })
  }

  inputChange =  e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <div className="pages__products--add_product--form__lfet_part">
          <h3>Добавить продукт:</h3>
          <label>Наименование товара:</label><br/>
          <input
            className="inputs addproduct" 
            onChange={this.inputChange}
            value={this.state.title}
            id="title"
            name="title"
          /><br/>
          <label>Ссылка на картинку:</label><br/>
          <input
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.img}
            id="img"
            name="img"
          /><br/>
          <label>Размеры длинаXширинаXтолщина в см.:</label><br/>
          <input
            className="inputs addproduct" 
            onChange={this.inputChange}
            value={this.state.size}
            id="size"
            name="size"
          /><br/>
          <label>Вес:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.severity}
            id="severity"
            name="severity"
          /><br/>
          <label>Полное описание:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.fullDescription}
            id="fullDescription"
            name="fullDescription"
          /><br/>
          <label>Состав:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.composition}
            id="composition"
            name="composition"
          /><br/>
          <label>Покрытие:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.coating}
            id="coating"
            name="coating"
          /><br/>
          <label>Производитель:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.manufacturer}
            id="manufacturer"
            name="manufacturer"
          /><br/>
          <label>Страна производитель:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.countryOfManufacture}
            id="countryOfManufacture"
            name="countryOfManufacture"
          /><br/><br/>
          <button className="buttons">Сохранить</button>
        </div>
        <div className="pages__products--add_product--form__right_part">
          <label>id видио к этому продукту:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.idVidio}
            id="idVidio"
            name="idVidio"
          /><br/>
          <label>Цена:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.price}
            id="price"
            name="price"
          /><br/>
          <label>Тип:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.types}
            id="types"
            name="types"
          /><br/>
          <label>Подтип:</label><br/>
          <input 
            className="inputs addproduct"
            onChange={this.inputChange}
            value={this.state.subTypes}
            id="subTypes"
            name="subTypes"
          /><br/>
          <label>Фотография 1:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url1}
            id="url1"
            name="url1"
          /><br/>
          <label>Фотография 2:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url2}
            id="url2"
            name="url2"
          /><br/>
          <label>Фотография 3:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url3}
            id="url3"
            name="url3"
          /><br/>
          <label>Фотография 4:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url4}
            id="url4"
            name="url4"
          /><br/>
          <label>Фотография 5:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url5}
            id="url5"
            name="url5"
          /><br/>
          <label>Фотография 6:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url6}
            id="url6"
            name="url6"
          /><br/>
          <label>Фотография 7:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url7}
            id="url7"
            name="url7"
          /><br/>
          <label>Фотография 8:</label><br/>
          <input 
            className="inputs addproduct imgs"
            onChange={this.inputChange}
            value={this.state.url8}
            id="url8"
            name="url8"
          /><br/>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    pkey: state.app.pkey.pkey,
    skey: state.app.skey
  }
}

const mapDispatchToProps = {
  addProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)