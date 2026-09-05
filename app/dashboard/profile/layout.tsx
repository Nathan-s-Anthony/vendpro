import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Profile-",
    description: "Vendpro Profile",
};

export default function ProfileLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="grid h-screen relative overflow-hidden w-screen lg:grid-cols-[256px_1fr] grid-cols-1 grid-rows-[auto_1fr]">
            <nav className="profile-nav mb-4 mt-4">
                <ul className=" flex gap-4 ">
                    <li><Link href={"/dashboard/profile"}>Profile</Link></li>
                    <li><Link href={"/dashboard/profile/theme"}>Theme</Link></li>
                    <li><Link href={"/dashboard/profile/settings"}>Settings</Link></li>
                </ul>
            </nav>
            <div className="min-w-0 lg:col-start-1 col-span-2  z-10 overflow-y-auto custom-scroll overflow-x-hidden  lg:px-6 py-4">
                {children}
            </div>
        </div>
    );
}
