"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Globe, BookOpen, Clock, Users, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

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
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: "/Universities", label: "Университеты", icon: <GraduationCap size={18} /> },
        { href: "/Countries", label: "Страны", icon: <Globe size={18} /> },
        { href: "/Programs", label: "Программы", icon: <BookOpen size={18} /> },
        { href: "/OnlinePrep", label: "Онлайн-подготовка", icon: <Clock size={18} /> },
        { href: "/About", label: "О нас", icon: <Users size={18} /> },
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

                {/* Навигация видна только на больших десктопах */}
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
                                }`}></span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2 md:gap-3">
                    {/* Видны на Планшетах и Десктопах (md+) */}
                    <Link
                        href="/login"
                        className="hidden md:flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 px-4 py-3 transition-colors group/login"
                    >
                        <LogIn size={20} className="group-hover/login:-translate-x-1 transition-transform" />
                        <span className="text-sm lg:text-base">Войти</span>
                    </Link>

                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-[8px] px-6 lg:px-8 py-6 text-sm lg:text-base shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                    >
                        Получить консультацию
                    </Button>

                    {/* Бургер виден ВЕЗДЕ, кроме десктопа (xl), потому что на md ссылок в шапке еще нет */}
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
                        <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Меню</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                            <X size={24} />
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

                    {/* --- КНОПКИ В БУРГЕРЕ: Теперь они ЖЕСТКО скрыты на md+ --- */}
                    <div className="mt-auto pt-6 border-t border-gray-100 space-y-3 block md:hidden">
                        <Button
                            onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true); }}
                            className="w-full bg-blue-600 py-7 text-white text-lg font-medium  rounded-2xl shadow-lg shadow-blue-600/20"
                        >
                            Получить консультацию
                        </Button>
                        <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-4 font-medium text-gray-600 bg-gray-50 rounded-2xl border border-gray-100"
                        >
                            <LogIn size={20} /> Войти в аккаунт
                        </Link>
                    </div>
                </div>
            </div>
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}