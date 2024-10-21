import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//get data from backend
export const fetchImages = createAsyncThunk(
  "products/fetchImages",
  async (category) =>{
  try {
    const response = await fetch(`/api/images/${category}`);
    const imageList = await response.json();

    imageList.forEach(image => {
      // Use the image's filename or ID to display the image
      const imageUrl = `http://localhost:3001/api/images/download/${image.id}`;
      console.log(`Image URL: ${imageUrl}`);
      // Display the image on the frontend (e.g., in an <img> tag)
    });
  } catch (err) {
    console.error('Failed to fetch images:', err);
  }}
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
        state.images.push(action.payload);
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error('Fetch images error:', action.error);
      });
  },
});

export default productSlice.reducer;
