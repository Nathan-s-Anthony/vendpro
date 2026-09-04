import axios from "axios";


const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export { axiosApi };