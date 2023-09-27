import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WindowState {
  backgroundNumber: number;
}
let randomNumber = Math.random();
randomNumber = randomNumber * 3;
randomNumber = Math.floor(randomNumber);

const initialState: WindowState = {
  backgroundNumber: randomNumber,
};

export const backgroundDisplay = createSlice({
  name: "windowState",
  initialState,
  reducers: {
    number: (state, action: PayloadAction<number>) => {
      state.backgroundNumber = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { number } = backgroundDisplay.actions;

export default backgroundDisplay.reducer;
