import React from 'react'
import { useLocation } from 'react-router-dom'

import Auth from './components/Auth'
import Pages from './components/Pages'
import Categories from './components/Pages/Categories/Categories'
import Products from './components/Pages/Products'

const Manager = () => {
  const location = useLocation()
  
  if (location.pathname === '/manager') {
    return (
      <div className="App">
        <Auth />
      </div>
    )
  } else {
    return (
      <div className="App">
        {location.pathname === '/manager/main' ? (
          <Categories />
        ):(
          <Products />
        )}
      </div>
    )
  }
}

export default Manager