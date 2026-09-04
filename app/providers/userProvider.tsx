"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type UserContextType = {
    userId: number | null;
    firstName: string;
    role: string;
    email: string;

    setUserId: (userId: number) => void;
    setFirstName: (name: string) => void;
    setRole: (role: string) => void;
    setEmail: (email: string) => void;
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
    const [firstName, setFirstName] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <UserContext.Provider
            value={{
                userId,
                firstName,
                role,
                email,
                setUserId,
                setFirstName,
                setRole,
                setEmail
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