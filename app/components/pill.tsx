export default function Pill({ name, status }: { name: string, status: string }) {

    const switchColor = (status: string) => {
        switch (status) {
            case "online":
                return "pill-online";
            case "warning":
                return "pill-warning";
            case "offline":
                return "pill-offline";
            default:
                return "pill-default";

        }
    };

    const colors = switchColor(status);

    // bg - primary / 30 
    return (
        <div className={`${colors} lg:block rounded-full  px-6  py-2`} >
            <div className="flex items-center justify-center gap-2">
                <span className="relative flex justify-start size-2">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${colors}`}></span>
                    <span className={`relative inline-flex size-2 rounded-full ${colors}`}></span>
                </span>
                <span className="font-mono  capitalize  font-bold text-sm ">{name}</span>
            </div>
        </div>
    )
}