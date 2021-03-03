import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../../../../../redux/actions/categories.actions'
 
import './style.css'

const ListCategories = () => {
  const dispatch = useDispatch()
  const categories = useSelector( state => state.categories.categories )

  useEffect(() => {
    dispatch(fetchCategories())
    console.log(categories)
  },[])

  if(categories.message === 'Categories not found.' ) {
    return (
      <div className="listcategories__block">
      <h3>категорий нет.</h3>
    </div>
    )
  }

  return (
    <div className="listcategories__block">
      <ul>
        {categories.length > 0 ? (
          categories.map( category => (
            <li key={category._id}>
              <ul>
                <li>Название категории: {category.title},</li>
                <li>тип категории: {category.types},</li>
                <li>Имеет подкатегории ? {category.isSubCategories ? ( <>имеет</> ):( <>не имеет</>)}</li>
              </ul>
            </li>
          ))
        ):(
          <li><strong>категории отсутствуют или нет соеденения с бд!</strong></li>
        )}
      </ul>
    </div>
  )
}

export default ListCategories