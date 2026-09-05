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
        <div className="grid h-screen relative overflow-hidden w-screen lg:grid-cols-[256px_1fr] grid-cols-1 grid-rows-[auto_1fr]">
            <MiniNav navItems={navItems} />
            <div className="min-w-0 lg:col-start-1 col-span-2  z-10 overflow-y-auto custom-scroll overflow-x-hidden  lg:px-6 py-4">
                {children}
            </div>
        </div>
    );
}
