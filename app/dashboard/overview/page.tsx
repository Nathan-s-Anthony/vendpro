import Card from "@/app/components/card";
import Graphs from "@/app/components/graphs";
import Panel from "@/app/components/panel";
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
            name: 'Page A',
            uv: 400,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 200,
            pv: 1400,
            amt: 400,
        },
        {
            name: 'Page C',
            uv: 400,
            pv: 1400,
            amt: 2400,
        },
        {
            name: 'Page D',
            uv: 700,
            pv: 100,
            amt: 3000,
        },
    ]
    return (
        <Panel heading={"overview"} subHeading={"GROW YOUR VENDING BUSINESS"}>
            <div className="w-full flex items-center justify-between ">
                <Graphs data={data} />
                <Graphs data={data} />
            </div>

            <div className="flex w-full gap-4">
                {stats.map((item, id) => {
                    return (
                        <Card key={id} title={item.title} value={item.value} icon={item.icon} />
                    )
                })}
            </div>
            <div className="grid grid-cols-2 w-full gap-4 mt-4">
                <div className=" col-span-1 bg-secondary p-4 rounded-sm border border-card-primary hover:border-primary/50 cursor-pointer">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl mb-4 mt-4 p-2 ">MACHINE STATUS</h2>
                        <small className="text-secondary-faded text-sm">8 Locations</small>
                    </div>
                    <Card title={"Active Machines"} value={"3"} fullWidth icon={<Zap className="w-8 h-8 text-orange-400" />} statsTile />
                </div>
                <div className=" col-span-1 bg-secondary p-4 rounded-sm border border-card-primary hover:border-primary/50 cursor-pointer">
                    <h2 className="text-3xl mb-4 mt-4 p-2 ">RECENT ACTIVITY</h2>
                    <Card title={"Active Machines"} value={"3"} fullWidth icon={<Zap className="w-8 h-8 text-orange-400" />} statsTile />
                </div>
            </div>
        </Panel>
    )
}