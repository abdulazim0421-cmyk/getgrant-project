"use client";

import React from "react";
import dynamic from "next/dynamic";

const PopularPrograms = dynamic(
    () => import("./HomeContent/PopularPrograms").then((mod) => mod.PopularProgramsRaw),
    {
        ssr: false,
        loading: () => <div className="py-12 text-center text-gray-400">Загрузка слайдера программ...</div>
    }
);

const PopularCountries = dynamic(
    () => import("./HomeContent/PopularCountries").then((mod) => mod.PopularCountriesRaw),
    {
        ssr: false,
        loading: () => <div className="py-12 text-center text-gray-400">Загрузка слайдера стран...</div>
    }
);

const PartnerUniversities = dynamic(
    () => import("./HomeContent/PartnerUniversities").then((mod) => mod.PartnerUniversitiesRaw),
    {
        ssr: false,
        loading: () => <div className="py-12 text-center text-gray-400">Загрузка слайдера университетов...</div>
    }
);

interface HomeContentProps {
    countries: any[];
    majors: any[];
    partnerUniversities: any[];
}

export default function HomeContent({
                                        countries,
                                        majors,
                                        partnerUniversities,
                                    }: HomeContentProps) {
    return (
        <>
            <PopularPrograms majors={majors} />
            <PopularCountries countries={countries} />
            <PartnerUniversities partnerUniversities={partnerUniversities} />
        </>
    );
}