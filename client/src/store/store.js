import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import authSlice from './authSlice';
import productReducer from './productSlice';
import { dropdownReducer } from "./dropdownSlice";
import searchSlice from './searchSlice';
import { createEpicMiddleware } from 'redux-observable';
import fetchImagesEpic from './epics/productEpics';  // 引入 epic

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    dropdown: dropdownReducer,
    products: productReducer,
    search:searchSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(fetchImagesEpic);

export default store;
