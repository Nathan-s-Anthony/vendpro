import { ENDPOINTS } from "../endpoints/main";
import { axiosApi } from "@/app/lib/axios";


export async function logoutUser() {
  try {
    const resp = await axiosApi.post(ENDPOINTS.AUTH_USER.LOGOUT);
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
