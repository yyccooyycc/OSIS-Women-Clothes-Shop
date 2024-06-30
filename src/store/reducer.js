import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],

};

const cartSlice= createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].quantity+=1;
            }else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].quantity-=1;
            }else{
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;