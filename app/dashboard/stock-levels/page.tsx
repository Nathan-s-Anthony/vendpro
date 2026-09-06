import Panel from "@/app/components/panels/panel";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function StockLevels() {


    return (
        <Panel heading={"Stock levels"} pageName={"stock-levels"} subHeading={"stay on top of your stock"} highlight={""}>
            <div className="grid grid-cols-3 gap-4 rounded-sm min-h-30">
                <div className="bg-green-500/10 text-green-400 h-full flex justify-center items-center border-green-500/20"><span>Well Stocked</span></div>
                <div className="bg-yellow-500/10 text-yellow-400 justify-center  flex items-center h-full border-yellow-500/20"><span>Running Low</span></div>
                <div className="bg-alert-primary/10 text-alert-primary h-full   border-alert-primary/20">
                    <div className="flex h-full justify-center items-center gap-2">
                        <span>Critical -</span>
                        <Link href={"#"} className=" flex items-center text-alert-primary underline underline-offset-4 group" ><span>Restock now</span>
                            <ChevronRight className="mt-1 text-alert-primary block transition-all duration-300 group-hover:translate-x-2 " />
                        </Link>
                    </div>
                </div>
            </div>
        </Panel>
    )
}