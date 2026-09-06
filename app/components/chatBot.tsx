"use client";

import { BotMessageSquare } from "lucide-react";
import { useChatBot } from "../providers/chatBotProvider";

export default function ChatBot() {

    const { setToggleChatBot, toggleChatBot, setActiveChatWindow, activeChatWindow, chatWindowPrompt, setChatWindowPrompt } = useChatBot();

    const promptSuggestions = [
        {
            id: 0,
            promptText: "Forecast my revenue for next 5 years",
        },
        {
            id: 1,
            promptText: "Best month to restock",
        },
        {
            id: 2,
            promptText: "Provide Risk Assessment on areas",
        },
        {
            id: 3,
            promptText: "Provide me with a average salary in this suburban area",
        }
    ]

    const handleChatBotOpen = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setToggleChatBot(!toggleChatBot)
    };
    const handleChatWindowOpen = (prompt: string) => {
        setActiveChatWindow(true);
        setChatWindowPrompt(prompt);
    }
    return (
        <>
            <div className="hidden bg-primary fixed bottom-10 cursor-pointer right-10 w-14 h-14 rounded-full lg:block">
                <div className="w-full bg-primary h-full rounded-full flex items-center justify-center">
                    <BotMessageSquare className="text-background" onClick={(e) => handleChatBotOpen(e)} />
                </div>
                <div className={`${toggleChatBot ? "animate-bubble-open" : "animate-bubble-close"}  absolute transition-all duration-300  bg-background border border-border/30  z-40 right-15 bottom-10 w-100 block rounded-sm h-full min-h-100`}>
                    <div className=" h-full p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                        <div className="bg-background p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                            <h4 className="font-mono">Quick stats from your AI Assistant</h4>
                        </div>
                    </div>
                    <div className="absolute top-20">
                        {!activeChatWindow ? promptSuggestions.map((item, id) => {
                            return (
                                <div key={id} className="relative column-1 mb-4 mt-4 gap-4 z-50 h-full bg-[#222225]/30 border border-border/30  header rounded-tr-sm rounded-tl-sm">
                                    <div className="bg-[#222225]/30 border border-border/30   p-4 w-full  block header rounded-sm ">
                                        <button className="z-50 w-full cursor-pointer h-full font-mono font-bold text-xs  " onClick={() => { handleChatWindowOpen(item.promptText) }}>{item.promptText}</button>
                                    </div>
                                </div>
                            )
                        }) : <p className="text-sm p-4 ">
                            lorem ipsum dolor sit amet consectetur adipiscing elit voluptatum maxime officia sit qui est placeat ducimus ipsum anim qui harum enim omnis minim dolor consequat laborum commodo mollitia id accusamus quis et facere et nam vel soluta vero deserunt soluta optio est cillum est optio quidem est id dolor in occaecat nam cupidatat incididunt reprehenderit commodo cum nostrud mollit dolorem nulla ad non quod accusamus soluta pariatur qui sit ut dolorem pariatur est excepteur autem ut nisi quis cupidatat illum dolorum provident quos in repellendus dolores voluptas quod et enim ut distinctio dolor quis qui
                        </p>}
                    </div>
                </div>

            </div>
        </>
    )
}