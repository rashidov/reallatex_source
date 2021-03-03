import { 
  APP_AUTH_U, APP_CHECK, 
  APP_ERR, APP_FLAG, 
  APP_INIT, APP_INITS, 
  APP_INIT_S, 
  APP_LOAD, 
  APP_PARAMS, 
  CONTACTS, DELIVERY, 
  DESCRIPTION, PAYMENT, 
  TOORDER 
} from "../types"

const initState = {
  categories: [],
  delivery: [],
  payment: [],
  contacts: [],
  toorder: [],
  description: [],

  pkey: '',
  skey: '',
  flag: false,
  errA: false,
  user: false,
  loadproduct: false,
  params: ''
}

export const appReducer = (state = initState, action) => {
  switch(action.type){
    case APP_INIT:
      return { ...state, categories: action.payload }
    case DELIVERY:
      return { ...state, delivery: action.payload}
    case PAYMENT: 
      return { ...state, payment: action.payload}
    case CONTACTS:
      return { ...state, contacts: action.payload}
    case TOORDER:
      return { ...state, toorder: action.payload}
    case DESCRIPTION:
      return { ...state, description: action.payload}
    case APP_INITS: 
      return { ...state, pkey: action.payload }
    case APP_CHECK:
      return { ...state, skey: action.payload }
    case APP_FLAG:
      return { ...state, flag: !state.flag }
    case APP_ERR:
      return { ...state, errA: !state.errA }
    case APP_AUTH_U:
      return { ...state, user: !state.user }
    case APP_LOAD:
      return { ...state, loadproduct: !state.loadproduct }
    case APP_INIT_S:
      return { ...state, pkey: action.payload }
    case APP_PARAMS:
      return { ...state, params: action.payload }
    default: return state
  }
}