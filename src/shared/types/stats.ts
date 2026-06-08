export type TagStat = {
  tag: string;
  count: number;
  percent: number;
};

export type Stats = {
  total: number;
  notWornCount: number;
  mostWorn: { clothesId: string; wornCount: number } | null;
  tagStats: TagStat[];
  categoryStats: { category: string; count: number }[];
};
