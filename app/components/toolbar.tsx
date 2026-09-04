"use client";

import { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { usePathname } from "next/navigation";

export default function ToolBar({ userID, userRole }: { userID: string, userRole: string }) {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();
    const childUrl = pathName.split("/")[2];
    const handleOpen = () => {
        setOpen(!open);
        console.log("logging...")
    }
    console.log("userID from sidebar", userID);
    console.log("userRole from userRole", userRole);
    // console.log(userId, 'response user id')
    return (
        <>
            <Header pageNavName={childUrl} className="col-span-2" burgerMenuClick={handleOpen} userID={userID} userRole={userRole} />
            <SideBar burgerMenuExpand={open} childUrl={childUrl} userRole={userRole} />
        </>
    )
}