import Axios from "./axiosInstance";
import * as queryString from "query-string";
import { REACT_APP_BASE_URL, REQUEST_TYPES } from "utils/constant/url";

export function apiCaller({ method = REQUEST_TYPES.GET, url = "", params = {}, data = {}, timeout = 420000 } = {}) {
  return Axios({
    method,
    baseURL: REACT_APP_BASE_URL,
    url,
    params,
    // paramsSerializer: (queryParams) => queryString.stringify(queryParams),
    data,
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
    timeout,
  })
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}
