import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOpen: false,
  category:{selected:null}
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggle: (state) => {
        state.isOpen = !state.isOpen;
    },
    setCategory: (state, action) => {
      state.category.selected = action.payload;
      state.isOpen = false;
    },
    closeDropdown(state) {
      state.isOpen = false;
    }
  },
});

export const { toggle,setCategory, closeDropdown } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;
