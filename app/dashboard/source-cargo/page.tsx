import Card from "@/app/components/card";
import Panel from "@/app/components/panel";
import Image from "next/image";
export default function SourceCargo({ imageSrc, className }: { imageSrc: string, className: string }) {
    return (
        // overflow - auto grid - cols - 3 grid gap - 4
        <Panel heading="Source Cargo" subHeading="Get a bang for your buck" className="">
            <h2 className="mb-6">Choose your retailers to source from</h2>
            <div>
                <div className={`bg-[#fd0] rounded-sm relative w-40 h-40 flex items-center p-4 cursor-pointer`}>
                    <Image src={"/makroLogo.png"} alt="" width={250} height={250} className="" />
                </div>
            </div>
        </Panel>
    )
}