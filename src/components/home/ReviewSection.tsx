import { Link } from 'react-router-dom';
import ReviewCard from '@/components/ui/ReviewCard';
import { reviews } from '@/lib/data';

export default function ReviewSection() {
  const featured = reviews.slice(0, 9);

  return (
    <section className="bg-[#FFF7ED] section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">WHAT ARLINGTON IS SAYING</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 fill-[#F97316]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9 stars · 300+ Google Reviews</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {featured.map((review) => (
            <div key={review.id} className="break-inside-avoid">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://maps.google.com/?q=Tasty+Chicken+Box+Arlington+VA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-lg"
          >
            Read All 300+ Reviews on Google
          </a>
          <div className="mt-4">
            <Link to="/reviews" className="text-gray-500 hover:text-[#F97316] transition-colors text-sm underline">
              View All Reviews on This Site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
