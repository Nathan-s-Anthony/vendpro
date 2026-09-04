import type { Metadata } from "next";
import ToolBar from "../components/toolbar";
import Dashboard from "../components/dashboard";
import { AsideProvider } from "../providers/asideProvider";
import ChatBot from "../components/chatBot";
import { ChatBotProvider } from "../providers/chatBotProvider";


export const metadata: Metadata = {
    title: "Dashboard-",
    description: "Vendpro Dashboard",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
    return (
        <main>
            <AsideProvider>
                <ChatBotProvider>
                    <Dashboard>
                        <div className="grid h-screen relative overflow-hidden w-screen lg:grid-cols-[256px_1fr] grid-cols-1 grid-rows-[auto_1fr]">
                            <ToolBar userID={""} userRole={""} />
                            <div className="min-w-0 col-span-2 sub-grid z-10 overflow-y-scroll custom-scroll overflow-x-hidden lg:col-start-2 lg:px-6 py-4">
                                {children}
                            </div>
                        </div>
                        <ChatBot />
                    </Dashboard>
                </ChatBotProvider>

            </AsideProvider>
        </main>
    );
}
