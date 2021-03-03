import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SearchList from '../../SearchList'
 
import './style.css'

const DelCategories = () => {
  const user = useSelector( state => state.app.user )

  if (!user) return <Redirect to="/manager" />

  return (
    <div className="delcategories__block">
      <SearchList />
      Удалить категорию
    </div>
  )
}

export default DelCategories