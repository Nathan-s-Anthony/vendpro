"use client";

import Link from "next/link";
import { LayoutDashboard, Package, Boxes, ChevronLeft, MapPin, DollarSign, ChevronRight } from "lucide-react";
import { useAside } from "../providers/asideProvider";


export default function Aside({ burgerMenuExpand, childUrl, userRole }: { burgerMenuExpand: boolean, childUrl: string, userRole: string }) {
    const { toggled, setToggle } = useAside();

    const navItems = [
        {
            id: 0,
            defaultSelected: true,
            name: "Overview",
            icon: <LayoutDashboard className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "overview",
            permission: ["admin", "manager", "operator"]
        },
        {
            id: 1,
            defaultSelected: false,
            name: "Your Machines",
            icon: <DollarSign width={25} height={25} className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "your-machines",
            permission: ["admin"]
        },
        {
            id: 2,
            defaultSelected: false,
            name: "Stock Levels",
            icon: <Package className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "stock-levels",
            permission: ["admin", "manager", "operator"],
            restockNotification: 5,
        },
        {
            id: 3,
            defaultSelected: false,
            name: "Source Cargo",
            icon: <Boxes className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            permission: ["admin", "manager", "operator"],
            page: "source-cargo",

        },
        {
            id: 4,
            defaultSelected: false,
            name: "Locations",
            icon: <MapPin className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            permission: ["admin", "manager", "operator"],
            page: "locations",

        },
    ]
    const handleCollapseDesktopMenu = () => {
        setToggle(!toggled);
    }
    return (
        <>
            {/* <MobileNavBar navItems={navItems} childUrl={childUrl} /> */}
            <aside className={`fixed hidden ${toggled ? "lg:w-14" : "lg:w-64"} ${burgerMenuExpand ? "flex" : "hidden"} bg-[#030213]/40 p-1 top-0 left-0 h-full z-40  lg:flex flex-col border-r border-border/30 transition-all duration-300`}>
                <div className="grid h-full grid-cols-2  mt-30 lg:mt-30 lg:p-2">
                    <div className="col-span-2">
                        <nav>
                            <ul className="w-full flex flex-col justify-start gap-4 items-baseline  h-full">
                                {navItems.filter((item) => !item.permission.includes(userRole)).map((item) => {
                                    return (
                                        <li key={item.id} className="group w-full rounded-sm">
                                            <Link
                                                scroll={false}
                                                className={`${item.page === childUrl ? "active" : "group-hover:bg-secondary"} block transition-all duration-300 `}
                                                href={`/dashboard/${item.page}`}>
                                                <div className="flex items-center justify-between relative">
                                                    <div className={`transition-all duration-300 flex items-center w-full ${toggled ? "justify-center" : ""}  min-h-12 relative`}>
                                                        {item.icon}
                                                        <span className={`${toggled ? "hidden " : "block absolute left-8"} ${item.page === childUrl ? "active-name  " : "text-secondary-faded "}   text-nowrap text-lg block font-bold transition-all duration-300 group-hover:translate-x-2 group-hover:text-white`}>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    {item.id === 2 ?
                                                        <div className="bg-alert-primary  absolute top-0 -right-5 lg:top-1 lg:right-12 rounded-full lg:w-5 lg:h-5  text-center flex items-center justify-center mr-2"><span className="text-white text-sm font-mono font-bold">{item.restockNotification}</span></div>
                                                        : null}
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className=" col-span-2  flex justify-end items-end ">
                        <div className="w-full text-end border-t border-border/30 flex items-center h-[20%]">
                            <button className="group hover:cursor-pointer transition-all duration-300 z-60 flex items-center justify-start gap-1 w-full" onClick={() => handleCollapseDesktopMenu()}>
                                {!toggled ?
                                    <ChevronLeft className="text-secondary-faded block transition-all duration-300 group-hover:-translate-x-2 group-hover:text-primary" />
                                    :
                                    <ChevronRight className="text-secondary-faded block transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary" />
                                }
                                <span className={`${toggled ? "hidden" : "block"} transition-all duration-300 text-sm  group-hover:-translate-x-1 font-sans text-secondary-faded group-hover:text-white`}>Collapse</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}