const intialState = {
    cart: [],
    products: [],
    user: null,
};

function reducer(state = intialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer;