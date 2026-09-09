"use client";

import Link from "next/link";
import BuyOrderForm from "./formTemplates/buyOrder";

export default function BuyOrder() {
    return (
        <div className=" flex flex-wrap lg:flex-nowrap  justify-between  gap-4 mt-4">
            <div className="w-full col-span-1 bg-[#222225]/30 border border-border/30  p-4 rounded-sm  hover:border-primary/50 cursor-pointer">
                <div className="flex items-center justify-between ">
                    <h2 className="text-3xl mb-4 mt-4 p-2 ">General Buy Order</h2>
                </div>
                <div className="bg-[#222225]/30">
                    <BuyOrderForm />
                </div>
            </div>
        </div>
    )
}