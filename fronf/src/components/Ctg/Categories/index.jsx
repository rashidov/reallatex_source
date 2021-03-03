import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { setList } from '../../redux/actions/actionCatalog'
 
import './style.css'

const Categories = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const categories = useSelector( state => state.app.categories )

  useEffect(() => {
    dispatch(setList( null, 'category'))
  },[dispatch])

  return (
    <div className="categories__block">
      {categories.map( category => (
        <>
          {category.isSubCategories ? (
            <Link key={category._id} to={`${match.path}/subcategories/${category.types}`} >
              <div className="categories__block--item">
                <div className="categories__block--item__img">
                  <img src={category.img} alt='category' />
                </div>
                <div className="categories__block--item__title">
                  {category.subTitle}
                </div>
              </div>
            </Link>
          ):(
            <Link key={category._id} to={`${match.path}/products/${category.types}`} >
              <div className="categories__block--item">
                <div className="categories__block--item__img">
                  <img src={category.img} alt='category' />
                </div>
                <div className="categories__block--item--title">
                  {category.subTitle}
                </div>
              </div>
            </Link>
          )}
        </>
      ))}
    </div>
  )
}

export default Categories