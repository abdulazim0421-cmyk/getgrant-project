"use client";

import { GraduationCap, Briefcase, Lightbulb, Star } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CountryHero from "./components/CountryHero";
import CountryAdvantages from "./components/CountryAdvantages";
import CountryCosts from "./components/CountryCosts";
import CountryUniversities from "./components/CountryUniversities";
import CountryVisas from "./components/CountryVisas";
import CountryCta from "./components/CountryCta";
import type { CountryData } from "./components/types";

// ─── Данные ───────────────────────────────────────────────────────────────────

const countriesData: Record<string, CountryData> = {
  usa: {
    name: "США",
    description: "США входит в число лидеров мирового образования с более чем 4000 университетами.",
    heroImage: "/image/HomeContent/Countries/Rectangle 1 (1).png",
    bannerImage: "/image/Countries_id/США-v.png",
    flagImage: "/image/HomeContent/Countries/flag/usa-flag-1 1.png",
    ctaTitle: "Готовы начать обучение в США?",
    advantages: [
      { icon: <GraduationCap size={20} className="text-white" />, title: "Топовое образование",   desc: "США входит в число лидеров мирового образования" },
      { icon: <Briefcase    size={20} className="text-white" />, title: "Карьерные возможности", desc: "Высокие возможности для работы после окончания обучения" },
      { icon: <Lightbulb   size={20} className="text-white" />, title: "Инновации",              desc: "Развитие научного и технологического сектора" },
      { icon: <Star        size={20} className="text-white" />, title: "Качество жизни",         desc: "Высокий уровень жизни и развитая инфраструктура" },
    ],
    costRows: [
      { category: "Аренда жилья",        min: "$800",  avg: "$1,500", max: "$2,500" },
      { category: "Питание",             min: "$200",  avg: "$400",   max: "$800"   },
      { category: "Транспорт",           min: "$50",   avg: "$100",   max: "$150"   },
      { category: "Коммунальные услуги", min: "$100",  avg: "$150",   max: "$200"   },
    ],
    costTotal: { min: "$1,150", avg: "$2,150", max: "$3,650" },
    universities: [
      { id: 1, name: "Harvard University",                 programs: "120 программ", students: "23 000", location: "Cambridge, MA, США", image: "/image/HomeContent/PartnerUniversities/Frame 53 (3).png",          href: "https://ru.wikipedia.org/wiki/Гарвардский_университет" },
      { id: 2, name: "Stanford University",                programs: "150 программ", students: "22 000", location: "Stanford, CA, США",   image: "/image/HomeContent/PartnerUniversities/Frame 53 (4).png",          href: "https://ru.wikipedia.org/wiki/Стэнфордский_университет" },
      { id: 3, name: "MIT",                                programs: "120 программ", students: "11 000", location: "Cambridge, MA, США",  image: "/image/HomeContent/PartnerUniversities/Frame 53 (5).png",          href: "https://ru.wikipedia.org/wiki/Массачусетский_технологический_институт" },
      { id: 4, name: "University of California, Berkeley", programs: "140 программ", students: "30 000", location: "Berkeley, CA, США",   image: "/image/HomeContent/PartnerUniversities/Frame 53 (6).png",          href: "https://ru.wikipedia.org/wiki/Калифорнийский_университет_в_Беркли" },
      { id: 5, name: "Princeton University",               programs: "90 программ",  students: "8 000",  location: "Princeton, NJ, США",  image: "/image/HomeContent/PartnerUniversities/Princeton University.webp", href: "https://ru.wikipedia.org/wiki/Принстонский_университет" },
    ],
    visaTypes: [
      { title: "F-1 Student Visa",  desc: "Основная студенческая виза для аккредитованных университетов" },
      { title: "J-1 Exchange Visa", desc: "Для программ обмена и стажировок" },
      { title: "OPT",               desc: "12–36 месяцев работы после окончания обучения" },
    ],
  },
  canada: {
    name: "Канада",
    description: "Высокое качество жизни и дружелюбная иммиграционная политика для студентов.",
    heroImage: "/image/HomeContent/Countries/Rectangle 1 (2).png",
    bannerImage: "/image/Countries_id/canada-v.jpg",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_Canada_(Pantone).svg.webp",
    ctaTitle: "Готовы начать обучение в Канаде?",
    advantages: [
      { icon: <GraduationCap size={20} className="text-white" />, title: "Качественное образование",  desc: "Канадские университеты входят в топ мировых рейтингов" },
      { icon: <Briefcase    size={20} className="text-white" />, title: "Работа после учёбы",         desc: "PGWP позволяет работать до 3 лет после окончания вуза" },
      { icon: <Lightbulb   size={20} className="text-white" />, title: "Иммиграционные возможности", desc: "Один из самых доступных путей к постоянному резидентству" },
      { icon: <Star        size={20} className="text-white" />, title: "Безопасность и комфорт",     desc: "Канада стабильно входит в топ стран по качеству жизни" },
    ],
    costRows: [
      { category: "Аренда жилья",        min: "$900",  avg: "$1,600", max: "$2,800" },
      { category: "Питание",             min: "$350",  avg: "$500",   max: "$700"   },
      { category: "Транспорт",           min: "$70",   avg: "$120",   max: "$180"   },
      { category: "Коммунальные услуги", min: "$120",  avg: "$180",   max: "$250"   },
    ],
    costTotal: { min: "$1,440", avg: "$2,400", max: "$3,930" },
    universities: [
      { id: 1, name: "University of Toronto",  programs: "130 программ", students: "97 000", location: "Toronto, ON",   image: "/image/HomeContent/PartnerUniversities/University of Toronto.jpg", href: "https://ru.wikipedia.org/wiki/Университет_Торонто" },
      { id: 2, name: "UBC",                    programs: "100 программ", students: "65 000", location: "Vancouver, BC", image: "/image/HomeContent/PartnerUniversities/Cambridge University.jpg",  href: "https://ru.wikipedia.org/wiki/Университет_Британской_Колумбии" },
      { id: 3, name: "McGill University",      programs: "90 программ",  students: "40 000", location: "Montreal, QC",  image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",   href: "https://ru.wikipedia.org/wiki/Университет_Макгилла" },
      { id: 4, name: "University of Waterloo", programs: "80 программ",  students: "42 000", location: "Waterloo, ON",  image: "/image/HomeContent/PartnerUniversities/ETH Zurich.jpg",           href: "https://ru.wikipedia.org/wiki/Университет_Ватерлоо" },
    ],
    visaTypes: [
      { title: "Study Permit",      desc: "Основная виза для обучения продолжительностью более 6 месяцев" },
      { title: "PGWP",              desc: "Разрешение на работу после окончания вуза — до 3 лет" },
      { title: "Co-op Work Permit", desc: "Для программ со стажировками в рамках учебного плана" },
    ],
  },
  australia: {
    name: "Австралия",
    description: "Уникальная природа, высокий уровень безопасности и дипломы, признанные во всем мире.",
    heroImage: "/image/HomeContent/Countries/Rectangle 1 (4).png",
    bannerImage: "/image/Countries_id/Австралия-v.jpg",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_Australia_(converted).svg.webp",
    ctaTitle: "Готовы начать обучение в Австралии?",
    advantages: [
      { icon: <GraduationCap size={20} className="text-white" />, title: "Признанные дипломы",    desc: "Австралийские дипломы котируются работодателями по всему миру" },
      { icon: <Briefcase    size={20} className="text-white" />, title: "Работа после учёбы",     desc: "Visa 485 позволяет остаться работать до 4 лет после окончания" },
      { icon: <Lightbulb   size={20} className="text-white" />, title: "Инновационная среда",    desc: "Австралия входит в топ стран по уровню научных исследований" },
      { icon: <Star        size={20} className="text-white" />, title: "Безопасность и природа", desc: "Высокий уровень безопасности и уникальная природная среда" },
    ],
    costRows: [
      { category: "Аренда жилья",        min: "$1,000", avg: "$1,800", max: "$3,000" },
      { category: "Питание",             min: "$400",   avg: "$600",   max: "$850"   },
      { category: "Транспорт",           min: "$100",   avg: "$150",   max: "$220"   },
      { category: "Коммунальные услуги", min: "$150",   avg: "$220",   max: "$310"   },
    ],
    costTotal: { min: "$1,650", avg: "$2,770", max: "$4,380" },
    universities: [
      { id: 1, name: "University of Melbourne",        programs: "100 программ", students: "52 000", location: "Melbourne, VIC", image: "/image/HomeContent/PartnerUniversities/University of Melbourne.jpg", href: "https://ru.wikipedia.org/wiki/Мельбурнский_университет" },
      { id: 2, name: "University of Sydney",           programs: "110 программ", students: "73 000", location: "Sydney, NSW",    image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",     href: "https://ru.wikipedia.org/wiki/Сиднейский_университет" },
      { id: 3, name: "Australian National University", programs: "80 программ",  students: "25 000", location: "Canberra, ACT",  image: "/image/HomeContent/PartnerUniversities/ETH Zurich.jpg",             href: "https://ru.wikipedia.org/wiki/Австралийский_национальный_университет" },
      { id: 4, name: "University of Queensland",       programs: "90 программ",  students: "55 000", location: "Brisbane, QLD",  image: "/image/HomeContent/PartnerUniversities/Princeton University.webp",  href: "https://ru.wikipedia.org/wiki/Университет_Квинсленда" },
    ],
    visaTypes: [
      { title: "Student Visa (subclass 500)",            desc: "Основная виза для всех иностранных студентов" },
      { title: "Temporary Graduate Visa (subclass 485)", desc: "Позволяет остаться работать после учёбы — до 2–4 лет" },
      { title: "Student Guardian Visa (subclass 590)",   desc: "Для опекунов несовершеннолетних студентов" },
    ],
  },
  uk: {
    name: "Великобритания",
    description: "Вековые традиции образования, престижные дипломы Russell Group и насыщенная культурная жизнь.",
    heroImage: "/image/HomeContent/Countries/Rectangle 1 (3).png",
    bannerImage: "/image/Countries_id/Великобритания-v.webp",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_the_United_Kingdom_(1-2).svg.webp",
    ctaTitle: "Готовы начать обучение в Великобритании?",
    advantages: [
      { icon: <GraduationCap size={20} className="text-white" />, title: "Вековые традиции",  desc: "Оксфорд и Кембридж — старейшие университеты мира" },
      { icon: <Briefcase    size={20} className="text-white" />, title: "Престижные дипломы", desc: "Дипломы Russell Group признаются работодателями по всему миру" },
      { icon: <Lightbulb   size={20} className="text-white" />, title: "Культурная жизнь",   desc: "Насыщенная культурная среда и международное сообщество" },
      { icon: <Star        size={20} className="text-white" />, title: "Graduate Visa",       desc: "Возможность работать 2 года после окончания обучения" },
    ],
    costRows: [
      { category: "Аренда жилья",        min: "£800", avg: "£1,400", max: "£2,200" },
      { category: "Питание",             min: "£300", avg: "£450",   max: "£600"   },
      { category: "Транспорт",           min: "£80",  avg: "£130",   max: "£190"   },
      { category: "Коммунальные услуги", min: "£90",  avg: "£140",   max: "£200"   },
    ],
    costTotal: { min: "£1,270", avg: "£2,120", max: "£3,190" },
    universities: [
      { id: 1, name: "University of Oxford",    programs: "150 программ", students: "24 000", location: "Oxford, UK",    image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",   href: "https://ru.wikipedia.org/wiki/Оксфордский_университет" },
      { id: 2, name: "University of Cambridge", programs: "180 программ", students: "21 000", location: "Cambridge, UK", image: "/image/HomeContent/PartnerUniversities/Cambridge University.jpg", href: "https://ru.wikipedia.org/wiki/Кембриджский_университет" },
      { id: 3, name: "Imperial College London", programs: "100 программ", students: "19 000", location: "London, UK",    image: "/image/HomeContent/PartnerUniversities/Frame 53 (5).png",         href: "https://ru.wikipedia.org/wiki/Имперский_колледж_Лондона" },
      { id: 4, name: "UCL",                     programs: "120 программ", students: "42 000", location: "London, UK",    image: "/image/HomeContent/PartnerUniversities/Frame 53 (6).png",         href: "https://ru.wikipedia.org/wiki/Университетский_колледж_Лондона" },
    ],
    visaTypes: [
      { title: "Student Visa (бывшая Tier 4)", desc: "Основная виза для обучения в аккредитованных учебных заведениях" },
      { title: "Graduate Visa",                desc: "Позволяет работать в Великобритании 2 года после окончания вуза" },
      { title: "Visitor Student Visa",         desc: "Для краткосрочных курсов продолжительностью до 6 месяцев" },
    ],
  },
  germany: {
    name: "Германия",
    description: "Бесплатное образование в государственных вузах, сильная инженерная школа и центр инноваций Европы.",
    heroImage: "/image/HomeContent/Countries/Германия.webp",
    bannerImage: "/image/Countries_id/Германия-v.webp",
    flagImage: "/image/HomeContent/Countries/flag/500px-Flag_of_Germany.svg.webp",
    ctaTitle: "Готовы начать обучение в Германии?",
    advantages: [
      { icon: <GraduationCap size={20} className="text-white" />, title: "Бесплатное образование", desc: "Государственные вузы Германии не взимают плату за обучение" },
      { icon: <Briefcase    size={20} className="text-white" />, title: "Инженерная школа",        desc: "Германия — мировой лидер в области инженерии и технологий" },
      { icon: <Lightbulb   size={20} className="text-white" />, title: "Центр инноваций",         desc: "Развитая экосистема стартапов и научных исследований" },
      { icon: <Star        size={20} className="text-white" />, title: "Работа после учёбы",      desc: "Job Seeker Visa позволяет искать работу после окончания вуза" },
    ],
    costRows: [
      { category: "Аренда жилья",        min: "€700", avg: "€1,100", max: "€1,800" },
      { category: "Питание",             min: "€250", avg: "€400",   max: "€550"   },
      { category: "Транспорт",           min: "€60",  avg: "€90",    max: "€130"   },
      { category: "Коммунальные услуги", min: "€100", avg: "€160",   max: "€220"   },
    ],
    costTotal: { min: "€1,110", avg: "€1,750", max: "€2,700" },
    universities: [
      { id: 1, name: "Technical University of Munich (TUM)",         programs: "120 программ", students: "50 000", location: "Munich, Germany",     image: "/image/HomeContent/PartnerUniversities/ETH Zurich.jpg",           href: "https://ru.wikipedia.org/wiki/Технический_университет_Мюнхена" },
      { id: 2, name: "Ludwig Maximilian University of Munich (LMU)", programs: "100 программ", students: "52 000", location: "Munich, Germany",     image: "/image/HomeContent/PartnerUniversities/Frame 53 (3).png",         href: "https://ru.wikipedia.org/wiki/Мюнхенский_университет" },
      { id: 3, name: "Heidelberg University",                        programs: "80 программ",  students: "30 000", location: "Heidelberg, Germany", image: "/image/HomeContent/PartnerUniversities/Oxford University.webp",   href: "https://ru.wikipedia.org/wiki/Гейдельбергский_университет" },
      { id: 4, name: "Humboldt University of Berlin",                programs: "90 программ",  students: "36 000", location: "Berlin, Germany",     image: "/image/HomeContent/PartnerUniversities/Cambridge University.jpg", href: "https://ru.wikipedia.org/wiki/Берлинский_университет_имени_Гумбольдта" },
    ],
    visaTypes: [
      { title: "Student Visa",     desc: "Для долгосрочного обучения в немецком вузе" },
      { title: "Job Seeker Visa",  desc: "Позволяет искать работу в Германии после окончания учёбы" },
      { title: "Residence Permit", desc: "Временный вид на жительство для студентов на период обучения" },
    ],
  },
};

// ─── Компонент ────────────────────────────────────────────────────────────────

export default function CountryContent({ id }: { id: string }) {
  console.log("Current ID:", id);

  const country = countriesData[id.toLowerCase()];
  if (!country) return (
    <div className="min-h-screen flex items-center justify-center text-[#344054]">
      Страница не найдена для ID: {id}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[72px]">
        <CountryHero
          bannerImage={country.bannerImage}
          name={country.name}
          flagImage={country.flagImage}
          description={country.description}
        />
        <CountryAdvantages advantages={country.advantages} />
        <CountryCosts costRows={country.costRows} costTotal={country.costTotal} />
        <CountryUniversities universities={country.universities} />
        <CountryVisas visaTypes={country.visaTypes} />
        <CountryCta ctaTitle={country.ctaTitle} />
      </main>
      <Footer />
    </div>
  );
}
