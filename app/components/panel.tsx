"use client";

import { logout } from "../api/services/logout";
import Button from "./button";
import SubHeading from "./subHeading";

export default function Panel({ heading, subHeading, highlight, children, desktopMenuCollapsed, className, btnValue, action }:
    {
        heading: string, subHeading: string, children: React.ReactNode,
        desktopMenuCollapsed?: boolean, className: string, btnValue: string,
        highlight: string,
        action?: () => void
    }) {

    return (
        <div className="mt-6 p-6 transition-all duration-300 ">
            <div className="flex items-start flex-col justify-center">
                <div className="flex items-center justify-between w-full ">
                    <SubHeading heading={{
                        main: heading,
                        highlight: highlight
                    }} subHeading={subHeading} />
                    <Button value={btnValue} action={() => action} className="mt-4 mb-4" variant={"secondary"} type={"button"} />
                </div>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}