"use client";

import { Zap } from "lucide-react";
import { useAside } from "../providers/asideProvider";


export default function Logo({ variant, className }: { variant: "large" | "normal", className: string }) {
    const { toggled } = useAside();
    return (

        <div className={`group justify-start flex items-center z-50 gap-2 ${toggled ? "" : "lg:w-64 "} transition-all duration-300  lg:p-2`}>
            <div className="bg-primary rounded-sm w-8 h-8 flex items-center justify-center lg:mt-1.5 relative">
                <Zap className="text-secondary transition-transform duration-300 group-hover:-scale-x-100" />
            </div>
            <div className="flex justify-start flex-col items-center">
                <span className={` ${className} font-display font-bold ${variant === "large" ? "text-5xl " : "text-3xl"} `}>VENDPRO</span>
            </div>
        </div>
    )
}