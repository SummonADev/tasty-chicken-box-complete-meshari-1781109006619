import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is all your food 100% halal?',
    answer: 'Yes, absolutely. All of our meats are sourced from certified halal suppliers. We do not serve any pork products. Our halal certification is proudly displayed in our restaurant.'
  },
  {
    question: 'What are your hours?',
    answer: 'Monday through Thursday we are open 11:00 AM to 1:00 AM. Friday and Saturday we are open 11:00 AM to 3:00 AM. Sunday we are open 12:00 PM to 1:00 AM.'
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes! You can order delivery through DoorDash, Uber Eats, or order directly through our website for pickup. We recommend ordering direct for the best prices with no extra fees.'
  },
  {
    question: 'Do you offer catering?',
    answer: 'Yes, we cater events of all sizes across the DMV — from birthday parties and office lunches to weddings and large gatherings. Contact us or visit our catering page for a quote.'
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 2716 Washington Blvd, Arlington, VA 22201. We are easy to find and have parking available nearby.'
  },
  {
    question: 'How can I contact you?',
    answer: 'You can call us at (571) 497-2133 or email us at Tasty.chicken.box@gmail.com. You can also reach us through our contact page on this website.'
  },
  {
    question: 'What is your most popular dish?',
    answer: 'Our Combo Over Rice — chicken and lamb over saffron rice with our legendary white and red sauces — is our #1 best seller. Customers also love our Chicken Shawarma Wrap and Lamb Gyro.'
  },
  {
    question: 'What are the white and red sauces?',
    answer: 'Our creamy white garlic sauce and smoky spicy red sauce are made in-house every single day. They are our secret weapons and reviewers mention them constantly. You will want them on everything!'
  },
  {
    question: 'Do you have vegetarian options?',
    answer: 'Yes! Our Falafel Over Rice is a crowd favorite among vegetarian customers. We also offer falafel wraps and other vegetarian-friendly options. Check our full menu for details.'
  },
  {
    question: 'Can I order online for pickup?',
    answer: 'Absolutely. You can place a pickup order directly through our website via Toast, our preferred ordering platform. Direct orders mean the best prices — no third-party fees.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Hero */}
      <section className="bg-[#111827] section-pad pt-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
              FREQUENTLY ASKED<br />
              <span className="text-[#F97316]">QUESTIONS</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Everything you need to know about Tasty Chicken Box in Arlington, VA.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-pad">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-[#111827] text-base leading-snug">{faq.question}</span>
                  {openIndex === index
                    ? <ChevronUp size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    : <ChevronDown size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <a href="tel:5714972133" className="btn-primary px-8 py-4">
              Call Us: (571) 497-2133
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
