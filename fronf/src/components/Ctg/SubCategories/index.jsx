import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'
import { setParams } from '../../redux/actions/actionApp'
import { fetchSubcategories, setList } from '../../redux/actions/actionCatalog'
 
import './style.css'

const SubCategories = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const subcategories = useSelector( state => state.catalog.subcategories )

  useEffect(() => {
    dispatch(setParams(match.params.types))
    dispatch(setList(match.params.types, 'subcategory'))
    dispatch(fetchSubcategories(match.params.types))
  },[dispatch, match])

  return (
    <div className="subcategories__block">
      {subcategories.map( subcategory => (
        <Link key={subcategory._id} to={`/catalog/products/${subcategory.subTypes}`}>
          <div className="subcategories__block--item">
            <div className="categories__block--item__img">
              <img src={subcategory.img} alt='subcategory' />
            </div>
            <div className="categories__block--item__title">
              {subcategory.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SubCategories