"use client";


export default function Button({ variant, value, className, action }:
    { value: string, className: string, action?: () => (void | undefined), variant: "primary" | "secondary" }) {

    return (
        <button onClick={action} className={`${className} bg-${variant} text-${variant}-button-text border-${variant} font-sans cursor-pointer px-8 py-4 rounded-sm transition-all duration-300 `}>
            {value}
        </button>
    )
}