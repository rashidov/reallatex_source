import React from 'react'
import { Link } from 'react-router-dom'
 
import './style.css'

const LinkUrl = ({ url, title }) => {
  return (
  <div className="link__block">
    <Link to={url}>
      {title} &nbsp;
      <i className="material-icons">feedback</i>
      </Link>
  </div>
  )
}

export default LinkUrl