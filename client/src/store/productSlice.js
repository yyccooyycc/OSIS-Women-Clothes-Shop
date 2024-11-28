import { createSlice } from "@reduxjs/toolkit";

//get data from backend

const productSlice = createSlice({
  name: "products",
  initialState: {
    images: [],
    loading: false,
    error: null,
    // noResults:false,
  },
  reducers: {
    fetchImages: (state) => {
      state.loading = true;
    },
    fetchImagesSuccess: (state, action) => {
      state.images = action.payload;
      state.loading = false;
    },
    fetchImagesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchImages, fetchImagesSuccess, fetchImagesFailure } =
  productSlice.actions;

export default productSlice.reducer;
