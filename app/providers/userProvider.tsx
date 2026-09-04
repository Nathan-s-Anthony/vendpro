"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type UserContextType = {
    userId: number | null;
    name: string | null;
    role: string | null;

    setUserId: (userId: number) => void;
    setName: (name: string) => void;
    setRole: (role: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export function UserProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [userId, setUserId] = useState<number | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    return (
        <UserContext.Provider
            value={{
                userId,
                name,
                role,
                setUserId,
                setName,
                setRole,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error(
            "useUser must be used within a UserProvider"
        );
    }

    return context;
}