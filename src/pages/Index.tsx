import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/257069c3-c09f-4189-8b0c-b9b149fb797a/files/94d36bd7-e25e-4e7c-a8d5-8a476ff03f7c.jpg";

const services = [
  {
    emoji: "🌿",
    title: "Lawn Mowing",
    desc: "A clean, even cut every time — your yard will be the best on the block.",
  },
  {
    emoji: "🍂",
    title: "Leaf Cleanup",
    desc: "Fallen leaves piling up? I'll bag 'em and haul 'em away for you.",
  },
  {
    emoji: "✂️",
    title: "Edge Trimming",
    desc: "Crisp edges along driveways and sidewalks for that finished look.",
  },
  {
    emoji: "🧹",
    title: "Yard Tidying",
    desc: "Sticks, debris, general cleanup — leave it to me.",
  },
];

const pricing = [
  {
    label: "Small Yard",
    price: "$10",
    note: "Up to 1/8 acre",
    color: "bg-lawn-pale border-lawn-light",
    badge: "Most Popular",
  },
  {
    label: "Medium Yard",
    price: "$15",
    note: "Up to 1/4 acre",
    color: "bg-white border-lawn-green",
    badge: "",
  },
  {
    label: "Large Yard",
    price: "$20",
    note: "Up to 1/2 acre",
    color: "bg-white border-lawn-green",
    badge: "",
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-lawn-cream font-nunito overflow-x-hidden">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-lawn-cream/90 backdrop-blur-sm border-b border-lawn-green/20 px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-bounce-gentle inline-block">🌱</span>
            <span className="font-fredoka text-xl font-semibold text-lawn-dark">Marcus's Lawn Care</span>
          </div>
          <div className="hidden sm:flex gap-6 text-sm font-semibold text-lawn-green">
            <button onClick={() => scrollTo("services")} className="hover:text-lawn-dark transition-colors">Services</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-lawn-dark transition-colors">Pricing</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-lawn-dark transition-colors">Contact</button>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:5878718205" className="hidden sm:block text-lawn-green font-semibold text-sm hover:text-lawn-dark transition-colors">(587) 871-8205</a>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-lawn-green text-white font-fredoka font-semibold px-4 py-2 rounded-full text-sm hover:bg-lawn-dark transition-colors shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundColor: '#1e3a22' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lawn-dark/80 via-lawn-dark/50 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 bg-lawn-yellow/90 text-lawn-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-6 shadow animate-fade-up">
              <span>⭐</span> Local kid, honest work
            </div>
            <h1 className="font-fredoka text-5xl sm:text-6xl font-bold text-white leading-tight mb-4 animate-fade-up-slow">
              Your Lawn, <br />
              <span className="text-lawn-yellow">Looking Great</span>
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed animate-fade-up-slower">
              Hi! I'm Marcus, a 12-year-old in your neighborhood working hard to earn money for new equipment. I'll mow your lawn on weekends — reliably, affordably, and with a smile. 😊
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-lawn-yellow text-lawn-dark font-fredoka font-bold px-7 py-3 rounded-full text-base hover:scale-105 transition-transform shadow-lg"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="bg-white/15 border border-white/40 text-white font-semibold px-7 py-3 rounded-full text-base hover:bg-white/25 transition-colors"
              >
                See Services
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-lawn-green/30 backdrop-blur-sm" />
      </section>

      {/* TRUST BAR */}
      <div className="bg-lawn-green text-white py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-semibold">
          <span className="flex items-center gap-2"><Icon name="Clock" size={16} /> Weekends Available</span>
          <span className="flex items-center gap-2"><Icon name="MapPin" size={16} /> Local Neighborhood</span>
          <span className="flex items-center gap-2"><Icon name="DollarSign" size={16} /> Starting at $10</span>
          <span className="flex items-center gap-2"><Icon name="Star" size={16} /> 100% Satisfaction</span>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-lawn-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-4xl">🌾</span>
            <h2 className="font-fredoka text-4xl font-bold text-lawn-dark mt-2">What I Do</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">Simple, friendly yard work done right every weekend.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-3xl p-7 border border-lawn-green/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start"
              >
                <span className="text-4xl flex-shrink-0">{s.emoji}</span>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold text-lawn-dark mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-4xl">💵</span>
            <h2 className="font-fredoka text-4xl font-bold text-lawn-dark mt-2">Simple Pricing</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">No hidden fees. No surprises. Just fair prices.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.label}
                className={`relative rounded-3xl border-2 p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${p.color}`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lawn-yellow text-lawn-dark text-xs font-bold px-3 py-1 rounded-full shadow">
                    {p.badge}
                  </span>
                )}
                <p className="font-fredoka text-lg font-semibold text-lawn-dark mb-2">{p.label}</p>
                <p className="font-fredoka text-5xl font-bold text-lawn-green mb-1">{p.price}</p>
                <p className="text-muted-foreground text-sm mb-5">{p.note}</p>
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full bg-lawn-green text-white font-fredoka font-semibold py-2.5 rounded-full hover:bg-lawn-dark transition-colors text-sm shadow"
                >
                  Book This
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Not sure which fits?{" "}
            <button onClick={() => scrollTo("contact")} className="text-lawn-green font-semibold underline underline-offset-2">
              Just ask me!
            </button>
          </p>
        </div>
      </section>

      {/* WHY ME */}
      <section className="py-16 px-6 bg-lawn-pale">
        <div className="max-w-4xl mx-auto">
          <div className="bg-lawn-green rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center sm:text-left flex-1">
              <h2 className="font-fredoka text-3xl font-bold mb-4">Why hire me?</h2>
              <ul className="space-y-3 text-white/90 text-sm leading-relaxed">
                <li className="flex items-center gap-2"><Icon name="Check" size={16} className="text-lawn-yellow flex-shrink-0" /> I live right in your neighborhood</li>
                <li className="flex items-center gap-2"><Icon name="Check" size={16} className="text-lawn-yellow flex-shrink-0" /> I show up every weekend, rain or shine (unless it really rains 😄)</li>
                <li className="flex items-center gap-2"><Icon name="Check" size={16} className="text-lawn-yellow flex-shrink-0" /> I take pride in my work — it helps me buy better equipment</li>
                <li className="flex items-center gap-2"><Icon name="Check" size={16} className="text-lawn-yellow flex-shrink-0" /> You're supporting a local kid's small business dream!</li>
              </ul>
            </div>
            <div className="text-6xl sm:text-8xl animate-bounce-gentle">🏡</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-lawn-cream">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-4xl">📞</span>
            <h2 className="font-fredoka text-4xl font-bold text-lawn-dark mt-2">Get In Touch</h2>
            <p className="text-muted-foreground mt-2">Fill this out and I'll get back to you as fast as I can!</p>

          </div>

          {sent ? (
            <div className="bg-lawn-pale border-2 border-lawn-green rounded-3xl p-10 text-center animate-fade-in">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-fredoka text-2xl font-bold text-lawn-dark mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Thanks! I'll reach out soon to set up your lawn care appointment.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-lawn-green/20 shadow-sm p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-semibold text-lawn-dark mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-lawn-green/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lawn-green bg-lawn-pale"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-lawn-dark mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-lawn-green/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lawn-green bg-lawn-pale"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-lawn-dark mb-1.5">Tell me about your yard</label>
                <textarea
                  rows={4}
                  placeholder="Yard size, address, anything I should know..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-lawn-green/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lawn-green bg-lawn-pale resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lawn-green text-white font-fredoka font-bold py-3.5 rounded-full text-base hover:bg-lawn-dark transition-colors shadow-md"
              >
                Send My Request 🌿
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-lawn-dark text-white/70 py-8 px-6 text-center text-sm">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-xl">🌱</span>
          <span className="font-fredoka text-white font-semibold text-lg">Marcus's Lawn Care</span>
        </div>
        <p>Serving your neighborhood on weekends · Starting at just $10</p>
        <a href="tel:5878718205" className="inline-block mt-2 text-lawn-yellow font-semibold hover:underline">(587) 871-8205</a>
        <p className="mt-1 text-white/40 text-xs">Made with hard work and big dreams © 2026</p>
      </footer>
    </div>
  );
};

export default Index;