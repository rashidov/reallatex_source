import { 
  reqUrlCategories, 
  reqUrlProduct, 
  reqUrlProductId, 
  reqUrlSubCategories 
} from "../../../requests/requestsURL"

import { 
  APP_INIT, 
  CATALOG_INIT, 
  CATALOG_LIST, 
  CATALOG_LIST_PRODUCTS, 
  CATALOG_LIST_SUBCATEGORIES, 
  CATALOG_PRDOUCT, 
  CATALOG_PRODUCTS,
  CATALOG_SUBCATEGORIES
} from "../types"

import SendRequest from "../../../requests/SendRequest"

export function setList(data, flag) {
  let obj = {
    flag: flag,
    key: data
  }

  return { type: CATALOG_LIST, payload: obj }
}

export function fetchCategories() {
  return async dispatch => {
    const response = await SendRequest(reqUrlCategories)
    dispatch({ type: APP_INIT, payload: response })
  }
}

export function fetchSubcategories(types) {
  return async dispatch => {
    const response = await SendRequest(reqUrlSubCategories + `${types}`)
    dispatch({ type: CATALOG_SUBCATEGORIES, payload: response })
  }
}

export function fetchProducts(types) {
  return async dispatch => {
    dispatch({ type: CATALOG_INIT })
    const response = await SendRequest(reqUrlProduct + `${types}`)
    dispatch({ type: CATALOG_PRODUCTS, payload: response })
  }
}

export function fetchProduct(id) {
  return async dispatch => {
    /* dispatch({ type: CATALOG_INIT }) проверить выполнение */ 
    const response = await SendRequest(reqUrlProductId + `${id}`)
    dispatch({ type: CATALOG_PRDOUCT, payload: response })
  }
}

export function fetchListSubcategories(types) {
  return async dispatch => {
    const response = await SendRequest(reqUrlSubCategories + `${types}`)
    dispatch({ type: CATALOG_LIST_SUBCATEGORIES, payload: response })
  }
}

export function fetchListProducts(types) {
  return async dispatch => {
    const response = await SendRequest(reqUrlProduct + `${types}`)
    dispatch({ type: CATALOG_LIST_PRODUCTS, payload: response })
  }
}