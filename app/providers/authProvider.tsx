"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

type AuthContextType = {
    hasSession: boolean;
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
    children,
    hasSession,
}: {
    children: ReactNode;
    hasSession: boolean;
}) {
    const [isAuthenticated, setIsAuthenticated] =
        useState(hasSession);

    return (
        <AuthContext.Provider
            value={{
                hasSession,
                isAuthenticated,
                setIsAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}