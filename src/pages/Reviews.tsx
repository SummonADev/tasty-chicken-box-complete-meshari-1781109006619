import { useState } from 'react';
import { reviews } from '@/lib/data';
import ReviewCard from '@/components/ui/ReviewCard';

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, 12);

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Hero */}
      <section className="bg-[#111827] section-pad pt-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
              WHAT ARLINGTON<br />
              <span className="text-[#F97316]">IS SAYING</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-6 h-6 fill-[#F97316]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 text-lg font-medium">4.9 stars · 300+ Google Reviews</span>
            </div>
            <p className="text-gray-400 text-base">
              Real reviews from real customers in Arlington, VA and the DMV.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-pad">
        <div className="container">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {displayed.map((review) => (
              <div key={review.id} className="break-inside-avoid">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {!showAll && reviews.length > 12 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="btn-primary px-8 py-4 text-lg"
              >
                Show All {reviews.length} Reviews
              </button>
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?q=Tasty+Chicken+Box+Arlington+VA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-[#111827] text-[#111827] px-8 py-4"
            >
              Read All Reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
