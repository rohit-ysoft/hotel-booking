import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
