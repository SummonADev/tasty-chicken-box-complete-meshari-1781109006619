import { Phone, Clock } from 'lucide-react';

const options = [
  {
    icon: '📱',
    name: 'Order Direct',
    badge: '⭐ Recommended · No Extra Fees',
    description: 'Order directly through our Toast system. Best prices, fastest processing, and earn loyalty points.',
    benefits: ['No delivery markup', 'Fastest order processing', 'Earn loyalty rewards', 'Direct support from our team'],
    cta: 'Order Direct Now',
    href: 'https://www.toasttab.com/tasty-chicken-box',
    featured: true,
  },
  {
    icon: '🚗',
    name: 'DoorDash',
    badge: 'Delivery Available',
    description: 'Fast delivery to your door across Arlington and surrounding areas.',
    benefits: ['Delivered to your door', 'Live order tracking', 'DashPass eligible', 'Schedule in advance'],
    cta: 'Order on DoorDash',
    href: 'https://www.doordash.com',
    featured: false,
  },
  {
    icon: '🍊',
    name: 'Uber Eats',
    badge: 'Delivery Available',
    description: 'Another convenient delivery option with Uber Eats.',
    benefits: ['Delivered to your door', 'Real-time tracking', 'Uber One eligible', 'Easy reordering'],
    cta: 'Order on Uber Eats',
    href: 'https://www.ubereats.com',
    featured: false,
  },
];

export default function OrderOnline() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#111827] py-20 text-center">
        <div className="container">
          <div className="inline-flex items-center gap-2 bg-[#16A34A] text-white badge px-4 py-2 text-sm mb-6">
            <Clock size={16} />
            🕑 Ready in ~15 mins
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl text-white mb-4">ORDER TASTY CHICKEN BOX</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Choose how you want to get your food. We recommend ordering direct for the best price.
          </p>
        </div>
      </div>

      {/* Order Options */}
      <section className="section-pad bg-[#FFF7ED]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {options.map((opt) => (
              <div
                key={opt.name}
                className={`rounded-2xl p-7 flex flex-col ${
                  opt.featured
                    ? 'bg-[#111827] border-2 border-[#F97316] relative'
                    : 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
                }`}
              >
                {opt.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F97316] text-white badge px-4 py-1.5 text-xs font-bold">BEST CHOICE</span>
                  </div>
                )}
                <div className="text-5xl mb-4">{opt.icon}</div>
                <h2 className={`font-bebas text-3xl mb-1 ${
                  opt.featured ? 'text-white' : 'text-[#111827]'
                }`}>{opt.name}</h2>
                <p className={`text-xs font-semibold mb-3 ${
                  opt.featured ? 'text-[#F97316]' : 'text-[#16A34A]'
                }`}>{opt.badge}</p>
                <p className={`text-sm leading-relaxed mb-5 ${
                  opt.featured ? 'text-gray-300' : 'text-gray-500'
                }`}>{opt.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {opt.benefits.map((b) => (
                    <li key={b} className={`flex items-center gap-2 text-sm ${
                      opt.featured ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <span className="text-[#16A34A] font-bold">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                    opt.featured
                      ? 'bg-[#F97316] text-white hover:bg-orange-600'
                      : 'bg-[#111827] text-white hover:bg-gray-800'
                  }`}
                >
                  {opt.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Section */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#FFF7ED] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={28} className="text-[#F97316]" />
            </div>
            <h2 className="font-bebas text-4xl text-[#111827] mb-4">PREFER TO CALL?</h2>
            <p className="text-gray-600 text-lg mb-6">Call us and we'll take your order over the phone. Ready for pickup in ~15 minutes.</p>
            <a href="tel:5714972133" className="btn-primary text-xl px-10 py-4">
              (571) 497-2133
            </a>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-500">
              <div className="text-center">
                <p className="font-semibold text-gray-700">Mon – Thu</p>
                <p>11AM – 1AM</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#F97316]">Fri – Sat</p>
                <p className="text-[#F97316] font-medium">11AM – 3AM</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">Sunday</p>
                <p>12PM – 1AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
