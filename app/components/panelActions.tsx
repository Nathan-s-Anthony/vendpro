"use client";

import { logout } from "@/app/actions/logout";
import Button from "./button";

export default function PanelActions({ page }: { page: string }) {
    const extraActionsPages = [
        {
            id: 0,
            component: <Button value={"Logout"} action={() => logout()} className="mt-4 mb-4 lg:block hidden text-" variant={"primary"} type={"button"} />,
            page: page,
        }
    ]
    return (
        <div>
            {extraActionsPages.filter((pageAction) => pageAction.page.includes((page))).map((item) => {
                return (
                    <div key={item.id}>
                        {item.component}
                    </div>
                )
            })}

        </div>
    )
}