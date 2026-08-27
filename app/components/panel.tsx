import Button from "./button";

export default function Panel({ heading, children, subHeading, desktopMenuCollapsed, className, btnValue }: { heading: string, subHeading: string, children: React.ReactNode, desktopMenuCollapsed?: boolean, className: string, btnValue: string }) {
    return (
        <div className="mt-6 p-6 transition-all duration-300 ">
            <div className="flex items-start flex-col justify-center">
                <div className="flex items-center justify-between w-full ">
                    <span className="text-primary  font-mono font-bold -mb-6 uppercase">{subHeading}</span>
                    <Button value={btnValue} />
                </div>
                <h1 className="mb-6 capatialize">{heading}</h1>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}