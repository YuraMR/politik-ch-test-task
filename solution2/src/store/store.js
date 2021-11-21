import { configureStore } from '@reduxjs/toolkit';

import affairsReducer from "./slices/affairsSlice";
import councillorsReducer from "./slices/councillorsSlice";
import councilsReducer from "./slices/councilsSlice";

export const store = configureStore({
  reducer: {
    affairs: affairsReducer,
    councillors: councillorsReducer,
    councils: councilsReducer,
  },
});
