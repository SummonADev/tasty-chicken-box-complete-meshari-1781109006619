import { Link } from 'react-router-dom';
import { CheckCircle, Users, Star, Phone } from 'lucide-react';

const packages = [
  {
    name: 'Small Gathering',
    serves: 'Serves 10–20',
    price: 'From $150',
    description: 'Perfect for office lunches, small birthday parties, or family dinners.',
    items: [
      'Choice of 2 proteins (chicken, lamb, or falafel)',
      'Saffron rice for all guests',
      'Fresh salad & pita bread',
      'White garlic & spicy red sauces',
    ],
    highlight: false,
  },
  {
    name: 'Medium Event',
    serves: 'Serves 20–50',
    price: 'From $350',
    description: 'Great for weddings, graduations, community events, and corporate catering.',
    items: [
      'Choice of 3 proteins',
      'Saffron rice + sides',
      'Fresh salads & pita',
      'All house-made sauces',
      'Serving utensils included',
    ],
    highlight: true,
  },
  {
    name: 'Large Feast',
    serves: 'Serves 50+',
    price: 'Custom Quote',
    description: 'We handle events of any size. Let us create a custom menu for your occasion.',
    items: [
      'Fully customizable menu',
      'All proteins available',
      'Full sides & appetizers',
      'On-site setup assistance',
      'Dedicated event coordinator',
    ],
    highlight: false,
  },
];

const testimonials = [
  {
    quote: "We had my baby's 1st birthday catered from here and it was so amazing! Everyone loved the food.",
    name: 'Aleem B.',
    event: 'Birthday Party',
  },
  {
    quote: 'Best catering decision we ever made for our office. Everyone keeps asking when we are ordering again!',
    name: 'Sarah M.',
    event: 'Corporate Lunch',
  },
  {
    quote: 'They catered our wedding reception and it was perfect. The lamb was absolutely incredible.',
    name: 'Mohammed K.',
    event: 'Wedding Reception',
  },
];

export default function Catering() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#111827] section-pad">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users size={40} className="text-[#F97316]" />
            </div>
            <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
              CATERING FOR<br />
              <span className="text-[#F97316]">EVERY OCCASION</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              From intimate family dinners to large corporate events, Tasty Chicken Box brings
              fresh, 100% halal food to your table. Serving the entire DMV area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5714972133" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                <Phone size={20} />
                Call to Book
              </a>
              <a href="mailto:Tasty.chicken.box@gmail.com" className="btn-outline text-lg px-8 py-4">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#FFF7ED] section-pad">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">WHY CHOOSE US FOR CATERING</h2>
            <p className="text-gray-500 text-lg">We make your event unforgettable</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '✅', title: '100% Halal', desc: 'Certified halal for all events and guests.' },
              { emoji: '🍽️', title: 'Made Fresh', desc: 'Cooked fresh for your event date, never frozen.' },
              { emoji: '💰', title: 'Unbeatable Value', desc: "Family-size portions at prices that won't break the bank." },
              { emoji: '⭐', title: 'Community Trusted', desc: 'Loved by Arlington for catering events of all sizes.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-[#111827] text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white section-pad">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">CATERING PACKAGES</h2>
            <p className="text-gray-500 text-lg">Flexible options for every budget and group size</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  pkg.highlight
                    ? 'bg-[#111827] shadow-2xl border-2 border-[#F97316]'
                    : 'bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
                }`}
              >
                {pkg.highlight && (
                  <div className="mb-4">
                    <span className="badge bg-[#F97316] text-white text-xs">Most Popular</span>
                  </div>
                )}
                <h3 className={`font-bebas text-3xl mb-1 ${
                  pkg.highlight ? 'text-white' : 'text-[#111827]'
                }`}>{pkg.name}</h3>
                <p className={`text-sm mb-2 ${
                  pkg.highlight ? 'text-[#F97316]' : 'text-gray-400'
                }`}>{pkg.serves}</p>
                <p className={`font-bebas text-4xl mb-4 ${
                  pkg.highlight ? 'text-[#F97316]' : 'text-[#F97316]'
                }`}>{pkg.price}</p>
                <p className={`text-sm leading-relaxed mb-6 ${
                  pkg.highlight ? 'text-gray-300' : 'text-gray-500'
                }`}>{pkg.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span className={`text-sm ${
                        pkg.highlight ? 'text-gray-300' : 'text-gray-600'
                      }`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:5714972133"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${
                    pkg.highlight
                      ? 'bg-[#F97316] text-white hover:bg-[#ea6c0a]'
                      : 'bg-[#111827] text-white hover:bg-gray-700'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FFF7ED] section-pad">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">WHAT OUR CATERING CLIENTS SAY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <div className="flex mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={14} className="fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16A34A] section-pad">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-bebas text-4xl md:text-6xl text-white leading-none mb-6">
              READY TO BOOK?<br />
              <span className="text-[#FFF7ED]">LET&apos;S TALK.</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Call us or send an email to get a custom quote for your event.
              We respond fast and make the process easy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5714972133" className="inline-flex items-center gap-2 bg-white text-[#16A34A] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
                <Phone size={20} />
                (571) 497-2133
              </a>
              <a href="mailto:Tasty.chicken.box@gmail.com" className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
