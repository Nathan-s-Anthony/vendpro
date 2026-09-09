import Bars from "@/app/components/bars";
import Card from "@/app/components/card/card";
import Graph from "@/app/components/graphs/barChart";
import LegendEffectOpacity from "@/app/components/graphs/lineChart";
import Panel from "@/app/components/panels/panel";
import { Bar } from "@/app/types/barTypes";
import { Zap, Construction, Package } from "lucide-react";
export default function Overview() {
    const stats = [
        {
            id: 0,
            title: "Active Machines",
            value: "3",
            icon: <Zap className="w-8 h-8 text-orange-400" />
        },
        {
            id: 1,
            title: "Under Maintenance",
            value: "5",
            icon: <Construction className="w-8 h-8 text-yellow-400" />
        },
        {
            id: 2,
            title: "Avg Stock Level",
            value: "54%",
            icon: <Package className="w-8 h-8 text-blue-400" />
        },
        {
            id: 3,
            title: "Revenue Growth per machine",
            value: "$12,345",
            icon: <Zap className="w-8 h-8 text-orange-400" />
        }
    ]

    const stockLevel = [
        { name: "Jan", stock: 5000, sales: 4000 },
        { name: "Feb", stock: 4500, sales: 3000 },
        { name: "Mar", stock: 3500, sales: 2000 },
        { name: "Apr", stock: 4000, sales: 2780 },
    ];
    const data = [
        {
            id: 0,
            value: 78,
            text: "Drinks",
            total: 100,
        },
        {
            id: 1,
            value: 50,
            text: "Food Level",
            total: 100,

        }
    ] satisfies Bar[];
    return (
        <Panel className="z-20" heading={"overview"} subHeading={"GROWING YOUR EMPIRE TAKES TIME"} pageName={"overview"}>
            <div className="grid lg:grid-cols-4 z-20 grid-cols-2 gap-4 mt-4 mb-4 ">
                {stats.map((item, id) => {
                    return (
                        <Card fullWidth key={id} title={item.title} value={item.value} icon={item.icon} id={item.id} />
                    )
                })}
            </div>
            <h2 className="mb-4 mt-4">Current Stock levels</h2>
            <div className="flex justify-between flex-wrap w-full">
                <Graph data={stockLevel} />
                <LegendEffectOpacity />
            </div>
            <div className=" flex flex-wrap lg:flex-nowrap  justify-between  gap-4 mt-4">
                <div className="w-full col-span-1 bg-[#222225]/30 border border-border/30  p-4 rounded-sm  hover:border-primary/50 cursor-pointer">
                    <div className="flex items-center justify-between ">
                        <h2 className="text-3xl mb-4 mt-4 p-2 ">MACHINE STATUS</h2>
                    </div>
                    <div className="bg-[#222225]/30">
                        <Bars data={data} />
                    </div>
                </div>
                <div className="w-full  col-span-1 bg-[#222225]/30 p-4 rounded-sm border border-border/30  hover:border-primary/50 cursor-pointer">
                    <h2 className="text-3xl mb-4 mt-4 p-2 ">RECENT ACTIVITY</h2>
                </div>
            </div>
        </Panel>
    )
}