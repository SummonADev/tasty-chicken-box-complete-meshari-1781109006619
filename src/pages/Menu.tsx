import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuItems, categories } from '@/lib/data';
import clsx from 'clsx';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [navStuck, setNavStuck] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavStuck(rect.top <= 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    const el = sectionRefs.current[catId];
    if (el) {
      const offset = 160;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const getBadge = (item: any) => {
    if (item.isFavorite) return { label: '🔥 Customer Favorite', cls: 'bg-[#F97316] text-white' };
    if (item.isChefsPick) return { label: "👨‍🍳 Chef's Pick", cls: 'bg-[#16A34A] text-white' };
    return null;
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#111827] py-20 text-center">
        <h1 className="font-bebas text-5xl md:text-7xl text-white mb-4">OUR MENU</h1>
        <p className="text-gray-300 text-lg mb-6">Everything is made fresh when you order it.</p>
        <Link to="/order-online" className="btn-primary text-lg px-8 py-4">Order Online</Link>
      </div>

      {/* Sticky Category Nav */}
      <div
        ref={navRef}
        className={clsx(
          'sticky top-16 z-40 bg-white border-b border-gray-200 transition-shadow',
          navStuck && 'shadow-md'
        )}
      >
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={clsx(
                  'flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all',
                  activeCategory === cat.id
                    ? 'bg-[#F97316] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container py-12">
        {categories.map((cat) => {
          const items = menuItems.filter(i => i.category === cat.id);
          return (
            <div
              key={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-bebas text-4xl text-[#111827]">{cat.label.toUpperCase()}</h2>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#F97316] to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => {
                  const badge = getBadge(item);
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow hover:border-[#F97316]/30 group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-[#111827] text-base leading-snug">
                            {item.emoji && <span className="mr-2">{item.emoji}</span>}
                            {item.name}
                          </h3>
                          <span className="text-[#F97316] font-bold text-base flex-shrink-0">{item.price}</span>
                        </div>
                        {badge && (
                          <span className={`badge text-xs mb-2 ${badge.cls}`}>{badge.label}</span>
                        )}
                        <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                        <Link
                          to="/order-online"
                          className="text-[#F97316] font-semibold text-sm hover:underline"
                        >
                          Add to Order →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bottom CTA */}
        <div className="bg-[#FFF7ED] rounded-2xl p-8 text-center mt-8">
          <h3 className="font-bebas text-3xl text-[#111827] mb-3">SEE SOMETHING YOU LIKE?</h3>
          <p className="text-gray-600 mb-6">Order online for pickup or delivery. Ready in ~15 minutes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/order-online" className="btn-primary px-8 py-3">Order Online Now</Link>
            <a href="tel:5714972133" className="btn-outline bg-[#111827] text-white border-[#111827] px-8 py-3">Call to Order</a>
          </div>
        </div>
      </div>
    </div>
  );
}
