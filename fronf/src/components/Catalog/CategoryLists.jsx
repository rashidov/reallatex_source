import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Catalog.css'

const CategoryLists = ({ categories }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="wrapper">
      <div className="wrapper__leftList">
        <ul className="wrapper__mainLinks">
          {categories.map( category => (
            category.isSubCategories ? (
              <Link to={`/catalog/subcategories/${category.types}`} key={category._id} >
                <li>{category.title}</li>
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
          {categories.map( category => (
            category.isSubCategories ? (
              <div className="col-3 item" key={category._id}>
                <div className="wrapper__item">
                  <Link to={`/catalog/subcategories/${category.types}`}>
                    <img alt="img" src={category.img} /> <br/>
                    <span>{category.subTitle}</span> 
                  </Link>
                </div>
              </div>
            ):(
              <div className="col-3 item" key={category._id}>
                <div className="wrapper__item">
                  <Link to={`/catalog/products/${category.types}`}>
                    <img alt="img" src={category.img} /> <br/>
                    <span>{category.subTitle}</span> 
                  </Link>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryLists