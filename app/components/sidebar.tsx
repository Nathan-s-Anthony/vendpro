"use client";
import Link from "next/link";
import { LayoutDashboard, Package, Boxes, ChevronLeft, MapPin, DollarSign } from "lucide-react";
import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
export default function SideBar({ burgerMenuExpand }: { burgerMenuExpand: boolean }) {
    const [active, setActive] = useState(true);
    const pathname = usePathname();
    const childUrl = pathname.split("/")[2];
    const params = useParams()
    const navItems = [
        {
            id: 0,
            defaultSelected: true,
            name: "Overview",
            icon: <LayoutDashboard className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "overview",

        },
        {
            id: 1,
            defaultSelected: false,
            name: "Your Machines",
            icon: <DollarSign className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "your-machines",

        },
        {
            id: 2,
            defaultSelected: false,
            name: "Stock Levels",
            icon: <Package className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "stock-levels",
            restockNotification: 5,
        },
        {
            id: 3,
            defaultSelected: false,
            name: "Source Cargo",
            icon: <Boxes className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "source-cargo",

        },
        {
            id: 4,
            defaultSelected: false,
            name: "Locations",
            icon: <MapPin className=" transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />,
            page: "locations",

        },
    ]
    return (
        <>
            <aside className={`fixed ${burgerMenuExpand ? "flex" : "hidden"}   top-0 left-0 h-full z-40 lg:w-64 lg:flex flex-col border-r border-border/30 transition-all duration-300`}>
                <div className="grid h-full grid-cols-2  mt-30 lg:mt-30 lg:p-2">
                    <div className="col-span-2">
                        <nav>
                            <ul className="w-full flex flex-col justify-start gap-4 items-baseline  h-full">
                                {navItems.map((item, id) => {
                                    return (
                                        <li key={item.id} className="group w-full rounded-sm">
                                            <Link
                                                scroll={false}
                                                className={`${item.page === childUrl ? "active" : "group-hover:bg-secondary"} block transition-all duration-300 `}
                                                href={`/dashboard/${item.page}`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center justify-between">
                                                        {item.icon}
                                                        <span className={`${item.page === childUrl ? "active-name" : "text-secondary-faded"} text-lg block p-2 font-bold  transition-all duration-300 group-hover:translate-x-2 group-hover:text-white`}>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    {item.id === 2 ?
                                                        <div className="bg-alert-primary rounded-full w-7 h-7 text-center flex items-center justify-center mr-2"><span className="text-white text-sm font-mono font-bold">{item.restockNotification}</span></div>
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
                            <button className="group  hover:cursor-pointer transition-all duration-300 z-60 flex items-center justify-start gap-1 w-full">
                                <ChevronLeft className="text-secondary-faded block transition-all duration-300 group-hover:-translate-x-2 group-hover:text-primary" />
                                <span className="transition-all duration-300 text-sm  group-hover:-translate-x-1 font-sans text-secondary-faded group-hover:text-white">Collapse</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}