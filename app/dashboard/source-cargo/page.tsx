// import Card from "@/app/components/card";
import Panel from "@/app/components/panel";
export default function SourceCargo({ imageSrc, className }: { imageSrc: string, className: string }) {
    return (
        <Panel heading="Source Cargo" subHeading="Get a bang for your buck" btnValue={"View"} className={""}>
            <h2 className="mb-6">Click the  retailers you want  to source from</h2>
            <p className="font-mono">The following retailers will be used: <span className="font-bold">Makro</span>, <span className="font-bold">Takealot</span>,<span className="font-bold"></span> and <span className="font-bold">Engine</span></p>
            <button className="bg-secondary-faded font-mono font-bold px-4 py-2 rounded-sm cursor-pointer">Confirm selection</button>
            <button className="bg-secondary-faded font-mono font-bold px-4 py-2 rounded-sm cursor-pointer">Cancel</button>
            <button className="bg-secondary-faded font-mono font-bold px-4 py-2 rounded-sm cursor-pointer">Save Query </button>
        </Panel>
    )
}