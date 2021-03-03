import { 
  reqUrlPostEditProduct, 
  reqUrlPostProduct, 
  reqUrlPostSearchProduct 
} from "../../../requests/requestsURL"

import { 
  PRODUCT_ADD, 
  PRODUCT_DEL, 
  PRODUCT_SEARCH,
  PRODUCT_GET_EDIT,
  APP_LOAD,
  PRODUCT_ARR
} from "../types"

import SendRequestPOST from "../../../requests/SendRequestPOST"
import SendRequest from "../../../requests/SendRequest"

export function addProduct(data) {
  return async dispatch => {
    const response = await SendRequestPOST(reqUrlPostProduct, data)
    if (response.message === 'Product created.') {
      dispatch({ type: PRODUCT_ADD, payload: data })
    }
  }
}

export function delProduct(data) {
  return async dispatch => {
    const response = await SendRequestPOST()
    if (response.message === 'Product deleted.') {
      dispatch({ type: PRODUCT_DEL, payload: data })
    }
  }
}

export function searchProducts(data) {
  return async dispatch => {
    const response = await SendRequestPOST(reqUrlPostSearchProduct, data)
    /* console.log( response ) */
    dispatch({ type: PRODUCT_SEARCH, payload: response })
  }
}

export function getProduct(data) {
  return async dispatch => {
    dispatch({ type: APP_LOAD })
    const response = await SendRequest(`${reqUrlPostEditProduct}${data}`)
    const arr = response.arrayImg
    dispatch({ type: PRODUCT_ARR, payload: arr })
    dispatch({ type: PRODUCT_GET_EDIT, payload: response })
    dispatch({ type: APP_LOAD })
  }
}