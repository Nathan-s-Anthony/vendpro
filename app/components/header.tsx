"use client";

import Link from "next/link";
import Pill from "./pill";
import { Bell, CircleUser } from "lucide-react";
import Logo from "./logo";
import { useGetUserQuery } from "../api/services/rtk-query/createApi";
import { useUser } from "../providers/userProvider";
import { useAside } from "../providers/asideProvider";


export default function Header({ className, burgerMenuClick, pageNavName }: { className: string, burgerMenuClick: () => void, pageNavName: string }) {
    const { data, isLoading, isError, } = useGetUserQuery();
    const { firstName, role, userId } = useUser();
    const { toggled } = useAside();
    const handleMouseEnterProfile = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e, "mouse entering");
    };

    return (
        <header className={`${className} flex items-center p-1 justify-between  h-20 border-b border-border/30 w-full `}>
            <Logo variant="normal" className={`${toggled ? "hidden" : "in"}`} />
            <div className=" min-w-0 hidden lg:flex items-center flex-1  lg:pl-4 l">
                <div className="bg-primary rounded-sm h-7 w-2">
                </div>
                <span className="hidden lg:block font-bold font-mono text-3xl text-left p-2 uppercase">
                    {pageNavName}
                </span>
            </div>
            <div className="font-mono min-w-0 flex lg:justify-end justify-end gap-6 pr-6 items-center  transition-all duration-300 cursor-pointer  w-full lg:w-auto  lg:pr-4">
                <div onMouseEnter={handleMouseEnterProfile}>
                    <Link href={"/dashboard/profile"} className={`group ${pageNavName === "profile" ? "active-name" : "text-secondary-faded"} flex items-center justify-center gap-2 text-sm   `}>
                        <CircleUser className="transition-all duration-300 lg:w-5 lg:h-5 h-7 w-7 group-hover:text-primary" />
                        <div className="lg:flex hidden flex-col  ">
                            <span className="transition-all duration-300  group-hover:text-primary font-bold mt-0.5">{firstName}</span>
                        </div>
                    </Link>
                </div>
                <Bell className=" transition-all duration-300 text-sm text-secondary-faded hover:-translate-y-0.5  hover:text-primary  lg:w-5 lg:h-5 h-7 w-7 lg:mr-5 cursor-pointer" />
                <Pill name="LIVE" />
            </div>
        </header >
    )
}