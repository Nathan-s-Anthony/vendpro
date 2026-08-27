import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "VendPro - Login",
    description: "VendPro Portal Login",
};

export default function LoginLayout({ children }: LayoutProps<"/">) {
    return (
        <main>
            {children}
        </main>
    );
}
