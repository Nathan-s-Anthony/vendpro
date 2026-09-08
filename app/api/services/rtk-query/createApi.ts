import { VendingMachine } from "@/app/types/vendingMachinesTypes";
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
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
});

const baseQueryWithCsrf: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {

    const isLoginRequest =
        typeof args !== "string" && args.url === "/login";

    if (isLoginRequest) {
        await fetch("/sanctum/csrf-cookie", {
            credentials: "include",
        });
    }

    return baseQuery(args, api, extraOptions);
};
export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithCsrf,
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: ({ email, password }) => ({
                url: "api/login",
                method: "POST",
                body: { email, password },
            }),
        }),
        getUser: build.query<any, void>({
            query: () => "/api/user",
        }),
        getAvailableVendingMachines: build.query<any, void>({
            query: () => "/api/getAvailableMachines",
        }),
        getVendingMachinesByUser: build.query<any, void>({
            query: () => "/api/user/getMachines",
        }),
        getRetailers: build.query<any, void>({
            query: () => "/api/user/getRetailers",
        }),
        checkAuth: build.query<any, void>({
            query: () => "/api/user/checkAuth",
        }),
        createVendingMachine: build.mutation({
            query: (machine) => ({
                url: "api/user/vending-machines",
                method: "POST",
                body: machine,
            }),
        }),
    }),
});

// export const vendPropApi = createApi({

//     reducerPath: "vendPropApi",
//     tagTypes: ["VendingMachine"],
//     // baseQuery: fetchBaseQuery({
//     //     baseUrl: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
//     //     credentials: "include",
// prepareHeaders: (headers) => {
//     const xsrfToken = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("XSRF-TOKEN="))
//         ?.split("=")[1];

//     if (xsrfToken) {
//         headers.set(
//             "X-XSRF-TOKEN",
//             decodeURIComponent(xsrfToken)
//         );
//     }
//     return headers;
// },
//     }),
//     endpoints: (build) => ({
// getUser: build.query<any, void>({
//     query: () => "/api/user",
// }),
// getAvailableVendingMachines: build.query<any, void>({
//     query: () => "/api/getAvailableMachines",
// }),
// getVendingMachinesByUser: build.query<any, void>({
//     query: () => "/api/user/getMachines",
// }),
// getRetailers: build.query<any, void>({
//     query: () => "/api/user/getRetailers",
// }),
// checkAuth: build.query<any, void>({
//     query: () => "/api/user/checkAuth",
// }),
//         createVendingMachine: build.mutation<
//             VendingMachine,
//             {
//                 name: string;
//                 model: string;
//                 serial_number: string;
//                 location_id: number;
//             }
//         >({
//             query: (body) => ({
//                 url: "/api/createMachine",
//                 method: "POST",
//                 body,
//             }),
//         }),
//     })
// });

export const {
    useGetUserQuery,
    useCreateVendingMachineMutation,
    useGetAvailableVendingMachinesQuery,
    useGetVendingMachinesByUserQuery,
    useCheckAuthQuery,
    useGetRetailersQuery,
    useLoginUserMutation
} = api;