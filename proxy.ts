import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const session = request.cookies.get("vendpro-backend-session");
    if (!session) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }
    if (session && request.nextUrl.pathname === "/login") {
        return NextResponse.redirect(
            new URL("/dashboard/overview", request.url)
        );
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};