'use client';

import { clothesMock } from '@/mocks/clothes';
import { getTagStats } from '@/lib/stats/getTagStats';
import DonutChart from '@/components/stats/DonutChart';

const mockStats = {
  total: 12,
  mostWorn: {
    image: 'https://via.placeholder.com/150',
    brand: '코드그라피',
    name: '체크 토마토 링거 반소매 티셔츠',
    category: '상의',
    wornCount: 8,
  },
  notWorn: [
    {
      image: 'https://via.placeholder.com/150',
      brand: '코드그라피',
      name: '체크 패치 버뮤다 트레이닝 쇼츠',
      category: '하의',
    },
    {
      image: 'https://via.placeholder.com/150',
      brand: '코드그라피',
      name: '체크 토마토 링거 반소매 티셔츠',
      category: '상의',
    },
  ],
  categoryStats: [
    { category: '상의', count: 5 },
    { category: '하의', count: 3 },
    { category: '아우터', count: 2 },
    { category: '신발', count: 2 },
  ],
};

export default function StatsPage() {
  const tagStats = getTagStats(clothesMock);

  return (
    <main className="p-6 pb-24">
      <h1 className="text-2xl font-bold mb-6">통계</h1>

      {/* 요약 카드 */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="border rounded-xl p-4 flex flex-col gap-1">
          <span className="text-xs text-gray-400">전체 옷</span>
          <span className="text-2xl font-bold">{mockStats.total}벌</span>
        </div>
        <div className="border rounded-xl p-4 flex flex-col gap-1">
          <span className="text-xs text-gray-400">안 입은 옷</span>
          <span className="text-2xl font-bold text-red-400">{mockStats.notWorn.length}벌</span>
        </div>
      </div>

      {/* 스타일 분포 */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-4">내 스타일 분포</h2>
        <div className="flex items-center gap-6">
          <DonutChart data={tagStats} />

          <div className="flex flex-col gap-2">
            {tagStats.map((item, i) => (
              <div key={item.tag} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: [
                      '#000000',
                      '#555555',
                      '#888888',
                      '#AAAAAA',
                      '#CCCCCC',
                      '#EEEEEE',
                    ][i % 6],
                  }}
                />
                <span className="text-gray-600">{item.tag}</span>
                <span className="font-semibold">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 가장 많이 입은 옷 */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-3">가장 많이 입은 옷</h2>
        <div className="border rounded-xl p-4 flex gap-4 items-center">
          <img
            src={mockStats.mostWorn.image}
            alt={mockStats.mostWorn.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-1 flex-1">
            <span className="text-xs text-gray-400">{mockStats.mostWorn.brand}</span>
            <span className="font-semibold text-sm">{mockStats.mostWorn.name}</span>
            <span className="text-xs text-gray-500">{mockStats.mostWorn.category}</span>
          </div>
          <span className="text-lg font-bold">{mockStats.mostWorn.wornCount}회</span>
        </div>
      </div>

      {/* 카테고리별 */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-3">카테고리별 보유</h2>
        <div className="flex flex-col gap-2">
          {mockStats.categoryStats.map((item) => (
            <div key={item.category} className="flex items-center gap-3">
              <span className="text-sm w-12">{item.category}</span>

              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div
                  className="bg-black h-2 rounded-full"
                  style={{
                    width: `${(item.count / mockStats.total) * 100}%`,
                  }}
                />
              </div>

              <span className="text-sm text-gray-500 w-6 text-right">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 안 입은 옷 */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 mb-3">안 입은 옷</h2>

        <div className="flex flex-col gap-3">
          {mockStats.notWorn.map((item, i) => (
            <div key={i} className="border rounded-xl p-4 flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400">{item.brand}</span>
                <span className="font-semibold text-sm">{item.name}</span>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
