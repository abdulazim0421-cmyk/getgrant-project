import CountriesGridClient from "./CountriesGridClient";
import { type Country } from "./CountryCard";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function getCountries(): Promise<Country[]> {
    try {
        const res = await fetch(
            `${STRAPI_URL}/api/sountry-pages?populate[flag]=true&populate[cover_image]=true`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) return [];

        const data = await res.json();

        return data.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            nameEn: item.name_en,
            flag: "",
            flagImage: item.flag ? `${STRAPI_URL}${item.flag.url}` : null,
            description: item.description,
            image: item.cover_image ? `${STRAPI_URL}${item.cover_image.url}` : null,
            href: `/Countries/${item.slug}`,
        }));
    } catch (error) {
        console.error("Strapi fetch error:", error);
        return [];
    }
}

export default async function CountriesGrid() {
    const countries = await getCountries();
    return <CountriesGridClient countries={countries} />;
}