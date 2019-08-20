import { CATEGORY_CHANGE, FETCH_PRODUCTS, LOADING } from '../actions/types';

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
    loading: true,
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
                products: action.products
            }
        case LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
};

export default reducer;
