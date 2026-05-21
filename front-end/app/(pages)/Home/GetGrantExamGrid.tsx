"use client";
import Image from "next/image";

// Локальный компонент для маленьких карточек (SAT, GRE и т.д.)
const ExamTile = ({
                      title,
                      desc,
                      bgColor,
                      href = "#",
                  }: {
    title: string;
    desc: string;
    bgColor: string;
    href?: string;
}) => (
    <div
        className={`${bgColor} rounded-[32px] p-7 flex flex-col justify-between min-h-[200px] 
        /* Ключевые классы анимации: плавность, длительность */
        transition-all duration-300 ease-out
        /* Эффекты при наведении: масштаб, тень */
        hover:scale-105 hover:shadow-lg hover:z-10 text-gray-950`} // Весь текст в маленьких карточках темный
    >
        <div>
            {/* Исправлен вес и цвет заголовка */}
            <h3 className="text-xl font-semibold leading-tight text-gray-950">
                {title}
            </h3>
            {/* Исправлен вес и цвет описания */}
            <p className="text-sm mt-3 leading-relaxed text-gray-950 opacity-90">
                {desc}
            </p>
        </div>
        {/* Исправлен цвет ссылки на темный (черный) */}
        <a
            href={href}
            className="inline-flex items-center text-sm font-semibold text-gray-950 mt-4 group"
        >
            Подобрать курс
            {/* Стрелка темная, сдвиг немного увеличен */}
            <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5 text-gray-950">
                →
            </span>
        </a>
    </div>
);

export default function GetGrantExamGrid() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* БОЛЬШАЯ КАРТОЧКА: TOEFL / IELTS */}
                <div
                    className="lg:col-span-2 relative overflow-hidden rounded-[32px] bg-[linear-gradient(98deg,#3068E3_0%,#B0CAFC_100%)] text-white p-8 md:p-10 flex flex-col justify-between min-h-[400px]
                    /* Ключевые классы анимации */
                    transition-all duration-300 ease-out
                    /* Эффекты при наведении */
                    hover:scale-[1.03] hover:shadow-xl group"
                >
                    {/* Контентная часть */}
                    <div className="relative z-10 max-w-[260px]">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                            TOEFL / IELTS
                        </h2>
                        <p className="text-lg opacity-90 leading-snug text-white">
                            Подготовка к международным экзаменам в языковых
                            клубах.
                        </p>
                    </div>

                    <div className="relative z-10 mt-auto">
                        {/* Кнопка с синим текстом ссылки и синей стрелкой */}
                        <button className="bg-white text-blue-600 px-7 py-4 rounded-2xl font-semibold text-sm flex items-center gap-2 hover:bg-opacity-95 transition-all shadow-md cursor-pointer group/btn">
                            <span className="text-blue-600">Получи план за 5 минут</span>
                            {/* Синяя стрелка */}
                            <span className="transition-transform duration-300 group-hover/btn:translate-x-1 text-blue-600">→</span>
                        </button>
                        <p className="text-[12px] mt-4 opacity-70 text-white">
                            Диагностика + план подготовки бесплатно
                        </p>
                    </div>

                    {/* Изображение девушки */}
                    <div className="absolute right-0 bottom-0 h-full w-[60%] pointer-events-none">
                        <Image
                            src="/vecteezy_young-woman-in-graduation-attire-with-backpack-and-book-back_65435262 1 (1).webp" // Убедитесь, что путь верный
                            alt="Student"
                            fill
                            priority
                            className="object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* СЕТКА МАЛЕНЬКИХ КАРТОЧЕК */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <ExamTile
                        title="SAT / ACT"
                        desc="Математика и English для поступления в США."
                        bgColor="bg-[linear-gradient(105deg,#F5F8FE_0%,#E9EFFD_100%)]"
                    />
                    <ExamTile
                        title="Personal Statement"
                        desc="Эссе, мотивационные письма и структура заявки."
                        bgColor="bg-[linear-gradient(105deg,#FEF9E8_0%,#FDE1A7_100%)]"
                    />
                    <ExamTile
                        title="GRE"
                        desc="Подготовка к экзамену для поступления в аспирантуру."
                        bgColor="bg-[linear-gradient(105deg,#FEFBFC_0%,#D0EFE9_100%)]"
                    />
                    <ExamTile
                        title="GMAT"
                        desc="Подготовка к тесту для бизнес-школ."
                        bgColor="bg-[linear-gradient(105deg,#ECD9FC_0%,#ECE6FC_100%)]"
                    />
                </div>
            </div>
        </section>
    );
}