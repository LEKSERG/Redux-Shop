import * as actionTypes from '../actions/actionTypes';

const initState = {
  products: null
};

const addNewProduct = (state, product) => {
  const updatedProductsList = state.products.concat(product);
  return {...state, products: updatedProductsList};
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST:
      return {...state, products: action.products}
    case actionTypes.ADD_NEW_PRODUCT:
      return addNewProduct(state, action.product);
    default:
      return state;
  }
}