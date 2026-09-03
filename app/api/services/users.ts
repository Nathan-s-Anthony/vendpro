"use server";
import "server-only";

import { axiosInstance } from "@/app/lib/axios";
import { ENDPOINTS } from "../endpoints/main";

export async function getUser(id:number){
 const response = await axiosInstance.get(ENDPOINTS.USER.USERBYID(id));
 console.log(response,"response for user");
}