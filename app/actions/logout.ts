

import { redirect } from "next/navigation";
import { logoutUser } from "../api/services/logout";

export async function logout() {
    // const cookie = (await cookies()).get('vendpro-backend-session');
    const resp = await logoutUser();
    if (resp?.status === 200) {
        redirect("/login");
    }
}
