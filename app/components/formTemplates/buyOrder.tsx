"use client";

import React, { useActionState, useState } from "react";
import { login } from "@/app/actions/auth";
import Button from "@/app/components/button";
import { User } from "lucide-react";
import { useUser } from "@/app/providers/userProvider";
import { Dropdown } from "../dropdown";
import { useGetRetailersQuery } from "@/app/api/services/rtk-query/createApi";
import Loading from "../loading";

export default function BuyOrderForm() {
    const [state, action, pending] = useActionState(login, { errors: {} });
    const [selectedOpton, setSelectedOption] = useState("");
    const { firstName, role, email } = useUser();
    const { data, isLoading, isError } = useGetRetailersQuery();
    if (isLoading) {
        return <Loading />
    }
    return (
        <form action="#" className={`flex rounded-sm w-full p-4  flex-col gap-4`}>
            <div className="grid grid-cols-2 gap-6">
                <p className="text-sm">Select retailer to source from:</p>
                <Dropdown
                    key={421}
                    items={data?.data ?? []}
                    value={selectedOpton}
                    onChange={(item) => {
                        setSelectedOption(item.name)
                        console.log(item.name, "test");
                    }}
                    getLabel={(item) => {
                        return item.name;
                    }}
                />
                <p className="text-sm">Select your products to source</p>
                <Dropdown
                    key={431}
                    items={data?.data ?? []}
                    value={selectedOpton}
                    onChange={(item) => {
                        setSelectedOption(item.name)
                        console.log(item.name, "test");
                    }}
                    getLabel={(item) => {
                        return item.name;
                    }}
                />
            </div>
            {/* <div className="flex flex-col gap-2">
                <label className="hidden" htmlFor="name">Name</label>
                <input defaultValue={firstName} className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background border border-border/30 text-foreground placeholder:text-secondary-faded `} id="first_name" name="first_name" placeholder="First Name" />
                {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
            </div> */}
            {/* <div className="flex flex-col gap-2">
                <label className="hidden" htmlFor="email">Email</label>
                <input defaultValue={email} className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background border border-border/30 text-foreground placeholder:text-secondary-faded`} id="email" name="email" placeholder="Email" />
                {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
            </div> */}
            <div className="flex gap-4">
                <Button disabled={pending} type="submit" value={"Create"} className={"text-background "} variant={"primary"} />
                <Button disabled={pending} type="reset" value={"Reset"} className={"text-background "} variant={"secondary"} />
            </div>
        </form>
    )
}