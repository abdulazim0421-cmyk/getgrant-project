import { NextRequest, NextResponse } from "next/server";

const locales = ["ru", "kg"];
const defaultLocale = "ru";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    if (pathname === "/Home") {
        const savedLang = request.cookies.get("lang")?.value;
        const locale = locales.includes(savedLang ?? "") ? savedLang : defaultLocale;
        return NextResponse.redirect(new URL(`/${locale}/Home`, request.url));
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    const savedLang = request.cookies.get("lang")?.value;
    const locale = locales.includes(savedLang ?? "") ? savedLang : defaultLocale;

    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
};