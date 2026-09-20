"use client";

import { ChevronDown } from "lucide-react";
import BuyOrderForm from "./formTemplates/generalBuyOrder";

export default function BuyOrder() {

    const buyOrderForms = [
        {
            id: 0,
            title: "General Buy Order",
            description: "Buy products for all your vending machines. This will take into account your stock levels across all your machines.",
            form: <BuyOrderForm />,
        },
        {
            id: 1,
            title: "Machine Buy Order",
            description: "Buy products for your specific machines that need re-stocking.",
            form: <BuyOrderForm />,
        }
    ]
    return (
        <div className=" flex flex-wrap  justify-between  gap-4 mt-4">
            {buyOrderForms.map((item) => {
                return (
                    <div key={item.id} className="relative w-full col-span-1 bg-[#222225]/30 border border-border/30  p-4 rounded-sm  hover:border-primary/50 cursor-pointer">
                        {/* <div className="bg-primary absolute w-10 h-10 flex items-center justify-center right-7 rounded-full"><ChevronDown className="text-background" /></div> */}
                        <div className="flex items-start justify-between flex-col">
                            <h2 className="text-3xl">{item.title}</h2>
                            <p className="text-sm">{item.description}</p>
                        </div>
                        <div className="bg-[#222225]/30 ">
                            {item.form}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}