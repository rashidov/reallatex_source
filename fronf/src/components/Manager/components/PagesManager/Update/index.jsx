import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
 
import './style.css'

const Update = () => {
  const match = useRouteMatch()

  return (
    <div className="update__block">
      <Link to={`${match.url}/category`}>Редактировать категорию</Link>
      <Link to={`${match.url}/subcategory`}>Редактировать подкатегорию</Link>
      <Link to={`${match.url}/product`}>Редактировать продукт</Link>
    </div>
  )
}

export default Update