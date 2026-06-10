import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function LateNightSection() {
  return (
    <section className="bg-[#111827] section-pad relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #F97316 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock size={40} className="text-[#F97316]" />
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
            HUNGRY AFTER<br />
            <span className="text-[#F97316]">MIDNIGHT?</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            We get it. Arlington's best halal food doesn't stop at 9PM. We're here
            Monday–Thursday until 1AM, and Friday–Saturday until 3AM.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
            {[
              { days: 'Mon – Thu', time: '11AM – 1AM', highlight: false },
              { days: 'Fri – Sat', time: '11AM – 3AM', highlight: true },
              { days: 'Sunday', time: '12PM – 1AM', highlight: false },
            ].map((row) => (
              <div key={row.days} className={`rounded-xl p-4 text-center ${
                row.highlight ? 'bg-[#F97316]' : 'bg-white/10'
              }`}>
                <p className="text-xs text-white/70 mb-1">{row.days}</p>
                <p className={`font-bebas text-xl ${
                  row.highlight ? 'text-white' : 'text-white'
                }`}>{row.time}</p>
                {row.highlight && <p className="text-xs text-white/80 mt-1">Open Longest!</p>}
              </div>
            ))}
          </div>

          <Link to="/order-online" className="btn-primary text-lg px-10 py-4">
            Order for Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}
