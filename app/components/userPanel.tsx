"use client";

import { useGetUserMachineByIdQuery } from "../api/services/rtk-query/createApi";
import { VendingMachine } from "../types/vendingMachinesTypes";
import Loading from "./loading";

export default function MachinePanel({ slug }: { slug: number }) {
    const { data, isLoading } = useGetUserMachineByIdQuery({ machine: slug });
    if (isLoading) {
        return <Loading />
    }
    // console.log(data?.data, 'data incoming...');
    return (
        <div className="grid lg:grid-cols-3 gap-6 grid-cols-1">
            <div className="bg-red-500 w-3/3 h-full block rounded-full"></div>
            <div className="">
                <h1>{data?.data?.name}</h1>
                <p>{data?.data?.model}</p>
                <p>{data?.data?.serial_number}</p>
            </div>
            <div className=" w-full ml-auto col-start-1 col-span-3 bg-[#222225]/30 p-4 rounded-sm border border-border/30  hover:border-primary/50 cursor-pointer">
                <h2 className="text-3xl mb-4 mt-4 p-2 ">OVERVIEW</h2>
            </div>
        </div>
    )
}