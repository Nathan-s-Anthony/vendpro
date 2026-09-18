"use client";

import { Check, X } from "lucide-react";
import { useAside } from "../providers/asideProvider";
import { useModal } from "../providers/modalProvider";
import Button from "./button";
import Tile from "./tile";
import Image from "next/image";
import { VendingMachine } from "../types/vendingMachinesTypes";
import { useState } from "react";
import { useCreateVendingMachineMutation, useGetAvailableVendingMachinesQuery, useGetVendingMachinesByUserQuery } from "../api/services/rtk-query/createApi";

export default function Modal({ children }: { children: React.ReactNode }) {
    const { data, isLoading, isError } = useGetAvailableVendingMachinesQuery();
    const { toggledModal, setToggleModal } = useModal();
    const { refetch } = useGetVendingMachinesByUserQuery();
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
        try {

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
        } catch (error) {
            console.error(error);
        }
        setToggleModal(false);
        refetch();
    }
    const handleLeaveModal = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setToggleModal(false);
    };
    return (
        <div onMouseLeave={handleLeaveModal} className={`fixed right-10 top-20 block w-120 h-50 z-50 ${toggledModal ? "animate-notifications-open block" : "animate-notifications-close hidden"}`}>
            {children}
        </div>
    )
}