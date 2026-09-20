"use client";

import { useGetUserMachineByIdQuery } from "../api/services/rtk-query/createApi";
import Loading from "./loading";

export default function MachinePanel({ slug }: { slug: number }) {
    const { data, isLoading } = useGetUserMachineByIdQuery({ machine: slug });
    if (isLoading) {
        return <Loading />
    }
    const machine = data.data;
    console.log(data?.data, 'data incoming...');
    return (
        <div>
            <div className="flex ">
                <div className="bg-red-500 block w-60 h-60 rounded-full "> </div>
                <div>
                    <h1>{machine.name} - {machine.id}</h1>
                    <p>{machine}</p>
                </div>
            </div>

            {/* {data && data.data.map((machine: VendingMachine) => {
                return (
                    <div key={machine.id}>
                        {machine.name}
                    </div>
                )
            })} */}
        </div>
    )
}