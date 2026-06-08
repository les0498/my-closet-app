import { Clothes } from '../shared/types/clothes';

export const clothesMock: Clothes[] = [
  {
    id: '1',
    image: 'https://example.com/image1.jpg',
    brand: 'Brand A',
    name: 'T-Shirt',
    category: 'Top',
    tags: ['casual', 'summer'],
    wornCount: 5,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    image: 'https://example.com/image2.jpg',
    brand: 'Brand B',
    name: 'Jeans',
    category: 'Bottom',
    tags: ['denim', 'casual'],
    wornCount: 3,
    createdAt: '2024-02-01T00:00:00Z',
  },
  {
    id: '3',
    image: 'https://example.com/image3.jpg',
    brand: 'Brand C',
    name: 'Jacket',
    category: 'Outerwear',
    tags: ['winter', 'warm'],
    wornCount: 2,
    createdAt: '2024-03-01T00:00:00Z',
  },
];
