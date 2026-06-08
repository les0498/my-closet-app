'use client';
import ClothesCard from '@/components/ClothesCard';
import { clothesMock } from '@/mocks/clothes';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

export default function ClosetPage() {
  const router = useRouter();
  return (
    <main className="p-6">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">내 옷장</h1>
        <button
          onClick={() => router.push('/closet/add')}
          className="flex items-center gap-1 text-sm bg-black text-white px-3 py-1.5 rounded-full"
        >
          <Plus size={14} />옷 등록
        </button>
      </div>

      {/* 그리드 */}
      <div className="grid grid-cols-2 gap-4">
        {/* + 카드 */}
        <div
          onClick={() => router.push('/closet/add')}
          className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center h-52 text-gray-400 hover:border-black hover:text-black transition"
        >
          <Plus size={28} />
          <span className="text-sm mt-1">옷 추가</span>
        </div>
        {clothesMock.map((item) => (
          <ClothesCard
            key={item.id}
            image={item.image}
            brand={item.brand}
            name={item.name}
            category={item.category}
            wornCount={item.wornCount}
            onClick={() => console.log(item.id)}
          />
        ))}
      </div>
    </main>
  );
}
