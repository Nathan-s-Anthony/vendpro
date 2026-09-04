"use client"

import { ReactNode, useEffect } from "react";
import { useGetUserQuery } from "../api/services/rtk-query/createApi";
import { useUser } from "../providers/userProvider";

export default function Dashboard({ children }: { children: ReactNode }) {
    const { setUserId, setFirstName, setRole, setEmail } = useUser();

    const { data, isLoading, isError, } = useGetUserQuery();

    useEffect(() => {
        if (data) {
            setUserId(data.id);
            setFirstName(data.name);
            setEmail(data.email)
            setRole("admin");
        }
    }, [data, setUserId, setFirstName, setRole, setEmail]);

    return (
        <div>{children}</div>
    )
}