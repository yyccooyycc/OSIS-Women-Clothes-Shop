import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//get data from backend
export const fetchImages = createAsyncThunk(
  "products/fetchImages",
  async () => {
    const response = await fetch("/api/products");
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
