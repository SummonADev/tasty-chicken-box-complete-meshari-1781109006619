import React from 'react';

type ImageSpec = {
  id: string;
  section: string;
  usage: string;
  description: string;
  recommendedSize: string;
  aspectRatio: string;
  placeholderUrl: string;
  alt: string;
};

const imageSpecs: ImageSpec[] = [
  {
    id: 'hero-bg',
    section: 'Hero Section',
    usage: 'Hero background image',
    description: 'Main hero background — food or restaurant ambiance shot',
    recommendedSize: '1400x900px',
    aspectRatio: '16:9',
    placeholderUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1400&q=80',
    alt: 'Halal chicken and lamb over rice platter Arlington VA Tasty Chicken Box',
  },
  {
    id: 'hero-food',
    section: 'Hero Section',
    usage: 'Hero food photo (right column)',
    description: 'Close-up of combo over rice platter',
    recommendedSize: '700x500px',
    aspectRatio: '7:5',
    placeholderUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=700&q=80',
    alt: 'Combo over rice halal platter Tasty Chicken Box Arlington VA',
  },
  {
    id: 'bestseller-combo',
    section: 'Best Sellers',
    usage: 'Combo Over Rice card image',
    description: 'Chicken and lamb over saffron rice with white and red sauces',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
    alt: 'Combo chicken and lamb over rice halal platter Arlington VA',
  },
  {
    id: 'bestseller-lamb',
    section: 'Best Sellers',
    usage: 'Lamb Over Rice card image',
    description: 'Spiced halal lamb over rice with salad and sauces',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1574484284002-952d92a03a05?w=400&q=80',
    alt: 'Lamb over rice halal platter Arlington VA Tasty Chicken Box',
  },
  {
    id: 'bestseller-shawarma',
    section: 'Best Sellers',
    usage: 'Chicken Shawarma Wrap card image',
    description: 'Chicken shawarma in warm pita with veggies and garlic sauce',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80',
    alt: 'Chicken shawarma wrap pita halal Arlington VA',
  },
  {
    id: 'bestseller-mixed-grill',
    section: 'Best Sellers',
    usage: 'Mixed Grill card image',
    description: 'Lamb chops, chicken skewer, kafta over rice',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
    alt: 'Mixed grill halal platter lamb chops chicken Arlington VA',
  },
  {
    id: 'bestseller-lamb-gyro',
    section: 'Best Sellers',
    usage: 'Lamb Gyro Wrap card image',
    description: 'Lamb gyro wrap, most talked-about item',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1599487489010-e1a1b2eb8bb8?w=400&q=80',
    alt: 'Lamb gyro wrap halal Arlington VA Tasty Chicken Box',
  },
  {
    id: 'bestseller-falafel',
    section: 'Best Sellers',
    usage: 'Falafel Over Rice card image',
    description: 'Crispy falafel over rice, vegetarian option',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    alt: 'Falafel over rice vegetarian halal Arlington VA',
  },
  {
    id: 'sauce-section',
    section: 'Sauce Section',
    usage: 'Sauce section right-column image',
    description: 'Sauce drizzle over halal platter, white and red sauces visible',
    recommendedSize: '700x420px',
    aspectRatio: '5:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
    alt: 'White garlic sauce and spicy red sauce drizzled over halal platter Tasty Chicken Box',
  },
  {
    id: 'family-story',
    section: 'Family Story Section',
    usage: 'Owner/chef portrait or kitchen shot',
    description: 'Ibrahim the owner cooking or posing in restaurant — warm and authentic',
    recommendedSize: '700x480px',
    aspectRatio: '7:4.8',
    placeholderUrl: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&q=80',
    alt: 'Ibrahim owner chef Tasty Chicken Box Arlington VA cooking fresh halal food',
  },
  {
    id: 'gallery-1',
    section: 'Gallery',
    usage: 'Gallery image 1 (double-wide)',
    description: 'Halal chicken over rice platter — hero shot',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80',
    alt: 'Halal chicken over rice platter Arlington VA',
  },
  {
    id: 'gallery-2',
    section: 'Gallery',
    usage: 'Gallery image 2',
    description: 'Mixed grill platter',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',
    alt: 'Mixed grill platter halal Arlington VA',
  },
  {
    id: 'gallery-3',
    section: 'Gallery',
    usage: 'Gallery image 3',
    description: 'Lamb over rice platter',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1574484284002-952d92a03a05?w=500&q=80',
    alt: 'Lamb over rice halal platter',
  },
  {
    id: 'gallery-4',
    section: 'Gallery',
    usage: 'Gallery image 4',
    description: 'Sauce drizzle shot',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
    alt: 'Sauce drizzle over halal food Arlington',
  },
  {
    id: 'gallery-5',
    section: 'Gallery',
    usage: 'Gallery image 5',
    description: 'Chicken lamb combo over rice',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80',
    alt: 'Chicken lamb combo over rice platter',
  },
  {
    id: 'gallery-6',
    section: 'Gallery',
    usage: 'Gallery image 6',
    description: 'Fresh falafel',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    alt: 'Fresh falafel Arlington VA Tasty Chicken Box',
  },
  {
    id: 'gallery-7',
    section: 'Gallery',
    usage: 'Gallery image 7',
    description: 'Chicken shawarma wrap',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&q=80',
    alt: 'Chicken shawarma wrap Arlington VA',
  },
  {
    id: 'gallery-8',
    section: 'Gallery',
    usage: 'Gallery image 8 (double-wide)',
    description: 'Lamb gyro wrap',
    recommendedSize: '500x224px',
    aspectRatio: '2:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1599487489010-e1a1b2eb8bb8?w=500&q=80',
    alt: 'Lamb gyro wrap halal Arlington',
  },
  {
    id: 'menu-chicken-over-rice',
    section: 'Menu Page',
    usage: 'Menu item — Chicken Over Rice',
    description: 'Halal chicken over white rice with sauces',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
    alt: 'Chicken over rice halal Arlington VA',
  },
  {
    id: 'menu-lamb-over-rice',
    section: 'Menu Page',
    usage: 'Menu item — Lamb Over Rice',
    description: 'Halal lamb over rice with salad and sauces',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1574484284002-952d92a03a05?w=400&q=80',
    alt: 'Lamb over rice halal menu item Arlington VA',
  },
  {
    id: 'menu-combo-over-rice',
    section: 'Menu Page',
    usage: 'Menu item — Combo Over Rice',
    description: 'Chicken and lamb combo over rice',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80',
    alt: 'Combo over rice halal menu Arlington VA',
  },
  {
    id: 'menu-shawarma-wrap',
    section: 'Menu Page',
    usage: 'Menu item — Chicken Shawarma Wrap',
    description: 'Chicken shawarma in pita bread',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80',
    alt: 'Chicken shawarma wrap menu halal Arlington VA',
  },
  {
    id: 'menu-lamb-gyro',
    section: 'Menu Page',
    usage: 'Menu item — Lamb Gyro Wrap',
    description: 'Lamb gyro in pita with toppings',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1599487489010-e1a1b2eb8bb8?w=400&q=80',
    alt: 'Lamb gyro wrap menu halal Arlington VA',
  },
  {
    id: 'menu-falafel',
    section: 'Menu Page',
    usage: 'Menu item — Falafel Over Rice',
    description: 'Crispy falafel balls over rice',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    alt: 'Falafel over rice menu halal Arlington VA',
  },
  {
    id: 'menu-mixed-grill',
    section: 'Menu Page',
    usage: 'Menu item — Mixed Grill',
    description: 'Full mixed grill platter',
    recommendedSize: '400x300px',
    aspectRatio: '4:3',
    placeholderUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
    alt: 'Mixed grill platter menu halal Arlington VA',
  },
  {
    id: 'about-team',
    section: 'About Page',
    usage: 'Team photo or restaurant interior',
    description: 'Team photo — Ibrahim, Iman, Yasmin, Zainab together in restaurant',
    recommendedSize: '700x500px',
    aspectRatio: '7:5',
    placeholderUrl: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&q=80',
    alt: 'Tasty Chicken Box team Arlington VA family owned halal restaurant',
  },
  {
    id: 'about-interior',
    section: 'About Page',
    usage: 'Restaurant interior shot',
    description: 'Interior of Tasty Chicken Box — counter, menu board, seating area',
    recommendedSize: '700x500px',
    aspectRatio: '7:5',
    placeholderUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80',
    alt: 'Tasty Chicken Box interior Arlington VA halal restaurant',
  },
  {
    id: 'catering-event',
    section: 'Catering Page',
    usage: 'Catering event photo',
    description: 'Catering setup — buffet trays, event food spread',
    recommendedSize: '700x500px',
    aspectRatio: '7:5',
    placeholderUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=700&q=80',
    alt: 'Tasty Chicken Box catering event halal Arlington VA DMV',
  },
  {
    id: 'made-fresh-badge',
    section: 'Trust Badges / Icons',
    usage: 'Made Fresh badge icon',
    description: 'Made Fresh badge with leaf or flame icon',
    recommendedSize: '64x64px',
    aspectRatio: '1:1',
    placeholderUrl: '',
    alt: 'Made fresh to order badge Tasty Chicken Box',
  },
  {
    id: 'halal-certified-badge',
    section: 'Trust Badges / Icons',
    usage: 'Halal Certified badge icon',
    description: 'Halal certified logo or badge',
    recommendedSize: '64x64px',
    aspectRatio: '1:1',
    placeholderUrl: '',
    alt: 'Halal certified badge Tasty Chicken Box Arlington VA',
  },
  {
    id: 'og-image',
    section: 'SEO / Meta',
    usage: 'Open Graph image (social sharing)',
    description: 'Social sharing preview image — logo + best food photo + restaurant name',
    recommendedSize: '1200x630px',
    aspectRatio: '1.91:1',
    placeholderUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&q=80',
    alt: 'Tasty Chicken Box Arlington VA halal food',
  },
  {
    id: 'favicon',
    section: 'SEO / Meta',
    usage: 'Favicon',
    description: 'Small icon for browser tab — TCB logo or chicken icon',
    recommendedSize: '32x32px (also 16x16, 180x180 for Apple)',
    aspectRatio: '1:1',
    placeholderUrl: '',
    alt: 'Tasty Chicken Box favicon',
  },
];

const sections = Array.from(new Set(imageSpecs.map((s) => s.section)));

export default function ImageGuide() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container">
        <div className="mb-10">
          <h1 className="font-bebas text-5xl text-[#111827] mb-2">IMAGE GUIDE</h1>
          <p className="text-gray-600 text-lg">
            All image slots used across the Tasty Chicken Box website. Replace placeholder URLs
            with real photos for best results.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section} className="mb-12">
            <h2 className="font-bebas text-3xl text-[#F97316] mb-4 border-b border-gray-200 pb-2">
              {section}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageSpecs
                .filter((spec) => spec.section === section)
                .map((spec) => (
                  <div key={spec.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {spec.placeholderUrl ? (
                      <img
                        src={spec.placeholderUrl}
                        alt={spec.alt}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No placeholder</span>
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {spec.id}
                        </span>
                        <span className="text-xs text-gray-400">{spec.aspectRatio}</span>
                      </div>
                      <h3 className="font-semibold text-sm text-[#111827] mt-2 mb-1">{spec.usage}</h3>
                      <p className="text-xs text-gray-500 mb-2 leading-relaxed">{spec.description}</p>
                      <div className="text-xs text-gray-400">
                        Recommended: <span className="text-gray-600 font-medium">{spec.recommendedSize}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 break-all">
                        Alt: <span className="text-gray-500 italic">{spec.alt}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
