import type { Metadata } from "next";
import ToolBar from "../components/toolbar";

import StoreProvider from "../providers/storeProvider";
export const metadata: Metadata = {
    title: "Dashboard-",
    description: "Vendpro Dashboard",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {

    return (
        <main>
            {/* <StoreProvider> */}
            <div className="grid h-screen relative overflow-hidden w-screen grid-cols-[256px_1fr] grid-rows-[auto_1fr]">
                <ToolBar />
                <div className="min-w-0 col-span-2 lg:col-start-2 z-10  lg:px-6 py-4">
                    {children}
                </div>
            </div>
            {/* </StoreProvider> */}
        </main>
    );
}
