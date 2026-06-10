import { useState } from 'react';
import type { CateringFormData } from '@/types';

export default function Catering() {
  const [formData, setFormData] = useState<CateringFormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    eventType: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof CateringFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CateringFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.guests.trim()) newErrors.guests = 'Number of guests is required';
    if (!formData.eventType) newErrors.eventType = 'Event type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CateringFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const inputClass = (field: keyof CateringFormData) => `w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition ${
    errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
  }`;

  return (
    <div className="pt-16">
      {/* Hero */}
      <div
        className="relative bg-[#111827] py-24 text-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url(https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <span className="badge bg-[#16A34A] text-white mb-6 inline-block text-sm">DMV Catering</span>
          <h1 className="font-bebas text-5xl md:text-7xl text-white mb-4">HALAL CATERING<br />FOR THE DMV</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feeding 10 to 200+ people. Office lunches, birthday parties, family gatherings, corporate events.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="section-pad bg-[#FFF7ED]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">WHY CHOOSE US FOR CATERING</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '✅', title: '100% Halal Guaranteed', desc: 'All meats certified halal. Perfect for all dietary requirements.' },
              { emoji: '🍽️', title: 'Fresh to Order', desc: 'We cook everything fresh for your specific event date.' },
              { emoji: '💰', title: 'Unbeatable Value', desc: 'Family-size portions at prices that won't break the bank.' },
              { emoji: '⭐', title: 'Community Trusted', desc: 'Loved by Arlington for catering events of all sizes.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-[#111827] text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">CATERING PACKAGES</h2>
            <p className="text-gray-500">Contact us for custom pricing and packages</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Platter Package',
                desc: 'Individual platters — chicken, lamb, or combo over rice. Perfect for smaller gatherings.',
                includes: ['Chicken/Lamb over rice', 'Fresh salad & sides', 'White & red sauces', 'Pita bread'],
                serves: 'Serves 10–30 people',
              },
              {
                name: 'Family Feast Package',
                desc: 'Our most popular catering option. Mix of everything — great for diverse groups.',
                includes: ['Mixed rice platters', 'Assorted wraps', 'Appetizer spread', 'Desserts (Baklava)'],
                serves: 'Serves 30–80 people',
              },
              {
                name: 'Full Grill Package',
                desc: 'The ultimate spread. Live-action mixed grill experience for your guests.',
                includes: ['Full mixed grill spread', 'All platter options', 'Full appetizer spread', 'Desserts + tea'],
                serves: 'Serves 80–200+ people',
              },
            ].map((pkg) => (
              <div key={pkg.name} className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bebas text-2xl text-[#111827] mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{pkg.desc}</p>
                <p className="text-[#16A34A] font-semibold text-sm mb-4">{pkg.serves}</p>
                <ul className="space-y-2 mb-4">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-[#F97316]">✓</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#16A34A] py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-xl italic leading-relaxed mb-4">
              "We had my baby's 1st birthday catered from here and it was so amazing! Everyone loved the food and kept asking where it was from."
            </p>
            <p className="text-white/80 font-semibold">— Aleem B. · Google Review</p>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="section-pad bg-[#FFF7ED]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">GET YOUR CATERING QUOTE</h2>
              <p className="text-gray-500">Fill out the form below and we'll contact you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-[#16A34A] text-white rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-bebas text-3xl mb-3">THANK YOU!</h3>
                <p className="text-lg opacity-90">We've received your catering request and will contact you within 24 hours.</p>
                <p className="mt-4 opacity-80">For urgent inquiries, call us at <a href="tel:5714972133" className="font-bold underline">(571) 497-2133</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="Your name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="(XXX) XXX-XXXX" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date *</label>
                    <input name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} className={inputClass('eventDate')} />
                    {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests *</label>
                    <input name="guests" value={formData.guests} onChange={handleChange} className={inputClass('guests')} placeholder="e.g. 50" />
                    {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event Type *</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange} className={inputClass('eventType')}>
                      <option value="">Select event type</option>
                      <option value="office">Office Lunch</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="wedding">Wedding</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Notes / Dietary Restrictions</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition resize-none"
                    placeholder="Any special requests, dietary needs, or additional info..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full mt-6 py-4 text-lg">
                  Get Your Catering Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
