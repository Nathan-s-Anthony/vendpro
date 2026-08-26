"use client";

import Link from "next/link";
import Pill from "./pill";
import { Bell, CircleUser } from "lucide-react";
import { dateDayMonthYear } from "../utils/date";
import { useRouter } from 'next/navigation';

export default function Header({ className, burgerMenuClick, pageNavName }: { className: string, burgerMenuClick: () => void, pageNavName: string }) {
    const router = useRouter()
    return (
        <header className={`${className} flex items-center justify-between  h-20 border-b border-border/30 w-full `}>
            <Link href={"/dashboard#overview"} className="justify-start  flex items-center z-50 gap-2 lg:w-64 w-full">
                <div className="bg-primary rounded-sm w-10 h-10 block relative  ">
                    <div className="absolute inset-0 m-auto h-3 rounded-full w-3 bg-background">
                    </div>
                </div>
                <div className="flex justify-start flex-col ">
                    <span className="font-display font-bold text-3xl">VENDPRO</span>
                    <span className="font-display font-bold text-sm">Portal</span>
                </div>
            </Link>
            <div className=" min-w-0 flex items-center flex-1  lg:pl-4">
                <div className="bg-primary rounded-sm h-7 w-2">
                </div>
                <span className="font-bold font-mono text-3xl text-left p-2 uppercase">
                    {pageNavName}
                </span>
            </div>
            <div className=" min-w-0 flex items-center gap-2  lg:pr-4">
                <CircleUser onClick={() => router.push("/dashboard/profile")} className=" transition-all duration-300 text-sm text-secondary-faded hover:-translate-y-0.5  hover:text-primary  w-5 h-5 lg:mr-5 cursor-pointer" />
                <Bell className=" transition-all duration-300 text-sm text-secondary-faded hover:-translate-y-0.5  hover:text-primary  w-5 h-5 lg:mr-5 cursor-pointer" />
                <Pill name="LIVE" />
                <span className="text-sm text-secondary-faded font-mono">{dateDayMonthYear}</span>
            </div>
            <div className="lg:hidden">
                <div>
                    <svg onClick={burgerMenuClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </header>
    )
}