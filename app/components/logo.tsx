"use client";

import { Zap } from "lucide-react";
import Link from "next/link";

export default function Logo({ variant }: { variant: "large" | "normal" }) {
    return (
        <Link href={"/dashboard/overview"} className={`group justify-start flex items-center z-50 gap-2 lg:w-64 w-full lg:p-2`}>
            <div className="bg-primary rounded-sm w-9 h-9 flex items-center justify-center lg:mt-1.5 relative">
                <Zap className="text-secondary transition-transform duration-300 group-hover:-scale-x-100" />
            </div>
            <div className="flex justify-start flex-col items-center">
                <span className={`font-display font-bold ${variant === "large" ? "text-5xl " : "text-3xl"} `}>VENDPRO</span>
            </div>
        </Link>
    )
}