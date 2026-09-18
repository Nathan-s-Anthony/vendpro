"use client";

import { useGetUserAcitvityQuery } from "../api/services/rtk-query/createApi";
import Loading from "./loading";

export default function View() {
    const { data, isLoading } = useGetUserAcitvityQuery();
    console.log(data, "data for user activity");

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            {data?.data.map((item, id) => {
                return (
                    <div key={id}>
                        {item.action}
                        {item.endpoint}
                        {item.ip_address}
                    </div>
                )
            })}
        </div>
    )
}