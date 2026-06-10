import { Link } from 'react-router-dom';
import { useIsOpen } from '@/hooks/useIsOpen';

export default function HeroSection() {
  const { isOpen, closingTime } = useIsOpen();

  return (
    <section
      className="relative min-h-screen flex items-center bg-[#111827] overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.7) 100%), url(https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1400&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 fade-in">
            {/* Open Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className={`badge text-sm font-semibold ${
                isOpen ? 'bg-[#16A34A] text-white' : 'bg-gray-700 text-gray-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  isOpen ? 'bg-white animate-pulse' : 'bg-gray-400'
                }`} />
                {isOpen ? `Open Now · ${closingTime}` : 'Currently Closed'}
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-bebas text-[56px] md:text-[80px] leading-none text-white mb-6">
              COOKED FRESH.<br />
              <span className="text-[#F97316]">SERVED BIG.</span><br />
              OPEN LATE.
            </h1>

            {/* Subheadline */}
            <p className="text-[#FFF7ED] text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              100% Halal grilled chicken, lamb & shawarma in Arlington, VA. Made to order, every time.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/order-online" className="btn-primary text-lg px-8 py-4">
                Order Online Now
              </Link>
              <Link to="/menu" className="btn-outline text-lg px-8 py-4">
                View Full Menu
              </Link>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[#F97316] text-lg">⭐</span>
                <div>
                  <span className="text-white font-semibold text-sm">4.9 Google Rating</span>
                  <span className="text-gray-400 text-xs block">301 reviews</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✅</span>
                <div>
                  <span className="text-white font-semibold text-sm">100% Halal</span>
                  <span className="text-gray-400 text-xs block">Certified</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🕙</span>
                <div>
                  <span className="text-white font-semibold text-sm">Open Until 3AM</span>
                  <span className="text-gray-400 text-xs block">Fri & Sat</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🍽️</span>
                <div>
                  <span className="text-white font-semibold text-sm">Made Fresh</span>
                  <span className="text-gray-400 text-xs block">To Order</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Food Photo */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=700&q=80"
                alt="Halal chicken and lamb over rice platter with white and red sauces — Tasty Chicken Box Arlington VA"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-white font-semibold text-sm">🔥 #1 Best Seller</p>
                  <p className="text-[#F97316] font-bebas text-xl">Combo Over Rice — $14.99</p>
                  <p className="text-gray-300 text-xs">Chicken + Lamb with legendary sauces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#FFF7ED" />
        </svg>
      </div>
    </section>
  );
}
