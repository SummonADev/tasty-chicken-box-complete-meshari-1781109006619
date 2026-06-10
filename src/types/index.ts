export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isFavorite?: boolean;
  isChefsPick?: boolean;
  emoji?: string;
};

export type Review = {
  id: string;
  name: string;
  quote: string;
  stars: number;
  credibility?: string;
  date?: string;
  category?: 'food' | 'service' | 'value' | 'late-night';
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CateringFormData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guests: string;
  eventType: string;
  notes: string;
};
