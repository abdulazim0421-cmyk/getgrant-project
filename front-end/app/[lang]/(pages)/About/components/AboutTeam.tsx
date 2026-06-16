"use client";

import { useLanguage } from "@/app/context/LanguageContext";

interface TeamMember { name: string; role: string; edu: string; avatar: string; }

const team: TeamMember[] = [
    { name: "Айгерим Бекова",    role: "Основатель & CEO",  edu: "Harvard Business School, MBA",                     avatar: "/image/OnlinePrep/Alex Brown.png"    },
    { name: "Даниил Ким",        role: "CTO",                edu: "Stanford University, MS Computer Science",         avatar: "/image/OnlinePrep/David.jpg"         },
    { name: "Лейла Садуллаева",  role: "CFO",                edu: "MIT, MBA Finance",                                 avatar: "/image/OnlinePrep/Elena Smith.png"   },
    { name: "Рустам Исаев",      role: "CMO",                edu: "University of California, Berkeley, BA Marketing", avatar: "/image/OnlinePrep/John Doe.png"       },
    { name: "Анастасия Петрова", role: "COO",                edu: "London School of Economics, MSc Management",       avatar: "/image/OnlinePrep/linda.jpg"          },
    { name: "Нурлан Султанов",   role: "VP of Engineering",  edu: "California Institute of Technology, PhD Robotics", avatar: "/image/OnlinePrep/Maria Johnson.png"  },
];

function TeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white border border-[#EAECF0] rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200">
            <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] flex-shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-sm font-bold text-slate-900 leading-tight truncate">{member.name}</p>
                <p className="text-xs font-semibold text-blue-600 truncate">{member.role}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5 line-clamp-2">{member.edu}</p>
            </div>
        </div>
    );
}

export default function AboutTeam() {
    const { t } = useLanguage();
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            {/* Контейнер изменен на max-w-[1440px] px-4 sm:px-6 lg:px-8 */}
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{t("about.team.title")}</h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 mb-8 md:mb-10">{t("about.team.subtitle")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {team.map((m) => (<TeamCard key={m.name} member={m} />))}
                </div>
            </div>
        </section>
    );
}