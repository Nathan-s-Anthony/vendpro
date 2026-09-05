"use client";

import { useState } from "react";
import SubPanel from "./subPanel";
import Button from "../button";
import { machines } from "@/app/utils/dummydata";

const panelBtns = [
    {
        id: "all",
        name: "All",
    },
    {
        id: "active",
        name: "Active",
    },
    {
        id: "maintenance",
        name: "Maintenance",
    },
    {
        id: "down",
        name: "Down",
    }
]

export default function SubPanels() {

    const [activeSubPanelId, setActiveSubPanelId] = useState<string>(panelBtns[0].id);
    const handlePanelChange = (id: string) => {
        setActiveSubPanelId(id);
    };
    return (
        <div className="w-full flex flex-col gap-4">
            <div className=" flex gap-4 justify-end">
                {panelBtns.map((item) => {
                    return (
                        <Button id={item.id} value={item.name} action={(e) => handlePanelChange(e.currentTarget.id)} className={`transition-all duration-300 cursor-pointer font-mono rounded-full ${activeSubPanelId === item.id ? "bg-primary" : "bg-secondary text-secondary-faded"}  px-4 py-2`} key={item.id} type={"button"} variant={"primary"} />
                    )
                })}
            </div>
            <SubPanel machines={machines} />
        </div>
    )
}