import { 
  CARD_COUNTER_DECREMENT, 
  CARD_COUNTER_INCREMENT, 
  CARD_DECREMENT_COUNT,
  CARD_INCREMENT_COUNT, 
  CARD_INIT_PRODUCTS,
  CARD_INIT_PRICE,
  CARD_PRICE_ADD, 
  CARD_PRICE_DECREMENT, 
  CARD_PRICE_INCREMENT, 
  CARD_PRODUCT_ADD, 
  CARD_PRODUCT_DEL
} from "../types"

const initState = {
  price: 0,
  counter: 0,
  products: []
}

export const cardReducer = (state = initState, action) => {
  switch(action.type){
    case CARD_INIT_PRODUCTS:
      return { ...state, products: state.products.concat(action.payload) }
    case CARD_PRODUCT_ADD:
      return { ...state, products: state.products.concat(action.payload) }
    case CARD_PRODUCT_DEL:
      if(state.products === 1){
        return { ...state, products: initState.products }
      }else{
        return { ...state, products: action.payload }
      }
    case CARD_INCREMENT_COUNT:
      let array = []
      for(let i = 0; i < state.products.length; i++){
        if(action.payload === state.products[i].id){
          state.products[i].count ++
          array.push( state.products[i] )
        }else{
          array.push( state.products[i] )
        }
      }
      return { ...state, products: array }
    case CARD_DECREMENT_COUNT:
      let arrayDec = []
      for(let i = 0; i < state.products.length; i++){
        if(action.payload === state.products[i].id){
          if(state.products[i].count !== 1){
            state.products[i].count --
            arrayDec.push( state.products[i] )
          }else{
            return state
          }
        }else{
          arrayDec.push( state.products[i] )
        }
      }
      return { ...state, products: arrayDec }
    case CARD_COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case CARD_COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 }

    case CARD_INIT_PRICE:
      return { ...state, price: action.payload }
    case CARD_PRICE_ADD:
      return { ...state, price: state.price + action.payload }
      case CARD_PRICE_INCREMENT:
        return { ...state, price: state.price + action.payload }
      case CARD_PRICE_DECREMENT:
        return { ...state, price: state.price - action.payload }
    default: return state
  }
}

