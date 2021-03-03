import React, { useEffect } from 'react'
import { Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'

import List from './Lists'
import Categories from './Categories'
import SubCategories from './SubCategories'
import Products from './Products'
/* import CardProduct from './CardProduct' */
import CardProducts from '../Catalog/CardProducts.jsx'
 
import './style.css'

const Catalog = () => {
  const match = useRouteMatch();
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[location])

  return (
    <div className="catalog__block">
      <div className="catalog__block--left">
        <List />
      </div>
      <div className="catalog__block--right">
        <Switch>
          <Route path={`${match.path}/subcategories/:types`}>
            <SubCategories />
          </Route>
          <Route path={`${match.path}/products/:subtypes`}>
            <Products />
          </Route>
          <Route path={`${match.path}/product/:id`}>
            <CardProducts />
          </Route>
          <Route path={match.path}>
            <Categories />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Catalog