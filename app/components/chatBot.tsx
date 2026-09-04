"use client";

import { BotMessageSquare } from "lucide-react";
import { useChatBot } from "../providers/chatBotProvider";

export default function ChatBot() {

    const { setToggleChatBot, toggleChatBot } = useChatBot();

    return (
        <>
            <div onClick={() => (setToggleChatBot((toggle: boolean) => !toggle))} className="bg-primary fixed bottom-10 cursor-pointer z-10 right-10 w-14 h-14 rounded-full block">
                {toggleChatBot}
                <div className="w-full bg-primary h-full rounded-full flex items-center justify-center">
                    <BotMessageSquare className="text-background" />
                </div>
                <div className={`${toggleChatBot ? "animate-bubble-open" : "animate-bubble-close"}  absolute transition-all duration-300  bg-primary z-40 right-10 bottom-10 w-100 block rounded-sm h-full min-h-100`}>
                    <div className=" h-full p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                        <div className="bg-background p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                            <h4 className="font-mono"> Chat with an AI assistant now</h4>
                        </div>

                    </div>
                    <div className="absolute bottom-0">
                        <div className=" h-full w-full  w-full relative block header rounded-tr-sm rounded-tl-sm">
                            <div className="bg-background p-4  w-full relative block header rounded-tr-sm rounded-tl-sm">
                                <h4 className="font-mono"> Chat with an AI assistant now</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}