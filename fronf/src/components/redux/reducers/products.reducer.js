import { PRODUCT_ADD, PRODUCT_ARR, PRODUCT_DEL, PRODUCT_GET_EDIT, PRODUCT_SEARCH } from "../types"

const initState = {
  product: [],
  products: [],
  editproduct: {},
  productarr: []
}

export const productsReducer = ( state = initState, action ) => {
  switch (action.type) {
    case PRODUCT_ADD:
      return { ...state, product: action.payload }
    case PRODUCT_SEARCH:
      return { ...state, products: action.payload }
    case PRODUCT_DEL:
      let arrProducts = []
      state.products.forEach( product => { if (product._id !== action.payload) return arrProducts.push(product) })
      return { ...state, products: arrProducts }
    case PRODUCT_GET_EDIT:
      return { ...state, editproduct: action.payload }
    case PRODUCT_ARR:
      return { ...state, productarr: action.payload }
    default: return state
  }
}