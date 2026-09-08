"use client";

import Image from "next/image";
import { useGetRetailersQuery } from "../api/services/rtk-query/createApi";
import { Check } from "lucide-react";
import { useState } from "react";
import { useModal } from "../providers/modalProvider";
import { VendingMachine } from "../types/vendingMachinesTypes";
import Tile from "./tile";

export default function SelectTile() {
    const [selectedMachines, setSelectedMachines] = useState<Partial<VendingMachine>[]>([]);
    const { toggledModal, setToggleModal } = useModal();
    const { data, isLoading, isError } = useGetRetailersQuery();
    const handleTileSelection = (machine: VendingMachine) => {
        setSelectedMachines((prev) => {
            const alreadySelected = prev.some(
                (selected) => selected.id === machine.id
            );

            if (alreadySelected) {
                return prev.filter(
                    (selected) => selected.id !== machine.id
                );
            }

            return [
                ...prev,
                {
                    id: machine.id,
                    model: machine.model,
                    serialNumber: machine.serial_number,
                    location_id: machine.location_id,
                },
            ];
        });
    };
    return (
        <div className=" flex items-center justify-center">
            <div className="grid grid-cols-3  gap-5 mb-4 mt-4">
                {data?.data.map((machine) => {
                    console.log('machine data', machine)
                    return (
                        <Tile
                            key={machine.id}
                            id={`machine-${machine.id}`}
                            className="p-4  z-50  relative group rounded-sm "
                            onClick={() => handleTileSelection(machine)}>
                            <div className="lg:w-20 lg:h-20 relative overflow-hidden">
                                <Image
                                    alt={`${machine.name} - ${machine.model}`}
                                    className=" rounded-sm cursor-pointer transition-transform  duration-300 group-hover:scale-125"
                                    src={`data:${machine.image.type};base64,${machine.image.data}`}
                                    width={200}
                                    height={100}
                                    object-fit
                                />
                                {selectedMachines.some((selected) => selected.id === machine.id) && (
                                    <div className="absolute inset-0 w-full h-full rounded-sm place-content-center place-items-center bg-[#030213]/50 flex">
                                        <Check className="w-10 h-10" />
                                    </div>
                                )}
                            </div>
                            <h4 className="font-bold font-display" title={`${machine.name} - ${machine.model}`}>{machine.name}</h4>
                        </Tile>
                    )
                })}
            </div>
        </div>
    )
}