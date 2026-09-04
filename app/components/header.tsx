"use client";

import Link from "next/link";
import Pill from "./pill";
import { Bell, CircleUser } from "lucide-react";
import Logo from "./logo";
import { useUser } from "../providers/userProvider";
import { useGetUserQuery } from "../api/services/rtk-query/createApi";
import { useEffect } from "react";

export default function Header({ className, burgerMenuClick, pageNavName, userID, userRole }: { className: string, burgerMenuClick: () => void, pageNavName: string, userID: string, userRole: string }) {
    const { data, isLoading, isError, } = useGetUserQuery();

    const { setUserId, setName, setRole, name, role, userId } = useUser();

    const handleMouseEnterProfile = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e, "mouse entering");
    };
    useEffect(() => {
        if (data) {
            setUserId(data.id);
            setName(data.name);
            setRole("admin");
        }
    }, [data, setUserId, setName, setRole]);

    return (
        <header className={`${className} flex items-center  p-1 justify-between  h-20 border-b border-border/30 w-full `}>
            <Logo variant="normal" />
            <div className=" min-w-0 flex items-center flex-1  lg:pl-4">
                <div className="bg-primary rounded-sm h-7 w-2">
                </div>
                <span className="font-bold font-mono text-3xl text-left p-2 uppercase">
                    {pageNavName}
                </span>
            </div>
            <div className="font-mono min-w-0 flex items-center gap-2 transition-all duration-300 cursor-pointer lg:pr-4">
                <span><b className="text-primary">Casino Manager? </b>Visit our <b className="text-primary">dedicated platform</b></span>
                <Link href={"/slotspro"}>   </Link>
                <div onMouseEnter={handleMouseEnterProfile}>
                    <Link href={"/dashboard/profile"} className={`group ${pageNavName === "profile" ? "active-name" : "text-secondary-faded"} flex items-center justify-center gap-2 text-sm   `}>
                        <CircleUser className="transition-all duration-300 w-5 h-5 group-hover:text-primary" />
                        <div className="flex flex-col">
                            <small className="transition-all duration-300  group-hover:text-primary font-bold mt-0.5">{name} - {userId}</small>
                            <small className="transition-all duration-300 text-white  group-hover:text-primary font-bold mt-0.5">-{role} </small>
                        </div>
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