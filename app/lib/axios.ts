import { verifySession } from '@/app/lib/dal';
import axios, { InternalAxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});
async function getAccessToken(){
  const session = await verifySession();
  return session.userID;
}
const token = getAccessToken();
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set("Authorization", `Bearer ${token}`);
  return config;
});
export  {axiosInstance};