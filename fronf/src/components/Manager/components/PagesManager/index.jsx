import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import Add from './Add'
import AddSubcatergories from './Add/AddSubcategories'
import AddCategories from './Add/AddCategories'
import AddProduct from './Add/AddProduct'

import Update from './Update'
import UpdSubcategories from './Update/UpdSubcategories'
import UpdCategories from './Update/UpdCategories'
import UpdProduct from './Update/UpdProduct'

import Delete from './Delete'
import DelSubcategories from './Delete/DelSubcategories'
import DelCategories from './Delete/DelCategories'
import DelProduct from './Delete/DelProduct'

import FoundedPage from './FoundedPage'
import MenuManager from './MenuManager'
 
import './style.css'
import IsNotHave from './Add/AddCategories/IsNotHave'
import Have from './Add/AddCategories/Have'

const MainPage = () => {
  const match = useRouteMatch()
  const user = useSelector( state => state.app.user )

  if (!user) return <Redirect to="/manager" />;

  const menu = document.getElementsByClassName('header__menu')
  const card = document.getElementsByClassName('header__title--card')
  const contacts = document.getElementsByClassName('header__title--contacts')

  if (user) {
    menu[0].style = 'display: none;'
    card[0].style = 'display: none; width: 0%;'
    contacts[0].style = 'width: 65%;'
  }

  return (
    <div className="mainpage__block">
      <div className="mainpage__block--menu">
        <MenuManager />
      </div>
      <div className="mainpage__block--content">
        <Switch>

        {/* ADD */}
          <Route path={`${match.path}/add/category/isnothave`}>
            <IsNotHave />
          </Route>
          <Route path={`${match.path}/add/category/have`}>
            <Have />
          </Route>
          <Route path={`${match.path}/add/product`}>
            <AddProduct />
          </Route>
          <Route path={`${match.path}/add/subcategory`}>
            <AddSubcatergories />
          </Route>
          <Route path={`${match.path}/add/category`}>
            <AddCategories />
          </Route>
          <Route path={`${match.path}/add`}>
            <Add />
          </Route>

        {/* UPDATE */}
          <Route path={`${match.path}/update/product`}>
            <UpdProduct />
          </Route>
          <Route path={`${match.path}/update/subcategory`}>
            <UpdSubcategories />
          </Route>
          <Route path={`${match.path}/update/category`}>
            <UpdCategories />
          </Route>
          <Route path={`${match.path}/update`}>
            <Update />
          </Route>

        {/* DELETE */}
          <Route path={`${match.path}/del/product`}>
            <DelProduct />
          </Route>
          <Route path={`${match.path}/del/subcategory`}>
            <DelSubcategories />
          </Route>
          <Route path={`${match.path}/del/category`}>
            <DelCategories />
          </Route>
          <Route path={`${match.path}/del`}>
            <Delete />
          </Route>
          <Route path={match.path}>
            <FoundedPage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default MainPage