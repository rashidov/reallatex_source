import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Orders from './Orders/Orders'
import Categories from './Categories/Categories'
import Products from './Products'
import EditProduct from './Products/Edit'

import './Pages.css'

const Pages = () => {
  const isUser = useSelector( state => state.app.user )

  useEffect(() => {
    console.log('вошел')
  },[])

  if (!isUser) return <Redirect to="/" />

  return (
    <section className="pages">
      <Switch>
        <Route exact path="/manager/orders">
          <Orders />
        </Route>
        <Route exact path="/manager/categories">
          <Categories />
        </Route>
        <Route exact path="/manager/products">
          <Products />
        </Route>
        <Route exact path="/manager/products/editproduct/:id">
          <EditProduct />
        </Route>
      </Switch>
    </section>
  )
}

export default Pages