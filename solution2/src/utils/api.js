import axios from "axios";

import { PARLIAMENT_API_CONFIG, PARLIAMENT_API_SCOPES } from "../constants/api";

export const fetchParliamentData = (scope, config) => (
  axios.get(`/${scope}`, { ...PARLIAMENT_API_CONFIG, ...config })
)

export const fetchParliamentCouncillors = (config) => (
  fetchParliamentData(PARLIAMENT_API_SCOPES.councillors, config)
)