import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {fetchList} from "../../utils/api";
import {ROUTES} from "../../constants/api";

const initialState = {
  list: [],
  loading: false,
};

export const fetchCouncilsList = createAsyncThunk(
  'councils/fetchList',
  async (queryParams = {}) => {
    return await fetchList({ route: ROUTES.councils, queryParams })
  }
)

export const councilsSlice = createSlice({
  name: 'councils',
  initialState,
  reducers: {
    setCouncilsList: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCouncilsList.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchCouncilsList.fulfilled, (state, action) => {
        state.list = action.payload || []
        state.loading = false
      })
  }
});

const { actions, reducer: councilsReducer } = councilsSlice
export const {
  setCouncilsList,
} = actions;

export const selectCouncilsList = (state) => state.councils.list;
export const selectCouncilsLoading = (state) => state.councils.loading;

export default councilsReducer;