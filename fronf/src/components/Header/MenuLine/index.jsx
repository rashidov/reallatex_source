import React from 'react'
import { Link, useLocation } from 'react-router-dom'
 
import './style.css'

const MenuLine = () => {
  const location = useLocation()

  if(location.pathname === '/menu') {
    return (
      <span></span>
    )
  } else {
    return (
      <div className="header__menuline">
        <Link to="/menu"><i className="material-icons">menu</i></Link>
      </div>
    )
  }
}

export default MenuLine