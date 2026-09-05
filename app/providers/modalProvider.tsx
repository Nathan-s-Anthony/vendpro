"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type ModalContextType = {
    toggledModal: boolean;
    setToggleModal: (toggle: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(
    undefined
);

export function ModalProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [toggledModal, setToggleModal] = useState<boolean>(false);
    return (
        <ModalContext.Provider
            value={{
                toggledModal,
                setToggleModal
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error(
            "useUser must be used within a ModalProvider"
        );
    }
    return context;
}