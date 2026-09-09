"use client";

import { Check, X } from "lucide-react";
import { useAside } from "../providers/asideProvider";
import { useModal } from "../providers/modalProvider";
import Button from "./button";
import Tile from "./tile";
import Image from "next/image";
import { VendingMachine } from "../types/vendingMachinesTypes";
import { useState } from "react";
import { useCreateVendingMachineMutation, useGetAvailableVendingMachinesQuery } from "../api/services/rtk-query/createApi";

export default function Modal() {
    const { data, isLoading, isError } = useGetAvailableVendingMachinesQuery();
    const { toggled } = useAside();
    const { toggledModal, setToggleModal } = useModal();
    const [createMachine,// This is the mutation trigger{ isLoading: isUpdating }, // This is the destructured mutation result
    ] = useCreateVendingMachineMutation();
    const [selectedMachines, setSelectedMachines] = useState<Partial<VendingMachine>[]>([]);

    const handleModelSelection = (machine: VendingMachine) => {
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
    const handleToggleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setToggleModal(!toggledModal);
    }
    const handleCreateMachine = async (machine: VendingMachine[]) => {
        await Promise.all(
            machine.map((item) =>
                createMachine({
                    name: item.name,
                    model: item.model,
                    serial_number: item.serial_number,
                    location_id: 1,
                })
            )
        );
    }
    return (
        <>
            {
                toggledModal ?
                    <div className={`${toggled ? "modal-container-full" : "modal-container-compact"}   flex items-center justify-center p-6 ml-auto fixed   inset-0 z-50 w-screen h-screen`}>
                        <div className=" bg-[#222225] p-10 max-w-180 w-full rounded-sm lg:h-[70vh] relative   border border-border/30  ">
                            <X className=" cursor-pointer justify-self-end" onClick={(e) => handleToggleModal(e)} />
                            <h3 className="text-3xl font-display font-bold text-center">Select your model</h3>
                            <div className=" flex items-center justify-center">
                                <div className="grid grid-cols-3  gap-5 mb-4 mt-4">
                                    {data?.data.map((machine) => {
                                        console.log('machine data', machine)
                                        return (
                                            <Tile
                                                key={machine.id}
                                                id={`machine-${machine.id}`}
                                                className="p-4  z-50  relative group rounded-sm "
                                                onClick={() => handleModelSelection(machine)}>
                                                <div className="lg:w-40 lg:h-40 relative overflow-hidden">
                                                    <Image
                                                        alt={`${machine.name} - ${machine.model}`}
                                                        className="contain rounded-sm cursor-pointer transition-transform  duration-300 group-hover:scale-125"
                                                        src={`data:${machine.image.type};base64,${machine.image.data}`}
                                                        fill
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
                            <Button disabled={isLoading} value="Add" type={"button"} action={() => handleCreateMachine(data?.data)} className={"justify-self-center"} variant={"primary"} />
                        </div>
                    </div>
                    : null}
        </>
    )
}