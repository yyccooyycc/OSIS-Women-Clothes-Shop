import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    showSearchBox: false,
    results: [],
  },
  reducers: {
    toggleSearchBox: (state) => {
      state.showSearchBox = !state.showSearchBox;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { toggleSearchBox, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
