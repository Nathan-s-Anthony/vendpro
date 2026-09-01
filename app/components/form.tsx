"use client";
import { useActionState, } from "react";

import { email } from "zod";
import { login } from "../actions/auth";
import Button from "./button";
import Link from "next/link";



export default function Form() {
    const [state, action, pending] = useActionState(login, undefined);
    return (
        <>
            <div className="w-full">
                <form action={action} className="flex p-8 flex-col gap-4 bg-form-primary">
                    {/* {state?.errors?.name && <p>{state.errors.name}</p>} */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input className="bg-input-background text-foreground placeholder:text-secondary-faded border border-border focus:outline-none focus:ring-2 focus:ring-primary p-2" id="email" name="email" placeholder="Email" />
                    </div>
                    {state?.errors?.email && <p>{state.errors.email}</p>}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="bg-input-background text-foreground placeholder:text-secondary-faded border border-border focus:outline-none focus:ring-2 focus:ring-primary p-2" name="password" type="password" />
                        <Link href="/forgot-password" className=" self-end text-secondary-faded hover:underline">Forgot Password?</Link>
                    </div>
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
                    <Button disabled={pending} type="submit" value={"Login"} className={""} variant={"primary"} />
                    <Link href="/signup" className="text-secondary-faded ">{"Don't"} have an account? Sign up</Link>
                </form>
            </div>
        </>
    )
}