import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, Monitor, Speaker, Lightbulb, Camera, Mic, Music, Radio, Tv, Wifi, Briefcase, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import StatsBar from "@/components/shared/StatsBar";

const services = [
  { path: "/services/led-wall-rental", title: "LED Wall Rental", desc: "Indoor & outdoor LED screens with stunning visuals", icon: Monitor, badge: "Popular" },
  { path: "/services/indoor-led-wall", title: "Indoor LED Wall", desc: "High-resolution P1.5–P3.9 displays for crystal-clear imagery", icon: Tv, badge: "Premium" },
  { path: "/services/outdoor-led-wall", title: "Outdoor LED Wall", desc: "6000+ nits weatherproof screens for outdoor events", icon: Monitor },
  { path: "/services/projector-rental", title: "Projector Rental", desc: "HD & 4K projectors with motorized screens", icon: Zap },
  { path: "/services/led-tv-rental", title: "LED TV Rental", desc: "32\" to 85\" large-screen TVs for exhibitions & events", icon: Tv },
  { path: "/services/sound-system-rental", title: "Sound System Rental", desc: "Concert-grade JBL, Bose, Yamaha speakers & line arrays", icon: Speaker, badge: "Popular" },
  { path: "/services/stage-lighting-rental", title: "Stage Lighting", desc: "LED par cans, moving heads, spotlights, lasers & haze", icon: Lightbulb },
  { path: "/services/photography-videography", title: "Photography & Video", desc: "4K cameras, drones, cinematic editing for any event", icon: Camera },
  { path: "/services/karaoke-rental", title: "Karaoke Rental", desc: "Complete karaoke setups with 10,000+ songs", icon: Mic },
  { path: "/services/pa-system-rental", title: "PA System Rental", desc: "Public address systems for conferences & seminars", icon: Speaker },
  { path: "/services/dj-equipment-rental", title: "DJ Equipment", desc: "Pioneer CDJs, mixers, controllers & DJ speakers", icon: Music },
  { path: "/services/live-streaming", title: "Live Streaming", desc: "Multi-camera 4K streaming to YouTube, Facebook & Zoom", icon: Wifi },
  { path: "/services/conference-setup", title: "Conference Setup", desc: "Full conference AV — LED walls, mics, lighting, streaming", icon: Briefcase },
  { path: "/services/wedding-av", title: "Wedding AV", desc: "Complete wedding audio-visual packages from Rs. 15,000", icon: Heart, badge: "Popular" },
];

const ServicesOverview = () => {
  return (
    <>
      <SEO
        title="AV Equipment Rental Services Mumbai | Complete AV Solutions"
        description="Complete AV equipment rental services in Mumbai — LED walls, projectors, sound systems, stage lighting, photography, karaoke, DJ equipment, live streaming & more. Free delivery & setup."
        keywords="AV services Mumbai, LED wall rental services, projector rental, sound system rental, stage lighting, event AV services, corporate AV solutions"
        url="https://skyav.in/services"
      />

      <PageHero
        title="Our"
        highlight="Services"
        description="From LED walls to sound systems, stage lighting to live streaming — we provide complete AV equipment rental solutions for every type of event across Mumbai, Navi Mumbai, Thane, Pune & Goa."
        breadcrumbs={[{ label: "Services" }]}
      >
        <div className="flex flex-wrap gap-3 mt-6">
          <Link to="/quote" className="inline-flex items-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+918655973366" className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform">
            +91 86559 73366
          </a>
          <a href="tel:+919920158955" className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full font-bold text-indigo-600 hover:scale-105 transition-transform">
            +91 99201 58955
          </a>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="14 Services" title="Complete AV" highlight="Solutions" description="Whatever your event needs, we've got it covered. Explore our full range of professional AV equipment rental services." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.path} to={s.path} className="glass-card rounded-2xl p-6 hover-lift group relative overflow-hidden">
                  {s.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 vibrant-gradient text-white rounded-full text-xs font-bold">{s.badge}</span>
                  )}
                  <div className="w-14 h-14 rounded-xl vibrant-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Sky Vision" title="Trusted by" highlight="10 Lakh+ Events" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Free Delivery & Setup", desc: "Free delivery and professional setup across Mumbai, Navi Mumbai & Thane." },
              { title: "Premium Equipment", desc: "Only top brands — JBL, Bose, Pioneer, Samsung, LG, Yamaha & more." },
              { title: "Expert Technicians", desc: "Our team handles installation, operation & troubleshooting on-site." },
              { title: "24/7 Support", desc: "Round-the-clock phone & WhatsApp support during your event." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover-lift">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesOverview;
