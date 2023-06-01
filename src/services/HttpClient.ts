import axios, { AxiosRequestHeaders } from "axios";
import { toast } from "react-toastify";
import { _apiUrl } from "../utils/constants";

//console.log(_apiUrl);

const httpClient = axios.create({
  baseURL: _apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  function (config) {
    if (typeof window !== "undefined") {
      // Access localStorage
      //console.log(_apiUrl)
      const token = localStorage.getItem("_token");
      //console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } else return config;
  },
  function (error: any) {
    console.log("error");
    return Promise.reject(error);
  }
);

const httpFormDataClient = axios.create({
  baseURL: _apiUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

httpFormDataClient.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("_token");
    config.headers!["Content-Type"] = "multipart/form-data";

    if (token) {
      config.headers["Content-Type"] = "multipart/form-data";
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export { httpFormDataClient };

export default httpClient;
