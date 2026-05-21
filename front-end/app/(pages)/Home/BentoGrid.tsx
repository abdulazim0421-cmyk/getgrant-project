import React from 'react';

const BENEFITS = [
    {
        id: 1,
        title: "95% успеха",
        description: "Наши студенты успешно поступают в топовые университеты мира",
        className: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#A16FD3] to-[#583177] text-white",
        image: "/image/student-grid1.png",
        imgClass: "right-[-5%] bottom-[-5%] w-[60%] sm:w-[40%] md:w-[60%] h-auto",
    },
    {
        id: 2,
        title: "Персональный менеджер",
        description: "Индивидуальное сопровождение на всех этапах подготовки и поступления",
        className: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#F5F8FE] to-[#D0EFE9] text-slate-900",
        image: "/image/student-grid2.png",
        imgClass: "right-0 bottom-0 w-[60%] sm:w-[40%] md:w-[65%] h-auto",
    },
    {
        id: 3,
        title: "Лицензированный центр",
        description: "Наши студенты успешно поступают в топовые университеты мира",
        className: "col-span-1 sm:col-span-2 md:col-span-2 bg-gradient-to-r from-[#F5F8FE] to-[#E9EFFD] text-slate-900",
        image: "/image/student-grid5.png",
        imgClass: "right-4 top-1/2 -translate-y-1/2 w-[35%] sm:w-[20%] md:w-[50%] h-auto",
    },
    {
        id: 4,
        title: "Поддержка 24/7",
        description: "Всегда на связи для ответов на ваши вопросы",
        className: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2 bg-gradient-to-b from-[#FEF9E8] to-[#FDE1A7] text-slate-900",
        image: "/image/student-grid3.png",
        imgClass: "right-0 bottom-0 w-[85%] sm:w-[65%] md:w-[95%] h-auto",
    },
    {
        id: 5,
        title: "15+ стран",
        description: "Партнёрство с университетами мира",
        className: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2 bg-[#EAECF0] text-slate-900",
        image: "/image/student-grid4.png",
        imgClass: "right-0 bottom-0 w-full h-auto opacity-80",
    },
    {
        id: 6,
        title: "Онлайн-подготовка",
        description: "Курсы по языку, предметам и экзаменам",
        className: "col-span-1 sm:col-span-2 md:col-span-2 bg-gradient-to-r from-[#F5F8FE] to-[#E9EFFD] text-slate-900",
        image: "/image/student-grid6.png",
        imgClass: "right-4 bottom-0 w-[35%] sm:w-[25%] md:w-[38%] h-auto",
    },
];

const WhyGetGrant = () => {
    return (
        <section className="max-w-[1280px] mx-auto px-4 py-12 md:py-20 font-sans antialiased">
            <div className="flex flex-col items-center text-center mb-10 md:mb-14 px-4">
                <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold mb-3 text-[#1D2939] tracking-tight leading-[1.2]">
                    Почему GetGrant?
                </h2>
                <p className="text-[#667085] text-[15px] sm:text-[16px] md:text-[17px] max-w-[640px] mx-auto font-medium leading-relaxed opacity-90">
                    Мы предоставляем комплексную поддержку для успешного поступления в зарубежные университеты
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 lg:gap-5 auto-rows-[minmax(160px,auto)] md:auto-rows-[170px]">
                {BENEFITS.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative overflow-hidden rounded-[24px] md:rounded-[28px] p-6 md:p-7 flex flex-col cursor-default
                        transition-all duration-500 ease-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-1 ${item.className}`}
                    >
                        <div className="relative z-10 max-w-[200px] sm:max-w-[240px] md:max-w-[260px]">
                            <h3 className="text-[19px] sm:text-[22px] md:text-[25px] font-bold mb-2 md:mb-2 leading-[1.1] tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-[13px] md:text-[14px] leading-relaxed font-medium opacity-80">
                                {item.description}
                            </p>
                        </div>

                        {item.image && (
                            <div className={`absolute pointer-events-none transition-all duration-700 ease-out md:group-hover:scale-105 ${item.imgClass}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain object-right-bottom"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[#667085] text-[13px] md:text-[14px] pt-8 border-t border-slate-100 text-center">
                <span>Лицензия № 123456</span>
                <span className="hidden sm:inline text-[#667085] opacity-30">|</span>
                <span>Аккредитация NAFSA</span>
                <span className="hidden sm:inline text-[#667085] opacity-30">|</span>
                <span>Член ассоциации ICEF</span>
            </div>
        </section>
    );
};

export default WhyGetGrant;