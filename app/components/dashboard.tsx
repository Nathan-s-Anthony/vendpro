"use client"

import { ReactNode, useEffect } from "react";
import { useCheckAuthQuery, useGetUserQuery, useLogoutUserMutation } from "../api/services/rtk-query/createApi";
import { useUser } from "../providers/userProvider";
import { useAuth } from "../providers/authProvider";
import { useRouter } from 'next/navigation'
import ToolBar from "./toolbar";
import { logout } from "../actions/logout";
import Loading from "./loading";
import { useAside } from "../providers/asideProvider";
export default function Dashboard({ children }: { children: ReactNode }) {
    const { setUserId, setFirstName, setRole, setEmail } = useUser();
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const [logoutUser, { error }] = useLogoutUserMutation();
    const { toggled } = useAside();

    const router = useRouter()
    const { data, isLoading, isError, } = useGetUserQuery();
    // const { results, isError } = useCheckAuthQuery();


    useEffect(() => {
        if (data && !isError && !isLoading) {
            setIsAuthenticated(true);
            setUserId(data.id);
            setFirstName(data.name);
            setEmail(data.email)
            setRole("admin");
        }
        if (isError) {
            setIsAuthenticated(false);
        }

        // if (!isAuthenticated) {
        //     try {
        //         const logout = async () => {
        //             const user = await logoutUser({}).unwrap();
        //             if (user.status === 200) {
        //                 router.push("/login");
        //             }
        //         }

        //     }
        //     catch (error) {
        //         console.error(error)
        //     }
        // }

    }, [isLoading, isAuthenticated, data, setUserId, setFirstName, setRole, setEmail, setIsAuthenticated, router, isError, logoutUser]);



    return (
        <div className="grid h-screen relative overflow-hidden w-screen lg:grid-cols-[256px_1fr] grid-cols-1 grid-rows-[auto_1fr]">
            <ToolBar userID={""} userRole={""} />
            <div className={`min-w-0 col-span-2  z-10 overflow-y-auto custom-scroll overflow-x-hidden ${toggled ? "col-start-1" : "col-start-2 "}`}>
                {children}
            </div>
        </div>
    )
}