"use client";

import Link from "next/link";

export default function Form() {
    return (
        <div className="bg-red-500  lg:w-64  m-auto rounded-sm">
            <Link href={"/dashboard/overview"} className="justify-start  flex items-center z-50 gap-2 lg:w-64 w-full lg:p-2">
                <div className="bg-primary rounded-sm w-10 h-10 block relative  ">
                    <div className="absolute inset-0 m-auto h-3 rounded-full w-3 bg-background">
                    </div>
                </div>
                <div className="flex justify-start flex-col">
                    <span className="font-display font-bold text-3xl">VENDPRO</span>
                    <span className="font-display font-bold text-sm">Portal</span>
                </div>
            </Link>
        </div>


    )
}