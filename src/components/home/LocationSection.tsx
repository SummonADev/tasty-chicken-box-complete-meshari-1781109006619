import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="bg-white section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">FIND US IN ARLINGTON</h2>
          <p className="text-gray-500 text-lg">Come hungry. Leave happy.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">Phone</h3>
                  <a href="tel:5714972133" className="text-gray-600 hover:text-[#F97316] transition-colors">(571) 497-2133</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-3">Hours</h3>
                  <table className="text-sm text-gray-600 w-full">
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

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.7!2d-77.0836!3d38.8833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1234abcd!2s2716+Washington+Blvd%2C+Arlington%2C+VA+22201!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tasty Chicken Box location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
