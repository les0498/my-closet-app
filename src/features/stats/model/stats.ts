import { Clothes } from '@/shared/types/clothes';
import { WearRecord } from '@/shared/types/record';
import { Stats, TagStat } from '@/shared/types/stats';
import { calcWornCountMap } from '@/features/record/model/record';

// clothes + records 받아서 통계 전체 계산
// record 모델의 calcWornCountMap을 재사용해서 중복 로직 없앰
export function calcStats(clothes: Clothes[], records: WearRecord[]): Stats {
  const total = clothes.length;
  const wornCountMap = calcWornCountMap(records); // 옷별 착용 횟수

  // 안 입은 옷 수
  const notWornCount = clothes.filter((c) => !wornCountMap[c.id]).length;

  // 가장 많이 입은 옷
  const mostWorn = Object.entries(wornCountMap).reduce<{
    clothesId: string;
    wornCount: number;
  } | null>((acc, [clothesId, count]) => {
    if (!acc || count > acc.wornCount) return { clothesId, wornCount: count };
    return acc;
  }, null);

  // 태그 통계
  const tagCount: Record<string, number> = {};
  clothes.forEach((c) => {
    c.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] ?? 0) + 1;
    });
  });
  const tagTotal = Object.values(tagCount).reduce((a, b) => a + b, 0);
  const tagStats: TagStat[] = Object.entries(tagCount).map(([tag, count]) => ({
    tag,
    count,
    percent: tagTotal > 0 ? Math.round((count / tagTotal) * 100) : 0,
  }));

  // 카테고리 통계
  const categoryCount: Record<string, number> = {};
  clothes.forEach((c) => {
    categoryCount[c.category] = (categoryCount[c.category] ?? 0) + 1;
  });
  const categoryStats = Object.entries(categoryCount).map(([category, count]) => ({
    category,
    count,
  }));

  return { total, notWornCount, mostWorn, tagStats, categoryStats };
}
