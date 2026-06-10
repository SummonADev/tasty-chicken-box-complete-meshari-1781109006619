export default function KnownForSection() {
  const items = [
    {
      emoji: '🥩',
      title: 'Massive Portions',
      description: 'Our platters are built to satisfy. No skimping, ever. Reviewers say one platter feeds two people.',
    },
    {
      emoji: '🌿',
      title: 'Fresh Ingredients',
      description: 'Every item is made fresh when you order it. No shortcuts, no frozen. Ever.',
    },
    {
      emoji: '🕙',
      title: 'Open Late',
      description: "Hungry at midnight? We're here. Friday & Saturday until 3AM. No judgment.",
    },
    {
      emoji: '💚',
      title: '100% Halal',
      description: 'Proudly certified halal. All meats sourced from certified halal suppliers. No exceptions.',
    },
  ];

  return (
    <section className="bg-[#FFF7ED] section-pad">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">WHAT WE&apos;RE KNOWN FOR</h2>
          <p className="text-gray-500 text-lg">4 reasons Arlington keeps coming back</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center p-6 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow">
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="font-semibold text-[#111827] text-base md:text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
