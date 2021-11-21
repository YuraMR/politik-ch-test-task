import { configureStore } from '@reduxjs/toolkit';

import councillorsReducer from "./slices/councillorsSlice";

export const store = configureStore({
  reducer: {
    councillors: councillorsReducer,
  },
});
