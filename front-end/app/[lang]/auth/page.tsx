"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const router = useRouter();

    useEffect(() => {
        // Триггерим открытие глобального окна авторизации
        window.dispatchEvent(new CustomEvent("open-auth-modal"));

        // Принудительно возвращаем пользователя назад на главную или предыдущую страницу
        // при закрытии окна (можно настроить кастомный роутинг)
        const checkClosed = setInterval(() => {
            const modalExists = document.querySelector('[name="email"]');
            if (!modalExists) {
                clearInterval(checkClosed);
                router.push("/");
            }
        }, 500);

        return () => clearInterval(checkClosed);
    }, [router]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            {/* Страница выступает бэкдропом под открывающуюся модалку */}
            <p className="text-sm text-gray-400 animate-pulse">Загрузка формы авторизации...</p>
        </div>
    );
}