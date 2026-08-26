import Card from "./card";

export default function Panel({ heading }: { heading: string }) {
    return (
        <div className="">
            <div className="flex items-start flex-col justify-center">
                <span className="text-primary font-mono font-bold -mb-6">DASHBOARD</span>
                <h1 className="mb-6">{heading}</h1>
            </div>
            <div className="overflow-auto grid-cols-3 grid gap-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}