import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import ListCategories from './ListCategories'
import ListProducts from './ListProducts'
import ListSubCategories from './ListSubCategories'

import './style.css'

const List = () => {
  const match = useRouteMatch()
  const location = useLocation()
  const data = useSelector( state => state.catalog.list )
  const categories = useSelector( state => state.app.categories )
  

  useEffect(() => {

  },[location, data])

  if (location.pathname.split('/')[2] === undefined) return <ListCategories categories={categories} />

  if (location.pathname.split('/')[2] === 'subcategories') return <ListSubCategories categories={categories} />

  if (location.pathname.split('/')[2] === 'products') return <ListProducts categories={categories} />

  return (
    <div className="list__block">
      <ul>
        {categories.map( category => (
          category.isSubCategories ? (
            <li><NavLink key={category._id} to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink></li>
          ):(
            <li><NavLink key={category._id} to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink></li>
          )
        ))}
      </ul>
    </div>
  )
}

export default List 