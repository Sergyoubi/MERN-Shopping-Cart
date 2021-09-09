 import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => { //getState is part of Redux thunk
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageURL: data.imageURL,
      price: data.price,
      countInStock: data.countInStock, 
      qty
    }
  })
  //save cart to local storage
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  })
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}
