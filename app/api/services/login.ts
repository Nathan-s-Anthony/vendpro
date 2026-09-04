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


// export async function loginUser(
//     email: FormDataEntryValue | null,
//     password: FormDataEntryValue | null
// ) {

//     try {
//         await axiosInstance.get("/sanctum/csrf-cookie");
//         const resp = await axiosInstance.post(ENDPOINTS.AUTH_USER.LOGIN, {
//             email,
//             password,
//         });
//         console.log(resp, "response login")
//     } catch (error) {
//         console.error(error, "Login failed");
// return {
//     status: error.status,
//     message: error.response?.data?.message,
// };
//     }


// const session = await verifySession();

// const userID = session?.userID;
// const userRole = session?.userRole;
// console.log("Session:", session);
// console.log("User ID:", userID);
// console.log("User Role:", userRole);

// if (userID) {

// }

// }