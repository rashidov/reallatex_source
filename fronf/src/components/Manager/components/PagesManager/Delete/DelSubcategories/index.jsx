import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SearchList from '../../SearchList'
 
import './style.css'

const DelSubcategories = () => {
  const user = useSelector( state => state.app.user )

  if (!user) return <Redirect to="/manager" />

  return (
    <div className="delsubcategories__block">
      <SearchList />
      Удалить подкатегорию
    </div>
  )
}

export default DelSubcategories