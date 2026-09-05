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
    }),
});

export const {
    useGetUserQuery,
} = vendPropApi;