import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCategories, fetchCategories } from '../../../../../../redux/actions/categories.actions'

import ListCategories from '../ListCategories';

import './style.css'
 
class Have extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: '',
      title: '',
      subTitle: '',
      img: '',
      isSubCategories: 'true',
      categories: []
    }
  }

  submitForm = e => {
    e.preventDefault()
    const category = {
      types: this.state.types,
      title: this.state.title,
      subTitle: this.state.subTitle,
      img: this.state.img,
      isSubCategories: this.state.isSubCategories,
      key: this.props.pkey.pkey + '-' + this.props.skey
    }

    console.log(category)

    this.props.addCategories(category)

    this.setState({
      types: '',
      title: '',
      subTitle: '',
      img: '',
      isSubCategories: 'true'
    })
  }

  changeInput = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    return (
      <div className="have__block">
        <div className="have__block--form">
          <form onSubmit={this.submitForm}>
            <input type="text" onChange={this.changeInput} value={this.state.title} id="title" name="title" placeholder="Название категории"/><br/>
            <input type="text" onChange={this.changeInput} value={this.state.subTitle} id="subTitle" name="subTitle" placeholder="Подробное название категории"/><br/>
            <input type="text" onChange={this.changeInput} value={this.state.img} id="img" name="img" placeholder="Ссылка на картинку"/><br/>
            <input type="text" onChange={this.changeInput} value={this.state.types} id="types" name="types" placeholder="Тип"/>
            <br/><br/>
            <button>Сохранить</button>
          </form>
        </div>
        <div className="have__block--listcategory">
          <ListCategories />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pkey: state.app.pkey,
    skey: state.app.skey
  }
}

const mapDispatchToProps = {
  addCategories,
  fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Have) 