import { useState } from "react";
import { Star, Quote, Phone, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import StatsBar from "@/components/shared/StatsBar";
import CTASection from "@/components/shared/CTASection";
import { pageSEO } from "@/config/seo";

const Testimonials = () => {
  const [filter, setFilter] = useState("All");

  const testimonials = [
    { name: "Rajesh Kumar", event: "Corporate Conference", location: "BKC, Mumbai", rating: 5, text: "Sky Vision powered our annual conference flawlessly. The LED wall was spectacular and the sound was crystal clear. Their team was professional and handled everything from setup to operation. Highly recommended for any corporate event!", date: "Jan 2026" },
    { name: "Priya Sharma", event: "Wedding", location: "Taj Lands End, Mumbai", rating: 5, text: "They made our wedding magical! The LED backdrop, lighting, and sound were beyond our expectations. Professional team and great service. Our guests were amazed by the setup. Will definitely recommend to family and friends.", date: "Dec 2025" },
    { name: "Amit Patel", event: "Product Launch", location: "World Trade Center, Mumbai", rating: 5, text: "The LED wall reveal was show-stopping. Their team handled everything from setup to operation. The precision lighting and immersive audio made our product launch unforgettable. Will definitely use them again.", date: "Nov 2025" },
    { name: "Sneha Desai", event: "Birthday Party", location: "JW Marriott, Mumbai", rating: 5, text: "Booked them for my husband's surprise birthday party. The DJ setup, LED dance floor, and karaoke were a hit! Everyone had a blast. Quick setup and great pricing. Thank you Sky Vision team!", date: "Oct 2025" },
    { name: "Vikram Singh", event: "Concert", location: "Nesco, Goregaon", rating: 5, text: "Concert-grade sound and lighting for our music event. The line array system was powerful and crystal clear. The LED wall added a spectacular visual element. Their technicians were on point throughout the show.", date: "Sep 2025" },
    { name: "Neha Gupta", event: "Corporate Event", location: "Trident, BKC", rating: 5, text: "We've used Sky Vision for three consecutive annual events now. Consistently excellent service, premium equipment, and competitive pricing. They understand corporate requirements and deliver every time.", date: "Aug 2025" },
    { name: "Karan Mehta", event: "Exhibition", location: "BEC, Goregaon", rating: 4, text: "Great LED TV and display setup for our exhibition booth. Attracted a lot of footfall. Setup was quick and their technician was helpful throughout. Will book again for next year's expo.", date: "Jul 2025" },
    { name: "Anjali Reddy", event: "Wedding", location: "The Leela, Mumbai", rating: 5, text: "From the sangeet to the reception, every function sounded and looked amazing. The stage lighting transformed the venue. Their team was always available and responsive. Worth every rupee!", date: "Jun 2025" },
    { name: "Rohit Jain", event: "College Event", location: "IIT Bombay", rating: 5, text: "Powered our college cultural fest with sound, lighting, and LED walls. Student-friendly pricing and professional setup. The team understood our budget constraints and delivered a great package.", date: "May 2025" },
    { name: "Fatima Sheikh", event: "Cultural Event", location: "Shanmukhananda Hall", rating: 5, text: "Excellent AV setup for our community cultural program. The sound system was clear even in the back rows. Lighting was perfect for the performances. Very satisfied with their service.", date: "Apr 2025" },
    { name: "Suresh Nair", event: "Award Function", location: "Grand Hyatt, Mumbai", rating: 5, text: "Professional AV setup for our corporate awards night. LED walls, sound, and lighting were all top-notch. The live streaming was seamless. Highly professional team from start to finish.", date: "Mar 2025" },
    { name: "Deepika Rao", event: "Private Party", location: "Residence, Juhu", rating: 4, text: "Booked a sound system and karaoke for a house party. Quick setup, great sound quality, and the karaoke was a hit with guests. Affordable pricing for home events. Thank you!", date: "Feb 2025" },
  ];

  const categories = ["All", "Wedding", "Corporate", "Concert", "Birthday Party", "Product Launch", "Exhibition"];
  const filtered = filter === "All" ? testimonials : testimonials.filter((t) => t.event === filter);

  return (
    <>
      <SEO title={pageSEO.testimonials.title} description={pageSEO.testimonials.description} keywords={pageSEO.testimonials.keywords} url="https://skyav.in/testimonials" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Testimonials", path: "/testimonials" }]} />

      <PageHero
        title="Client"
        highlight="Testimonials"
        description="Don't just take our word for it. Read genuine reviews from 500+ happy clients who trusted Sky Vision Multimedia for their event AV needs."
        breadcrumbs={[{ label: "Testimonials", path: "/testimonials" }]}
      />

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar stats={[{ value: 150, suffix: "+", label: "Google Reviews" }, { value: 4.8, suffix: "★", label: "Average Rating" }, { value: 500, suffix: "+", label: "Happy Clients" }, { value: 5000, suffix: "+", label: "Events Powered" }]} />
        </div>
      </section>

      <section className="py-8 md:py-16 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Reviews" title="What Clients" highlight="Say About Us" description="Filter by event type to read reviews from clients with similar events." />

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat ? "vibrant-gradient text-white shadow-lg" : "glass-card text-gray-700 hover:text-primary"}`}>{cat}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover-lift flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full vibrant-gradient flex items-center justify-center text-white font-bold">{t.name[0]}</div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">"{t.text}"</p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <span className="font-semibold text-primary">{t.event}</span>
                  <span>{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Join 500+ Happy Clients" description="Experience the Sky Vision difference for your next event." />
    </>
  );
};

export default Testimonials;
