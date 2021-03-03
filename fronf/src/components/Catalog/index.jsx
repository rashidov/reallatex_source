import React from 'react'
import { useSelector } from 'react-redux'

import CategoryLists from './CategoryLists'

import './Catalog.css'

const Catalog = () => {
  const categories = useSelector(state => state.app.categories)

  return (
    <div className="container__catalog">
        <CategoryLists categories={categories} />
    </div>
  )
}

export default Catalog