import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {fetchList} from "../../utils/api";
import {ROUTES} from "../../constants/api";

const initialState = {
  list: [],
  loading: false,
};

export const fetchCouncillorsList = createAsyncThunk(
  'councillors/fetchList',
  async (queryParams = {}) => {
    return await fetchList({ route: ROUTES.councillors, queryParams })
  }
)

export const councillorsSlice = createSlice({
  name: 'councillors',
  initialState,
  reducers: {
    setCouncillorsList: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCouncillorsList.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchCouncillorsList.fulfilled, (state, action) => {
        state.list = action.payload || []
        state.loading = false
      })
  }
});

const { actions, reducer: councillorsReducer } = councillorsSlice
export const {
  setCouncillorsList,
} = actions;

export const selectCouncillorsList = (state) => state.councillors.list;
export const selectCouncillorsLoading = (state) => state.councillors.loading;

export default councillorsReducer;