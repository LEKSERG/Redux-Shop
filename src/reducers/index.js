import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import condition from './condition';

const rootReducer = combineReducers({
    products: products,
    cart: cart,
    condition: condition
});

export default rootReducer;