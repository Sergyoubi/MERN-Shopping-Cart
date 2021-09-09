import * as actionTypes from '../constants/productConstants';

//this reducer will get all of the products when we go to homepage
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true, //this alow the app to wait until this value is equal to false before we display something
        products: []
      }
    case actionTypes.GET_PRODUCTS_SUCCESS: 
      return {
        loading: false,
        products: action.payload //populate products with an array received from backend 
      }
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => { //here product is document
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true
      }
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS: 
      return {
        loading: false,
        product: action.payload
      }
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {} //empty documents
      }

    default:
      return state
  }
};