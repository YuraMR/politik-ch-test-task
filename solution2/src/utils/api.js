import axios from "axios";

import { PARLIAMENT_API_CONFIG } from "../constants/api";
import {arraySort, filterArray} from "./array";

export const fetchList = async ({ route, queryParams = {} }) => {
  const params = {
    ...PARLIAMENT_API_CONFIG,
    ...queryParams
  }

  const { data } = await axios.get(route, { params })

  const { sortBy, sortOrder, ...filters } = queryParams

  const filteredData = filterArray({ array: data, filters }).map(({ hasMorePages, ...item }) => item)

  return arraySort({ array: filteredData, sortBy, sortOrder })
}