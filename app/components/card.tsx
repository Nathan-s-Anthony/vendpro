"use client";

export default function Card({ title, value, icon, fullWidth, statsTile, className }: { title?: string, value?: string, icon?: React.ReactNode, fullWidth?: boolean, statsTile?: boolean, className?: string }) {
    return (
        !statsTile ? (
            <div className={`${fullWidth ? "w-full" : "w-1/3"} ${className}  group transition-all rounded-sm bg-[#222225] p-4 duration-300 border border-card-primary hover:border-primary/50 cursor-pointer`}>
                <div className="flex items-start justify-between flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center rounded-sm bg-secondary p-3 gap-2">
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