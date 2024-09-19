import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import authSlice from './authSlice';
import { dropdownReducer, subscribeToReduxStore } from "./dropdownSlice";




const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    dropdown: dropdownReducer,
  },
});

subscribeToReduxStore(store);


export default store;
