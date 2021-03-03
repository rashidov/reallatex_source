import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonCatalog() {
  return (
    <Link to="/catalog">
      <div className="content__main--Button">
        <i className="material-icons">widgets</i>
        <span>Каталог</span>
      </div>
    </Link>
  )
}
