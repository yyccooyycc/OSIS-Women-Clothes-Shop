import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import authSlice from './authSlice';
import productReducer from './productSlice';
import { dropdownReducer } from "./dropdownSlice";
import searchSlice from './searchSlice';


const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    dropdown: dropdownReducer,
    products: productReducer,
    search:searchSlice
  },
});


export default store;
