import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SearchList from '../../SearchList'
 
import './style.css'

const DelProduct = () => {
  const user = useSelector( state => state.app.user )

  if (!user) return <Redirect to="/manager" />
  
  return (
    <div className="delproduct__block">
      <SearchList />
      удалить продукт
    </div>
  )
}

export default DelProduct