// import Card from "@/app/components/card";
import Panel from "@/app/components/panel";
import Image from "next/image";
import { Check } from "lucide-react";
export default function SourceCargo({ imageSrc, className }: { imageSrc: string, className: string }) {
    return (
        // overflow - auto grid - cols - 3 grid gap - 4
        <Panel heading="Source Cargo" subHeading="Get a bang for your buck" className="">
            <h2 className="mb-6">Click the  retailers you want  to source from</h2>
            <div className="relative w-fit">
                <div className="absolute w-full h-full inset-0 bg-background/50 z-10 flex items-center cursor-pointer justify-center"><Check width={60} height={60} /></div>
                <div className={`bg-[#fd0] rounded-sm relative w-40 h-40 flex items-center p-4 cursor-pointer`}>
                    <Image src={"/makroLogo.png"} alt="" width={250} height={250} className="" />
                </div>
            </div>
            <div className="relative w-fit">
                <div className="absolute w-full h-full inset-0 bg-background/50 z-10 flex items-center cursor-pointer justify-center"><Check width={60} height={60} /></div>
                <div className={`bg-[#fd0] rounded-sm relative w-40 h-40 flex items-center p-4 cursor-pointer`}>
                    <Image src={"/makroLogo.png"} alt="" width={250} height={250} className="" />
                </div>
            </div>
            <div className="relative w-fit">
                <div className="absolute w-full h-full inset-0 bg-background/50 z-10 flex items-center cursor-pointer justify-center"><Check width={60} height={60} /></div>
                <div className={`bg-[#fd0] rounded-sm relative w-40 h-40 flex items-center p-4 cursor-pointer`}>
                    <Image src={"/makroLogo.png"} alt="" width={250} height={250} className="" />
                </div>
            </div>
            <p className="font-mono">The following retailers will be used: <span className="font-bold">Makro</span>, <span className="font-bold">Takealot</span>,<span className="font-bold"></span> and <span className="font-bold">Engine</span></p>
            <button className="bg-secondary-faded font-mono font-bold px-4 py-2 rounded-sm cursor-pointer">Confirm selection</button>
            <button className="bg-secondary-faded font-mono font-bold px-4 py-2 rounded-sm cursor-pointer">Cancel</button>
            <button className="bg-secondary-faded font-mono font-bold px-4 py-2 rounded-sm cursor-pointer">Save Query </button>

        </Panel>
    )
}