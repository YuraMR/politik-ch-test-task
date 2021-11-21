import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {fetchParliamentCouncillors} from "../../utils/api";
import {arraySort, filterArray} from "../../utils/array";

const initialState = {
  list: [],
  loading: false,
};

export const fetchCouncillorsList = createAsyncThunk(
  'councillors/fetchList',
  async (queryParams = {}) => {
    const { data } = await fetchParliamentCouncillors()

    const { sortBy, sortOrder, ...filters } = queryParams

    const filteredData = filterArray({ array: data, filters })

    return arraySort({ array: filteredData, sortBy, sortOrder })
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