"use client";

import { Zap } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/dashboard/overview"} className="group justify-start  flex items-center z-50 gap-2 lg:w-64 w-full lg:p-2">
            <div className="bg-primary rounded-sm w-10 h-10 flex items-center justify-center relative  ">
                <Zap className="text-secondary transition-transform duration-300 group-hover:-scale-x-100" />
            </div>
            <div className="flex justify-start flex-col">
                <span className="font-display font-bold text-3xl">VENDPRO</span>
                <span className="font-display font-bold text-sm">Portal</span>
            </div>
        </Link>
    )
}