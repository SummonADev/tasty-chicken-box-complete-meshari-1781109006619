import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Combo Over Rice',
    description: 'Chicken + Lamb over saffron rice with our legendary white & red sauces',
    price: '$14.99',
    isFavorite: true,
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
    alt: 'Combo chicken and lamb over rice halal platter Arlington VA'
  },
  {
    name: 'Lamb Over Rice',
    description: 'Perfectly spiced halal lamb, fresh rice, salad, and sauces',
    price: '$13.99',
    isFavorite: true,
    img: 'https://images.unsplash.com/photo-1574484284002-952d92a03a05?w=400&q=80',
    alt: 'Lamb over rice halal platter Arlington VA Tasty Chicken Box'
  },
  {
    name: 'Chicken Shawarma Wrap',
    description: 'Juicy chicken, fresh veggies, garlic sauce in a warm pita',
    price: '$11.99',
    isFavorite: true,
    img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80',
    alt: 'Chicken shawarma wrap pita halal Arlington VA'
  },
  {
    name: 'Mixed Grill',
    description: 'Lamb chops + chicken skewer + kafta over rice. A feast.',
    price: '$22.99',
    isFavorite: false,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
    alt: 'Mixed grill halal platter lamb chops chicken Arlington VA'
  },
  {
    name: 'Lamb Gyro Wrap',
    description: 'Our most-talked-about wrap. The lamb is sensational.',
    price: '$12.99',
    isFavorite: false,
    img: 'https://images.unsplash.com/photo-1599487489010-e1a1b2eb8bb8?w=400&q=80',
    alt: 'Lamb gyro wrap halal Arlington VA Tasty Chicken Box'
  },
  {
    name: 'Falafel Over Rice',
    description: 'Crispy, authentic falafel. Our vegetarian crowd-pleaser.',
    price: '$11.99',
    isFavorite: false,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    alt: 'Falafel over rice vegetarian halal Arlington VA'
  },
];

export default function BestSellersSection() {
  return (
    <section className="bg-white section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">WHAT EVERYONE'S ORDERING</h2>
          <p className="text-gray-500 text-lg">Our most-loved plates — straight from your neighbors' orders</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="card bg-white border border-gray-100 group">
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {item.isFavorite && (
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-[#F97316] text-white text-xs">🔥 Customer Favorite</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#111827] text-base">{item.name}</h3>
                  <span className="text-[#F97316] font-bold text-base flex-shrink-0 ml-2">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.description}</p>
                <Link
                  to="/order-online"
                  className="block w-full text-center btn-primary text-sm py-2.5"
                >
                  Add to Order
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/menu" className="btn-outline bg-[#111827] text-white border-[#111827] px-8 py-3">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
