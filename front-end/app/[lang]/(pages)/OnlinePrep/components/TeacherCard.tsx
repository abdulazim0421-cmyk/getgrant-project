"use client";

function openModal() {
  window.dispatchEvent(new CustomEvent("open-consultation-modal"));
}

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
  return (
    <div
      style={{
        width: "305.75px",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #EAECF0",
        background: "#FFF",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* Аватар + имя/специализация */}
      <div className="flex items-start gap-3 w-full">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          style={{ width: "80px", height: "80px", flexShrink: 0, objectFit: "cover" }}
          className="rounded-xl bg-gray-100"
          onError={(e) => { (e.target as HTMLImageElement).style.visibility = "hidden"; }}
        />
        <div className="flex flex-col justify-center gap-0.5 min-h-[80px]">
          <p className="text-[18px] font-bold text-gray-900 leading-tight">{teacher.name}</p>
          <p className="text-[14px] text-gray-500">{teacher.subject}</p>
        </div>
      </div>

      {/* Стоимость, Опыт, Сертификаты */}
      <div className="flex flex-col gap-2 w-full text-[13px] mt-auto">
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-400">Стоимость</span>
          <span className="font-semibold text-gray-900">{teacher.rate}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-400">Опыт</span>
          <span className="font-semibold text-gray-900">{teacher.exp}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-400">Сертификаты</span>
          <span className="font-semibold text-gray-900">{teacher.cert}</span>
        </div>
      </div>

      <button
        onClick={openModal}
        className="w-full py-2 rounded-lg border border-[#0047FF] text-[#0047FF] text-xs font-semibold hover:bg-[#0047FF] hover:text-white transition-colors"
      >
        Записаться
      </button>
    </div>
  );
}
