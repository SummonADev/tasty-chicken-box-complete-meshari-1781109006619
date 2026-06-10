import { Link } from 'react-router-dom';

export default function FamilyStorySection() {
  return (
    <section className="bg-white section-pad">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&q=80"
                alt="Ibrahim the owner and chef of Tasty Chicken Box Arlington VA cooking fresh halal food"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#16A34A] text-white rounded-xl p-4 shadow-xl">
              <p className="font-bebas text-xl">Family Owned</p>
              <p className="text-sm opacity-90">Arlington, VA</p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="badge bg-[#FFF7ED] text-[#F97316] border border-[#F97316]/30 mb-6 inline-block">
              Our Story
            </span>
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] leading-none mb-6">
              A FAMILY RECIPE.<br />
              <span className="text-[#F97316]">A NEIGHBORHOOD INSTITUTION.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tasty Chicken Box started with one dream — to bring the kind of food that warms you from the inside out, made by people who actually care.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Ibrahim and his family built this place bite by bite, and every dish on the menu is a piece of that story. We don't do shortcuts. We don't do frozen. We do fresh, we do generous, and we do it every single day.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our staff — Ibrahim, Iman, Yasmin, Zainab — they're not just employees. They're family. And they'll treat you like family too.
            </p>
            <Link to="/about" className="btn-primary px-8 py-4">
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
