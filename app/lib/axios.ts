import axios, { InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "../api/services/tokens";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});
// axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   config.headers.set("Authorization", `Bearer ${getAccessToken()}`);
//   return config;
// });
export default axiosInstance;