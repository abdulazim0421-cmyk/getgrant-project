"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Globe, BookOpen, Clock, Users, LogIn, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import AuthModal from "./AuthModal"; // Импортируем новое модальное окно авторизации
import { useLanguage } from "@/app/context/LanguageContext";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const pathname = usePathname();
    const { lang, setLang, t } = useLanguage();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        if (window.scrollY > 20) {
            setIsScrolled(true);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleOpenConsultation = () => {
        window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    };

    // Вызов глобального события открытия окна авторизации
    const handleOpenAuth = () => {
        window.dispatchEvent(new CustomEvent("open-auth-modal"));
    };

    const currentLang = mounted ? lang : "ru";

    const navLinks = [
        { href: `/${currentLang}/Universities`, label: t("nav.universities"), icon: <GraduationCap size={18} /> },
        { href: `/${currentLang}/Countries`,    label: t("nav.countries"),    icon: <Globe size={18} /> },
        { href: `/${currentLang}/Programs`,     label: t("nav.programs"),     icon: <BookOpen size={18} /> },
        { href: `/${currentLang}/OnlinePrep`,   label: t("nav.online"),       icon: <Clock size={18} /> },
        { href: `/${currentLang}/About`,        label: t("nav.about"),        icon: <Users size={18} /> },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 flex items-center justify-between border-b transition-all duration-300 ${
                isScrolled
                    ? "bg-white py-3 shadow-sm border-[#EAECF0]"
                    : "bg-white/90 xl:bg-transparent backdrop-blur-md xl:backdrop-blur-none py-4 xl:py-6 border-transparent"
            }`}>

                {/* Логотип */}
                <div className="flex-shrink-0 z-10">
                    <Link href={`/${currentLang}/Home`} className="relative block h-9 w-[120px] sm:h-10 sm:w-[140px] hover:opacity-80 transition-opacity">
                        <Image src="/logo/logo.svg" alt="GetGrant" fill className="object-contain object-left" priority />
                    </Link>
                </div>

                {/* Навигация */}
                <nav className="hidden xl:flex items-center gap-6">
                    {mounted && navLinks.map((link) => {
                        const isActive = pathname?.startsWith(link.href);
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

                {/* Правая часть (Языки, кнопки) */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 z-10">

                    {/* Переключатель языка десктоп */}
                    <div className="relative hidden md:block" ref={dropdownRef}>
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 text-sm font-semibold text-gray-600 transition-all bg-white uppercase shadow-sm"
                        >
                            <Globe size={15} />
                            <span>{currentLang}</span>
                            <ChevronDown size={14} className={`transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isLangDropdownOpen && mounted && (
                            <div className="absolute right-0 mt-1.5 w-24 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50">
                                <button
                                    onClick={() => { setLang("ru"); setIsLangDropdownOpen(false); }}
                                    className={`w-full flex items-center justify-center py-2 text-sm font-semibold transition-colors hover:bg-gray-50 ${currentLang === "ru" ? "text-blue-600 bg-blue-50/50" : "text-gray-600"}`}
                                >
                                    RU
                                </button>
                                <button
                                    onClick={() => { setLang("kg"); setIsLangDropdownOpen(false); }}
                                    className={`w-full flex items-center justify-center py-2 text-sm font-semibold transition-colors hover:bg-gray-50 ${currentLang === "kg" ? "text-blue-600 bg-blue-50/50" : "text-gray-600"}`}
                                >
                                    KG
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Кнопка Войти Десктоп */}
                    <button
                        onClick={handleOpenAuth}
                        className="hidden md:flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 px-3 py-2 transition-colors group/login"
                    >
                        <LogIn size={18} className="group-hover/login:-translate-x-0.5 transition-transform" />
                        <span className="text-sm font-semibold">{t("nav.login")}</span>
                    </button>

                    {/* Кнопка Консультации Десктоп */}
                    <Button
                        onClick={handleOpenConsultation}
                        className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-5 text-sm font-semibold shadow-md shadow-blue-600/10 active:scale-95 transition-all"
                    >
                        {t("nav.consultation")}
                    </Button>

                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="xl:hidden p-2.5 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </header>

            {/* Мобильное меню */}
            <div className={`fixed inset-0 z-[100] ${isMobileMenuOpen ? "visible" : "invisible"}`}>
                <div
                    className={`absolute inset-0 bg-gray-950/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <div className={`absolute top-0 right-0 w-full max-w-[340px] h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out p-6 flex flex-col ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Меню</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 border border-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1 p-1 bg-gray-50 border border-gray-100 rounded-xl mb-6">
                        <button
                            onClick={() => setLang("ru")}
                            className={`flex items-center justify-center py-2 rounded-lg text-xs font-bold transition-all ${currentLang === "ru" ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-500"}`}
                        >
                            RU
                        </button>
                        <button
                            onClick={() => setLang("kg")}
                            className={`flex items-center justify-center py-2 rounded-lg text-xs font-bold transition-all ${currentLang === "kg" ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-500"}`}
                        >
                            KG
                        </button>
                    </div>

                    <nav className="flex flex-col gap-1 flex-grow overflow-y-auto pr-1">
                        {mounted && navLinks.map((link) => {
                            const isActive = pathname?.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3.5 p-3.5 rounded-xl text-base font-semibold transition-all ${
                                        isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    <span className={isActive ? "text-blue-600" : "text-gray-400"}>{link.icon}</span>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-auto pt-4 border-t border-gray-100 space-y-2.5">
                        <Button
                            onClick={() => { setIsMobileMenuOpen(false); handleOpenConsultation(); }}
                            className="w-full bg-blue-600 py-6 text-white text-base font-semibold rounded-xl shadow-md shadow-blue-600/10 active:scale-95 transition-all"
                        >
                            {t("nav.consultation")}
                        </Button>
                        {/* Кнопка Войти Мобильная */}
                        <button
                            onClick={() => { setIsMobileMenuOpen(false); handleOpenAuth(); }}
                            className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-gray-600 bg-gray-50 rounded-xl border border-gray-100 transition-colors hover:bg-gray-100"
                        >
                            <LogIn size={18} />
                            {t("nav.login")}
                        </button>
                    </div>
                </div>
            </div>

            <ConsultationModal />
            <AuthModal /> {/* Подключаем модалку авторизации глобально */}
        </>
    );
}