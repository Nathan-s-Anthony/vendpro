"use client";

import {
    createContext,
    useContext,
    useState,
} from "react";

type AuthContextType = {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [token, setToken] = useState<string | null>(null);

    const login = (newToken: string) => {
        if (typeof window === "undefined") {
            return null;
        }
        return localStorage.setItem("access_token", newToken);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                isAuthenticated: !!token,
                login,
                logout,
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