import React from 'react'

import './Card.css'

const Ordering = () => {
  function redirect() {
    window.location.href = '/'
    localStorage.removeItem('completed')
  }

  function delFlag() {
    localStorage.removeItem('completed')
  }

  function autoRedirect() {
    setTimeout(delFlag, 10000)
  }

  if (JSON.parse(localStorage.getItem('completed')) === true) {
    autoRedirect()
    return (
      <div className="ordering">
        <h4>Поздравляем с покупкой!</h4>
        <h4>В ближайшее время с вами свяжется наш менеджер.</h4>
        <h5>На вашу почту отпралено письмо с вашим заказом!</h5>
        <button className="ordering_button" onClick={redirect}>Вернуться на главную</button>
      </div>
    )
  } else {
    redirect()
  }
}

export default Ordering