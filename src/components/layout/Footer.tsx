import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-24 md:pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm font-bebas">TCB</span>
              </div>
              <div>
                <div className="text-white font-bebas text-lg tracking-wider">TASTY CHICKEN BOX</div>
                <div className="text-[#F97316] text-xs">Arlington, VA</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Arlington's favorite family-owned halal grill. Cooked fresh. Served big. Open late.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="badge bg-[#16A34A] text-white text-xs">✅ 100% Halal Certified</span>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['Menu', '/menu'], ['Order Online', '/order-online'], ['Catering', '/catering'], ['About Us', '/about'], ['Reviews', '/reviews'], ['FAQ', '/faq'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-[#F97316] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Clock size={16} className="text-[#F97316]" /> Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-4"><span>Mon – Thu</span><span className="text-white">11AM – 1AM</span></li>
              <li className="flex justify-between gap-4"><span>Fri – Sat</span><span className="text-[#F97316] font-semibold">11AM – 3AM</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-white">12PM – 1AM</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=2716+Washington+Blvd+Arlington+VA+22201" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">2716 Washington Blvd<br />Arlington, VA 22201</a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <a href="tel:5714972133" className="hover:text-white transition-colors">(571) 497-2133</a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                <a href="mailto:Tasty.chicken.box@gmail.com" className="hover:text-white transition-colors">Tasty.chicken.box@gmail.com</a>
              </li>
            </ul>
            <Link to="/order-online" className="btn-primary mt-6 block text-center text-sm py-3">
              Order Now
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Tasty Chicken Box. All rights reserved.</p>
          <p>2716 Washington Blvd, Arlington, VA 22201 · (571) 497-2133</p>
        </div>
      </div>
    </footer>
  );
}
