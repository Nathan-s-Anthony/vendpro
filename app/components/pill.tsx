export default function Pill({ name }: { name: string }) {
    return (
        <div className=" lg:block hidden rounded-full bg-primary/30  px-6 border border-primary py-2">
            <div className="flex items-center justify-center gap-2">
                <span className="relative flex justify-start size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-primary/50"></span>
                </span>
                <span className="font-mono text-primary font-bold text-sm ">{name}</span>
            </div>
        </div>
    )
}