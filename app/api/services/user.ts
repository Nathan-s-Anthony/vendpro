import { axiosApi } from "@/app/lib/axios";
import { ENDPOINTS } from "../endpoints/main";

export async function getUserById() {
    try {
        const resp = await axiosApi.get(ENDPOINTS.USER.USERBYID);
        console.log(resp, "resp from user")
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
