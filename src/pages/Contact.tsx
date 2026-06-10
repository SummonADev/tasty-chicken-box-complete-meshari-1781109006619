import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Hero */}
      <section className="bg-[#111827] section-pad pt-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
              GET IN<br />
              <span className="text-[#F97316]">TOUCH</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Questions, catering inquiries, or just want to say hi — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-bebas text-3xl text-[#111827] mb-8">CONTACT INFORMATION</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#F97316]/20">
                    <MapPin size={22} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Address</h3>
                    <p className="text-gray-600">2716 Washington Blvd<br />Arlington, VA 22201</p>
                    <a
                      href="https://maps.google.com/?q=2716+Washington+Blvd+Arlington+VA+22201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F97316] text-sm font-medium hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#F97316]/20">
                    <Phone size={22} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Phone</h3>
                    <a href="tel:5714972133" className="text-gray-600 hover:text-[#F97316] transition-colors">(571) 497-2133</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#F97316]/20">
                    <Mail size={22} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Email</h3>
                    <a href="mailto:Tasty.chicken.box@gmail.com" className="text-gray-600 hover:text-[#F97316] transition-colors">Tasty.chicken.box@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#F97316]/20">
                    <Clock size={22} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-3">Hours</h3>
                    <table className="text-sm text-gray-600">
                      <tbody>
                        <tr>
                          <td className="pr-6 py-1 font-medium text-gray-700">Mon – Thu</td>
                          <td>11:00 AM – 1:00 AM</td>
                        </tr>
                        <tr>
                          <td className="pr-6 py-1 font-bold text-[#F97316]">Fri – Sat</td>
                          <td className="text-[#F97316] font-bold">11:00 AM – 3:00 AM</td>
                        </tr>
                        <tr>
                          <td className="pr-6 py-1 font-medium text-gray-700">Sunday</td>
                          <td>12:00 PM – 1:00 AM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-white" />
                  </div>
                  <h3 className="font-bebas text-3xl text-[#111827] mb-2">MESSAGE SENT!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-bebas text-3xl text-[#111827] mb-6">SEND US A MESSAGE</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                        placeholder="(optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="catering">Catering Inquiry</option>
                        <option value="order">Order Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full py-3 flex items-center justify-center gap-2">
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
