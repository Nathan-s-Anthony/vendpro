"use server";
import "server-only";
import  { axiosInstance} from "@/app/lib/axios";
import { redirect } from "next/navigation";
import { ENDPOINTS } from "@/app/api/endpoints/login/login";
import { createSession } from "@/app/lib/session";
import { verifySession } from "@/app/lib/dal";
export async function loginUser(
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
) {
    try {
            const resp = await axiosInstance.post(ENDPOINTS.USER, {
                email,
                password,
                device_name: "brave-browser",
            });
            console.log(resp, "login response");
            const accessToken = resp.data.access_token;
            if (!accessToken) {
                console.error("No access token returned");
                return;
            }
            console.log("Access token:", accessToken);
            await createSession(accessToken);

    } catch (error) {
        console.error(error, "Login failed");
        return;
    }

    const session = await verifySession();

    const userID = session?.userID;
    const userRole = session?.userRole;

    console.log("Session:", session);
    console.log("User ID:", userID);
    console.log("User Role:", userRole);

    if (userID) {
        redirect("/dashboard");
    }
}