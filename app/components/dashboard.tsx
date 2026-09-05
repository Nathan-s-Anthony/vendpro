"use client"

import { ReactNode, useEffect } from "react";
import { useGetUserQuery } from "../api/services/rtk-query/createApi";
import { useUser } from "../providers/userProvider";
import { useAuth } from "../providers/authProvider";
import router from "next/router";
import Welcome from "../dashboard/welcome/page";
export default function Dashboard({ children }: { children: ReactNode }) {
    const { setUserId, setFirstName, setRole, setEmail } = useUser();
    const { isAuthenticated } = useAuth();

    const { data, isLoading, isError, } = useGetUserQuery();

    console.log(isAuthenticated, "auth state")
    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/login");
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated && data) {
            setUserId(data.id);
            setFirstName(data.name);
            setEmail(data.email)
            setRole("admin");
        }
    }, [isAuthenticated, data, setUserId, setFirstName, setRole, setEmail]);

    return (
        <div>{children}</div>
    )
}