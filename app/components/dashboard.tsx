"use client"

import { ReactNode, useEffect } from "react";
import { useGetUserQuery } from "../api/services/rtk-query/createApi";
import { useUser } from "../providers/userProvider";
import { useAuth } from "../providers/authProvider";
import router from "next/router";
import Welcome from "../dashboard/welcome/page";
import ToolBar from "./toolbar";
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
        <div className="grid h-screen relative overflow-hidden w-screen lg:grid-cols-[256px_1fr] grid-cols-1 grid-rows-[auto_1fr]">
            <ToolBar userID={""} userRole={""} />
            <div className="min-w-0 col-span-2  z-10 overflow-y-auto custom-scroll overflow-x-hidden lg:col-start-2 lg:px-6 py-4">
                {children}
            </div>
        </div>
    )
}