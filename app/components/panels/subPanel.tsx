"use client";

import type { VendingMachine } from "@/app/types/vendingMachinesTypes";
import Pill from "../pill";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function SubPanel({ data, subPanelMode }: { data: VendingMachine[], subPanelMode: "full-with-tabs" | "compact" }) {
    const router = useRouter();
    return (
        <div className={`grid  ${subPanelMode === "full-with-tabs" ? "grid-cols-4" : "grid-cols-1"}  gap-4 mt-6`}>
            {data?.map((machine) => {
                console.log(machine, "machine sub panel");
                const serialNumberLower = machine.serial_number.toLowerCase();
                return (
                    <div key={machine.id} onClick={() => router.push(`/dashboard/your-machines/machine/${serialNumberLower}`)} className={`group transition-all rounded-sm bg-[#222225]/30 p-4 duration-300 border border-border/30  hover:border-primary/50 relative cursor-pointer`}>
                        <div className=" w-full flex items-center justify-between relative">
                            <Pill status={machine.status} name={machine.status} />
                        </div>
                        <div className="relative overflow-hidden  lg:w-80 lg:h-80">
                            <Image
                                alt={`${machine.name} - ${machine.model}`}
                                className="rounded-sm hover:scale-125  transition-all duration-300 cursor-pointer p-4"
                                src={`data:${machine.image.type};base64,${machine.image.data}`}
                                fill />
                        </div>
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