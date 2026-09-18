import type { Metadata } from "next";
import Dashboard from "../components/dashboard";
import { AsideProvider } from "../providers/asideProvider";
import ChatBot from "../components/chatBot";
import { ChatBotProvider } from "../providers/chatBotProvider";
import { ModalProvider } from "../providers/modalProvider";
import { AuthProvider } from "../providers/authProvider";


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
                        <ModalProvider>
                            {children}
                            <ChatBot />
                        </ModalProvider>
                    </Dashboard>
                </ChatBotProvider>
            </AsideProvider>
        </main>
    );
}
