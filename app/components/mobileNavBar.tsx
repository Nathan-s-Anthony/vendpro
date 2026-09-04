"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { useAside } from "../providers/asideProvider";

export default function MobileNavBar({ navItems, userRole, childUrl }: {

    navItems: [
        {
            id: number,
            name: string,
            permission: string,
            page: string,
            icon: ReactNode,
            restockNotification: string,
        },
    ], userRole: string, childUrl: string,
}) {
    const { toggled } = useAside();
    return (
        <div className="bg-background fixed bottom-0 z-50 w-2/3 left-0 right-0 mx-auto   rounded-tr-lg rounded-tl-lg">
            <ul className="grid grid-cols-5 p-4">
                {navItems.filter((item) => !item.permission.includes(userRole)).map((item) => {
                    return (
                        <li key={item.id} className="group w-full items-center rounded-sm">
                            <Link
                                scroll={false}
                                className={`${item.page === childUrl ? "active" : "group-hover:bg-secondary"}  rounded-full block transition-all duration-300 `}
                                href={`/dashboard/${item.page}`}
                            >
                                <div className="flex items-center justify-between relative">
                                    <div className={`transition-all duration-300 flex items-center w-full ${toggled ? "justify-center" : ""} justify-center  min-h-12 relative`}>
                                        {item.icon}
                                        {/* <span className={`${toggled ? "hidden " : "block absolute left-8"} ${item.page === childUrl ? "active-name  " : "text-secondary-faded "}   text-nowrap text-lg block font-bold transition-all duration-300 group-hover:translate-x-2 group-hover:text-white`}>
                                        {item.name}
                                    </span> */}
                                    </div>
                                    {item.id === 2 ?
                                        <div className="bg-alert-primary lg:relative absolute top-0 right-0 rounded-full lg:w-7 lg:h-7 h-5 w-5 text-center flex items-center justify-center mr-2"><span className="text-white text-sm font-mono font-bold">{item.restockNotification}</span></div>
                                        : null}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}