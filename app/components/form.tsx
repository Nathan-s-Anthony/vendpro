"use client";
import { useActionState, useState, } from "react";
import { login } from "../actions/auth";
import Button from "./button";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function Form() {
    const [state, action, pending] = useActionState(login, { errors: {} });
    const [errors, setErrors] = useState(false);
    const [revealPassword, setRevealPassword] = useState(false);
    return (
        <>
            <div className="w-full">
                <form action={action} className={`flex rounded-sm p-8 flex-col gap-4 bg-form-primary `}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input defaultValue={(state.values?.email)} className={`${state?.errors?.email ? "input-error animate-shake" : "input"} bg-input-background text-foreground placeholder:text-secondary-faded `} id="email" name="email" placeholder="Email" />
                        {state?.errors?.email && <small className="text-error-primary">{state.errors.email}</small>}
                    </div>
                    <div className="flex flex-col gap-2">
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
                    </div>
                    <Button disabled={pending} type="submit" value={"Login"} className={"text-background"} variant={"primary"} />
                    <Link href="/signup" className="text-secondary-faded text-center hover:underline transition-all duration-300 hover:text-primary ">{"Don't"} have an account? Sign up</Link>
                </form>
            </div>
        </>
    )
}