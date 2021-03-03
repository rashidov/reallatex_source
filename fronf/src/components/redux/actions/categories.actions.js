import {
  reqUrlGetCategories,
  reqUrlGetSubcategories,
  reqUrlPostCategories,
  reqUrlPostSubcategories,
  reqUrlPostDelCategories,
  reqUrlPostDelSubcategories
} from '../../../requests/requestsURL'

import {
  CATEGORIES_DEL_CATEGORIES,
  CATEGORIES_DEL_SUBCATEGORIES,
  CATEGORIES_GET_CATEGORIES,
  CATEGORIES_GET_SUBCATEGORIES,
  CATEGORIES_UPD_CATEGORIES,
  CATEGORIES_UPD_SUBCATEGORIES
} from '../types'

import SendRequestPOST from "../../../requests/SendRequestPOST"
import SendRequest from "../../../requests/SendRequest"

export function fetchCategories() {
  return async dispatch => {
    const response = await SendRequest(reqUrlGetCategories)
    dispatch({ type: CATEGORIES_GET_CATEGORIES, payload: response })
  }
}

export function fetchSubCategories() {
  return async dispatch => {
    const response = await SendRequest(reqUrlGetSubcategories)
    dispatch({ type: CATEGORIES_GET_SUBCATEGORIES, payload: response })
  }
}

export function addCategories(data) {
  return async dispatch => {
    const response = await SendRequestPOST(reqUrlPostCategories, data)
    if (response.message === 'Category created.') return dispatch({ type: CATEGORIES_UPD_CATEGORIES, payload: data })
  }
}

export function addSubCategories(data) {
  return async dispatch => {
    const response = await SendRequestPOST(reqUrlPostSubcategories, data)
    if (response.message === 'SubCategory created.') return dispatch({ type: CATEGORIES_UPD_SUBCATEGORIES, payload: data })
  }
}

export function delPostCategories(data) {
  return async dispatch => {
    const response = await SendRequestPOST(reqUrlPostDelCategories, data)
    if (response.message === 'Categories deleted.') return dispatch({ type: CATEGORIES_DEL_CATEGORIES, payload: data.id })
  }
}

export function delPostSubCategories(data) {
  return async dispatch => {
    const response = await SendRequestPOST(reqUrlPostDelSubcategories, data)
    if (response.message === 'SubCategory deleted.') return dispatch({ type: CATEGORIES_DEL_SUBCATEGORIES, payload: data.id })
  }
}