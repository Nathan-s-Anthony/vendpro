"use client";

import { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import { usePathname } from "next/navigation";

export default function ToolBar() {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();
    const childUrl = pathName.split("/")[2];
    const handleOpen = () => {
        setOpen(!open);
        console.log("logging...")
    }

    return (
        <>
            <Header pageNavName={childUrl} className="col-span-2" burgerMenuClick={handleOpen} />
            <SideBar burgerMenuExpand={open} childUrl={childUrl} />
        </>
    )
}