/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  listNumber: string;
  toggle: boolean;
}

const initialState: CounterState = {
  listNumber: "...",
  toggle: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    list: (state, action: PayloadAction<string>) => {
      state.listNumber = action.payload;
    },
    toggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { list, toggle } = listSlice.actions;

export default listSlice.reducer;
