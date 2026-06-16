"use client";

import CountryCard, { type Country } from "./CountryCard";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CountriesGridClient({ countries }: { countries: Country[] }) {
    const { t } = useLanguage();

    if (countries.length === 0) {
        return <p className="text-center text-[#667085] py-10">{t("countries.notfound")}</p>;
    }

    return (
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {countries.map((country) => (
                <CountryCard key={country.id} country={country} />
            ))}
        </div>
    );
}