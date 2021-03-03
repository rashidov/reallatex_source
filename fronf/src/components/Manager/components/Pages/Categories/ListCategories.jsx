import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCategories, fetchSubCategories, delPostCategories, delPostSubCategories } from '../../../../redux/actions/categories.actions'

import '../Pages.css'

const ListCategories = () => {
  const dispatch = useDispatch()
  const pkey = useSelector( state => state.app.pkey.pkey )
  const skey = useSelector( state => state.app.skey )
  const key = pkey + '-' + skey
  const categories = useSelector( state => state.categories.categories )
  const subcategories = useSelector( state => state.categories.subcategories )

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchSubCategories())
  }, [dispatch])

  function delCategories(id) {
    let data = { id, key }
    dispatch(delPostCategories(data))
  }

  function delSubCategories(id) {
    let data = { id, key }
    dispatch(delPostSubCategories(data))
  }

  if(categories.message === 'Categories not found.' ) {
    return (
      <div className="pages__categories--list">
      <h3>Список категорий и их подкатегорий</h3>
      категорий нет.
    </div>
    )
  }

  return (
    <div className="pages__categories--list">
      <h3>Список категорий и их подкатегорий</h3>
      количество категорий: {categories.length}, количество подкатегорий: {subcategories.length} 
      {categories.map( category => (
        <div key={category._id} className="pages__categories--list__category">
        <div className="category__info">
          категория: <span>{category.title}</span> <br/>
          тип категории: <span>{category.types}</span> <br/>
          подкатегории: {!category.isSubCategories ? (
            <span><span className="not__subcategory">(не имеет)</span></span> 
          ):(
            subcategories.map( subcategory => (
              category.types === subcategory.types ? (
                <div key={subcategory._id} className="pages__categories--list__subcategory">
                  <div className="subcategory__info">
                    подкатегория: <span>{subcategory.title}</span> <br/>
                    подтип подкатегории: <span>{subcategory.subTypes}</span>
                  </div>
                  <div className="subcategory__del">
                      <i className="material-icons" onClick={() => delSubCategories(subcategory._id)}>clear</i>
                  </div>
                </div>
              ):(
                <span></span>
              )
            ))
          )} 
          </div>
          <div className="category__del">
            <i className="material-icons" onClick={() => delCategories(category._id)}>clear</i>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCategories