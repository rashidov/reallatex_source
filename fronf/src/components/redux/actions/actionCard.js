import addLocalStorage from "../../localStorage"

import { 
  CARD_COUNTER_DECREMENT,
  CARD_COUNTER_INCREMENT,
  CARD_DECREMENT_COUNT,
  CARD_INCREMENT_COUNT,
  CARD_INIT_PRICE,
  CARD_INIT_PRODUCTS, 
  CARD_PRICE_ADD, 
  CARD_PRICE_DECREMENT,
  CARD_PRICE_INCREMENT,  
  CARD_PRODUCT_ADD, 
  CARD_PRODUCT_DEL
} from "../types"

export function appLocalProductsInit() {
  return dispatch => {
    const products = JSON.parse(localStorage.getItem('product'))
    if(products){
      let i = 0
      let sumPrice = 0
      while(i < products.length){
        dispatch({ type: CARD_COUNTER_INCREMENT })
        if(products[i].count > 1){
          sumPrice = products[i].price * products[i].count + sumPrice
        }else{
          sumPrice = products[i].price + sumPrice
        }
        i++
      }
      dispatch({ type: CARD_INIT_PRICE, payload: sumPrice })
      dispatch({ type: CARD_INIT_PRODUCTS, payload: products })
    }
  }
}

export function incrementCardCounter() {
  return {
    type: CARD_COUNTER_INCREMENT
  }
}

export function decrementCardCounter() {
  return {
    type: CARD_COUNTER_DECREMENT
  }
}

export function addProductCard(product) {
  return async dispatch => {
    dispatch({ type: CARD_COUNTER_INCREMENT })
    let array = [{
      id: product._id,
      title: product.title,
      price: product.price,
      img: product.img,
      count: 1
    }]
    dispatch({ type: CARD_PRICE_ADD, payload: product.price })
    await addLocalStorage(array, 'product')
    dispatch({ type: CARD_PRODUCT_ADD, payload: array })
  }
}

export function delProductCard(id) {
  return async dispatch => {
    const localArray = await JSON.parse(localStorage.getItem('product')) 
    const falseArray = []
    if(localArray.length === 1){
      dispatch({ type: CARD_COUNTER_DECREMENT })
      dispatch({ type: CARD_INIT_PRICE, payload: 0})
      localStorage.removeItem('product')
      dispatch({ type: CARD_PRODUCT_DEL, payload: falseArray })
    }else{
      for(let i = 0; i < localArray.length; i++){
        if(localArray[i].id === id){
          dispatch({ type: CARD_COUNTER_DECREMENT })
          await dispatch({ type: CARD_PRICE_DECREMENT, payload: localArray[i].count * localArray[i].price })
          localArray.splice(i, 1)
          await localStorage.removeItem('product')
          await localStorage.setItem('product', JSON.stringify(localArray))
          let state = await JSON.parse(localStorage.getItem('product'))
          dispatch({ type: CARD_PRODUCT_DEL, payload: state })
        }
      }
    }
  }
}

export function incrementCountLocalStore(id) {
  return async dispatch => {
    const products = await JSON.parse(localStorage.getItem('product'))
    for(let i = 0; i < products.length; i++){
      if(products[i].id === id){
        products[i].count ++
        dispatch({ type: CARD_PRICE_INCREMENT, payload: products[i].price })
        await localStorage.removeItem('product')
        await localStorage.setItem('product', JSON.stringify(products))
        dispatch({ type: CARD_INCREMENT_COUNT, payload: id })
      }
    }
  }
}

export function decrementCountLocalStore(id) {
  return async dispatch => {
    const productsArray = await JSON.parse(localStorage.getItem('product'))
    for(let i = 0; i < productsArray.length; i++){
      if(productsArray[i].id === id){
        if(productsArray[i].count !== 1){
          productsArray[i].count --
          dispatch({ type: CARD_PRICE_DECREMENT, payload: productsArray[i].price })
          await localStorage.removeItem('product')
          await localStorage.setItem('product', JSON.stringify(productsArray))
          dispatch({ type: CARD_DECREMENT_COUNT, payload: id })
        }else {
          return
        }
      }
    }
  }
}