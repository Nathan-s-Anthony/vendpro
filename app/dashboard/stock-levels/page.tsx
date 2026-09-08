import Panel from "@/app/components/panels/panel";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function StockLevels() {


    return (
        <Panel heading={"Stock levels"} pageName={"stock-levels"} subHeading={"stay on top of your stock"} highlight={""}>
            <div className="grid lg:grid-cols-3 grid-cols-3  gap-4  rounded-sm min-h-30">
                <div className="bg-green-500/10 text-green-400 lg:h-full flex justify-center items-center border-green-500/20"><div><span className="font-display font-bold text-white">6</span><span>Well Stocked</span></div></div>
                <div className="bg-yellow-500/10 text-yellow-400 justify-center  flex items-center lg:h-full border-yellow-500/20"><div><span className="font-display font-bold text-white">2</span><span>Running Low</span></div></div>
                <div className="bg-alert-primary/10 text-alert-primary lg:h-full h-30   border-alert-primary/20">
                    <div className="flex lg:h-full h-full justify-center items-center gap-2">
                        <span>Critical -</span>
                        <Link href={"#"} className=" flex items-center text-alert-primary underline underline-offset-4 group" ><div><span className="font-display font-bold text-white">1</span><span>Restock Now</span></div>
                            <ChevronRight className="mt-1 text-alert-primary block transition-all duration-300 group-hover:translate-x-2 " />
                        </Link>
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