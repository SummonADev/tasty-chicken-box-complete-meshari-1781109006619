import { Link } from 'react-router-dom';

const options = [
  {
    icon: '📱',
    name: 'Order Direct',
    subtitle: 'via Toast',
    description: 'Best prices, no extra fees. Earn loyalty points.',
    cta: 'Order Direct',
    href: '/order-online',
    isRecommended: true,
  },
  {
    icon: '🚗',
    name: 'DoorDash',
    subtitle: 'Delivery',
    description: 'Fast delivery to your door across Arlington.',
    cta: 'Order on DoorDash',
    href: 'https://www.doordash.com',
    isRecommended: false,
  },
  {
    icon: '🍊',
    name: 'Uber Eats',
    subtitle: 'Delivery',
    description: 'Another convenient delivery option.',
    cta: 'Order on Uber Eats',
    href: 'https://www.ubereats.com',
    isRecommended: false,
  },
];

export default function OrderingOptions() {
  return (
    <section className="bg-[#FFF7ED] section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">HOW TO ORDER</h2>
          <p className="text-gray-500 text-lg">Choose your preferred way to get Tasty Chicken Box</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {options.map((opt) => (
            <div
              key={opt.name}
              className={`relative rounded-2xl p-6 text-center flex flex-col items-center ${
                opt.isRecommended
                  ? 'bg-[#111827] shadow-2xl scale-105 border-2 border-[#F97316]'
                  : 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
              }`}
            >
              {opt.isRecommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge bg-[#F97316] text-white text-xs px-4 py-1.5">⭐ Recommended</span>
                </div>
              )}
              <div className="text-5xl mb-4">{opt.icon}</div>
              <h3 className={`font-bebas text-2xl mb-1 ${
                opt.isRecommended ? 'text-white' : 'text-[#111827]'
              }`}>{opt.name}</h3>
              <p className={`text-sm mb-3 ${
                opt.isRecommended ? 'text-[#F97316]' : 'text-gray-400'
              }`}>{opt.subtitle}</p>
              <p className={`text-sm leading-relaxed mb-6 ${
                opt.isRecommended ? 'text-gray-300' : 'text-gray-500'
              }`}>{opt.description}</p>
              {opt.href.startsWith('/') ? (
                <Link to={opt.href} className="btn-primary w-full text-sm py-3">
                  {opt.cta}
                </Link>
              ) : (
                <a href={opt.href} target="_blank" rel="noopener noreferrer"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
                    opt.isRecommended
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                  {opt.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
