"use client";
import { LoaderCircle } from "lucide-react";
export default function Button({ id, variant, value, className, action, disabled }:
    { type: "button" | "submit", value: string, className: string, action?: (e: React.MouseEvent<HTMLButtonElement>) => void, variant: "primary" | "secondary", disabled?: boolean, id?: string }) {

    return (
        <button id={id} disabled={disabled} onClick={action} className={`${className} ${variant === "primary" ? "text-background" : "text-white"} bg-${variant} block font-bold capitalize hover:bg-${variant}/90  border-${variant} font-sans cursor-pointer px-6 py-3  rounded-sm transition-all duration-300 ease-in-out flex items-center gap-2 justify-center`}>
            {disabled ? <LoaderCircle className="animate-spin text-background" />
                : null}
            {value}
        </button>
    )
}