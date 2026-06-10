"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ArrowLeft, Check, CalendarDays, Mail, Phone, MapPin } from "lucide-react";

export default function TermsPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#FCFCFD] text-[#101828] selection:bg-blue-50 selection:text-blue-700 antialiased flex flex-col justify-between">
            <Header />

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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-4">
                        Публичная оферта
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight leading-none">
                        Условия использования
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#667085] mt-4 bg-white border border-[#EAECF0] w-fit px-3 py-1.5 rounded-lg shadow-sm">
                        <CalendarDays size={14} className="text-blue-500" />
                        <span>Редакция: 1 января 2024</span>
                    </div>
                </div>

                {/* Блок с информацией на всю ширину */}
                <div className="bg-white border border-[#EAECF0] rounded-2xl p-6 sm:p-10 xl:p-12 shadow-sm space-y-10 w-full">

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">1. Принятие условий</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Используя сайт и услуги GetGrant, вы подтверждаете, что ознакомились с настоящими Условиями использования и согласны с ними. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сайт и услуги.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">2. Описание услуг</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base mb-4">
                            GetGrant — лицензированный образовательный центр, оказывающий следующие услуги:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#F9FAFB] p-6 rounded-xl border border-[#EAECF0]">
                            {[
                                "Консультации по выбору вузов",
                                "Помощь в подготовке документов",
                                "Подготовка к IELTS, TOEFL, SAT",
                                "Сопровождение на всех этапах",
                                "Помощь в получении визы",
                                "Онлайн-курсы и программы"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-sm text-[#344054] font-medium">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex-shrink-0">
                                        <Check size={13} strokeWidth={3} />
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">3. Регистрация и аккаунт</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Для получения некоторых услуг может потребоваться создание аккаунта. Вы обязуетесь предоставлять достоверную информацию, поддерживать актуальность данных и обеспечивать конфиденциальность данных для входа. GetGrant не несёт ответственности за ущерб, возникший вследствие несанкционированного использования вашего аккаунта.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">4. Оплата и возврат</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Стоимость услуг определяется в соответствии с действующим прайс-листом GetGrant. Оплата производится в порядке и сроки, установленные договором на оказание услуг. Условия возврата денежных средств определяются индивидуально в зависимости от вида услуги и этапа её оказания. Для уточнения обратитесь к менеджеру.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">5. Права и обязанности пользователя</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Предоставлять достоверную информацию о себе",
                                "Своевременно выполнять задания и рекомендации специалистов",
                                "Не использовать сайт в незаконных целях",
                                "Не нарушать права интеллектуальной собственности GetGrant",
                                "Не передавать третьим лицам материалы, полученные в рамках курсов"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-[#344054] bg-[#FAFAFA] p-3 rounded-xl border border-[#F2F4F7]">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">6. Интеллектуальная собственность</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Все материалы, размещённые на сайте GetGrant (тексты, изображения, логотипы, учебные материалы, методики), являются собственностью GetGrant и защищены законодательством об авторском праве. Воспроизведение, распространение и использование материалов без письменного разрешения GetGrant запрещено.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">7. Ограничение ответственности</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            GetGrant прилагает все усилия для обеспечения качества услуг, однако не гарантирует 100% результат поступления в конкретный университет, так как окончательное решение принимается приёмной комиссией учебного заведения. Компания не несёт ответственности за решения третьих сторон (университетов, посольств, визовых центров).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">8. Изменение условий</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            GetGrant оставляет за собой право изменять настоящие Условия использования в любое время. Актуальная версия всегда доступна на данной странице. Продолжение использования сайта после публикации изменений означает ваше согласие с новыми условиями.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#101828] mb-3.5 pb-2 border-b border-[#F2F4F7]">9. Применимое право</h2>
                        <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                            Настоящие Условия регулируются законодательством Кыргызской Республики. Все споры подлежат рассмотрению в судах по месту нахождения GetGrant.
                        </p>
                    </section>

                    <section className="pt-4">
                        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/50 border border-blue-100/70 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><Mail size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">Email</p>
                                    <a href="mailto:info@getgrant.kg" className="text-sm font-semibold text-blue-600 hover:underline">info@getgrant.kg</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><Phone size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">Телефон</p>
                                    <a href="tel:+996554123456" className="text-sm font-semibold text-blue-600 hover:underline">+996 554 123 456</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><MapPin size={16} /></div>
                                <div>
                                    <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">Адрес</p>
                                    <p className="text-sm font-semibold text-[#344054]">г. Бишкек, ул. Тыныстанова, 197/1</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </main>
            <Footer />
        </div>
    );
}