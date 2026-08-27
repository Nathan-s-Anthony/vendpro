export default function heading({ heading, subHeading }: { heading: string, subHeading: string }) {
    return (
        <div>
            <span className="text-primary font-mono font-bold italic uppercase">{subHeading}</span>
            <h1 className="capitalize ">{heading}</h1>
        </div>
    )
}