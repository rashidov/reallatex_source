import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDescription } from '../../redux/actions/actionApp'

import './Description.css'

const Description = () => {
  const dispatch = useDispatch()
  const description = useSelector( state => state.app.description )

  useEffect(() => {
    dispatch(fetchDescription())
  }, [dispatch])

  if(description.length !== 0){
    return(
      <div className="row">
        <div className="col-12 content">
        <h5>Наша компания</h5>
        {description.map( item => (
          <p key={item._id}>{item.data}</p>
        ))}
        </div>
      </div>
    )
  }else{
    return(
      <div className="row">
        <div className="col-12 content">
          <h5>Наша компания</h5>
          <h3>Этот раздел еще разрабатывается...</h3>
        </div>
      </div>
    )
  }
}

export default Description