import { axiosApi } from "@/app/lib/axios";
import { ENDPOINTS } from "../endpoints/main";

export async function loginUser(
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
) {
    try {
        await axiosApi.get("/sanctum/csrf-cookie");
        console.log("CSRF cookie obtained...");
        const resp = await axiosApi.post(ENDPOINTS.AUTH_USER.LOGIN, {
            email,
            password,
        });
        console.log(resp?.data, "login response");
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
