import Button from "@/app/components/button";
import Logo from "@/app/components/logo";
import Heading from "@/app/components/subHeading";
import { Lock } from "lucide-react";
import Form from "@/app/components/form";

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
                <div className="relative grid grid-cols-2 h-screen p-8">
                    <div className=" lg:col-span-1 col-span-2  ">
                        <div className="flex flex-col justify-between p-8 h-full">
                            <div>
                                <Logo variant="large" />
                            </div>
                            <div className="flex justify-center  flex-col items-start lg:max-w-96 gap-6 flex-1 ">
                                <h1 className="uppercase">VENDING <b className="text-primary"><br></br>MACHINES</b><br></br>THAT WORK</h1>
                                <p className="font-sans text-secondary-faded">Manage your entire vending network stock levels, service calls, and new installations —from one place.</p>
                                <div className="flex justify-evenly gap-4">
                                    <Button value={"View Features"} className={"text-background"} variant={"primary"} type={"button"} />
                                    <Button value={"View Pricing"} className={""} variant={"secondary"} type={"button"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:col-span-1 col-span-2">
                        <div className="flex flex-col justify-center  lg:max-w-7/12 mx-auto h-full">
                            <Heading heading={{
                                main: "sign in to ",
                                highlight: "dashboard",
                            }} subHeading={"secure access"} icon={<Lock width={20} height={20} className="text-primary hover:animate-pulse transition-all duration-300" />} />
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}