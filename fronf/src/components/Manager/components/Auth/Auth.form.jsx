import React, { Component } from 'react'
import {connect} from 'react-redux'

import { fetchSKey, error } from '../../../redux/actions/actionApp'

import './Auth.css'

class AuthForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      pwd: ''
    }
  }

  formSubmit = e => {
    e.preventDefault()
    const user = {
      pkey: this.props.pkey.pkey,
      login: this.state.login,
      pwd: this.state.pwd
    }

    this.props.fetchSKey(user)
  }

  inputChange = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  render() {
    if (this.props.errA) return <span className="err">Вы ввели не верный логин/пароль</span>

    return (
      <form onSubmit={this.formSubmit}>
        <input 
          placeholder="login"
          className="login" 
          onChange={this.inputChange}
          value={this.state.login}
          id="login"
          name="login"
        /><br/>
        <input
         placeholder="password"
         className="pwd" 
         onChange={this.inputChange}
         value={this.state.pwd}
         id="pwd"
         name="pwd"
        />
        <button>Войти</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    pkey: state.app.pkey,
    errA: state.app.errA
  }
}

const mapDispatchToProps = {
  fetchSKey,
  error
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)