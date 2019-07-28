import * as actionTypes from './actionTypes';

export const setProducts = ( products ) => {
    return {
        type: actionTypes.GET_PRODUCT_LIST, 
        products: products
    };
};

export const getProductList = () => {
    return dispatch => {
        fetch('./products.json')
        .then(response => response.json())
        .then(products => {          
            dispatch(setProducts(products));            
        });
    }        
}

export const addNewProduct = payload => ({type: actionTypes.ADD_NEW_PRODUCT, product: payload});