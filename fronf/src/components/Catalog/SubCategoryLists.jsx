import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { fetchSubcategories } from '../redux/actions/actionCatalog'

import './Catalog.css'

const SubCategoryLists = ({ categories }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const subcategories = useSelector( state => state.catalog.subcategories )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchSubcategories(location.pathname.slice(-1)))
  }, [dispatch, location.pathname])

  return (
    <div className="wrapper">
      <div className="wrapper__leftList">
        <ul className="wrapper__leftList--mainLinks">
          {categories.map( category => (
            location.pathname.slice(-1) === category.types.toString() ? (
              <Link to={`/catalog/subcategories/${category.types}`} key={category._id} >
                <li>{category.title}</li>
                <ul className="wrapper__leftList--subLinks">
                  {subcategories.map( subcategory => (
                    <Link to={`/catalog/products/${subcategory.subTypes}`} key={subcategory._id} >
                      <li>{subcategory.title}</li>
                    </Link>
                  ))}
                </ul>
              </Link> 
            ):(
              <Link to={`/catalog/products/${category.types}`} key={category._id} >
                <li>{category.title}</li>
              </Link>
            )
          ))}
        </ul>
      </div>
      <div className="wrapper__rightList">
        <div className="row">
          {subcategories.map( subcategory => (
            <div className="col-3 item" key={subcategory._id}>
              <div className="wrapper__item">
                <Link to={`/catalog/products/${subcategory.subTypes}`}>
                  <img src={subcategory.img} alt="img" /> <br/>
                  <span>{subcategory.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubCategoryLists