"use server";
import "server-only";
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
        const resp = await axiosInstance.post(ENDPOINTS.AUTH_USER.LOGIN, {
            email,
            password,
        });
        console.log(resp)
        //     // await createSession(accessToken);
        // })
        // const resp = axiosInstance.get(ENDPOINTS.COMPANY.SEO(1));

        // console.log(resp, "resp");
    } catch (error) {
        console.error(error, "Login failed");
        return {
            status: error.status,
            message: error.response?.data?.message,
        };
    }


    // const session = await verifySession();

    // const userID = session?.userID;
    // const userRole = session?.userRole;
    // console.log("Session:", session);
    // console.log("User ID:", userID);
    // console.log("User Role:", userRole);

    // if (userID) {

    // }

}