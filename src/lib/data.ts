import type { MenuItem, Review, FAQItem } from '@/types';

export const menuItems: MenuItem[] = [
  // Appetizers
  { id: 'app1', name: 'Hummus', description: 'Creamy chickpea dip with olive oil, served with pita bread', price: '$7.99', category: 'appetizers', emoji: '🫘' },
  { id: 'app2', name: 'Falafel (6 pcs)', description: 'Crispy golden falafel balls with tahini sauce', price: '$8.99', category: 'appetizers', isFavorite: true, emoji: '🧆' },
  { id: 'app3', name: 'Grape Leaves', description: 'Stuffed grape leaves with rice and herbs, served with yogurt', price: '$8.99', category: 'appetizers', isChefsPick: true, emoji: '🌿' },
  { id: 'app4', name: 'Tabouleh', description: 'Fresh parsley salad with tomatoes, bulgur, lemon and olive oil', price: '$6.99', category: 'appetizers', emoji: '🥗' },
  { id: 'app5', name: 'Chicken Wings', description: 'Crispy halal chicken wings with your choice of sauce', price: '$12.99', category: 'appetizers', emoji: '🍗' },
  { id: 'app6', name: 'Mozzarella Sticks', description: 'Golden fried mozzarella with marinara sauce', price: '$8.99', category: 'appetizers', emoji: '🧀' },

  // Wraps
  { id: 'wrap1', name: 'Chicken Shawarma Wrap', description: 'Juicy marinated chicken, fresh veggies, garlic sauce in a warm pita', price: '$11.99', category: 'wraps', isFavorite: true, emoji: '🌯' },
  { id: 'wrap2', name: 'Lamb Gyro Wrap', description: 'Our most-talked-about wrap. Tender lamb, veggies, tzatziki in pita', price: '$12.99', category: 'wraps', isFavorite: true, isChefsPick: true, emoji: '🌯' },
  { id: 'wrap3', name: 'Falafel Wrap', description: 'Crispy falafel, hummus, fresh vegetables, tahini in pita', price: '$10.99', category: 'wraps', emoji: '🌯' },
  { id: 'wrap4', name: 'Kafta Wrap', description: 'Spiced ground beef kafta, grilled onions, tomatoes in pita', price: '$11.99', category: 'wraps', isChefsPick: true, emoji: '🌯' },

  // Platters
  { id: 'plat1', name: 'Combo Over Rice', description: 'Chicken + Lamb over saffron rice with legendary white & red sauces', price: '$14.99', category: 'platters', isFavorite: true, emoji: '🍽️' },
  { id: 'plat2', name: 'Chicken Over Rice', description: 'Tender halal chicken over saffron rice, salad, white & red sauces', price: '$12.99', category: 'platters', isFavorite: true, emoji: '🍽️' },
  { id: 'plat3', name: 'Lamb Over Rice', description: 'Perfectly spiced halal lamb, fresh rice, salad, sauces', price: '$13.99', category: 'platters', isFavorite: true, emoji: '🍽️' },
  { id: 'plat4', name: 'Falafel Over Rice', description: 'Crispy authentic falafel over saffron rice, salad, tahini', price: '$11.99', category: 'platters', emoji: '🍽️' },
  { id: 'plat5', name: 'Shawarma Over Rice', description: 'Marinated chicken shawarma sliced fresh over saffron rice', price: '$13.99', category: 'platters', emoji: '🍽️' },

  // Grill
  { id: 'grill1', name: 'Mixed Grill', description: 'Lamb chops + chicken skewer + kafta over rice. A feast.', price: '$22.99', category: 'grill', isFavorite: true, isChefsPick: true, emoji: '🔥' },
  { id: 'grill2', name: 'Lamb Chops', description: 'Tender marinated lamb chops, grilled to perfection', price: '$24.99', category: 'grill', isChefsPick: true, emoji: '🥩' },
  { id: 'grill3', name: 'Chicken Skewer', description: 'Juicy marinated chicken skewers, grilled fresh', price: '$14.99', category: 'grill', emoji: '🍢' },
  { id: 'grill4', name: 'Kafta Skewer', description: 'Spiced ground beef kafta skewers, grilled over charcoal', price: '$14.99', category: 'grill', emoji: '🍢' },
  { id: 'grill5', name: 'Half Chicken', description: 'Special half chicken, marinated and grilled whole', price: '$16.99', category: 'grill', isFavorite: true, emoji: '🍗' },

  // Family Platters
  { id: 'fam1', name: 'Family Chicken Platter', description: 'Large chicken over rice platter feeding 3–4 people', price: '$39.99', category: 'family-platters', emoji: '👨‍👩‍👧‍👦' },
  { id: 'fam2', name: 'Family Combo Platter', description: 'Chicken + Lamb over rice feeding 3–4 people', price: '$44.99', category: 'family-platters', isFavorite: true, emoji: '👨‍👩‍👧‍👦' },
  { id: 'fam3', name: 'Family Mixed Grill', description: 'Mixed grill feast with lamb chops, chicken, kafta for the whole family', price: '$59.99', category: 'family-platters', isChefsPick: true, emoji: '🔥' },

  // Desserts
  { id: 'des1', name: 'Baklava', description: 'Homestyle baklava with honey, pistachio and rose water', price: '$5.99', category: 'desserts', isFavorite: true, isChefsPick: true, emoji: '🍯' },
  { id: 'des2', name: 'Kunafa', description: 'Traditional cheese kunafa soaked in sweet syrup', price: '$7.99', category: 'desserts', emoji: '🧁' },
  { id: 'des3', name: 'Rice Pudding', description: 'Creamy rice pudding with cinnamon and raisins', price: '$4.99', category: 'desserts', emoji: '🍮' },

  // Drinks
  { id: 'drk1', name: 'Hot Black Tea', description: 'Complimentary for dine-in. Aromatic black tea with mint', price: 'Complimentary', category: 'drinks', emoji: '🍵' },
  { id: 'drk2', name: 'Soft Drinks', description: 'Coke, Diet Coke, Sprite, Lemonade', price: '$2.99', category: 'drinks', emoji: '🥤' },
  { id: 'drk3', name: 'Water', description: 'Still or sparkling', price: '$1.99', category: 'drinks', emoji: '💧' },
  { id: 'drk4', name: 'Mango Juice', description: 'Fresh mango juice', price: '$3.99', category: 'drinks', emoji: '🥭' },
];

export const reviews: Review[] = [
  { id: 'r1', name: 'Ahmedine B.', quote: 'The food tastes like my mom\'s food. Authentic, fresh, generous. This is what real halal food is supposed to taste like.', stars: 5, credibility: 'Local Guide · 47 reviews', date: '2 months ago', category: 'food' },
  { id: 'r2', name: 'Vincent S.', quote: 'Best halal food in the neighborhood. Ibrahim and family are very kind. The chicken over rice is unbeatable.', stars: 5, credibility: 'Local Guide · 270 reviews', date: '3 months ago', category: 'food' },
  { id: 'r3', name: 'John J.', quote: 'Cannot praise this place enough. Has bailed me out of so many late night starving situations. Open late, great food, fast service.', stars: 5, credibility: '12 reviews', date: '1 month ago', category: 'late-night' },
  { id: 'r4', name: 'Samir D.', quote: 'I order from here weekly. The combo platter is my go-to. Portions are massive and the sauces are incredible.', stars: 5, credibility: '89 reviews', date: '3 weeks ago', category: 'value' },
  { id: 'r5', name: 'Boubacar B.', quote: 'For just $12, you get a portion that can easily feed two people. The value here is absolutely insane.', stars: 5, credibility: '34 reviews', date: '2 months ago', category: 'value' },
  { id: 'r6', name: 'Lance K.', quote: 'The lamb gyro wrap is sensational. Best gyro I\'ve had outside of NYC. The lamb is perfectly seasoned and the sauce is perfection.', stars: 5, credibility: '156 reviews', date: '1 month ago', category: 'food' },
  { id: 'r7', name: 'Allyson W.', quote: 'This has become my go-to whenever I don\'t feel like cooking. The staff is always friendly, food is always fresh.', stars: 5, credibility: '23 reviews', date: '6 weeks ago', category: 'service' },
  { id: 'r8', name: 'Guido P.', quote: 'I was walking out with my food in 10 mins, very fast and friendly service. The falafel is the best I\'ve had in the DMV.', stars: 5, credibility: '67 reviews', date: '4 weeks ago', category: 'service' },
  { id: 'r9', name: 'Julian S.', quote: 'I go here frequently. This place is high quality and the price is unbeatable. Iman at the front is always welcoming.', stars: 5, credibility: 'Local Guide · 112 reviews', date: '2 months ago', category: 'value' },
  { id: 'r10', name: 'Meliquades R.', quote: 'My wife said the falafel was the best she\'s ever eaten. We drove 30 minutes just to come here and it was absolutely worth it.', stars: 5, credibility: '8 reviews', date: '5 weeks ago', category: 'food' },
  { id: 'r11', name: 'Dammin S.', quote: 'I was excited to try chicken over rice in VA coming from NYC — Tasty Chicken Box exceeded my expectations. Legit NYC quality.', stars: 5, credibility: '45 reviews', date: '1 month ago', category: 'food' },
  { id: 'r12', name: 'Yiannis M.', quote: '1lb of rice!!! The portions here are absolutely ridiculous in the best way. Great halal food at an unbeatable price.', stars: 5, credibility: 'Local Guide · 200 reviews', date: '3 months ago', category: 'value' },
  { id: 'r13', name: 'Aleem B.', quote: 'We had my baby\'s 1st birthday catered from here and it was so amazing! Everyone loved the food and kept asking where it was from.', stars: 5, credibility: '19 reviews', date: '4 months ago', category: 'service' },
  { id: 'r14', name: 'Sarah M.', quote: 'Late night craving at 1:30AM and this place came through! The mixed grill is incredible and the staff was so kind even that late.', stars: 5, credibility: '31 reviews', date: '2 weeks ago', category: 'late-night' },
  { id: 'r15', name: 'Omar K.', quote: 'The white sauce is legendary. I ask for extra every single time. Ibrahim knows how to make authentic food.', stars: 5, credibility: '78 reviews', date: '5 weeks ago', category: 'food' },
];

export const faqs: FAQItem[] = [
  { question: 'Is Tasty Chicken Box 100% Halal?', answer: 'Yes. We are proudly 100% Halal certified. All of our meats are sourced from certified halal suppliers. No exceptions, ever.' },
  { question: 'What are your hours?', answer: 'Monday–Thursday: 11AM–1AM | Friday–Saturday: 11AM–3AM | Sunday: 12PM–1AM. We\'re one of the only halal restaurants in Arlington open this late!' },
  { question: 'Do you offer catering?', answer: 'Yes! We cater events of all sizes across the DMV — from small office lunches to large weddings and birthday parties. Visit our catering page or call (571) 497-2133 to get a quote.' },
  { question: 'Can I order online?', answer: 'Yes — order directly through our website (recommended, no extra fees), or via DoorDash or Uber Eats for delivery.' },
  { question: 'Is there parking?', answer: 'Yes, we have a parking lot plus additional street parking on Washington Blvd. Easy to find us!' },
  { question: 'Do you have vegetarian options?', answer: 'Absolutely! Our falafel, hummus, tabouleh, grape leaves, and falafel wraps are all 100% vegetarian and delicious.' },
  { question: 'What is your most popular dish?', answer: 'The Combo Over Rice (chicken + lamb) is our #1 best seller. The Lamb Gyro Wrap is a close second. Both come with our legendary white and red sauces.' },
  { question: 'Do you offer complimentary items?', answer: 'Yes! We offer complimentary hot black tea for all dine-in customers. It\'s a favorite — reviewers mention it all the time!' },
  { question: 'Can I customize my order?', answer: 'Absolutely. Our staff will gladly help you customize sauces, toppings, spice levels, and portion preferences. Just ask!' },
  { question: 'What makes Tasty Chicken Box different?', answer: 'We\'re family-owned, family-run, and we cook everything fresh when you order it. No shortcuts, no frozen ingredients. Ibrahim and his family have built this place with love, and you can taste it in every bite.' },
];

export const categories = [
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'wraps', label: 'Wraps' },
  { id: 'platters', label: 'Platters' },
  { id: 'grill', label: 'Grill' },
  { id: 'family-platters', label: 'Family Platters' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];
