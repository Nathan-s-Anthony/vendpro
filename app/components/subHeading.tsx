export default function Heading({ heading, subHeading, icon }: { heading: { main: string, highlight?: string }, subHeading: string, icon?: React.ReactNode }) {
    return (
        <div>
            <div className="flex flex-1 gap-2 mt-4">
                {icon && icon}
                <span className="text-primary font-mono font-medium uppercase ">{subHeading}</span>
            </div>
            <h1 className={`uppercase lg:text-6xl ${icon && icon ? " lg:max-w-62" : "lg:w-full"}  mb-4`}>{heading.main} <b className="text-primary">{heading.highlight}</b></h1>
        </div>
    )
}