import CountriesGridClient from "./CountriesGridClient";
import { type Country } from "./CountryCard";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const langToLocale: Record<string, string> = {
    ru: "ru",
    kg: "ky",
};

async function getCountries(locale: string): Promise<Country[]> {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/country-cards?populate[flag]=true&populate[cardImage]=true&locale=${locale}`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            console.error("Strapi response error:", res.status, res.statusText);
            return [];
        }

        const data = await res.json();
        if (!data || !data.data) return [];

        return data.data.map((item: any) => {
            const flagUrl = item.flag?.url;
            const cardImageUrl = item.cardImage?.url;

            return {
                id: item.id,
                name: locale === "ky" ? (item.nameKg || item.nameRu) : item.nameRu,
                nameEn: item.nameEn,
                flag: "",
                flagImage: flagUrl
                    ? flagUrl.startsWith("http") ? flagUrl : `${STRAPI_URL}${flagUrl}`
                    : null,
                description: item.shortDescription,
                image: cardImageUrl
                    ? cardImageUrl.startsWith("http") ? cardImageUrl : `${STRAPI_URL}${cardImageUrl}`
                    : null,
                href: `/Countries/${item.slug}`,
            };
        });
    } catch (error) {
        console.error("Strapi fetch error:", error);
        return [];
    }
}

export default async function CountriesGrid({ lang = "ru" }: { lang?: string }) {
    const locale = langToLocale[lang] || "ru";
    const countries = await getCountries(locale);
    return <CountriesGridClient countries={countries} />;
}