import React, { useEffect } from 'react'
import { Link, NavLink, useRouteMatch } from 'react-router-dom'
 
import './style.css'

const MenuManager = () => {
  const match = useRouteMatch()

  return (
    <div className="menumanager__block">
      <NavLink to={match.url}>Главная</NavLink>
      <NavLink to={`${match.url}/add`}>Добавить категорию</NavLink>
    </div>
  )
}

export default MenuManager