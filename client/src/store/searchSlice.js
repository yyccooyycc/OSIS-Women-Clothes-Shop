import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    showSearchBox: false,
    results: [],
    loading: false, 
    error: null, 
    keyword:''
  },
  reducers: {
    toggleSearchBox: (state) => {
      state.showSearchBox = !state.showSearchBox;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
      state.keyword = action.payload.keyword
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { toggleSearchBox, setSearchResults, clearSearchResults, 
  setLoading, setError, setKeyword } = searchSlice.actions;
export default searchSlice.reducer;
