"use client";

import { logout } from "@/app/actions/logout";
import Button from "../button";
import { useModal } from "@/app/providers/modalProvider";

export default function PanelActions({ page }: { page: string }) {

    const { setToggleModal, toggledModal } = useModal();




    const extraActionsPages = [
        {
            id: 0,
            component: <Button value={"Logout"} action={() => logout()} className="mt-4 mb-4 block  text-" variant={"primary"} type={"button"} />,
            page: "profile",
        },
    ]

    return (
        <div>
            {extraActionsPages
                .filter((pageAction) => pageAction.page === page)
                .map((item) => (
                    <div className="" key={item.id}>
                        {item.component}
                    </div>
                ))}
        </div>
    )
}