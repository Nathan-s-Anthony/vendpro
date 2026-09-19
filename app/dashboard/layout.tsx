import type { Metadata } from "next";
import Dashboard from "../components/dashboard";
import { AsideProvider } from "../providers/asideProvider";
import ChatBot from "../components/chatBot";
import { ChatBotProvider } from "../providers/chatBotProvider";
import { ModalProvider } from "../providers/modalProvider";


export const metadata: Metadata = {
    title: "Dashboard-",
    description: "Vendpro Dashboard",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
    return (
        <main>
            <ModalProvider>
                <ChatBotProvider>
                    <Dashboard>
                        {children}
                        <ChatBot />
                    </Dashboard>
                </ChatBotProvider>
            </ModalProvider>
        </main>
    );
}
