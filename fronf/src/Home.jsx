import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div className="cl">
      <h3>REACT APPS HOME</h3>
      <Link to="/menu">Menu</Link>
    </div>
  )
}

export default Home