"use client";

import type { VendingMachine } from "@/app/types/vendingMachinesTypes";
import Pill from "../pill";
import { MapPin } from "lucide-react";


export default function SubPanel({ machines }: { machines: VendingMachine[] }) {
    return (
        <div className="grid grid-cols-3 gap-4 py-6" >
            {machines
                // .filter((subPanelSelected: VendingMachine) => subPanelSelected.status === "warning")
                .map((machine: VendingMachine) => (
                    <div key={machine.id} className={`group transition-all rounded-sm bg-[#222225] p-4 duration-300 border border-card-primary hover:border-primary/50 relative cursor-pointer`}>
                        <div className=" w-full flex items-center justify-between">
                            <Pill name={machine.status} />
                            <MapPin className="text-secondary-faded" />
                        </div>
                        <div className="">
                            <h4 className="font-display font-bold">{machine.location.address}</h4>
                            <h5 className="font-display text-secondary-faded">{machine.location.name}</h5>
                        </div>
                    </div>
                ))}
        </div>
    )
}