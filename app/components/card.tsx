"use client";
import { Zap } from "lucide-react";

export default function Card() {
    return (
        <div className="group transition-all duration-300 border border-card-primary hover:border-primary/50 cursor-pointer">
            <Zap />
        </div>
    )
}