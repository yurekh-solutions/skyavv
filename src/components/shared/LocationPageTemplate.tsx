import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, MapPin, Star, Truck } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import StatsBar from "@/components/shared/StatsBar";
import { pageSEO } from "@/config/seo";

export interface LocationPageData {
  seoKey: string;
  url: string;
  pageTitle: string;
  pageHighlight: string;
  description: string;
  overview: string;
  areasCovered: string[];
  services: { title: string; desc: string; path: string }[];
  whyChooseUs: { title: string; desc: string }[];
  stats: { value: number; suffix?: string; label: string }[];
  testimonials: { name: string; event: string; text: string; rating: number }[];
  faqs: FAQItem[];
  relatedLocations: { title: string; path: string }[];
}

const LocationPageTemplate = ({ data }: { data: LocationPageData }) => {
  return (
    <>
      <SEO
        title={(pageSEO[data.seoKey] || { title: data.pageTitle }).title}
        description={(pageSEO[data.seoKey] || { description: data.description }).description}
        keywords={(pageSEO[data.seoKey] || { keywords: "" }).keywords}
        url={`https://skyav.in${data.url}`}
        faqSchema={data.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Locations", path: "/locations/mumbai" }, { label: data.pageTitle, path: data.url }]}
      />

      <PageHero
        title={data.pageTitle}
        highlight={data.pageHighlight}
        description={data.description}
        breadcrumbs={[{ label: "Locations", path: "/locations/mumbai" }, { label: data.pageTitle }]}
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <a href="tel:+918655973366" className="inline-flex items-center gap-2 px-5 py-2.5 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Link to="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20">Overview</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{data.pageTitle} {data.pageHighlight}</h2>
            <p className="text-gray-600 leading-relaxed">{data.overview}</p>
            <ul className="space-y-2">
              {["Included delivery & professional setup", "25+ years of AV rental experience", "Premium branded equipment", "Same-day delivery available"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar stats={data.stats} />
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Coverage" title={`Areas We Serve in ${data.pageTitle}`} highlight="& Beyond" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {data.areasCovered.map((area, i) => (
              <div key={i} className="glass-card rounded-xl px-4 py-3 flex items-center gap-2 hover-lift">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Services" title={`AV Services in ${data.pageTitle}`} highlight="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s, i) => (
              <Link key={i} to={s.path} className="glass-card rounded-2xl p-6 hover-lift group block">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Choose Us" title={`Why Sky Vision in ${data.pageTitle}`} highlight="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyChooseUs.map((w, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover-lift group">
                <div className="w-12 h-12 rounded-xl vibrant-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {data.testimonials.length > 0 && (
        <section className="py-12 md:py-16 mesh-bg-soft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Reviews" title={`${data.pageTitle} Client`} highlight="Testimonials" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.testimonials.map((t, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full vibrant-gradient flex items-center justify-center text-white font-bold">{t.name[0]}</div>
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="FAQ" title={`${data.pageTitle} AV Rental`} highlight="Questions" />
            <FAQAccordion items={data.faqs} showCategories={false} showSearch={false} />
          </div>
        </section>
      )}

      {/* Related Locations */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Explore More" title="Other" highlight="Locations" />
          <div className="flex flex-wrap justify-center gap-3">
            {data.relatedLocations.map((l, i) => (
              <Link key={i} to={l.path} className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-full font-semibold text-gray-700 hover:text-primary hover:scale-105 transition-all">
                {l.title} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default LocationPageTemplate;
