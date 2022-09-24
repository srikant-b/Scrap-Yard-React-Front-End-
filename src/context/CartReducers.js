
export const CartReducer =(state,action)=>{

  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      }
    case "ADD_TO_CART": 
      return {...state,cart:[...state.cart,{...action.payload, qty:1}]}
    case "REMOVE_FROM_CART":
      return {...state,cart:state.cart.filter(c=>c.id !== action.payload.id)};

    default:
     return state;
  }
}