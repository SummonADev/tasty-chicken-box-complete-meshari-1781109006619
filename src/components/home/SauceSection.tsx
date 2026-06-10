import { Link } from 'react-router-dom';

export default function SauceSection() {
  return (
    <section className="bg-[#111827] section-pad">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <span className="badge bg-[#F97316] text-white mb-6 inline-block">Our Secret</span>
            <h2 className="font-bebas text-4xl md:text-6xl text-white leading-none mb-6">
              THE SAUCES<br />
              <span className="text-[#F97316]">ARE THE SECRET</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              People don't just come back for the chicken. They come back for the sauces. Our creamy white garlic sauce and smoky spicy red sauce are made in-house, every day.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              You'll want them on everything. Reviewers mention the sauces in 1 out of every 4 reviews — and they're not wrong.
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <span className="text-2xl">🤍</span>
                <div>
                  <p className="text-white font-semibold text-sm">White Garlic Sauce</p>
                  <p className="text-gray-400 text-xs">Creamy, tangy, addictive</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <span className="text-2xl">🌶️</span>
                <div>
                  <p className="text-white font-semibold text-sm">Spicy Red Sauce</p>
                  <p className="text-gray-400 text-xs">Smoky, bold, in-house daily</p>
                </div>
              </div>
            </div>
            <Link to="/order-online" className="btn-primary text-lg px-8 py-4">
              Order Now
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80"
                alt="White garlic sauce and spicy red sauce drizzled over halal platter — Tasty Chicken Box"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#F97316] text-white rounded-xl p-4 shadow-xl">
              <p className="font-bebas text-2xl">Made In-House</p>
              <p className="text-sm opacity-90">Every Single Day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
