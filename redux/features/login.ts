/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface LoginState {
  user: { userName: string; password: string } | null;
}

const initialState: LoginState = {
  user: null,
};

export const loginSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userName: string; password: string } | null>
    ) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions;

export default loginSlice.reducer;
