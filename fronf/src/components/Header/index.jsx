import React from 'react'

import Title from './Title'
import Menu from './Menu'
import MenuLine from './MenuLine'

import './style.css'

const Header = () => {
  return (
    <header>
      <Title />
      <Menu />
      <MenuLine />
    </header>
  )
}

export default Header
