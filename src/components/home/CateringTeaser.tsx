import { Link } from 'react-router-dom';
import { Users, CheckCircle } from 'lucide-react';

export default function CateringTeaser() {
  return (
    <section className="bg-[#16A34A] section-pad">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users size={32} className="text-white opacity-80" />
              <span className="text-white/80 font-medium text-lg">Catering for the DMV</span>
            </div>
            <h2 className="font-bebas text-4xl md:text-6xl text-white leading-none mb-6">
              FEED YOUR<br />WHOLE TEAM
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Birthday? Office lunch? Family gathering? Wedding? We've catered events of all sizes across the DMV.
              Fresh halal food that impresses — delivered or ready for pickup.
            </p>
            <Link to="/catering" className="inline-block bg-white text-[#16A34A] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Get a Catering Quote
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '✅', title: '100% Halal Guaranteed', desc: 'Certified halal for all events' },
              { icon: '🍽️', title: 'Fresh to Order', desc: 'Made fresh for your event date' },
              { icon: '💰', title: 'Family-Size Value', desc: 'Generous portions, great prices' },
              { icon: '⭐', title: 'Arlington Trusted', desc: 'Loved by the community' },
            ].map((item) => (
              <div key={item.title} className="bg-white/15 rounded-xl p-5">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-white/70 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 bg-white/20 rounded-2xl">
          <div className="flex items-start gap-3">
            <CheckCircle size={20} className="text-white flex-shrink-0 mt-0.5" />
            <p className="text-white italic text-base">
              "We had my baby's 1st birthday catered from here and it was so amazing! Everyone loved the food."
              <span className="font-semibold not-italic ml-2">— Aleem B.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
