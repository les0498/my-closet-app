"use client";
import { useRouter } from "next/navigation";

export default function AddClothesPage() {
  const router = useRouter();

  return (
    <main className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => router.back()} className="text-sm text-gray-500">
          ← 뒤로
        </button>
        <h1 className="text-xl font-bold">옷 등록</h1>
      </div>

      <div className="flex flex-col gap-4">
        {/* 이미지 업로드 */}
        <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 cursor-pointer hover:border-black transition">
          + 이미지 업로드
        </div>

        {/* 브랜드 */}
        <input
          type="text"
          placeholder="브랜드"
          className="border rounded-lg px-4 py-2 text-sm w-full"
        />

        {/* 상품명 */}
        <input
          type="text"
          placeholder="상품명"
          className="border rounded-lg px-4 py-2 text-sm w-full"
        />

        {/* 카테고리 */}
        <select className="border rounded-lg px-4 py-2 text-sm w-full">
          <option value="">카테고리 선택</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="아우터">아우터</option>
          <option value="신발">신발</option>
          <option value="액세서리">액세서리</option>
        </select>

        {/* 등록 버튼 */}
        <button className="bg-black text-white rounded-full py-3 text-sm font-semibold mt-2">
          등록하기
        </button>
      </div>
    </main>
  );
}