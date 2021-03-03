import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { cardReducer } from './cardReducer'
import { catalogReducer } from './catalogReducer'
import { categoriesReducer } from './categories.reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  catalog: catalogReducer,
  card: cardReducer,
  categories: categoriesReducer
})