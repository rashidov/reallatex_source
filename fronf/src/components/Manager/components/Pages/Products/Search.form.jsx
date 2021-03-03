import React, {Component} from 'react'
import { connect } from 'react-redux'

import { searchProducts } from '../../../../redux/actions/products.action'
import List from './Search.list'

import '../Pages.css'

class SearchProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      data: []
    }
  }

  submitSearch = e => {
    e.preventDefault()

    let str = ''

    if(this.state.title.length > 0) str = this.state.title[0].toUpperCase() + this.state.title.slice(1)

    const title = {
      title: str
    }

    this.props.searchProducts(title)

    this.setState({ title: '' })
  }

  inputChange = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <label>Поиск по названию товара:</label>
        <input
          className="inputs"
          onChange={this.inputChange}
          value={this.state.title}
          id="title"
          name="title"
        />
        <button className="buttons">Поиск</button>
        <div className="pages__products--list__products">
          товар:
          <List />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  searchProducts
}

export default connect(null, mapDispatchToProps)(SearchProduct)