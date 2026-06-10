"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ArrowLeft, CalendarDays, Lock, Eye, CheckCircle } from "lucide-react";

export default function PrivacyPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#FCFCFD] text-[#101828] selection:bg-blue-50 selection:text-blue-700 antialiased flex flex-col justify-between">
            <Header />

            {/* Контейнер теперь занимает всю ширину с адаптивными отступами */}
            <main className="pt-32 pb-24 lg:pt-36 w-full px-4 sm:px-8 lg:px-16 xl:px-24">

                {/* Кнопка Назад */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#475467] hover:text-blue-600 transition-colors group"
                    >
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#EAECF0] shadow-sm group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all">
                            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform text-[#475467] group-hover:text-blue-600" />
                        </span>
                        Назад
                    </button>
                </div>

                {/* Шапка страницы */}
                <div className="border-b border-[#EAECF0] pb-8 mb-10 w-full">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
                        Безопасность данных
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-none">
                        Политика конфиденциальности
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#667085] mt-4 bg-white border border-[#EAECF0] w-fit px-3 py-1.5 rounded-lg shadow-sm">
                        <CalendarDays size={14} className="text-indigo-500" />
                        <span>Редакция: 1 января 2024</span>
                    </div>
                </div>

                {/* Блок с информацией на всю ширину */}
                <div className="bg-white border border-[#EAECF0] rounded-2xl p-6 sm:p-10 xl:p-12 shadow-sm space-y-10 w-full">

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">1. Общие положения</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Настоящая Политику конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей образовательного центра GetGrant (далее — «Компания», «мы»), расположенного по адресу: Кыргызская Республика, г. Бишкек, ул. Касыма Тыныстанова, 197/1.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">2. Какие данные мы собираем</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base mb-4">
                            Мы обрабатываем только ту информацию, которая необходима для качественного подбора образовательных программ:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                "Имя и фамилия",
                                "Контактные данные (Email, Телефон)",
                                "Класс обучения / Текущий вуз",
                                "Целевые страны и университеты",
                                "Техническая аналитика (IP, Cookies)"
                            ].map((dataItem, i) => (
                                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] text-sm text-[#344054] font-medium">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                                    {dataItem}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">3. Цели обработки данных</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Предоставление точных консультаций по поступлению",
                                "Оперативная связь и отправка официальных уведомлений",
                                "Персонализация подбора грантовых программ и стипендий",
                                "Улучшение интерфейса и стабильности работы веб-ресурса",
                                "Исполнение прямых договорных обязательств перед клиентом"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-[#344054] bg-[#FAFAFA] p-4 rounded-xl border border-[#F2F7F7]">
                                    <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex-shrink-0">
                                        <Eye size={13} />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">4. Хранение и защита данных</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Мы принимаем передовые технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа. Данные хранятся на защищённых серверах с шифрованием. Срок хранения персональных данных — не более 3 лет с момента последнего взаимодействия.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">5. Передача данных третьим лицам</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Мы категорически не продаем и не распространяем ваши персональные данные. Передача партнерским университетам или визовым центрам осуществляется исключительно после подписания договора и с вашего явного согласия.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">6. Файлы cookie</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Наш сайт использует файлы cookie для улучшения пользовательского опыта, анализа трафика и персонализации контента. Вы можете отключить cookie в настройках вашего браузера.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">7. Ваши права</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                "Запросить выгрузку всей информации о вас",
                                "Исправить неточности в вашем цифровом профиле",
                                "Потребовать полное и безвозвратное удаление данных",
                                "Отозвать согласие на коммуникации в один клик"
                            ].map((right, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-emerald-50/20 rounded-xl border border-emerald-100/60 text-sm text-[#344054] font-medium">
                                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                                    {right}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pt-6 border-t border-[#EAECF0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm"><Lock size={18} /></div>
                            <div>
                                <h4 className="text-sm font-bold text-[#101828]">Остались вопросы безопасности?</h4>
                                <p className="text-xs text-[#667085] mt-0.5">Наш DPO-офицер ответит в течение 24 часов.</p>
                            </div>
                        </div>
                        <a href="mailto:info@getgrant.kg" className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100/80 transition-colors rounded-xl border border-indigo-100 shadow-sm w-fit">
                            Связаться с отделом безопасности
                        </a>
                    </section>
                </div>

            </main>
            <Footer />
        </div>
    );
}