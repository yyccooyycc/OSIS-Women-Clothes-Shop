import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItemCount:0,
};

const cartSlice= createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].quantity+=1;
                state.totalItemCount+=1;
            }else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id);
            if(itemIndex>=0){
                if(state.cart[itemIndex].quantity>1){
                    state.cart[itemIndex].quantity-=1;
                    state.totalItemCount-=1;
                }else{
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                }
            }
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;