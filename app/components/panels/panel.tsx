"use client";

import SubHeading from "../subHeading";
import PanelActions from "./panelActions";

export default function Panel({ heading, subHeading, highlight, children, pageName, disableHeadings }:
    {
        heading: string, subHeading: string, children: React.ReactNode,
        desktopMenuCollapsed?: boolean, className?: string,
        highlight?: string,
        pageName: string,
        action?: () => void,
        disableHeadings?: boolean,
    }) {

    return (
        <div className="container">
            <div className="flex items-start flex-col justify-center ">
                <div className="flex items-center justify-between w-full ">
                    {!disableHeadings && (
                        <>
                            <SubHeading heading={{
                                main: heading,
                                highlight: highlight
                            }} subHeading={subHeading} />
                            <PanelActions page={pageName} />
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    )
}