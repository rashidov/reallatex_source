import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import { fetchListSubcategories } from '../../../redux/actions/actionCatalog'

const ListSubCategories = ({ categories }) => {
  const match = useRouteMatch()
  const location = useLocation()
  const dispatch = useDispatch()
  const subcategories = useSelector( state => state.catalog.listSubCategories )

  useEffect(() => {
    dispatch(fetchListSubcategories(location.pathname.split('/')[3]))
  },[dispatch, location])

  return (
    <div className="list__block">
      <ul>
        {subcategories.length > 0 ? (
          categories.map( category => (
            category.isSubCategories ? (
              category.types === subcategories[0].types ? (
                <li key={category._id}>
                  <NavLink to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
                  <ul>
                    {subcategories.map( subcategory => (
                      <li key={subcategory._id}>
                        <NavLink to={`${match.url}/products/${subcategory.subTypes}`} activeClassName="activeLists" >{subcategory.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ):(
                <li key={category._id}>
                  <NavLink to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
                </li>
              )
            ):(
              <li key={category._id}>
                <NavLink to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
              </li>
            )
          ))
        ):(
          categories.map( category => (
            category.isSubCategories ? (
              <li key={category._id}>
                <NavLink to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
              </li>
            ):(
              <li key={category._id}>
                <NavLink to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
              </li>
            )
          ))
        )}
      </ul>
    </div>
  )
}

export default ListSubCategories