import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                    <h1 className="text-3xl font-bold text-[#101828] mb-2">Политика конфиденциальности</h1>
                    <p className="text-sm text-[#667085] mb-10">Последнее обновление: 1 января 2024 года</p>

                    <div className="prose prose-slate max-w-none space-y-8">

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">1. Общие положения</h2>
                            <p className="text-[#344054] leading-relaxed">
                                Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей образовательного центра GetGrant (далее — «Компания», «мы»), расположенного по адресу: Кыргызская Республика, г. Бишкек, ул. Касыма Тыныстанова, 197/1.
                            </p>
                            <p className="text-[#344054] leading-relaxed mt-3">
                                Используя наш сайт и услуги, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Если вы не согласны с данными условиями, пожалуйста, прекратите использование нашего сервиса.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">2. Какие данные мы собираем</h2>
                            <p className="text-[#344054] leading-relaxed mb-3">Мы можем собирать следующие категории персональных данных:</p>
                            <ul className="list-disc list-inside space-y-2 text-[#344054]">
                                <li>Имя и фамилия</li>
                                <li>Адрес электронной почты</li>
                                <li>Номер телефона</li>
                                <li>Класс обучения и учебное заведение</li>
                                <li>Интересующие страны и университеты</li>
                                <li>Данные об использовании сайта (IP-адрес, тип браузера, страницы посещения)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">3. Цели обработки данных</h2>
                            <p className="text-[#344054] leading-relaxed mb-3">Собранные данные используются для:</p>
                            <ul className="list-disc list-inside space-y-2 text-[#344054]">
                                <li>Предоставления консультационных услуг по поступлению в зарубежные университеты</li>
                                <li>Связи с вами по вопросам оказания услуг</li>
                                <li>Отправки информационных материалов и обновлений (с вашего согласия)</li>
                                <li>Улучшения качества наших услуг и сайта</li>
                                <li>Исполнения договорных обязательств</li>
                                <li>Соблюдения требований законодательства Кыргызской Республики</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">4. Хранение и защита данных</h2>
                            <p className="text-[#344054] leading-relaxed">
                                Мы принимаем технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные хранятся на защищённых серверах. Срок хранения персональных данных — не более 3 лет с момента последнего взаимодействия, если иное не предусмотрено законодательством.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">5. Передача данных третьим лицам</h2>
                            <p className="text-[#344054] leading-relaxed">
                                Мы не продаём и не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством Кыргызской Республики, а также в целях оказания услуг (партнёрские университеты, визовые агентства) — только с вашего явного согласия.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">6. Файлы cookie</h2>
                            <p className="text-[#344054] leading-relaxed">
                                Наш сайт использует файлы cookie для улучшения пользовательского опыта, анализа трафика и персонализации контента. Вы можете отключить cookie в настройках вашего браузера, однако это может повлиять на функциональность сайта.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">7. Ваши права</h2>
                            <p className="text-[#344054] leading-relaxed mb-3">Вы имеете право:</p>
                            <ul className="list-disc list-inside space-y-2 text-[#344054]">
                                <li>Получить информацию о хранящихся у нас ваших данных</li>
                                <li>Запросить исправление неточных данных</li>
                                <li>Запросить удаление ваших данных</li>
                                <li>Отозвать согласие на обработку данных в любое время</li>
                                <li>Подать жалобу в уполномоченный орган</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#101828] mb-3">8. Контакты</h2>
                            <p className="text-[#344054] leading-relaxed">
                                По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
                            </p>
                            <div className="mt-3 space-y-1 text-[#344054]">
                                <p>Email: <a href="mailto:info@getgrant.kg" className="text-blue-600 hover:underline">info@getgrant.kg</a></p>
                                <p>Телефон: <a href="tel:+996554123456" className="text-blue-600 hover:underline">+996 554 123 456</a></p>
                                <p>Адрес: г. Бишкек, ул. Касыма Тыныстанова, 197/1</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}