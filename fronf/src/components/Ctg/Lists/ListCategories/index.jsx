import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

const ListCategories = ({ categories }) => {
  const match = useRouteMatch()

  return (
    <div className="list__block">
      <ul>
        {categories.map( category => (
          category.isSubCategories ? (
            <li>
              <NavLink key={category._id} to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
            </li>
          ):(
            <li>
              <NavLink key={category._id} to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
            </li>
          )
        ))}
      </ul>
    </div>
  )
}

export default ListCategories