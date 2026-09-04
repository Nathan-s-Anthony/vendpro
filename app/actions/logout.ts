import { redirect } from "next/navigation";
import { logoutUser } from "../api/services/logout";

export async function logout() {
    const resp = await logoutUser();
    if (resp?.status === 200) {
        redirect("/login");
    }
}
