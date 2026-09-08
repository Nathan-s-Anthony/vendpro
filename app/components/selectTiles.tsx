"use client";

import { Check } from "lucide-react";
import { useGetRetailersQuery } from "../api/services/rtk-query/createApi";
import Loading from "./loading";
import Image from "next/image";
import Tile from "./tile";
import { useState } from "react";
import { useModal } from "../providers/modalProvider";
import { VendingMachine } from "../types/vendingMachinesTypes";
import SelectTile from "./selectTile";
export default function SelectTiles() {

    // if (isLoading) {
    //     return <Loading />
    // }



    return (
        <SelectTile />
    )
}