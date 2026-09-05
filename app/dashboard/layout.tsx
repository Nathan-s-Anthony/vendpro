import type { Metadata } from "next";
import ToolBar from "../components/toolbar";
import Dashboard from "../components/dashboard";
import { AsideProvider } from "../providers/asideProvider";
import ChatBot from "../components/chatBot";
import { ChatBotProvider } from "../providers/chatBotProvider";
import AuthWrapper from "../providers/authServerProvider";
import { ModalProvider } from "../providers/modalProvider";


export const metadata: Metadata = {
    title: "Dashboard-",
    description: "Vendpro Dashboard",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
    return (
        <main>
            <AuthWrapper>
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
            </AuthWrapper>
        </main>
    );
}
