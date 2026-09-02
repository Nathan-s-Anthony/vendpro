"use client";
import { LoaderCircle } from "lucide-react";
export default function Button({ variant, value, className, action, disabled }:
    { type: "button" | "submit", value: string, className: string, action?: () => void, variant: "primary" | "secondary", disabled?: boolean }) {

    return (
        <button disabled={disabled} onClick={action} className={`${className} bg-${variant} block font-bold capitalize hover:bg-${variant}/90 text-${variant}-button-text border-${variant} font-sans cursor-pointer px-8 py-4 rounded-sm transition-all duration-300 ease-in-out flex items-center gap-2 justify-center`}>
            {disabled ? <LoaderCircle className="animate-spin text-background" />
                : null}
            {value}
        </button>
    )
}