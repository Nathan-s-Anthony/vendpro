export default function Panel({ heading, children, subHeading }: { heading: string, subHeading: string, children: React.ReactNode }) {
    return (
        <div className="mt-6 p-6">
            <div className="flex items-start flex-col justify-center">
                <span className="text-primary font-mono font-bold -mb-6 uppercase">{subHeading}</span>
                <h1 className="mb-6 capatialize">{heading}</h1>
            </div>
            <div className="overflow-auto grid-cols-3 grid gap-4">
                {children}
            </div>
        </div>
    )
}