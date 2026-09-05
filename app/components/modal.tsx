"use client";

import { useAside } from "../providers/asideProvider";
import { useModal } from "../providers/modalProvider";
import { models } from "../utils/dummydata";
import Button from "./button";
import Tile from "./tile";
import Image from "next/image";

export default function Modal() {
    const { toggled } = useAside();
    const { toggledModal, setToggleModal } = useModal();
    return (
        <div onClick={() => (setToggleModal(!toggledModal))} className={`${toggled ? "modal-container-full" : "modal-container-compact"}   flex items-center justify-center p-6 ml-auto fixed   inset-0 z-50 w-screen h-screen`}>
            <div className="test bg-secondary p-10 max-w-180 w-full rounded-sm lg:h-[70vh] ">
                <h3 className="text-3xl font-display font-bold text-center">Select your model</h3>
                <div className=" flex items-center justify-center">
                    <div className="grid grid-cols-3  gap-5 mb-4 mt-4">
                        {models.map((machine) => (
                            <Tile
                                key={machine.id}
                                id={`machine-${machine.id}`}
                                className="p-4  relative group rounded-sm "
                                onClick={() => console.log(machine.id)}>
                                <div className="lg:w-40 lg:h-40 relative overflow-hidden">
                                    <Image
                                        alt={`${machine.name} - ${machine.model}`}
                                        className="rounded-sm cursor-pointer transition-transform  duration-300 group-hover:scale-125"
                                        src={machine.image}
                                        fill
                                    />
                                </div>
                                <h4 className="font-bold font-display" title={`${machine.name} - ${machine.model}`}>{machine.name}</h4>
                                <div className="absolute inset-0 w-full h-full rounded-sm  bg-[#030213]/40">test</div>
                            </Tile>))}
                    </div>
                </div>
                <Button value="Continue" type={"button"} className={"justify-self-center"} variant={"primary"} />
            </div>
        </div>
    )
}