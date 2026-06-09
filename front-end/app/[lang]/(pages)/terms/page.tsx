"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-28 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">

                        {/* ЛЕВАЯ КОЛОНКА */}
                        <div className="md:sticky md:top-28 space-y-5">
                            <button
                                onClick={() => router.back()}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Назад
                            </button>
                            <div>
                                <h1 className="text-3xl font-extrabold text-[#101828] tracking-tight leading-tight mb-2">
                                    Условия использования
                                </h1>
                                <p className="text-sm font-medium text-[#667085]">Последнее обновление: 1 января 2024 года</p>
                            </div>
                        </div>

                        {/* ПРАВАЯ КОЛОНКА */}
                        <div className="md:col-span-2 space-y-8 prose prose-slate max-w-none">
                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">1. Принятие условий</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    Используя сайт и услуги GetGrant, вы подтверждаете, что ознакомились с настоящими Условиями использования и согласны с ними. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наш сайт и услуги.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">2. Описание услуг</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base mb-3">
                                    GetGrant — лицензированный образовательный центр, оказывающий следующие услуги:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-[#344054] text-sm sm:text-base">
                                    <li>Консультации по выбору зарубежных университетов</li>
                                    <li>Помощь в подготовке документов для поступления</li>
                                    <li>Подготовка к международным экзаменам (IELTS, TOEFL, SAT, GRE, GMAT)</li>
                                    <li>Сопровождение на всех этапах поступления</li>
                                    <li>Помощь в получении студенческой визы</li>
                                    <li>Онлайн-курсы и подготовительные программы</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">3. Регистрация и аккаунт</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    Для получения некоторых услуг может потребоваться создание аккаунта. Вы обязуетесь предоставлять достоверную информацию, поддерживать актуальность данных и обеспечивать конфиденциальность данных для входа. GetGrant не несёт ответственности за ущерб, возникший вследствие несанкционированного использования вашего аккаунта.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">4. Оплата и возврат</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    Стоимость услуг определяется в соответствии с действующим прайс-листом GetGrant. Оплата производится в порядке и сроки, установленные договором на оказание услуг. Условия возврата денежных средств определяются индивидуально в зависимости от вида услуги и этапа её оказания. Для уточнения обратитесь к менеджеру.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">5. Права и обязанности пользователя</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base mb-3">Пользователь обязуется:</p>
                                <ul className="list-disc list-inside space-y-2 text-[#344054] text-sm sm:text-base">
                                    <li>Предоставлять достоверную информацию о себе</li>
                                    <li>Своевременно выполнять задания и рекомендации специалистов</li>
                                    <li>Не использовать сайт в незаконных целях</li>
                                    <li>Не нарушать права интеллектуальной собственности GetGrant</li>
                                    <li>Не передавать третьим лицам материалы, полученные в рамках курсов</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">6. Интеллектуальная собственность</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    Все материалы, размещённые на сайте GetGrant (тексты, изображения, логотипы, учебные материалы, методики), являются собственностью GetGrant и защищены законодательством об авторском праве. Воспроизведение, распространение и использование материалов без письменного разрешения GetGrant запрещено.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">7. Ограничение ответственности</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    GetGrant прилагает все усилия для обеспечения качества услуг, однако не гарантирует 100% результат поступления в конкретный университет, так как окончательное решение принимается приёмной комиссией учебного заведения. Компания не несёт ответственности за решения третьих сторон (университетов, посольств, визовых центров).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">8. Изменение условий</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    GetGrant оставляет за собой право изменять настоящие Условия использования в любое время. Актуальная версия всегда доступна на данной странице. Продолжение использования сайта после публикации изменений означает ваше согласие с новыми условиями.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">9. Применимое право</h2>
                                <p className="text-[#344054] leading-relaxed text-sm sm:text-base">
                                    Настоящие Условия регулируются законодательством Кыргызской Республики. Все споры подлежат рассмотрению в судах по месту нахождения GetGrant.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-[#101828] mb-3">10. Контакты</h2>
                                <div className="space-y-1 text-sm sm:text-base font-medium text-[#344054]">
                                    <p>Email: <a href="mailto:info@getgrant.kg" className="text-blue-600 hover:underline">info@getgrant.kg</a></p>
                                    <p>Телефон: <a href="tel:+996554123456" className="text-blue-600 hover:underline">+996 554 123 456</a></p>
                                    <p>Адрес: г. Бишкек, ул. Касыма Тыныстанова, 197/1</p>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}