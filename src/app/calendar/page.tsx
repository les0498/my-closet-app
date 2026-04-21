"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ko } from "date-fns/locale";

const mockRecords: Record<string, { image: string; brand: string; name: string; category: string }[]> = {
  "2026-04-21": [
    {
      image: "https://via.placeholder.com/150",
      brand: "코드그라피",
      name: "체크 토마토 링거 반소매 티셔츠",
      category: "상의",
    },
    {
      image: "https://via.placeholder.com/150",
      brand: "코드그라피",
      name: "체크 패치 버뮤다 트레이닝 쇼츠",
      category: "하의",
    },
  ],
  "2026-04-18": [
    {
      image: "https://via.placeholder.com/150",
      brand: "코드그라피",
      name: "체크 토마토 링거 반소매 티셔츠",
      category: "상의",
    },
  ],
};

function toKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function CalendarPage() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  const selectedKey = selected ? toKey(selected) : "";
  const records = mockRecords[selectedKey] ?? [];
  const markedDays = Object.keys(mockRecords).map((d) => new Date(d));

  return (
    <main className="p-6 pb-24">
      <h1 className="text-2xl font-bold mb-4">착용 기록</h1>

      {/* 캘린더 */}
      <div className="flex justify-center mb-6">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          locale={ko}
          modifiers={{ marked: markedDays }}
          modifiersStyles={{
            marked: {
              fontWeight: "bold",
              textDecoration: "underline",
            },
          }}
        />
      </div>

      {/* 선택된 날짜 기록 */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 mb-3">
          {selected
            ? `${selected.getMonth() + 1}월 ${selected.getDate()}일 착용`
            : "날짜를 선택하세요"}
        </h2>

        {records.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-10">
            기록된 착용 정보가 없어요
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {records.map((item, i) => (
              <div key={i} className="border rounded-xl p-4 flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover bg-muted"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">{item.brand}</span>
                  <span className="font-semibold text-sm">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}