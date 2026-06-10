import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    { name: 'Ibrahim', role: 'Owner & Head Chef', initial: 'I', bio: 'Ibrahim founded Tasty Chicken Box with a simple dream: bring fresh, authentic halal food to Arlington. Every recipe on the menu is his creation.' },
    { name: 'Iman', role: 'Manager', initial: 'I', bio: 'Iman keeps everything running smoothly. She\'s the reason your order is always right and your experience is always warm.' },
    { name: 'Yasmin', role: 'Kitchen Lead', initial: 'Y', bio: 'Yasmin has been with the family since day one. Her attention to detail ensures every plate leaves the kitchen perfectly prepared.' },
    { name: 'Zainab', role: 'Customer Relations', initial: 'Z', bio: 'Zainab is the friendly face you\'ll see when you walk in. She treats every customer like a neighbor — because they are.' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Hero */}
      <section className="bg-[#111827] section-pad pt-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge bg-[#F97316] text-white mb-4 inline-block">Our Story</span>
            <h1 className="font-bebas text-5xl md:text-7xl text-white leading-none mb-6">
              FAMILY OWNED.<br />
              <span className="text-[#F97316]">COMMUNITY LOVED.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tasty Chicken Box is more than a restaurant — it\'s a family legacy built plate by plate in Arlington, VA.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section-pad">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-6">HOW IT ALL STARTED</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Ibrahim came to Arlington with a passion for cooking and a belief that halal food could be both exceptional and accessible. He started small, perfected every recipe, and let the food speak for itself.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Word spread fast. Neighbors told neighbors. Google reviews poured in. Before long, Tasty Chicken Box had become a staple of the Arlington community — trusted for its consistency, its generosity, and its flavors.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Today, Ibrahim\'s family works alongside him every day, carrying on the tradition of fresh ingredients, massive portions, and genuine hospitality.
              </p>
              <Link to="/order-online" className="btn-primary px-8 py-4">
                Order Fresh Today
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=700&q=80"
                alt="Ibrahim cooking fresh halal food at Tasty Chicken Box Arlington VA"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#FFF7ED] section-pad">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#111827] mb-3">MEET THE FAMILY</h2>
            <p className="text-gray-500 text-lg">The people who make every meal special</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] text-center">
                <div className="w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bebas text-3xl">{member.initial}</span>
                </div>
                <h3 className="font-semibold text-[#111827] text-lg mb-1">{member.name}</h3>
                <p className="text-[#F97316] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111827] section-pad">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-3">WHAT WE STAND FOR</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: '🌿', title: 'Always Fresh', desc: 'Nothing frozen. Everything made to order, every single day.' },
              { emoji: '💚', title: '100% Halal', desc: 'Certified halal meats. No exceptions. No compromises.' },
              { emoji: '🏡', title: 'Community First', desc: 'We\'re your neighbors. We treat you like family.' },
            ].map((v) => (
              <div key={v.title} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
