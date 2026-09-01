import Card from "../components/card";
import Panel from "../components/panel";
import ToolBar from "../components/toolbar";
import { verifySession } from "../lib/dal";

export default async function Dashboard() {
    const session = await verifySession();
    const userID = session?.userID;
    const userRole = session?.userRole;
    console.log("userID", userID);
    console.log("userRole", userRole);
    return (
        <>
            {userRole === "admin" && (
                <div>test admin</div>
            )}
        </>
    )
}

export const metadata = {
    title: "Vendpro - One stop app for vendors to run their business",
    description: "Vendpro is a comprehensive platform designed to empower vendors in managing their businesses efficiently.",
};
