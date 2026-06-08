'use client';
import { Card, CardContent } from '@/components/ui/card';

type ClothesCardProps = {
  image: string;
  name: string;
  brand: string;
  category: string;
  wornCount?: number;
  onClick?: () => void;
};

export default function ClothesCard({
  image,
  name,
  brand,
  category,
  wornCount = 0,
  onClick,
}: ClothesCardProps) {
  return (
    <Card onClick={onClick} className="cursor-pointer overflow-hidden hover:shadow-md transition">
      {/* 이미지 */}
      <div className="w-full h-40 bg-muted">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* 내용 */}
      <CardContent className="p-2">
        <span className="text-xs text-gray-400">{brand}</span>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="text-xs text-muted-foreground mt-1">착용 {wornCount}회</p>
      </CardContent>
    </Card>
  );
}
