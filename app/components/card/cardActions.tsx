export default function CardActions({ id, className, onMouseEnter, onMouseLeave }: { id: number, className: string, onMouseEnter: () => void, onMouseLeave: () => void }) {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${className} cursor-pointer bg-primary/90 absolute block w-full  -z-10  inset-0  h-full rounded-sm`}>
            <div>Request Technicial</div>
            <div>Let your AI crunch the numbers</div>
        </div>
    )
}