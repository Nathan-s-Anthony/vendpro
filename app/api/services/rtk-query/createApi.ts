import { VendingMachine } from "@/app/types/vendingMachinesTypes";
import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const vendPropApi = createApi({
    reducerPath: "vendPropApi",
    tagTypes: ["VendingMachine"],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
        credentials: "include",
        prepareHeaders: (headers) => {
            const xsrfToken = document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                ?.split("=")[1];

            if (xsrfToken) {
                headers.set(
                    "X-XSRF-TOKEN",
                    decodeURIComponent(xsrfToken)
                );
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        getUser: build.query<any, void>({
            query: () => "/api/user",
        }),
        getAvailableVendingMachines: build.query<any, void>({
            query: () => "/api/getAvailableMachines",
        }),
        getVendingMachinesByUser: build.query<any, void>({
            query: () => "/api/user/getMachines",
        }),
        checkAuth: build.query<any, void>({
            query: () => "/api/user/checkAuth",
        }),
        createVendingMachine: build.mutation<
            VendingMachine,
            {
                name: string;
                model: string;
                serial_number: string;
                location_id: number;
            }
        >({
            query: (body) => ({
                url: "/api/createMachine",
                method: "POST",
                body,
            }),
        }),
    })
});

export const {
    useGetUserQuery,
    useCreateVendingMachineMutation,
    useGetAvailableVendingMachinesQuery,
    useGetVendingMachinesByUserQuery,
    useCheckAuthQuery,
} = vendPropApi;