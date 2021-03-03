import { 
  reqGPKey,
  reqGSKey,
  reqUrlContacts, 
  reqUrlDelivery, 
  reqUrlDescription, 
  reqUrlPayment,
  reqUrlToOrder
 } from "../../../requests/requestsURL"

import {
  APP_AUTH_U,
  APP_CHECK,
  APP_ERR,
  APP_FLAG,
  APP_INIT_S,
  APP_LOAD,
  APP_PARAMS,
   CONTACTS, 
   DELIVERY, 
   DESCRIPTION, 
   PAYMENT, 
   TOORDER 
} from "../types"

import SendRequest from "../../../requests/SendRequest"
import SendRequestPOST from "../../../requests/SendRequestPOST"

export function setParams (data){
  return { type: APP_PARAMS, payload: data}
}

export function fetchDelivery (){
  return async dispatch => {
    const responseDelivery = await SendRequest(reqUrlDelivery)
    dispatch({ type: DELIVERY , payload: responseDelivery })
  }
}

export function fetchPayment (){
  return async dispatch => {
    const responsePayment = await SendRequest(reqUrlPayment)
    dispatch({ type: PAYMENT, payload: responsePayment })
  }
}

export function fetchContacts (){
  return async dispatch => {
    const responseContacts = await SendRequest(reqUrlContacts)
    dispatch({ type: CONTACTS, payload: responseContacts })
  }
}

export function fetchToOrder (){
  return async dispatch => {
    const responseToOrder = await SendRequest(reqUrlToOrder)
    dispatch({ type: TOORDER, payload: responseToOrder })
  }
}

export function fetchDescription (){
  return async dispatch => {
    const responseDescription = await SendRequest(reqUrlDescription)
    dispatch({ type: DESCRIPTION, payload: responseDescription })
  }
}

export function error() {
  return { type: APP_ERR }
}

export function load() {
  return { type: APP_LOAD }
}

export function fetchPKey() {
  return async dispatch => {
    const response = await SendRequestPOST(reqGPKey, { key: 'latexreal12' })
    dispatch({ type: APP_INIT_S, payload: response })
  }
}

export function fetchSKey(user) {
  return async dispatch => {
    dispatch({ type: APP_FLAG })
    const response = await SendRequestPOST(reqGSKey, user)
    if(response.message === 'User not found.') {
      dispatch({ type: APP_FLAG })
      dispatch({ type: APP_ERR })
    } else {
      dispatch({ type: APP_CHECK, payload: response })
      dispatch({ type: APP_FLAG })
      dispatch({ type: APP_AUTH_U })
    }
  }
}