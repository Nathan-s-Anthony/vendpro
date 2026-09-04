
import { axiosInstance } from "@/app/lib/axios";
import { redirect } from "next/navigation";
import { createSession } from "@/app/lib/session";
import { verifySession } from "@/app/lib/dal";
import { ENDPOINTS } from "../endpoints/main";
import axios from "axios";


export async function loginUser(
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
) {
    try {
        await axiosInstance.get("/sanctum/csrf-cookie");
        console.log("CSRF cookie obtained");
        const resp = await axiosInstance.post(ENDPOINTS.AUTH_USER.LOGIN, {
            email,
            password,
        });

        console.log(resp.data, "login response");
        if (resp.status === 200) {
            redirect("/dashboard");
        }
        return {
            user: resp.data
        }

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