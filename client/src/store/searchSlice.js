import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    showSearchBox: false,
    results: [],
    loading: false, 
    error: null, 
  },
  reducers: {
    toggleSearchBox: (state) => {
      state.showSearchBox = !state.showSearchBox;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    clearSearchResults: (state) => {
      state.results = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  },
});

export const { toggleSearchBox, setSearchResults, clearSearchResults, 
  setLoading, setError } = searchSlice.actions;
export default searchSlice.reducer;
