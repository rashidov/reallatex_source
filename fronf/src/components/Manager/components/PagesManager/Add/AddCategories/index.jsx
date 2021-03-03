import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect, useRouteMatch } from 'react-router-dom'
import Have from './Have'
import IsNotHave from './IsNotHave'
 
import './style.css'

const AddCategories = () => {
  const match = useRouteMatch()
  const user = useSelector( state => state.app.user )


  if (!user) return <Redirect to="/manager" />

  return (
    <div className="addcategories__block">
      <div className="addcategories__block--title">
        Выберите тип категории:
      </div>
      <div className="addcategories__block--btn">
        <div className="addcategories__block--btn__have">
          <Link to={`${match.url}/have`} >Будет иметь подкатегорию</Link>
        </div>
        <div className="addcategories__block--btn__isnothave">
          <Link to={`${match.url}/isnothave`} >Не имеет подкатегорию</Link>
        </div>
      </div>
    </div>
  )
}

export default AddCategories