import type { Metadata } from "next";
import ToolBar from "../components/toolbar";
export const metadata: Metadata = {
    title: "Dashboard-",
    description: "Vendpro Dashboard",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
    return (
        <main>
            <div className="grid h-screen relative overflow-hidden w-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
                <ToolBar />
                <div className="min-w-0  col-span-2 lg:col-start-2 z-10  lg:px-6 py-4">
                    {children}
                </div>
            </div>
        </main>
    );
}
