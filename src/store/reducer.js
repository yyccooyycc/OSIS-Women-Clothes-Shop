import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],

};

const cartSlice= createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log('Adding to cart:', action.payload);
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            console.log('Removing from cart:', action.payload);
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;