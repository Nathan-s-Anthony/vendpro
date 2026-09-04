"use client";

import { useActionState, useState, } from "react";
import { login } from "@/app/actions/auth";
import Button from "@/app/components/button";
import Link from "next/link";
import { Eye, User, } from "lucide-react";
import { useUser } from "@/app/providers/userProvider";

export default function Form() {
    const [state, action, pending] = useActionState(login, { errors: {} });
    const [revealPassword, setRevealPassword] = useState(false);
    const { firstName, role, email } = useUser();

    return (
        <>
            <div className="w-3/3 grid lg:grid-cols-2 grid-cols-1">
                <form action={action} className={`flex rounded-sm p-8 flex-col gap-4  `}>
                    <div className="flex flex-col gap-2">
                        <div className="rounded-full relative w-40 h-40 bg-secondary ">
                            <User className="absolute w-full p-4 h-full inset-0" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Permission Status</label>
                        <input defaultValue={role} disabled className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background text-foreground placeholder:text-secondary-faded`} id="role" name="role" placeholder="role" />
                        {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
                    </div>
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
                    {/* <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <div className="w-full  relative ">
                            <input defaultValue={(state.values?.password)} id="password" placeholder="Password" className={`w-full ${state?.errors?.password ? "input-error animate-shake" : "input"} bg-input-background text-foreground placeholder:text-secondary-faded `} name="password" type={revealPassword ? "text" : "password"} />
                            <Eye
                                onClick={() => (setRevealPassword(prev => !prev))} className="absolute right-0 top-0 bottom-0 m-auto mr-2 text-secondary-faded hover:text-white transition-all duration-300 cursor-pointer" />
                        </div>
                        <Link href="/forgot-password" className="text-secondary-faded hover:underline self-end transition-all duration-300 hover:text-primary">Forgot Password?</Link>

                        {state?.apiResponse?.message && <small className="text-error-primary">{state?.apiResponse?.message}</small>}
                        {state?.errors?.password && (
                            <div>
                                <small className="text-error-primary">Password must match the following:</small>
                                <ul className=" text-error-primary">
                                    {state.errors.password.map((error) => (
                                        <li key={error}>- {error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div> */}
                    <Button disabled={pending} type="submit" value={"Save"} className={"text-background w-1/3"} variant={"primary"} />
                </form>
                <div>
                    <h1 className="text-6xl">Your Stats for the month</h1>
                    <p>test</p>
                </div>
            </div>
        </>
    )
}