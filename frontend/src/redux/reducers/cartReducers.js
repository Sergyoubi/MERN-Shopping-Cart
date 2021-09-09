import * as actionTypes from '../constants/cartConstants';

export const cartReducer = ( state = {cartItems: []}, action ) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload; //in action.payload we get the item we would like to add
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state, //spread the and go to the cartItem array:
          cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x) 
          //update cartItems: map through the old array and check the current product if it's equal to the existing item
          //if it's True, we set it to the new item(action.payload), else we set it to be the current elemt we mapping through 
        }
      } else { 
        return {
          ...state,
          cartItems: [...state.cartItems, item] //push new item in the array
        }
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload) 
      }
    default:
      return state;
  }
}
