import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
 
import './style.css'

const Add = () => {
  const match = useRouteMatch()

  return (
    <div className="add__block">
      <Link to={`${match.url}/category`}>Добавить категорию</Link>
      <Link to={`${match.url}/subcategory`}>Добавить подкатегорию</Link>
      <Link to={`${match.url}/product`}>Добавить продукт</Link>
    </div>
  )
}

export default Add