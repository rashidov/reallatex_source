import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCategories, addSubCategories } from '../../../../redux/actions/categories.actions'
import ListCategories from './ListCategories'

import '../Pages.css'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleCategories: '',
      subTitleCategories: '',
      imgCategories: '',
      typesCategories: '',
      /* isSubCategories: '', */

      titleSubCategories: '',
      imgSubCategories: '',
      typesSubCategories: '',
      subTypesSubCategories: '',
      key: this.props.pkey + '-' + this.props.skey
    }
  }

  submitCategories = e => {
    e.preventDefault()

    if (!this.state.titleCategories) return alert('Поле: название категории,не заполнено!')
    if (!this.state.subTitleCategories) return alert('Поле: полное название категории, не заполнено!')
    if (!this.state.imgCategories) return alert('Поле: ссылка на картинку категории, не заполнено!')
    if (!this.state.typesCategories) return alert('Поле: тип категории, не заполнено!')

    const category = {
      title: this.state.titleCategories,
      subTitle: this.state.subTitleCategories,
      img: this.state.imgCategories,
      types: this.state.typesCategories,
      key: this.state.key
    }

    this.props.addCategories(category)

    this.setState({
      titleCategories: '',
      subTitleCategories: '',
      imgCategories: '',
      typesCategories: ''
    })
  }

  submitSubCategories = e => {
    e.preventDefault()

    if (!this.state.titleSubCategories) return alert('Поле: название подкатегории, не заполнено!')
    if (!this.state.imgSubCategories) return alert('Поле: ссылка на картинку подкатегории, не заполнено!')
    if (!this.state.typesSubCategories) return alert('Поле: тип подкатегории, не заполнено!')
    if (!this.state.subTypesSubCategories) return alert('Поле: подтип подкатегории, не заполнено!')

    const subcategory = {
      title: this.state.titleSubCategories,
      img: this.state.imgSubCategories,
      types: this.state.typesSubCategories,
      subTypes: this.state.subTypesSubCategories,
      key: this.state.key
    }

    this.props.addSubCategories(subcategory)

    this.setState({
      titleSubCategories: '',
      imgSubCategories: '',
      typesSubCategories: '',
      subTypesSubCategories: ''
    })
  }

  inputChange = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {

    return ( 
      <div className="pages__categories">
      <div className="pages__categories--categories__form">
        <h3>Добавить категорию</h3>
        <form onSubmit={this.submitCategories}>
          <label className="labels">Название категории:</label><br/>
          <input 
            className="inputs" 
            onChange={this.inputChange} 
            value={this.state.titleCategories}
            id="titleCategories"
            name="titleCategories"
          /><br/>
          <label className="labels">Более развернутое название категории:</label><br/>
          <input
           className="inputs"
           onChange={this.inputChange}
           value={this.state.subTitleCategories}
           id="subTitleCategories"
           name="subTitleCategories"
          /><br/>
          <label className="labels">Ссылка на картинку категории:</label><br/>
          <input
           className="inputs" 
           onChange={this.inputChange}
           value={this.state.imgCategories}
           id="imgCategories"
           name="imgCategories"
          /><br/>
          <label className="labels">Тип категории:</label><br/>
          <input
           className="inputs" 
           onChange={this.inputChange}
           value={this.state.typesCategories}
           id="typesCategories"
           name="typesCategories"
          /><br/>
{/*           <label className="labels">Категория будет иметь подкатегорию?</label><br/>
          <select>
            <option value="true">---</option>
            <option value="true">Да</option>
            <option value="false">Нет</option>
          </select><br/> */}
          <button className="buttons">Сохранить</button>
        </form>
      </div>

      <div className="pages__categories--subcategories__form">
        <h3>Добавить подкатегорию</h3>
        <form onSubmit={this.submitSubCategories}>
          <label className="labels">Название подкатегории:</label><br/>
          <input
           className="inputs" 
           onChange={this.inputChange}
           value={this.state.titleSubCategories}
           id="titleSubCategories"
           name="titleSubCategories"
          /><br/>
          <label className="labels">Ссылка на картинку подкатегории:</label><br/>
          <input
           className="inputs" 
           onChange={this.inputChange}
           value={this.state.imgSubCategories}
           id="imgSubCategories"
           name="imgSubCategories"
          /><br/>
          <label className="labels">Тип подкатегории:</label><br/>
          <input
           className="inputs" 
           onChange={this.inputChange}
           value={this.state.typesSubCategories}
           id="typesSubCategories"
           name="typesSubCategories"
          /><br/>
          <label className="labels">Подтип подкатегории:</label><br/>
          <input
           className="inputs" 
           onChange={this.inputChange}
           value={this.state.subTypesSubCategories}
           id="subTypesSubCategories"
           name="subTypesSubCategories"
          /><br/>
          <button className="buttons">Сохранить</button>
        </form>
      </div>
      <ListCategories />
    </div>
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
  addCategories,
  addSubCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)


/* Первоподобная структура */

/* const Categories = () => {
  return (
    <div className="pages__categories">
      <div className="pages__categories--categories__form">
        <h3>Добавить категорию</h3>
        <form>
          <label className="labels">Название категории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Более развернутое название категории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Ссылка на картинку категории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Тип категории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Категория будет иметь подкатегорию?</label><br/>
          <select>
            <option value="true">---</option>
            <option value="true">Да</option>
            <option value="false">Нет</option>
          </select><br/>
          <button className="buttons">Сохранить</button>
        </form>
      </div>

      <div className="pages__categories--subcategories__form">
        <h3>Добавить подкатегорию</h3>
        <form>
          <label className="labels">Название категории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Ссылка на картинку категории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Тип подкатегории:</label><br/>
          <input className="inputs" /><br/>
          <label className="labels">Подтип подкатегории:</label><br/>
          <input className="inputs" /><br/>
          <button className="buttons">Сохранить</button>
        </form>
      </div>

      <ListCategories />
    </div>
  )
}

export default Categories */