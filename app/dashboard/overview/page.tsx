import Card from "@/app/components/card";
import Graph from "@/app/components/graphs";
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

    const stockLevel = [
        { "id": "SKU-001", "name": "Wireless Mouse", "stock": 145, "reorderPoint": 50, "warehouseA": 85, "warehouseB": 60 },
        { "id": "SKU-002", "name": "Mechanical Keyboard", "stock": 22, "reorderPoint": 40, "warehouseA": 12, "warehouseB": 10 },
        { "id": "SKU-003", "name": "27-Inch Monitor", "stock": 68, "reorderPoint": 30, "warehouseA": 40, "warehouseB": 28 },
        { "id": "SKU-004", "name": "USB-C Hub Adapter", "stock": 12, "reorderPoint": 45, "warehouseA": 5, "warehouseB": 7 },
        { "id": "SKU-005", "name": "Noise Cancelling Headphones", "stock": 190, "reorderPoint": 60, "warehouseA": 110, "warehouseB": 80 },
        { "id": "SKU-006", "name": "HD Webcam 1080p", "stock": 35, "reorderPoint": 40, "warehouseA": 20, "warehouseB": 15 },
        { "id": "SKU-007", "name": "Ergonomic Desk Chair", "stock": 8, "reorderPoint": 15, "warehouseA": 3, "warehouseB": 5 },
        { "id": "SKU-008", "name": "Laptop Stand Aluminum", "stock": 115, "reorderPoint": 35, "warehouseA": 65, "warehouseB": 50 },
        { "id": "SKU-009", "name": "Dual-Band Wi-Fi Router", "stock": 55, "reorderPoint": 25, "warehouseA": 30, "warehouseB": 25 },
        { "id": "SKU-010", "name": "Bluetooth Smart Speaker", "stock": 18, "reorderPoint": 50, "warehouseA": 8, "warehouseB": 10 }
    ]

    return (
        <Panel heading={"overview"} subHeading={"GROWING YOUR EMPIRE TAKES TIME"} pageName={"overview"}>
            <div className="lg:w-100 lg:h-100" >
                <Graph data={stockLevel} />
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-4 mb-4">
                {stats.map((item, id) => {
                    return (
                        <Card fullWidth key={id} title={item.title} value={item.value} icon={item.icon} />
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