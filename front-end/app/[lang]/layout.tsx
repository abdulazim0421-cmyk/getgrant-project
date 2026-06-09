import Providers from "@/app/components/Providers";

export async function generateStaticParams() {
    return [{ lang: "ru" }, { lang: "kg" }];
}

interface LangLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: string }>; // Парамсы теперь строго Promise
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang === "kg" ? "kg" : "ru";

    return (
        <Providers initialLang={lang}>
            {children}
        </Providers>
    );
}