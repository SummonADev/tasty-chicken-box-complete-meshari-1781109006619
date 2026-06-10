import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import clsx from 'clsx';

const navLinks = [
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Catering', path: '/catering' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(50);
  const location = useLocation();

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[#111827] shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm font-bebas">TCB</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bebas text-xl tracking-wider">TASTY CHICKEN BOX</span>
              <span className="text-[#F97316] text-xs font-medium">Arlington, VA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200',
                  location.pathname === link.path
                    ? 'text-[#F97316]'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5714972133"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
            >
              <Phone size={16} />
              (571) 497-2133
            </a>
            <Link to="/order-online" className="btn-primary text-sm py-2 px-5">
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111827] border-t border-gray-700 px-6 py-4">
          <nav className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'text-base font-medium transition-colors',
                  location.pathname === link.path ? 'text-[#F97316]' : 'text-gray-300'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/order-online"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full block text-center"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
