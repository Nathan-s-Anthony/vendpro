"use client";

import { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";

export default function ToolBar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
        console.log("logging...")
    }
    return (
        <>
            <Header pageNavName="Overview" className="col-span-2" burgerMenuClick={handleOpen} />
            <SideBar burgerMenuExpand={open} />
        </>
    )
}