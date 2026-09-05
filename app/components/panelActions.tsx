"use client";

import { logout } from "@/app/actions/logout";
import Button from "./button";

export default function PanelActions({ page }: { page: string }) {
    const extraActionsPages = [
        {
            id: 0,
            component: <Button value={"Logout"} action={() => logout()} className="mt-4 mb-4 block  text-" variant={"primary"} type={"button"} />,
            page: "profile",
        },
        {
            id: 1,
            component: <Button value={"Analytics"} action={() => logout()} className="mt-4 mb-4 block  text-" variant={"primary"} type={"button"} />,
            page: "overview",
        },
        {
            id: 12,
            component: <Button value={"Stock Levels"} action={() => logout()} className="mt-4 mb-4 block  text-" variant={"primary"} type={"button"} />,
            page: "stock-levels",
        },
        {
            id: 12,
            component: <Button value={"Add Machine"} action={() => logout()} className="mt-4 mb-4 block  text-" variant={"primary"} type={"button"} />,
            page: "your-machines",
        },
        {
            id: 12,
            component: <Button value={"Vi"} action={() => logout()} className="mt-4 mb-4 block  text-" variant={"primary"} type={"button"} />,
            page: "source-cargo",
        }
    ]

    return (
        <div>
            {extraActionsPages
                .filter((pageAction) => pageAction.page === page)
                .map((item) => (
                    <div key={item.id}>
                        {item.component}
                    </div>
                ))}
        </div>
    )
}