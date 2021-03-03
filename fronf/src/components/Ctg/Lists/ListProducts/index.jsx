import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'
import { fetchListProducts, fetchListSubcategories } from '../../../redux/actions/actionCatalog'

const ListProducts = ({ categories }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const products = useSelector( state => state.catalog.listProducts )

  useEffect(() => {
    dispatch(fetchListProducts(location.pathname.split('/')[3]))
  },[dispatch, location])

  return (
    <div className="list__block">
      <ul>
        {products.length > 0 ? (
          <Distributor products={products} categories={categories} />
        ):(
          <></>
        )}
      </ul>
    </div>
  )
}

function Distributor({ products, categories }) {
  const [isSubCategories, setSubCategoriesFlag] = useState(false)
  const dispatch = useDispatch()
  const subcategories = useSelector( state => state.catalog.listSubCategories )

  useEffect(() => {
    for(let i = 0; i < categories.length; i++) {
      if(categories[i].types === products[0].types) {
        if (categories[i].isSubCategories) {
          dispatch(fetchListSubcategories(categories[i].types))
          return setSubCategoriesFlag(true)
        }
        return setSubCategoriesFlag(false)
      }
    }
  },[dispatch, products, categories])

  return (
    <>
      {isSubCategories ? (
        <ListProductWithSubcategory products={products} categories={categories} subcategories={subcategories} />
      ):(
        <ListProduct products={products} categories={categories}/>
      )}
    </>
  )
}

function ListProductWithSubcategory({ products, categories, subcategories }) {
  const match = useRouteMatch()

  useEffect(() => {

  },[subcategories])

  return (
    <>
      {subcategories.length > 0 ? (
        categories.map( category => (
          category.isSubCategories ? (
            <li>
              <NavLink to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
              {category.types === subcategories[0].types ? (
                <ul key={category._id}>
                  {subcategories.map( subcategory => (
                    subcategory.subTypes === products[0].subTypes ? (
                      <li key={subcategory._id}>
                        <NavLink to={`${match.url}/products/${subcategory.subTypes}`} activeClassName="activeLists" >{subcategory.title}</NavLink>
                        <ul>
                          {products.map( product => (
                            <li key={product._id}><NavLink to={`${match.url}/product/${product._id}`} activeClassName="activeLists" >{product.title}</NavLink></li>
                          ))}
                        </ul>
                      </li>
                    ):(
                      <li key={subcategory._id}><NavLink to={`${match.url}/products/${subcategory.subTypes}`} activeClassName="activeLists" >{subcategory.title}</NavLink></li>
                    )
                  ))}
                </ul>
              ):(
                <></>
              )}
            </li>
          ):(
            <li key={category._id}><NavLink to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink></li>
          )
        ))
      ):(
        <></>
      )}
    </>
  )
}

function ListProduct({ products, categories }) {
  const match = useRouteMatch()

  return (  
    <>
      {categories.map( category => (
        category.isSubCategories ? (
          <li key={category._id}><NavLink to={`${match.url}/subcategories/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink></li>
        ):(
          category.types === products[0].types ? (
            <li key={category._id}>
              <NavLink to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink>
              <ul>
                {products.map( product => (
                  <li key={product._id}><NavLink to={`${match.url}/product/${product._id}`} activeClassName="activeLists" >{product.title}</NavLink></li>
                ))}
              </ul>
            </li>
          ):(
            <li key={category._id}><NavLink to={`${match.url}/products/${category.types}`} activeClassName="activeLists" >{category.title}</NavLink></li>
          )
        )
      ))}
    </>
  )
}

export default ListProducts