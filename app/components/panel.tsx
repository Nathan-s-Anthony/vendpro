"use client";

import SubHeading from "./subHeading";
import PanelActions from "./panelActions";

export default function Panel({ heading, subHeading, highlight, children, className }:
    {
        heading: string, subHeading: string, children: React.ReactNode,
        desktopMenuCollapsed?: boolean, className?: string,
        highlight?: string,
        action?: () => void
    }) {

    return (
        <div className="container">
            <div className="flex items-start flex-col justify-center">
                <div className="flex items-center justify-between w-full ">
                    <SubHeading heading={{
                        main: heading,
                        highlight: highlight
                    }} subHeading={subHeading} />
                    <PanelActions page={""} />
                </div>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}