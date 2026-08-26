"use client";
import { Zap } from "lucide-react";

export default function Card() {
    return (
        <div className="group transition-all bg-secondary p-4 duration-300 border border-card-primary hover:border-primary/50 cursor-pointer">
            <div>
                <Zap />
            </div>
        </div>
    )
}