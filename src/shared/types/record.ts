export type WearRecord = {
  id: string;
  clothesId: string;
  date: string;
  createdAt: string;
};

export type CreateRecordInput = Pick<WearRecord, 'clothesId' | 'date'>;
