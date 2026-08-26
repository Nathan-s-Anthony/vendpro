export default function Panel({ heading, children, subHeading, desktopMenuCollapsed, className }: { heading: string, subHeading: string, children: React.ReactNode, desktopMenuCollapsed?: boolean, className: string }) {
    return (
        <div className="mt-6 p-6 transition-all duration-300 ">
            <div className="flex items-start flex-col justify-center">
                <span className="text-primary font-mono font-bold -mb-6 uppercase">{subHeading}</span>
                <h1 className="mb-6 capatialize">{heading}</h1>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}