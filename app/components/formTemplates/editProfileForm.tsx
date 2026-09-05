"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import Button from "@/app/components/button";
import { User } from "lucide-react";
import { useUser } from "@/app/providers/userProvider";

export default function Form() {
    const [state, action, pending] = useActionState(login, { errors: {} });
    const { firstName, role, email } = useUser();
    return (
        <form action={action} className={`flex rounded-sm p-8 flex-col gap-4`}>
            <div className="flex flex-col gap-2">
                <div className="rounded-full relative w-40 h-40 bg-secondary ">
                    <User className="absolute w-full p-4 h-full inset-0" />
                </div>
            </div>
            {/* <div className="flex flex-col gap-2">
                <label htmlFor="email">Permission Status</label>
                <input defaultValue={role} disabled className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background text-foreground placeholder:text-secondary-faded`} id="role" name="role" placeholder="role" />
                {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
            </div> */}
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

            <Button disabled={pending} type="submit" value={"Save"} className={"text-background w-1/3"} variant={"primary"} />
        </form>
    )
}