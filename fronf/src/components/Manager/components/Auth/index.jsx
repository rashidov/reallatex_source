import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { fetchPKey } from '../../../redux/actions/actionApp'
import AuthForm from './Auth.form'

import './Auth.css'

const Auth = () => {
  const dispatch = useDispatch()
  const flag = useSelector( state => state.app.flag )
  const user = useSelector( state => state.app.user )
    
  useEffect(() => {
    dispatch(fetchPKey())
  },[dispatch])

  if (user) return <Redirect to="/manager/main" />

  if (flag){
    return (
      <div className="auth auth_l">
        <span className="auth__load">Ожидайте..</span>
      </div>
    )
  } else {
    return (
      <div className="auth">
        <AuthForm />
      </div>
    )
  }
}

export default Auth