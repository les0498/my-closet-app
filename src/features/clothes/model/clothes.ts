import { Clothes, CreateClothesInput } from '@/shared/types/clothes';
import { v4 as uuid } from 'uuid';

// 옷 생성 - id, wornCount, createdAt 자동 부여
export function createClothes(input: CreateClothesInput): Clothes {
  return {
    ...input,
    id: uuid(),
    wornCount: 0,
    createdAt: new Date().toISOString(),
  };
}

// 착용 횟수 1 증가 - 옷 객체 불변성 유지
export function incrementWornCount(clothes: Clothes): Clothes {
  return {
    ...clothes,
    wornCount: clothes.wornCount + 1,
  };
}

// 카테고리 기준 필터
export function filterByCategory(clothesList: Clothes[], category: string): Clothes[] {
  return clothesList.filter((clothes) => clothes.category === category);
}

// 태그 기준 필터
export function filterByTag(clothesList: Clothes[], tag: string): Clothes[] {
  return clothesList.filter((clothes) => clothes.tags.includes(tag));
}

// 안 입은 옷 필터 (wornCount 0)
export function filterByNotWorn(clothesList: Clothes[]): Clothes[] {
  return clothesList.filter((clothes) => clothes.wornCount === 0);
}
