import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CreateRecordInput, WearRecord } from '@/shared/types/record';
import { createRecord, getRecordsByDate } from '@/features/record/model/record';
import { useClothesStore } from '@/features/clothes/store/clothesStore';

type RecordStore = {
  records: WearRecord[];

  addRecord: (input: CreateRecordInput) => void;

  getByDate: (date: string) => WearRecord[];

  reset: () => void;
};

// 착용 기록을 관리하는 전역 store

export const useRecordStore = create<RecordStore>()(
  persist(
    (set, get) => ({
      // 착용 기록 원본 데이터
      records: [],
      // 새 착용 기록 추가 - createRecord 함수를 사용해 id, createdAt 자동 부여
      addRecord: (input) => {
        set((state) => ({
          records: [...state.records, createRecord(input)],
        }));
        useClothesStore.getState().incrementWorn(input.clothesId); // 기록 추가 시 해당 옷의 착용 횟수도 증가
      },
      // 날짜별 기록 조회
      getByDate: (date) => getRecordsByDate(get().records, date),
      reset: () => set({ records: [] }), // 기록 데이터 초기화
    }),
    {
      name: 'my-closet-records', // 로컬 스토리지 키
    }
  )
);
