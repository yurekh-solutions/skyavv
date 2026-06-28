import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Calendar, TrendingUp, Phone, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import StatsBar from "@/components/shared/StatsBar";
import CTASection from "@/components/shared/CTASection";
import { pageSEO } from "@/config/seo";
import teamImg from "@/assets/team.png";
import setupImg from "@/assets/setup.png";

const About = () => {
  const values = [
    { icon: Target, title: "Our Mission", desc: "To empower every event in Mumbai with world-class AV technology, making spectacular experiences accessible and affordable for all." },
    { icon: Eye, title: "Our Vision", desc: "To be India's most trusted and innovative AV rental company, setting the benchmark for quality, service, and reliability in event technology." },
    { icon: Heart, title: "Our Values", desc: "Customer-first approach, technical excellence, transparent pricing, and relentless commitment to making every event a resounding success." },
  ];

  const timeline = [
    { year: "2010", title: "The Beginning", desc: "Sky Vision Multimedia was founded in Dahisar, Mumbai with a single projector and a big dream." },
    { year: "2014", title: "Expanding Services", desc: "Added LED walls, sound systems, and stage lighting to our rental catalog. First major corporate event." },
    { year: "2018", title: "500+ Events Milestone", desc: "Crossed 500 events powered. Expanded to serve Navi Mumbai, Thane, and Pune with dedicated delivery teams." },
    { year: "2022", title: "Premium Equipment", desc: "Invested in P2.5 LED walls, line array sound systems, and 4K projection technology. 4.8-star rating achieved." },
    { year: "2026", title: "5000+ Events", desc: "Now serving 7 cities across Maharashtra & Goa with 500+ corporate clients and 5000+ events powered." },
  ];

  const certifications = [
    "ISO 9001 Quality Management",
    "Authorized JBL Audio Partner",
    "Samsung LED Display Partner",
    "15+ Certified AV Technicians",
    "24/7 Technical Support Team",
    "Pan-India Delivery Network",
  ];

  return (
    <>
      <SEO title={pageSEO.about.title} description={pageSEO.about.description} keywords={pageSEO.about.keywords} url="https://skyav.in/about" breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }]} />

      <PageHero
        title="About"
        highlight="Sky Vision"
        description="Mumbai's most trusted AV equipment rental company. For over 15 years, we've been powering spectacular events across Maharashtra with premium technology and unmatched service."
        breadcrumbs={[{ label: "About Us", path: "/about" }]}
      />

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-3xl overflow-hidden glass-card p-2">
              <img src={teamImg} alt="Sky Vision Multimedia team" className="w-full rounded-2xl" />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From a Single Projector to 5000+ Events</h2>
              <p className="text-gray-600 leading-relaxed">It all started in 2010 when our founder, frustrated by the lack of reliable AV rental options in Mumbai, decided to change the game. With just one projector and an unwavering commitment to quality, Sky Vision Multimedia was born.</p>
              <p className="text-gray-600 leading-relaxed">Today, we're Mumbai's go-to AV rental company with an extensive inventory of LED walls, sound systems, projectors, lighting, and more. We've powered over 5000 events — from intimate birthday parties to massive corporate conferences and stadium concerts.</p>
              <p className="text-gray-600 leading-relaxed">What hasn't changed is our core promise: premium equipment, fair pricing, and service that goes above and beyond. Every event matters to us, whether it's a 50-person seminar or a 5000-guest concert.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+918655973366" className="inline-flex items-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform"><Phone className="h-4 w-4" /> Talk to Us</a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform">Contact Page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What Drives Us" title="Our Mission, Vision &" highlight="Values" description="The principles that guide everything we do at Sky Vision Multimedia." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass-card rounded-2xl p-6 md:p-8 hover-lift group text-center">
                  <div className="w-16 h-16 rounded-2xl vibrant-gradient flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform shadow-lg"><Icon className="h-8 w-8 text-white" /></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Journey" title="15 Years of" highlight="Excellence" description="From humble beginnings to becoming Mumbai's #1 AV rental company." />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 vibrant-gradient opacity-30 md:-translate-x-1/2" />
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 mb-8 md:mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full vibrant-gradient shadow-lg md:-translate-x-1/2 z-10 mt-2" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card rounded-2xl p-5 md:p-6 hover-lift">
                      <span className="inline-block px-3 py-1 vibrant-gradient text-white rounded-full text-xs font-bold mb-2">{item.year}</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Quality Assurance" title="Certified &" highlight="Trusted" description="We partner with the best brands and maintain the highest quality standards." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-3 hover-lift">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Image */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden glass-card p-2 relative">
            <img src={setupImg} alt="Sky Vision AV equipment setup" className="w-full rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Professional Equipment, Expert Setup</h3>
              <p className="text-white/80">Every rental includes free delivery, professional setup, and on-site technical support.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work with Mumbai's Best?" description="Join 500+ happy clients who trust Sky Vision for their event AV needs." />
    </>
  );
};

export default About;
