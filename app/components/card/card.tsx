"use client";

import { useState } from "react";
import CardActions from "./cardActions";

export default function Card({ id, title, value, icon, fullWidth, statsTile, className }: { id: number, title?: string, value?: string, icon?: React.ReactNode, fullWidth?: boolean, statsTile?: boolean, className?: string }) {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    // const handleMouseEnterTile = (e: React.MouseEvent<HTMLDivElement>) => {
    //     console.log(e, "mouse entering card");
    //     setHoveredCard(id);
    // };
    // const handleLeaveTile = (e: React.MouseEvent<HTMLDivElement>) => {
    //     console.log(e, "mouse leaving card");
    //     // setHoveredCard(null);
    // };
    const handleMouseEnterTile = () => {
        setHoveredCard(id);
    };

    const handleLeaveTile = () => {
        setHoveredCard(null);
    };
    return (
        !statsTile ? (
            <div id={String(id)}
                onMouseEnter={handleMouseEnterTile}
                className={`${fullWidth ? "w-full" : "w-1/3"} ${className}  group transition-all rounded-sm bg-[#222225] p-4 duration-300 border border-card-primary hover:border-primary/50 relative cursor-pointer`}>
                {hoveredCard === id && (
                    <CardActions
                        id={id}
                        // onMouseEnter={handleMouseEnterTile}
                        onMouseLeave={handleLeaveTile}
                        className={
                            hoveredCard === id
                                ? "animate-card-action-open"
                                : "animate-card-action-close"
                        }
                    />
                )}                <div className="flex items-start justify-between flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center rounded-sm bg-[#030213]/40 p-3 gap-2">
                                {icon}
                            </div>
                        </div>
                    </div>
                    <span className="text-3xl font-bold">{value}</span>
                    <small className="text-secondary-faded text-sm">{title}</small>
                </div>
            </div>
        ) : (
            <div className={`${fullWidth ? "w-full" : "w-1/3"}  group transition-all rounded-sm bg-[#222225] p-4 duration-300 border border-card-primary hover:border-primary/50 cursor-pointer`}>
                test
            </div>
        )
    )
}