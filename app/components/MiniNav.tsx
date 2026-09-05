"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

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
export default function miniNav({ navItems }: { navItems: NavItems[] }) {
    const pathName = usePathname();
    console.log(pathName, 'pathname');
    return (
        <nav className=" w-full col-span-2 flex justify-between">
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
            <Button value={"Upgrade"} type={"button"} className={"rounded-full"} variant={"primary"} />
        </nav>
    )
}