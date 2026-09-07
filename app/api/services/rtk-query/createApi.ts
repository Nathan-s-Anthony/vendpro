import { VendingMachine } from "@/app/types/vendingMachinesTypes";
import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const vendPropApi = createApi({
    reducerPath: "vendPropApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
        credentials: "include",
    }),
    endpoints: (build) => ({
        getUser: build.query<any, void>({
            query: () => "/api/user",
        }),
        getVendingMachinesByUser: build.query<any, void>({
            query: () => "/api/user/machines",
        }),
        createVendingMachine: build.mutation<VendingMachine, Partial<VendingMachine> & Pick<VendingMachine, 'location_id'>>({
            // note: an optional `queryFn` may be used in place of `query`
            query: ({ location_id, ...patch }) => ({
                url: `/api/createMachine`,
                method: 'POST',
                body: patch,
            }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: VendingMachine }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg,
            ) => response.status,
            invalidatesTags: ['VendingMachine'],
            tagTypes: ["VendingMachine"],
            // onQueryStarted is useful for optimistic updates
            // The 2nd parameter is the destructured `MutationLifecycleApi`
            async onQueryStarted(
                arg,
                { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry },
            ) { },
            // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
            async onCacheEntryAdded(
                arg,
                {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    cacheEntryRemoved,
                    cacheDataLoaded,
                    getCacheEntry,
                },
            ) { },
        }),
    })
});

export const {
    useGetUserQuery,
    useCreateVendingMachineMutation,
    useGetVendingMachinesByUserQuery,
} = vendPropApi;