import { ReactNode } from "react";

export default function miniNav({ children }: { children: ReactNode }) {
    return (
        <nav>
            <ul>
                {children}
            </ul>
        </nav>
    )
}