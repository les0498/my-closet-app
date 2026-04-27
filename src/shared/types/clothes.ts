export type Clothes = {
  id: string;
  image: string;
  brand: string;
  name: string;
  category: string;
  tags: string[];
  wornCount: number;
  createdAt: string;
};

export type CreateClothesInput = Omit<Clothes, 'id' | 'wornCount' | 'createdAt'>;
