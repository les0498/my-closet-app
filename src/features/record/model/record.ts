import { WearRecord, CreateRecordInput } from '@/shared/types/record';
import { v4 as uuid } from 'uuid';

// 착용 기록 생성 - id, createdAt 자동 부여
export function createRecord(input: CreateRecordInput): WearRecord {
  return {
    ...input,
    id: uuid(),
    createdAt: new Date().toISOString(),
  };
}

// 특정 날짜의 기록만 반환
export function getRecordsByDate(records: WearRecord[], date: string): WearRecord[] {
  return records.filter((r) => r.date === date);
}

// 특정 옷의 기록만 반환
export function getRecordsByClothes(records: WearRecord[], clothesId: string): WearRecord[] {
  return records.filter((r) => r.clothesId === clothesId);
}

// 기록이 존재하는 날짜 목록 (중복 제거)
export function getDatesWithRecords(records: WearRecord[]): string[] {
  return [...new Set(records.map((r) => r.date))];
}

// 옷별 착용 횟수 집계 - { clothesId: 횟수 }
export function calcWornCountMap(records: WearRecord[]): Record<string, number> {
  return records.reduce<Record<string, number>>((acc, r) => {
    acc[r.clothesId] = (acc[r.clothesId] ?? 0) + 1;
    return acc;
  }, {});
}
