import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    showSearchBox: false,
    results: [],
    loading: false, 
    error: null, 
    keyword:'',
    // noResults:false,
  },
  reducers: {
    toggleSearchBox: (state) => {
      state.showSearchBox = !state.showSearchBox;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
      state.keyword = action.payload.keyword
      // state.noResults = action.payload.length === 0;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    // setNoResults: (state, action) => {
    //   state.noResults = action.payload;
    // },
  },
});

export const { toggleSearchBox, setSearchResults, setKeyword, setNoResults  } = searchSlice.actions;
export default searchSlice.reducer;
