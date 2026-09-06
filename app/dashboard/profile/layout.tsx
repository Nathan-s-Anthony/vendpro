import MiniNav from "@/app/components/MiniNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile-",
    description: "Vendpro Profile",
};
const navItems = [
    {
        id: 0,
        link: "profile",
        name: "profile"
    },
    {
        id: 1,
        link: "theme",
        name: "theme",
    },
    {
        id: 2,
        link: "settings",
        name: "settings",
    }
]

export default function ProfileLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="">
            <MiniNav navItems={navItems} />
            <div className="min-w-0 z-10 overflow-y-auto custom-scroll overflow-x-hidden  ">
                {children}
            </div>
        </div>
    );
}
