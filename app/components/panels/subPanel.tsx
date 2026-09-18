"use client";

import type { VendingMachine } from "@/app/types/vendingMachinesTypes";
import Pill from "../pill";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bar } from "@/app/types/barTypes";
import Bars from "../bars";
export default function SubPanel({ data, subPanelMode }: { data: VendingMachine[], subPanelMode: "full-with-tabs" | "compact" }) {
    const router = useRouter();
    const dataBar = [
        {
            id: 0,
            value: 78,
            text: "Drinks",
            total: 100,
        },
        {
            id: 1,
            value: 50,
            text: "Food Level",
            total: 100,

        }
    ] satisfies Bar[];
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
                        {subPanelMode === "full-with-tabs" &&
                            <div className="relative group overflow-hidden mt-4 mb-4 lg:w-60 lg:h-60">
                                <Image
                                    alt={`${machine.name} - ${machine.model}`}
                                    className="rounded-sm  group-hover:scale-150  transition-all duration-300 cursor-pointer"
                                    src={`data:${machine.image.type};base64,${machine.image.data}`}
                                    fill />
                            </div>
                        }
                        <div className="">
                            <h4 className="font-display font-bold">{machine.name}</h4>
                            <h5 className="font-display text-secondary-faded">{machine.serial_number}</h5>
                        </div>
                        <Bars data={dataBar} />
                    </div>
                )
            })}
        </div>
    )
}