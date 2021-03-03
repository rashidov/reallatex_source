import React, { useEffect } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, /* useSelector */ } from 'react-redux'

import { fetchCategories } from './components/redux/actions/actionCatalog'
import { appLocalProductsInit } from './components/redux/actions/actionCard'

import Header from './components/Header'
import Menu from './components/Menu'
import Pages from './components/Pages'
import Cards from './components/Card'
import Delivery from './components/Pages/Delivery'
import Payment from './components/Pages/Payment'
import Contacts from './components/Pages/Contacts'
import HowToOrder from './components/Pages/HowToOrder';
import Certificates from './components/Pages/Certificates'
import Description from './components/Pages/Description'
import Catalog from './components/Ctg'
/* import SubCategoryLists from './components/Catalog/SubCategoryLists' */
/* import ProductLists from './components/Catalog/ProductLists' */
/* import CardProducts from './components/Catalog/CardProducts.jsx' */
import Manager from './components/Manager';
import MainPage from './components/Manager/components/PagesManager';
import PhotoAndVidio from './components/Pages/PhotoAndVidio';
import Ordering from './components/Card/Ordering';
import WhatIsLatex from './components/Pages/WhatIsLatex';
import BenefitsLatex from './components/Pages/BenefitsLatex';
import CountryOfOrigin from './components/Pages/CountryOfOrigin';
import Difference from './components/Pages/Difference';
import Smell from './components/Pages/Smell';
import ReturnProduct from './components/Pages/ReturnProduct';
import ChoosePillow from './components/Pages/СhoosePillow';
import ChooseMattress from './components/Pages/ChooseMattress';
import MattressThickness from './components/Pages/MattressThickness';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(appLocalProductsInit())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/ordering">
          <Ordering />
        </Route>
        <Route exact path="/menu" >
          <Menu />
        </Route>
        <Route exact path="/" >
          <Pages />
        </Route>
        <Route exact path="/card" >
          <Cards />
        </Route>
        <Route exact path="/delivery" >
          <Delivery />
        </Route >
        <Route exact path="/payment" >
          <Payment />
        </Route >
        <Route exact path="/contacts" >
          <Contacts />
        </Route >
        <Route exact path="/howtoorder" >
          <HowToOrder />
        </Route >
        <Route exact path="/whatislatex" >
          <WhatIsLatex />
        </Route>
        <Route exact path="/benefitslatex" >
          <BenefitsLatex />
        </Route>
        <Route exact path="/countryoforigin" >
          <CountryOfOrigin />
        </Route>
        <Route exact path="/description" >
          <Description />
        </Route >
        <Route exact path="/difference" >
          <Difference />
        </Route >
        <Route exact path="/returnproduct" >
          <ReturnProduct />
        </Route >
        <Route exact path="/mattressthickness" >
          <MattressThickness />
        </Route >
        <Route exact path="/choosepillow" >
          <ChoosePillow />
        </Route >
        <Route exact path="/smell" >
          <Smell />
        </Route >
        <Route exact path="/choosemattress" >
          <ChooseMattress />
        </Route >
        <Route path="/catalog" >
          <Catalog />
        </Route>
{/*         <Route exact path="/product:id">
          <CardProduct />
        </Route> */}
{/*           <Catalog />
        </Route>
        <Route exact path="/catalog/subcategories/:type" >
          <SubCategoryLists categories={categories} />
        </Route>
        <Route exact path="/catalog/products/:type">
          <ProductLists categories={categories} />
        </Route>
        <Route exact path="/catalog/product/:id" >
          <CardProducts categories={categories} exact/>
        </Route> */}
        <Route exact path="/documents">
          <Certificates />
        </Route>
        <Route exact path="/manager">
          <Manager />
        </Route>
        <Route path="/manager/main">
          <MainPage />
        </Route>
        <Route exact path="/gallery" >
          <PhotoAndVidio />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;