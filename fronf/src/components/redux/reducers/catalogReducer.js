import { 
  CATALOG_SUBCATEGORIES, 
  CATALOG_PRODUCTS, 
  CATALOG_INIT, 
  CATALOG_PRDOUCT,
  CATALOG_LIST,
  CATALOG_LIST_SUBCATEGORIES,
  CATALOG_LIST_PRODUCTS
} from "../types"

const initState = {
  subcategories: [],
  products: [],
  product: {},
  list: {},
  listSubCategories: [],
  listProducts: []
}

export const catalogReducer = (state = initState, action) => {
  switch(action.type){
    case CATALOG_INIT:
      return initState
    case CATALOG_SUBCATEGORIES:
      return { ...state, subcategories: action.payload }
    case CATALOG_PRODUCTS: 
      return { ...state, products: state.products.concat(action.payload) }
    case CATALOG_PRDOUCT:
      return { ...state, product: action.payload }
    case CATALOG_LIST:
      return { ...state, list: action.payload }
    case CATALOG_LIST_SUBCATEGORIES:
      return { ...state, listSubCategories: action.payload }
    case CATALOG_LIST_PRODUCTS:
      return { ...state, listProducts: action.payload }
    default: return state
  }
}