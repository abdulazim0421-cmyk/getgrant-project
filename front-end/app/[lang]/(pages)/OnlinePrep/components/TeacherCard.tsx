"use client";

export interface Teacher {
    id: number;
    name: string;
    subject: string;
    rate: string;
    exp: string;
    cert: string;
    avatar: string;
}

export default function TeacherCard({ teacher }: { teacher: Teacher }) {

    const handleEnrollClick = () => {
        window.dispatchEvent(new CustomEvent("open-teacher-modal", { detail: teacher }));
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto bg-white rounded-2xl border border-[#EAECF0] p-5 flex flex-col gap-4 shadow-sm h-full select-none">
            {/* Аватар + информация */}
            <div className="flex items-start gap-3 w-full">
                <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gray-50 shrink-0 object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.visibility = "hidden"; }}
                />
                <div className="flex flex-col justify-center min-h-[56px] min-w-0">
                    <p className="text-base font-bold text-gray-900 leading-tight truncate">{teacher.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate mt-0.5">{teacher.subject}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full text-xs sm:text-[13px] mt-auto border-t border-gray-50 pt-3">
                <div className="flex justify-between items-center gap-2 w-full">
                    <span className="text-gray-400 shrink-0">Стоимость</span>
                    <span className="font-semibold text-gray-900 text-right truncate">{teacher.rate}</span>
                </div>
                <div className="flex justify-between items-center gap-2 w-full">
                    <span className="text-gray-400 shrink-0">Опыт</span>
                    <span className="font-semibold text-gray-900 text-right truncate">{teacher.exp}</span>
                </div>
                <div className="flex justify-between items-start gap-2 w-full">
                    <span className="text-gray-400 shrink-0">Сертификаты</span>
                    <span className="font-semibold text-gray-900 text-right line-clamp-2 max-w-[180px]">
                        {teacher.cert}
                    </span>
                </div>
            </div>

            <button
                onClick={handleEnrollClick}
                className="w-full py-2.5 rounded-xl border border-[#0047FF] text-[#0047FF] text-xs font-semibold hover:bg-[#0047FF] hover:text-white transition-all active:scale-98 mt-1"
            >
                Записаться
            </button>
        </div>
    );
}