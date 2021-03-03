import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { reqUrlMail } from '../../requests/requestsURL'
import SendRequestPOST from '../../requests/SendRequestPOST'

import './Card.css'

class FormOrder extends Component {
  constructor(props){
    super(props)
    this.state = {
      check: false,
      name: '',
      email: '',
      phone: '',
      region: '',
      city: '',
      address: '',
      comments: ''
    }
  }

  visibleComments = () => {
    this.setState({ check: !this.state.check  })
  }

  redirect = () => {
    return <Redirect to="/catalog" />
  }

  changeInput = e => {
    e.persist()
    this.setState(prev => ({...prev, ...{
      [e.target.name]: e.target.value
    }}))
  }

  submitFormOredr = e =>{
    e.preventDefault();

    let array = JSON.parse(localStorage.getItem('product'))

    const formData = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      phone: this.state.phone.trim(),
      region: this.state.region.trim(),
      city: this.state.city.trim(),
      address: this.state.address.trim(),
      comments: this.state.comments.trim(),
      array: array
    }

    if(formData.name.length < 3) return alert('Заполните поле: ФИО')
    if(formData.email.length < 4) return alert('Заполните поле: E-mail')
    if(formData.phone.length < 10) return alert('Заполните поле: Номер телефона должен быть 11 цифр')
    if(formData.region.length < 5) return alert('Заполните поле: Регион')
    if(formData.city.length < 3) return alert('Заполните поле: Город')
    if(formData.address.length < 5) return alert('Заполните поле: Улица, дом, кваритра')

    SendRequestPOST(reqUrlMail, formData).catch(err => console.log(err))
    localStorage.removeItem('product') 
    localStorage.setItem('completed', 'true')
    window.location.href = '/ordering'
  }

  render() {
    return(
      <div className="row formOrder">
        <h5>Дополнительные данные:</h5>
        <div className="col-12">
          <form onSubmit={this.submitFormOredr}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Ваше Ф.И.О:</label>
              <input name="name" id="name" value={this.state.name} onChange={this.changeInput} className="form-control" placeholder="Иванов Иван Иванович" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email:</label>
              <input type="email" name="email" id="email" value={this.state.email} onChange={this.changeInput} className="form-control" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Номер телефона:</label>
              <input type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.changeInput} className="form-control" placeholder="8(900)000-00-00" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Регион:</label>
              <input name="region" id="region" value={this.state.region} onChange={this.changeInput} className="form-control" placeholder="Московская область" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Город:</label>
              <input name="city" id="city" value={this.state.city} onChange={this.changeInput} className="form-control" placeholder="Москва" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Улица, дом, квартира:</label>
              <input name="address" id="address" value={this.state.address} onChange={this.changeInput} className="form-control" placeholder="Ленина д1 кв3" />
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => { this.visibleComments() }} />
              <label className="form-check-label formOrder__check" for="flexCheckDefault">
                хочу добавить коментарий к заказу
              </label>
            </div>
            {this.state.check ? (
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Комментарий:</label>
                  <input className="form-control" name="comments" id="comments" value={this.state.comments} onChange={this.changeInput} placeholder="ваш коментарий" />
              </div>
            ):(
              <span></span>
            )}
            <button className="formOrder__button">Отправить</button>
          </form>
        </div>
      </div>
    )
  }
}

export default FormOrder