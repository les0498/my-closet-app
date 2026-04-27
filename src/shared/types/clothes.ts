export type Clothes = {
  id: number;
  image: string;
  brand: string;
  name: string;
  category: string;
  tags: string[];
  wornCount: number;
  createdAt: string;
};

export type CreateClothesInput = Omit<Clothes, 'id' | 'wornCount' | 'createdAt'>;
