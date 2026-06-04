"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Globe, BookOpen, Clock, Users, LogIn, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    const pathname = usePathname();
    const { lang, setLang, t } = useLanguage();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const openModal = () => setIsModalOpen(true);
        window.addEventListener("open-consultation-modal", openModal);
        return () => window.removeEventListener("open-consultation-modal", openModal);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    }, [isMobileMenuOpen]);

    // Закрытие выпадашки при клике вне её области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { href: "/Universities", label: t("nav.universities"), icon: <GraduationCap size={18} /> },
        { href: "/Countries",    label: t("nav.countries"),    icon: <Globe size={18} /> },
        { href: "/Programs",     label: t("nav.programs"),     icon: <BookOpen size={18} /> },
        { href: "/OnlinePrep",   label: t("nav.online"),       icon: <Clock size={18} /> },
        { href: "/About",        label: t("nav.about"),        icon: <Users size={18} /> },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12 flex items-center justify-between border-b ${
                isScrolled
                    ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-[#EAECF0]"
                    : "bg-transparent py-6 border-transparent"
            }`}>

                <Link href="/Home" className="relative block h-10 w-[140px] hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo/logo.svg"
                        alt="GetGrant"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                <nav className="hidden xl:flex items-center gap-6">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-2 text-[15px] font-medium transition-colors duration-300 group/link ${
                                    isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-950"
                                }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300 ease-out ${
                                    isActive ? "w-full" : "w-0 group-hover/link:w-full"
                                }`} />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">

                    {/* ВЫПАДАШКА ВЫБОРА ЯЗЫКА (ДЕСКТОП) */}
                    <div className="relative hidden md:block" ref={dropdownRef}>
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-sm font-semibold text-gray-600 transition-all bg-white uppercase"
                        >
                            <Globe size={15} />
                            <span>{lang === "ru" ? "RU" : "KG"}</span>
                            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isLangDropdownOpen && (
                            <div className="absolute right-0 mt-1.5 w-24 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                                <button
                                    onClick={() => { setLang("ru"); setIsLangDropdownOpen(false); }}
                                    className={`w-full flex items-center justify-center py-2 text-sm font-semibold transition-colors hover:bg-gray-50 ${lang === "ru" ? "text-blue-600 bg-blue-50/50" : "text-gray-600"}`}
                                >
                                    RU
                                </button>
                                <button
                                    onClick={() => { setLang("ky"); setIsLangDropdownOpen(false); }}
                                    className={`w-full flex items-center justify-center py-2 text-sm font-semibold transition-colors hover:bg-gray-50 ${lang === "ky" ? "text-blue-600 bg-blue-50/50" : "text-gray-600"}`}
                                >
                                    KG
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => {}}
                        className="hidden md:flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 px-4 py-3 transition-colors group/login"
                    >
                        <LogIn size={20} className="group-hover/login:-translate-x-1 transition-transform" />
                        <span className="text-sm lg:text-base">{t("nav.login")}</span>
                    </button>

                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-[8px] px-6 lg:px-8 py-6 text-sm lg:text-base shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                    >
                        {t("nav.consultation")}
                    </Button>

                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="xl:hidden p-3 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Мобильное меню */}
            <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
                <div
                    className={`absolute inset-0 bg-gray-950/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <div className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">
                            {lang === "ru" ? "Меню" : "Меню"}
                        </span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА (МОБИЛЬНЫЙ) */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-gray-50 border border-gray-100 rounded-xl mb-8">
                        <button
                            onClick={() => setLang("ru")}
                            className={`flex items-center justify-center py-2.5 rounded-lg text-sm font-bold transition-all ${lang === "ru" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
                        >
                            RU
                        </button>
                        <button
                            onClick={() => setLang("ky")}
                            className={`flex items-center justify-center py-2.5 rounded-lg text-sm font-bold transition-all ${lang === "ky" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
                        >
                            KG
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4 flex-grow overflow-y-auto">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-2xl text-lg font-medium transition-all ${
                                    pathname.startsWith(link.href)
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-50"
                                }`}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                <span className={pathname.startsWith(link.href) ? "text-blue-600" : "text-gray-400"}>
                                    {link.icon}
                                </span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-gray-100 space-y-3 block md:hidden">
                        <button
                            onClick={() => { setLang("ru"); setIsLangDropdownOpen(false); }}
                            className={`w-full flex items-center justify-center py-2 text-sm font-semibold transition-colors hover:bg-gray-50 ${lang === "ru" ? "text-blue-600 bg-blue-50/50" : "text-gray-600"}`}
                        >
                            RU
                        </button>

                        {/* Кнопка KG */}
                        <button
                            onClick={() => { setLang("ky"); setIsLangDropdownOpen(false); }}
                            className={`w-full flex items-center justify-center py-2 text-sm font-semibold transition-colors hover:bg-gray-50 ${lang === "ky" ? "text-blue-600 bg-blue-50/50" : "text-gray-600"}`}
                        >
                            KG
                        </button>
                    </div>
                </div>
            </div>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}