"use client"

import { ReactNode } from "react";
import { useGetUserQuery } from "../api/services/rtk-query/createApi";
import { useUser } from "../providers/userProvider";

export default function Dashboard({ children }: { children: ReactNode }) {
    const { data, isLoading, isError, } = useGetUserQuery();

    return (
        <div>{children}</div>
    )
}