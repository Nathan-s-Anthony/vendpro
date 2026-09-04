export default function Welcome() {
    return (
        <div className="relative w-screen min-w-screen grid grid-cols-1 min-h-screen h-screen">
            <div
                className="hidden grid-bg-overlay lg:flex flex-col w-[50%] justify-between items-center relative overflow-hidden ">
                <div className="grid-bg"></div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/12 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-16 right-0 w-56 h-56 rounded-full bg-accent/6 blur-[80px] pointer-events-none" />
            </div>
            <div className="absolute inset-0">
            </div>
        </div>
    )
}