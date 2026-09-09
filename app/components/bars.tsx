"use client";

import { useEffect, useRef, useState } from "react";
import { Bar } from "../types/barTypes";

export default function Bars({ data }: { data: Bar[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="items-center flex flex-col p-4 gap-4"
        >
            {data.map((bar) => {
                const color =
                    bar.value >= 60
                        ? "#22c55e"
                        : bar.value >= 30
                            ? "#f97316"
                            : "#ef4444";

                const percentage = (bar.value / bar.total) * 100;

                return (
                    <div key={bar.id} className="w-full relative">
                        <small>{bar.text}</small>
                        <div className="bg-[#222225] border border-border/30 w-full mb-2 mt-2 relative rounded-full h-2.5">
                            <div
                                style={{
                                    background: color,
                                    width: inView ? `${percentage}%` : "0%",
                                }}
                                className="z-10 absolute block left-0 h-2.5 rounded-full transition-[width] duration-1000 ease-out"
                            />
                        </div>
                        <small>{bar.value}</small>
                    </div>
                );
            })}
        </div>
    );
}