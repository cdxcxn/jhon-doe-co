import {
    CATEGORY_CHANGE,
    FETCH_PRODUCTS,
    LOADING,
    VIEW_TYPE_CHANGE,
    CONTACT_CHANGE,
    CONTACT_SEND,
    CLEAR_RESPONSE,
} from '../actions/types';

const initialState = {
    categories: [
        {
            text: 'All',
            selected: true,
            icon: 'list'
        },
        {
            text: 'Tech',
            selected: false,
            icon: 'laptop'
        },
        {
            text: 'Services',
            selected: false,
            icon: 'build'
        },
        {
            text: 'Office',
            selected: false,
            icon: 'folder'
        },
    ],
    selectedCategory: 'All',
    searchText: null,
    viewType: 'list',
    products: [],
    showedProducts: 0,
    hiddenProducts: 0,
    loading: true,
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    contactResponse: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_CHANGE:
            const newCategories = state.categories.map((category) => {
                return {
                    ...category,
                    selected: category.text === action.newCategory
                };
            });
            return {
                ...state,
                selectedCategory: action.newCategory,
                categories: newCategories,
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.products,
                showedProducts: action.showedProducts,
                hiddenProducts: action.hiddenProducts,
            }
        case LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        case VIEW_TYPE_CHANGE:
            return {
                ...state,
                viewType: action.newViewType,
            }
        case CONTACT_CHANGE:
            return {
                ...state,
                [action.field]: action.value,
            }
        case CONTACT_SEND:
            return {
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                contactResponse: action.contactResponse,
            }
        case CLEAR_RESPONSE:
            return {
                ...state,
                contactResponse: null,
            }
        default:
            return state;
    }
};

export default reducer;
