"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type ModalContextType = {
    toggled: boolean;
    setToggle: (toggle: boolean) => void;
};

const AsideContext = createContext<ModalContextType | undefined>(
    undefined
);

export function AsideProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [toggled, setToggle] = useState<boolean>(false);
    return (
        <AsideContext.Provider
            value={{
                toggled,
                setToggle
            }}
        >
            {children}
        </AsideContext.Provider>
    );
}

export function useUser() {
    const context = useContext(AsideContext);

    if (!context) {
        throw new Error(
            "useUser must be used within a AsideProvider"
        );
    }

    return context;
}