"use client";

import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
    type ReactNode,
} from "react";

type ChatBotContextType = {
    toggleChatBot: boolean;
    setToggleChatBot: Dispatch<SetStateAction<boolean>>;
    activeChatWindow: boolean;
    setActiveChatWindow: Dispatch<SetStateAction<boolean>>;
    chatWindowPrompt: string;
    setChatWindowPrompt: Dispatch<SetStateAction<string>>;
}
const ChatBotContext = createContext<ChatBotContextType | undefined>(
    undefined
);

export function ChatBotProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [toggleChatBot, setToggleChatBot] = useState<boolean>(false);
    const [activeChatWindow, setActiveChatWindow] = useState<boolean>(false);
    const [chatWindowPrompt, setChatWindowPrompt] = useState<string>("");
    return (

        <ChatBotContext.Provider
            value={{
                toggleChatBot,
                setToggleChatBot,
                activeChatWindow,
                setActiveChatWindow,
                chatWindowPrompt,
                setChatWindowPrompt
            }}
        >
            {children}
        </ChatBotContext.Provider>
    );
}

export function useChatBot() {
    const context = useContext(ChatBotContext);

    if (!context) {
        throw new Error(
            "useUser must be used within a ChatBotProvider"
        );
    }

    return context;
}