/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import loginReducer from "./features/login";
import dorpDownReducer from "./features/dispaltSlice";
import backgroundReducer from "./features/backgroundDisplay";
export const store = configureStore({
  reducer: {
    counterReducer,
    loginReducer,
    dorpDownReducer,
    backgroundReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
