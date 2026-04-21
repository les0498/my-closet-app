import { clothesMock } from '@/mocks/clothes';

export function getTagStats(clothes: typeof clothesMock) {
  const tagCount: Record<string, number> = {};

  clothes.forEach((item) => {
    item.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] ?? 0) + 1;
    });
  });

  const total = Object.values(tagCount).reduce((a, b) => a + b, 0);

  return Object.entries(tagCount).map(([tag, count]) => ({
    tag,
    count,
    percent: Math.round((count / total) * 100),
  }));
}
