import { createSlice } from "@reduxjs/toolkit";
import { BehaviorSubject } from "rxjs";


const initialState = {
  isOpen: false,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggle: (state) => {
        state.isOpen = !state.isOpen;

    }
  },
});

export const { toggle } = dropdownSlice.actions;

const dropdownState$ = new BehaviorSubject(initialState);
const subscribeToReduxStore = (store) => {
  store.subscribe(() => {
    const state = store.getState().dropdown;
    dropdownState$.next(state);
  });
};




export const dropdownReducer = dropdownSlice.reducer;
export { dropdownState$, subscribeToReduxStore };