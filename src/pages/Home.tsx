import HeroSection from '@/components/home/HeroSection';
import KnownForSection from '@/components/home/KnownForSection';
import BestSellersSection from '@/components/home/BestSellersSection';
import SauceSection from '@/components/home/SauceSection';
import ReviewSection from '@/components/home/ReviewSection';
import FamilyStorySection from '@/components/home/FamilyStorySection';
import LateNightSection from '@/components/home/LateNightSection';
import CateringTeaser from '@/components/home/CateringTeaser';
import GallerySection from '@/components/home/GallerySection';
import OrderingOptions from '@/components/home/OrderingOptions';
import LocationSection from '@/components/home/LocationSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <KnownForSection />
      <BestSellersSection />
      <SauceSection />
      <ReviewSection />
      <FamilyStorySection />
      <LateNightSection />
      <CateringTeaser />
      <GallerySection />
      <OrderingOptions />
      <LocationSection />
    </div>
  );
}
