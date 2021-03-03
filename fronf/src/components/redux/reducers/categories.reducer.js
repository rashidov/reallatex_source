import {
  CATEGORIES_DEL_CATEGORIES,
  CATEGORIES_DEL_SUBCATEGORIES,
  CATEGORIES_GET_CATEGORIES,
  CATEGORIES_GET_SUBCATEGORIES,
  CATEGORIES_UPD_CATEGORIES,
  CATEGORIES_UPD_SUBCATEGORIES
} from '../types'

const initState = {
  categories: [],
  subcategories: []
}

export const categoriesReducer = ( state = initState, action ) => {
  switch(action.type) {
    case CATEGORIES_GET_CATEGORIES: 
      return { ...state, categories: action.payload }
    case CATEGORIES_GET_SUBCATEGORIES: 
      return { ...state, subcategories: action.payload }
    case CATEGORIES_DEL_CATEGORIES:
      let arrCategories = []
      state.categories.forEach( category => { if (category._id !== action.payload) return arrCategories.push(category) })
      return { ...state, categories: arrCategories }
    case CATEGORIES_DEL_SUBCATEGORIES:
      let arrSubcategories = []
      state.subcategories.forEach( subcategory => { if (subcategory._id !== action.payload) return arrSubcategories.push(subcategory) })
      return { ...state, subcategories: arrSubcategories }
    case CATEGORIES_UPD_CATEGORIES:
      console.log(state.categories.push(action.payload), state)
      return { ...state, categories: state.categories.push(action.payload)}
    case CATEGORIES_UPD_SUBCATEGORIES:
      return { ...state, subcategories: state.subcategories.push(action.payload)}
    default: return state
  }
} 