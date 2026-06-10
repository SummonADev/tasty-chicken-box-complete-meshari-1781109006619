import { Link } from 'react-router-dom';
import { Phone, MapPin, ShoppingBag } from 'lucide-react';

export default function MobileOrderBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111827] border-t border-gray-700 flex items-stretch">
      <a
        href="tel:5714972133"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-gray-300 hover:text-white transition-colors"
      >
        <Phone size={18} />
        <span className="text-xs">Call</span>
      </a>
      <Link
        to="/order-online"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-[#F97316] text-white"
      >
        <ShoppingBag size={18} />
        <span className="text-xs font-semibold">Order Now</span>
      </Link>
      <a
        href="https://maps.google.com/?q=2716+Washington+Blvd+Arlington+VA+22201"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-gray-300 hover:text-white transition-colors"
      >
        <MapPin size={18} />
        <span className="text-xs">Directions</span>
      </a>
    </div>
  );
}
