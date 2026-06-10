import { Star } from 'lucide-react';

type StarRatingProps = {
  count?: number;
  size?: number;
};

export default function StarRating({ count = 5, size = 16 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#F97316] text-[#F97316]" />
      ))}
    </div>
  );
}
