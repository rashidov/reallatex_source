import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
 
import './style.css'

const Delete = () => {
  const match = useRouteMatch()

  return (
    <div className="delete__block">
      <Link to={`${match.url}/category`}>Удалить категорию</Link>
      <Link to={`${match.url}/subcategory`}>Удалить подкатегорию</Link>
      <Link to={`${match.url}/product`}>Удалить продукт</Link>
    </div>
  )
}

export default Delete