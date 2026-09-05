import { cookies } from "next/headers";
import { AuthProvider } from "./authProvider";

export default async function AuthWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();

    const session = cookieStore.get("vendpro-backend-session");

    return (
        <AuthProvider hasSession={!!session}>
            {children}
        </AuthProvider>
    );
}