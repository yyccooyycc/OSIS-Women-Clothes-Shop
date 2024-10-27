import { createSlice } from "@reduxjs/toolkit";
import { BehaviorSubject } from "rxjs";


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
        dropdownState$.next(state);
    },
    setCategory: (state, action) => {
      state.category.selected = action.payload;
      dropdownState$.next(state);
    },
  },
});

export const { toggle,setCategory } = dropdownSlice.actions;

const dropdownState$ = new BehaviorSubject(initialState);
const subscribeToReduxStore = (store) => {
  store.subscribe(() => {
    const state = store.getState().dropdown;
    dropdownState$.next(state);
  });
};




export const dropdownReducer = dropdownSlice.reducer;
export { dropdownState$, subscribeToReduxStore };