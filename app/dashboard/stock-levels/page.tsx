import Panel from "@/app/components/panels/panel";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function StockLevels() {

    return (
        <Panel heading={"Stock levels"} pageName={"stock-levels"} subHeading={"stay on top of your stock"} highlight={""}>
            <div className="grid lg:grid-cols-3 grid-cols-3  gap-4  rounded-sm min-h-30">
                <div className="bg-green-500/20  p-4  text-secondary-faded lg:h-full flex justify-start  items-center border-green-500/20"><div className="flex flex-col"><span className="font-display font-bold text-green-400 text-3xl ">6</span><span>Well Stocked</span></div></div>
                <div className="bg-yellow-500/10  p-4  text-secondary-faded justify-start flex items-center lg:h-full border-yellow-500/20"><div className="flex flex-col"><span className="font-display font-bold text-yellow-400 text-3xl ">2</span><span>Running Low</span></div></div>
                <div className="bg-alert-primary/10  p-4 justify-start flex items-cente  text-secondary-faded lg:h-full h-30   border-alert-primary/20">
                    <div className="flex  flex-col lg:h-full h-full justify-start items-center gap-2">
                        <div className="">
                            <div className="flex justify-start items-start flex-col">
                                <span className="font-display font-bold text-alert-primary text-3xl ">1</span>
                                <span>Critical</span>
                            </div>
                            <div className="flex flex-col">
                                <Link href={"#"} className=" flex items-center text-alert-primary underline underline-offset-4 group" ><div className="flex flex-col"><span>Restock Now</span></div>
                                    <ChevronRight className="mt-1 text-alert-primary block transition-all duration-300 group-hover:translate-x-2 " />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bg-[#222225]/30 border border-border/30 min-h-100 mt-4 ">
                <div className="p-4">
                    <h2 className="mb-4">ALL LOCATIONS</h2>
                    <div className="border-b border-t border-border/30 flex items-center justify-between p-2">
                        <span className="text-secondary-faded font-mono text-xs">LOCATION</span>
                        <span className="text-secondary-faded font-mono text-xs">DRINKS</span>
                        <span className="text-secondary-faded font-mono text-xs">SNACKS</span>
                        <span className="text-secondary-faded font-mono text-xs">LAST RESTOCK</span>
                        <span className="text-secondary-faded font-mono text-xs">NEXT RESTOCK</span>
                    </div>
                    <div className="bg-red-500 p-4">
                        test
                    </div>
                </div>
            </div>
        </Panel >
    )
}