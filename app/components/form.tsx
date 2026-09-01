"use client";
import { useActionState, } from "react";

import { email } from "zod";
import { login } from "../actions/auth";
import Button from "./button";
import Link from "next/link";



export default function Form() {
    const [state, action, pending] = useActionState(login, undefined);
    if (state?.errors) {
        console.log("erroring form....")
    }
    return (
        <>
            <div className="w-full">
                <form action={action} className="flex rounded-sm p-8 flex-col gap-4 bg-form-primary ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input autoComplete="email" className="bg-input-background text-foreground placeholder:text-secondary-faded border border-border focus:outline-none focus:ring-2 focus:ring-primary p-2" id="email" name="email" placeholder="Email" />
                        {state?.errors?.email && <p>{state.errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input id="password" autoComplete="password" className="bg-input-background text-foreground placeholder:text-secondary-faded border border-border focus:outline-none focus:ring-2 focus:ring-primary p-2" name="password" type="password" />
                        <Link href="/forgot-password" className="text-secondary-faded hover:underline self-end transition-all duration-300 hover:text-primary">Forgot Password?</Link>
                        {state?.errors?.password && (
                            <div>
                                <p>Password must:</p>
                                <ul>
                                    {state.errors.password.map((error) => (
                                        <li key={error}>- {error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <Button disabled={pending} type="submit" value={"Login"} className={""} variant={"primary"} />
                    <Link href="/signup" className="text-secondary-faded text-center hover:underline transition-all duration-300 hover:text-primary ">{"Don't"} have an account? Sign up</Link>
                </form>
            </div>
        </>
    )
}