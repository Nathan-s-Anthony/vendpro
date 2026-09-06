import Card from "@/app/components/card/card";
import Graph from "@/app/components/graphs";
import Panel from "@/app/components/panels/panel";
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
    const data = [
        {
            name: 'Coca Cola',
            uv: 400,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Chips',
            uv: 200,
            pv: 1400,
            amt: 400,
        },
        {
            name: 'Chocolate Bars',
            uv: 400,
            pv: 1500,
            amt: 2400,
        },
        {
            name: 'Energy Drinks',
            uv: 700,
            pv: 100,
            amt: 1000,
        },
    ]

    const stockLevel = [
        { name: "Jan", stock: 5000, sales: 4000 },
        { name: "Feb", stock: 4500, sales: 3000 },
        { name: "Mar", stock: 3500, sales: 2000 },
        { name: "Apr", stock: 4000, sales: 2780 },
    ];

    return (
        <Panel className="z-20" heading={"overview"} subHeading={"GROWING YOUR EMPIRE TAKES TIME"} pageName={"overview"}>
            <h2 className="mb-4 mt-4">Current Stock levels</h2>
            <Graph data={stockLevel} />
            <div className="grid lg:grid-cols-4 z-20 grid-cols-2 gap-4 mt-20 mb-4  pr-6 pl-6">
                {stats.map((item, id) => {
                    return (
                        <Card fullWidth key={id} title={item.title} value={item.value} icon={item.icon} id={item.id} />
                    )
                })}
            </div>
            <div className="grid grid-cols-2 w-full gap-4 mt-4 pr-6 pl-6 ">
                <div className=" col-span-1 bg-secondary p-4 rounded-sm border border-border/30  hover:border-primary/50 cursor-pointer">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl mb-4 mt-4 p-2 ">MACHINE STATUS</h2>
                        <small className="text-secondary-faded text-sm rounded-sm bg-[#030213]/40 p-4">8 Locations</small>
                    </div>
                    <Card title={"Active Machines"} value={"3"} fullWidth icon={<Zap className="w-8 h-8 text-orange-400" />} statsTile />
                </div>
                <div className=" col-span-1 bg-secondary p-4 rounded-sm border border-border/30  hover:border-primary/50 cursor-pointer">
                    <h2 className="text-3xl mb-4 mt-4 p-2 ">RECENT ACTIVITY</h2>
                    <Card title={"Active Machines"} value={"3"} fullWidth icon={<Zap className="w-8 h-8 text-orange-400" />} statsTile />
                </div>
            </div>
        </Panel>
    )
}