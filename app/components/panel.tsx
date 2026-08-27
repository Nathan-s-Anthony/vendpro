import Button from "./button";
import SubHeading from "./subHeading";

export default function Panel({ heading, children, subHeading, desktopMenuCollapsed, className, btnValue }:
    {
        heading: string, subHeading: string, children: React.ReactNode,
        desktopMenuCollapsed?: boolean, className: string, btnValue: string,
    }) {
    return (
        <div className="mt-6 p-6 transition-all duration-300 ">
            <div className="flex items-start flex-col justify-center">
                <div className="flex items-center justify-between w-full ">
                    <SubHeading heading={heading} subHeading={subHeading} />
                    <Button value={btnValue} className="" />
                </div>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}