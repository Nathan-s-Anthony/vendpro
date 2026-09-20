import { useGetUserMachineByIdQuery } from "@/app/api/services/rtk-query/createApi";
import Bars from "@/app/components/bars";
import MiniNav from "@/app/components/MiniNav";
import MachinePanel from "@/app/components/userPanel";
import { Bar } from "@/app/types/barTypes";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const navItems = [
        {
            id: 0,
            link: "overview",
            name: "Overview",
        },
        {
            id: 1,
            link: "stock-level",
            name: "Stock Level",
        },
        {
            id: 2,
            link: "history",
            name: "history",
        },

    ]
    const dataBar = [
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
        <div>
            <MiniNav navItems={navItems} />
            <div className="container mx-auto">
                <div className="grid  grid-cols-1  lg:grid-cols-2  mt-4 mb-4">
                    <MachinePanel slug={Number(slug)} />
                    <div className=" w-9/12 ml-auto bg-[#222225]/30 p-4 rounded-sm border border-border/30  hover:border-primary/50 cursor-pointer">
                        <h2 className="text-3xl mb-4 mt-4 p-2 ">RECENT ACTIVITY</h2>
                        <Bars data={dataBar} />
                    </div>
                </div>
            </div>
        </div>
    )
}