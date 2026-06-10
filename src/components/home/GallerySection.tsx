const photos = [
  { src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80', alt: 'Halal chicken over rice platter Arlington VA', span: 'md:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80', alt: 'Mixed grill platter halal Arlington VA', span: '' },
  { src: 'https://images.unsplash.com/photo-1574484284002-952d92a03a05?w=500&q=80', alt: 'Lamb over rice halal platter', span: '' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', alt: 'Sauce drizzle over halal food Arlington', span: '' },
  { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80', alt: 'Chicken lamb combo over rice platter', span: '' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80', alt: 'Fresh falafel Arlington VA Tasty Chicken Box', span: '' },
  { src: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&q=80', alt: 'Chicken shawarma wrap Arlington VA', span: '' },
  { src: 'https://images.unsplash.com/photo-1599487489010-e1a1b2eb8bb8?w=500&q=80', alt: 'Lamb gyro wrap halal Arlington', span: 'md:col-span-2' },
];

export default function GallerySection() {
  return (
    <section className="bg-white section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">FRESH FROM THE GRILL</h2>
          <p className="text-gray-500 text-lg">Made to order, every single time</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${photo.span}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
