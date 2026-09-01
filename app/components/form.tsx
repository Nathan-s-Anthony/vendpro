"use client";
import { useActionState, useState } from "react";

import { email } from "zod";
import { login } from "../actions/auth";


export default function Form() {
    const [state, action, pending] = useActionState(login, undefined);

    // const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (!email) {
    //         setErrors("Please fill email...");
    //         return;
    //     }
    //     try {
    //         axiosInstance.get('/sanctum/csrf-cookie', { baseURL: "http://localhost:8000" }).then(response => {
    //             axiosInstance.post("/login", {
    //                 email: email,
    //                 password: password,
    //                 device_name: "brave-browser",
    //             }).then((response) => {
    //                 console.log(response, "login user")
    //                 if (response.data.access_token) {
    //                     setAccessToken(response.data.access_token);
    //                 }
    //                 console.log(response, "login user")
    //             }).catch((error) => {
    //                 console.error(error, "error logging in user");
    //             });
    //         }).catch((error) => {
    //             console.error(error, "error getting csrf cookie")
    //         })
    //     }
    //     catch (error) {
    //         console.error(error, 'error getting token');
    //     }
    // }
    // const handleLogin = async () => {
    //     try {
    //         axiosInstance.get('/sanctum/csrf-cookie', { baseURL: "http://localhost:8000" }).then(response => {
    //             axiosInstance.post("/login", {
    //                 email: "nathan@test.com",
    //                 password: "nathanwww",
    //                 device_name: "brave-browser",
    //             }).then((response) => {
    //                 if (response.data.access_token) {
    //                     setAccessToken(response.data.access_token);
    //                     redirect("/dashboard");
    //                 }
    //                 console.log(response, "login user")
    //                 // setAccessToken(response?.data?.token);
    //             }).catch((error) => {
    //                 console.error(error, "error logging in user");
    //             });
    //         })
    //     }
    //     catch (error) {
    //         console.error(error, 'error getting token');
    //     }
    // };
    return (
        <>
            {/* <button onClick={handleLogin}>Login now</button> */}
            {/* <button type="button" onClick={handleClick}>
                Click me
            </button> */}
            <div className=" lg:w-64">
                <form action={action}>
                    {/* {state?.errors?.name && <p>{state.errors.name}</p>} */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" placeholder="Email" />
                    </div>
                    {state?.errors?.email && <p>{state.errors.email}</p>}

                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
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
                    <button disabled={pending} type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    )
}