import { FETCH_PRODUCTS, LOADING } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/products';

export const fetchProducts= (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
};

export const loadingProducts = (value) => {
    return {
        type: LOADING,
        loading: value,
    }
}
  
export const fetchAllProducts = (category) => {
    const endpoint = category === 'All' ? '' : `/${category}`;
    return (dispatch) => {
        dispatch(loadingProducts(true));
        return axios.get(apiUrl + endpoint)
            .then(response => {
                dispatch(fetchProducts(response.data));
                dispatch(loadingProducts(false));
            })
            .catch(error => {
                dispatch(loadingProducts(false));
                throw(error);
            });
    };
};