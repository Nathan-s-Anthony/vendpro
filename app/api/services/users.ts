import { axiosInstance } from "@/app/lib/axios";
import { ENDPOINTS } from "../endpoints/login/login";

export async function getUser(){
 const response = await axiosInstance.get(ENDPOINTS.USER);
 console.log(response,"response for user");
}