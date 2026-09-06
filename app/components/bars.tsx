"use client";

import { Bar } from "../types/barTypes";


export default function Bars({ data }: { data: Bar[] }) {

    return (
        <div className=" items-center flex flex-col p-4 gap-4">
            {data.map((bar) => {
                const color = bar.value >= 60 ? "#22c55e" : bar.value >= 30 ? "#f97316" : "#ef4444";
                const percentage = (bar.value / bar.total) * 100;
                return (
                    <div key={bar.id} className="w-full relative">
                        <small>{bar.text}</small>
                        <div className="bg-[#222225] border border-border/30 w-[90%] mb-2 mt-2  relative rounded-full h-2.5 flex gap-4">
                            <div style={{ background: color, width: `${percentage}%`, }} className={` w-full z-10 absolute block   transition-all duration-500 left-0 h-2.5 rounded-full`}></div>
                        </div>
                        <small>{bar.value}</small>
                    </div>
                )
            })}
        </div>
    )

}