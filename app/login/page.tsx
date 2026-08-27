export default function Login() {
    return (
        <div className="relative w-screen min-w-screen grid grid-cols-1 min-h-screen h-screen">
            <div
                className="hidden grid-bg-overlay lg:flex flex-col w-[50%] justify-between items-center relative overflow-hidden ">
                <div className="grid-bg"></div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/12 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-16 right-0 w-56 h-56 rounded-full bg-accent/6 blur-[80px] pointer-events-none" />
            </div>
            <div className="absolute inset-0">
                <div className="relative grid grid-cols-2 h-screen">
                    <div className=" lg:col-span-1 col-span-2 ">
                        <div className="flex justify-between items-center ">
                            <h1 className="uppercase">VENDING <b className="text-primary"><br></br>MACHINES</b><br></br>THAT WORK</h1>
                        </div>
                    </div>
                    <div className=" lg:col-span-1 col-span-2">col-2</div>
                </div>
            </div>
        </div>
    )
}