import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Clothes, CreateClothesInput } from '@/shared/types/clothes';
import { createClothes, incrementWornCount } from '../model/clothes';

type ClothesStore = {
  clothes: Clothes[];
  addClothes: (input: CreateClothesInput) => void;
  incrementWorn: (clothesId: string) => void;
  reset: () => void;
};

// 옷 데이터를 관리하는 전역 store
// persist middleware를 사용해 로컬 스토리지에 저장, 새로고침해도 데이터 유지 목적

export const useClothesStore = create<ClothesStore>()(
  persist(
    (set) => ({
      // 옷 목록 원본 데이터
      clothes: [],
      // 새 옷 추가 - createClothes 함수를 사용해 id, wornCount, createdAt 자동 부여
      addClothes: (input) =>
        set((state) => ({
          clothes: [...state.clothes, createClothes(input)],
        })),

      // 특정 옷의 착용 횟수 증가 - incrementWorn 함수를 사용해 불변성 유지
      incrementWorn: (clothesId) =>
        set((state) => ({
          clothes: state.clothes.map((clothes) =>
            clothes.id === clothesId ? incrementWornCount(clothes) : clothes
          ),
        })),

      reset: () => set({ clothes: [] }), // 옷 데이터 초기화
    }),
    {
      name: 'my-closet-clothes', // 로컬 스토리지 키
    }
  )
);
