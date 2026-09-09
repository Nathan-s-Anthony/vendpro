"use client";

import type { VendingMachine } from "@/app/types/vendingMachinesTypes";
import Pill from "../pill";
import { MapPin } from "lucide-react";

export default function SubPanel({ data }: { data: VendingMachine[] }) {
    return (
        <div className="grid grid-cols-4 gap-4 mt-6" >
            {data?.map((machine) => {
                console.log(machine, "machine sub panel")
                return (
                    <div key={machine.id} className={`group transition-all rounded-sm bg-[#222225]/30 p-4 duration-300 border border-border/30  hover:border-primary/50 relative cursor-pointer`}>
                        <div className=" w-full flex items-center justify-between relative">
                            <Pill status={machine.status} name={machine.status} />
                            <MapPin className="text-secondary-faded" />
                        </div>
                        {/* <Image
                            alt={`${machine.name} - ${machine.model}`}
                            className="contain rounded-sm cursor-pointer p-4"
                            src={`data:${machine.image.type};base64,${machine.image.data}`}
                            width={300}
                            height={100}
                        /> */}
                        <div className="">
                            <h4 className="font-display font-bold">{machine.name}</h4>
                            <h5 className="font-display text-secondary-faded">{machine.serial_number}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}