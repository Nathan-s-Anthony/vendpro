import { axiosInstance } from "@/app/lib/axios";
import { ENDPOINTS } from "../endpoints/main";
import { redirect } from "next/navigation";
import { logout } from "@/app/actions/logout";



export async function logoutUser() {
  try {
    const resp = await axiosInstance.post(ENDPOINTS.AUTH_USER.LOGOUT);
    console.log(resp?.data, "logout user response");
    return {
      status: resp?.status,
      message: resp?.data?.message,
      data: resp?.data
    };

  } catch (error: unknown) {
    console.error(error.response?.data ?? error);
    return {
      status: error.response?.status,
      message: error.response?.data?.message,
    };
  }

}
