import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Clock, Phone, MessageCircle, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { blogArticles } from "./blogData";
import { pageSEO } from "@/config/seo";

export default function Blog() {
  return (
    <>
      <SEO
        title={pageSEO.blog.title}
        description={pageSEO.blog.description}
        keywords={pageSEO.blog.keywords}
        url="https://skyav.in/blog"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Blog", path: "/blog" }]}
      />

      <PageHero
        title="AV Equipment Rental"
        highlight="Blog & Guides"
        description="Expert guides, tips, and insights on LED wall rental, projector selection, sound system setup, event AV planning, and pricing from Mumbai's trusted AV rental company."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* SEO-rich intro for AEO/GEO */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Planning an event in Mumbai and unsure about the audio-visual setup? Our expert guides cover everything from choosing the right LED wall and sound system to budgeting, vendor selection, and day-of coordination — all based on 25+ years and 5 Lakh+ events powered by Sky Vision Multimedia.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Blog" title="Latest" highlight="Articles & Guides" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogArticles.map((article, i) => (
              <Link key={i} to={article.path} className="glass-card rounded-2xl p-6 hover-lift group block">
                <div className="w-12 h-12 rounded-xl vibrant-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" /> {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                    Read <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead-gen CTA block */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Need Help Choosing the Right AV Setup?</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">Our AV experts can recommend the perfect equipment for your event type, venue, and budget. Get a personalised quote within 30 minutes — no obligations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918655973366" className="inline-flex items-center justify-center gap-2 px-8 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform"><Phone className="h-4 w-4" /> +91 86559 73366</a>
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-bold hover:scale-105 transition-transform">Get Instant Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-rich section for AEO */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading badge="FAQ" title="Common" highlight="Questions About AV Rental" />
            <div className="space-y-4">
              {[
                { q: "How much does AV equipment rental cost in Mumbai?", a: "AV rental costs vary by equipment type. LED walls range Rs. 15,000–1,50,000/day, sound systems Rs. 5,000–2,00,000, and projector setups start at Rs. 3,000. Contact Sky Vision for a custom quote based on your event requirements." },
                { q: "How far in advance should I book AV equipment for my event?", a: "We recommend booking 2–4 weeks in advance for standard events and 6–8 weeks for large weddings or corporate events. Same-day urgent requirements are also handled — call +91 86559 73366." },
                { q: "Do you deliver and set up AV equipment across Mumbai?", a: "Yes, Sky Vision provides delivery, professional setup, and on-site technical support across Mumbai, Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa at no extra charge within city limits." },
                { q: "What is the best LED wall for a wedding in Mumbai?", a: "For most weddings with 100–300 guests, a P2.5 indoor LED wall of 12ft × 7ft to 16ft × 9ft delivers stunning visuals. For outdoor weddings or sangeet, a P3.9 outdoor panel with 5000+ nits brightness is ideal." },
              ].map((item, i) => (
                <details key={i} className="glass-card rounded-2xl p-5 md:p-6 group">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-gray-900 text-base md:text-lg">
                    {item.q}
                    <span className="ml-4 text-primary group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Make Your Event Spectacular?" description="Get a personalised AV quote within 30 minutes. Expert advice, premium equipment, transparent pricing." />
    </>
  );
}
