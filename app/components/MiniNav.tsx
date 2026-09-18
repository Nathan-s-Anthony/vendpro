"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./button";
import { logout } from "../actions/logout";
import { ChevronLeft, ChevronRight } from "lucide-react";


type NavItems = {
    id: number;
    link: string;
    name: string;
};

function setURL(id: number, link: string) {
    if (id === 0) {
        return (`/dashboard/profile`)
    }
    return (`/dashboard/profile/${link}`)
}

export default function MiniNav({ navItems }: { navItems: NavItems[] }) {
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName, 'pathname');

    return (
        <div className="container mx-auto py-4">
            <div className=" col-span-2  flex justify-end items-end ">
                <div className="w-full text-end  mt-4 mb-4 flex items-center h-[20%]">
                    <button className="group hover:cursor-pointer transition-all duration-300 z-60 flex items-center justify-start gap-1 w-full" onClick={() => router.back()}>
                        <ChevronLeft className="text-secondary-faded block transition-all duration-300 group-hover:-translate-x-2 group-hover:text-primary" />
                        <span className={` transition-all duration-300 text-sm  group-hover:-translate-x-1 font-sans text-secondary-faded group-hover:text-white`}>Back</span>
                    </button>
                </div>
            </div>
            <nav className=" w-full col-span-2 flex justify-start items-center ">
                <ul className="flex gap-4 ">
                    {navItems.map((item) => {
                        const itemLink = setURL(item.id, item.link);
                        return (
                            <li key={item.id} className="group">
                                <Link className={`font-mono capitalize ${pathName === itemLink ? "" : ""}`} href={`${item.id === 0 ? "/dashboard/profile" : `/dashboard/profile/${item.link}`}`} >
                                    {item.name}
                                    <div className={`${pathName === itemLink ? "flex" : "hidden"}  transition-all  duration-300  min-w-0  items-center  lg:pl-4 `}>
                                        <div className="bg-primary rounded-sm  h-2 w-10">
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {pathName === "/profile" && <Button value={"Logout"} action={() => logout()} type={"button"} className={"rounded-full"} variant={"primary"} />}
            </nav>
        </div>
    )
}