import CountryCard, { type Country } from "./CountryCard";

const countries: Country[] = [
  {
    id: 1, name: "США", nameEn: "United States", flag: "🇺🇸",
    flagImage: "/image/HomeContent/Countries/flag/usa-flag-1 1.png",
    description: "США — мировой лидер в образовании с более чем 4000 университетами.",
    image: "/image/HomeContent/Countries/Rectangle 1 (1).png",
    href: "/Countries/usa",
  },
  {
    id: 2, name: "Канада", nameEn: "Canada", flag: "🇨🇦",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_Canada_(Pantone).svg.webp",
    description: "Канада известна своими высокими уровнями жизни и качественным образованием.",
    image: "/image/HomeContent/Countries/Rectangle 1 (2).png",
    href: "/Countries/canada",
  },
  {
    id: 3, name: "Австралия", nameEn: "Australia", flag: "🇦🇺",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_Australia_(converted).svg.webp",
    description: "Австралия привлекает студентов со всего мира своими университетами с высоким рейтингом.",
    image: "/image/HomeContent/Countries/Rectangle 1 (4).png",
    href: "/Countries/australia",
  },
  {
    id: 4, name: "Великобритания", nameEn: "United Kingdom", flag: "🇬🇧",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_the_United_Kingdom_(1-2).svg.webp",
    description: "Великобритания — дом для многих престижных университетов и культурных достопримечательностей.",
    image: "/image/HomeContent/Countries/Rectangle 1 (3).png",
    href: "/Countries/uk",
  },
  {
    id: 5, name: "Германия", nameEn: "Germany", flag: "🇩🇪",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_Germany.svg.webp",
    description: "Германия предлагает бесплатное образование для студентов на разных уровнях, что делает её популярным выбором.",
    image: "/image/HomeContent/Countries/Германия.webp",
    href: "/Countries/germany",
  },
];

export default function CountriesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}
