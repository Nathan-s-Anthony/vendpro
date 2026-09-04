"use client";

import { BotMessageSquare } from "lucide-react";
import { useChatBot } from "../providers/chatBotProvider";

export default function ChatBot() {

    const { setToggleChatBot, toggleChatBot } = useChatBot();

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

    return (
        <>
            <div onClick={() => (setToggleChatBot((toggle: boolean) => !toggle))} className="hidden bg-primary fixed bottom-10 cursor-pointer z-10 right-10 w-14 h-14 rounded-full lg:block">
                {toggleChatBot}
                <div className="w-full bg-primary h-full rounded-full flex items-center justify-center">
                    <BotMessageSquare className="text-background" />
                </div>
                <div className={`${toggleChatBot ? "animate-bubble-open" : "animate-bubble-close"}  absolute transition-all duration-300  bg-[#030213] z-40 right-10 bottom-10 w-100 block rounded-sm h-full min-h-100`}>
                    <div className=" h-full p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                        <div className="bg-background p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                            <h4 className="font-mono"> Chat with an AI assistant now</h4>
                        </div>
                    </div>
                    <div className="absolute top-20 ">
                        {promptSuggestions.map((item, id) => {
                            return (
                                <div key={id} className="relative column-1 mb-4 mt-4 gap-4  h-full bg-secondary  header rounded-tr-sm rounded-tl-sm">
                                    <div className="bg-secondary p-4 w-full  block header rounded-sm ">
                                        <button className="font-mono font-bold">{item.promptText}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}