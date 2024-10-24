import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//get data from backend
export const fetchImages = createAsyncThunk(
  "products/fetchImages",
  async (category) =>{
    const response = await fetch(`http://localhost:3001/api/images/${category}`);
    if (!response.ok) throw new Error('Failed to fetch images');
    const imageList = await response.json();
    return imageList;
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
        console.error('Fetch images error:', action.error);
      });
  },
});

export default productSlice.reducer;
