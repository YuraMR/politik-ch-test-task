import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import { fetchList} from "../../utils/api";
import {ROUTES} from "../../constants/api";

const initialState = {
  list: [],
  loading: false,
};

export const fetchAffairsList = createAsyncThunk(
  'affairs/fetchList',
  async (queryParams = {}) => {
    return await fetchList({ route: ROUTES.affairs, queryParams })
  }
)

export const affairsSlice = createSlice({
  name: 'affairs',
  initialState,
  reducers: {
    setAffairsList: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAffairsList.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchAffairsList.fulfilled, (state, action) => {
        state.list = action.payload || []
        state.loading = false
      })
  }
});

const { actions, reducer: affairsReducer } = affairsSlice
export const {
  setAffairsList,
} = actions;

export const selectAffairsList = (state) => state.affairs.list;
export const selectAffairsLoading = (state) => state.affairs.loading;

export default affairsReducer;