import { NextRequest, NextResponse } from "next/server";

const locales = ["ru", "kg"];
const defaultLocale = "ru";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Пропускаем системные файлы, картинки и API
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    // 2. Если пользователь зашел на чистый "/Home", убираем его, чтобы корректно подставить локаль
    if (pathname === "/Home") {
        const savedLang = request.cookies.get("lang")?.value;
        const locale = locales.includes(savedLang ?? "") ? savedLang : defaultLocale;
        return NextResponse.redirect(new URL(`/${locale}/Home`, request.url));
    }

    // 3. Проверяем, начинается ли уже путь с существующей локали (/ru... или /kg...)
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // 4. Если локали в URL нет (например, зашли просто на корень "/" или "/About")
    const savedLang = request.cookies.get("lang")?.value;
    const locale = locales.includes(savedLang ?? "") ? savedLang : defaultLocale;

    // Формируем чистый редирект
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
};