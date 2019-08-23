import { FETCH_PRODUCTS, LOADING, CONTACT_SEND } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/products';
const postContactUrl = 'http://localhost:8080/api/contact';

export const fetchProducts = (data) => {
    return {
        type: FETCH_PRODUCTS,
        products: data.products,
        showedProducts: data.showing,
        hiddenProducts: data.hidden,
    };
};

export const loading = (value) => {
    return {
        type: LOADING,
        loading: value,
    };
};
  
export const fetchAllProducts = (category) => {
    const endpoint = category === 'All' ? '' : `/${category}`;
    return (dispatch) => {
        dispatch(loading(true));
        return axios.get(apiUrl + endpoint)
            .then(response => {
                dispatch(fetchProducts(response.data));
                dispatch(loading(false));
            })
            .catch(error => {
                dispatch(loading(false));
                throw(error);
            });
    };
};

export const handleContactResponse = (data) => {
    return {
        type: CONTACT_SEND,
        contactResponse: data.funnyResponse,
    };
};

export const postContact = ({ firstName, lastName, email, subject }) => {
    return (dispatch) => {
        dispatch(loading(true));
        return axios.post(postContactUrl, { firstName, lastName, email, subject })
            .then(response => {
                dispatch(handleContactResponse(response.data));
                dispatch(loading(false));
            })
            .catch(error => {
                dispatch(loading(false));
                throw(error);
            });
    };
};