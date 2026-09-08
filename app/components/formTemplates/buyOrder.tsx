"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import Button from "@/app/components/button";
import { User } from "lucide-react";
import { useUser } from "@/app/providers/userProvider";

export default function BuyOrderForm() {
    const [state, action, pending] = useActionState(login, { errors: {} });
    const { firstName, role, email } = useUser();
    return (
        <form action="#" className={`flex rounded-sm w-full  flex-col gap-4`}>
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input defaultValue={firstName} className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background text-foreground placeholder:text-secondary-faded `} id="first_name" name="first_name" placeholder="First Name" />
                {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input defaultValue={email} className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background text-foreground placeholder:text-secondary-faded`} id="email" name="email" placeholder="Email" />
                {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
            </div>

            <div className="">
                <Button disabled={pending} type="submit" value={"Create"} className={"text-background w-1/3"} variant={"primary"} />
                <Button disabled={pending} type="submit" value={"Create"} className={"text-background w-1/3"} variant={"secondary"} />
            </div>
        </form>
    )
}