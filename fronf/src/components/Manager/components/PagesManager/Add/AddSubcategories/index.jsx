import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
 
import './style.css'

const AddSubcatergories = () => {
  const user = useSelector( state => state.app.user )

  if (!user) return <Redirect to="/manager" />

  return (
    <div className="addsubcategories__block">
      Добавить подкатегорию
      скорее будет сразу формой
    </div>
  )
}

export default AddSubcatergories