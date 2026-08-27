"use client";

import Link from "next/link";
import Pill from "./pill";
import { Bell, CircleUser, Zap } from "lucide-react";
import { useRouter } from 'next/navigation';
import Button from "./button";

export default function Header({ className, burgerMenuClick, pageNavName }: { className: string, burgerMenuClick: () => void, pageNavName: string }) {
    const router = useRouter();
    console.log(pageNavName, "page nav name");

    const handleMouseEnterProfile = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        console.log(e, "mouse entering");
    };
    return (
        <header className={`${className} flex items-center  p-1 justify-between  h-20 border-b border-border/30 w-full `}>
            <Link href={"/dashboard/overview"} className="group justify-start  flex items-center z-50 gap-2 lg:w-64 w-full lg:p-2">
                <div className="bg-primary rounded-sm w-10 h-10 flex items-center justify-center relative  ">
                    <Zap className="text-secondary transition-transform duration-300 group-hover:-scale-x-100" />
                </div>
                <div className="flex justify-start flex-col">
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
            <div className="font-mono min-w-0 flex items-center gap-2 transition-all duration-300 cursor-pointer lg:pr-4">
                <span><b className="text-primary">Casino Manager? </b>Visit our <b className="text-primary">dedicated platform</b></span>
                <Link href={"/slotspro"}>slotspro.co.za</Link>
                <Button value={"View Login Route"} className="lg:mr-5" action={() => router.push("/login")} />
                <div onMouseEnter={handleMouseEnterProfile}>
                    <Link href={"/dashboard/profile"} className={`group ${pageNavName === "profile" ? "active-name" : "text-secondary-faded"} flex items-center justify-center gap-2 text-sm   `}>
                        <CircleUser onClick={() => router.push("/dashboard/profile")} className="transition-all duration-300 w-5 h-5 group-hover:text-primary" />
                        <small className="transition-all duration-300  group-hover:text-primary font-bold mt-0.5">Nathan Anthony</small>
                    </Link>
                </div>
                <Bell className=" transition-all duration-300 text-sm text-secondary-faded hover:-translate-y-0.5  hover:text-primary  w-5 h-5 lg:mr-5 cursor-pointer" />
                <Pill name="LIVE" />
            </div>
            <div className="lg:hidden">
                <div>
                    <svg onClick={burgerMenuClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </header >
    )
}