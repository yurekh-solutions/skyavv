import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FlipCard from "@/components/shared/FlipCard";
import TabPanel from "@/components/shared/TabPanel";
import type { TabItem } from "@/components/shared/TabPanel";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import type { GalleryItem } from "@/components/shared/ImageGallery";
import ImageGallery from "@/components/shared/ImageGallery";

export interface ServicePageData {
  seoKey: string;
  url: string;
  pageTitle: string;
  pageHighlight: string;
  description: string;
  heroImage: string;
  overview: string;
  features: { icon: string; title: string; desc: string }[];
  flipCards: { image: string; title: string; badge?: string; frontDescription: string; backDescription: string; features: string[] }[];
  specTabs: TabItem[];
  gallery: GalleryItem[];
  pricing: { size: string; spec: string; price: string; popular?: boolean }[];
  faqs: FAQItem[];
  relatedServices: { title: string; path: string }[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle2,
  Star,
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  return (
    <>
      <SEO
        title={data.seoKey}
        description={data.seoKey}
        keywords={data.seoKey}
        url={`https://skyav.in${data.url}`}
      />

      <PageHero
        title={data.pageTitle}
        highlight={data.pageHighlight}
        description={data.description}
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: data.pageTitle }]}
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

      {/* Overview with image */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-3xl overflow-hidden glass-card p-2">
              <img src={data.heroImage} alt={`${data.pageTitle} ${data.pageHighlight}`} className="w-full rounded-2xl" loading="lazy" decoding="async" />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20">Overview</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{data.pageTitle} {data.pageHighlight} in Mumbai</h2>
              <p className="text-gray-600 leading-relaxed">{data.overview}</p>
              <ul className="space-y-2">
                {["Free delivery & setup in Mumbai", "Professional on-site technicians", "Premium branded equipment", "Same-day delivery available"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Key Features" title="Why Choose Our" highlight={data.pageTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover-lift group">
                <div className="w-12 h-12 rounded-xl vibrant-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flip Cards */}
      {data.flipCards.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Explore" title={data.pageTitle} highlight="Options" description="Hover or tap cards to see details." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.flipCards.map((card, i) => (
                <FlipCard key={i} {...card} linkTo={data.url} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spec Tabs */}
      {data.specTabs.length > 0 && (
        <section className="py-12 md:py-16 mesh-bg-soft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Specifications" title={data.pageTitle} highlight="Details" />
            <TabPanel tabs={data.specTabs} />
          </div>
        </section>
      )}

      {/* Pricing */}
      {data.pricing.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Pricing" title={data.pageTitle} highlight="Rates" description="Transparent pricing with no hidden charges. Delivery, setup & support included." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {data.pricing.map((p, i) => (
                <div key={i} className={`glass-card rounded-2xl p-6 hover-lift relative ${p.popular ? "ring-2 ring-primary glow-blue" : ""}`}>
                  {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 vibrant-gradient text-white rounded-full text-xs font-bold">Popular</span>}
                  <div className="text-sm text-gray-500 mb-1">{p.size}</div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{p.spec}</div>
                  <div className="text-2xl font-bold text-gradient-vibrant">{p.price}</div>
                  <div className="text-xs text-gray-400 mt-1">per day</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">* Prices may vary based on event type, location, and duration. Contact us for custom packages.</p>
          </div>
        </section>
      )}

      {/* Gallery */}
      {data.gallery.length > 0 && (
        <section className="py-12 md:py-16 mesh-bg-soft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Gallery" title={data.pageTitle} highlight="in Action" />
            <ImageGallery items={data.gallery} showFilters={false} columns={3} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="FAQ" title={data.pageTitle} highlight="Questions" />
            <FAQAccordion items={data.faqs} showCategories={false} showSearch={false} />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Explore More" title="Related" highlight="Services" />
          <div className="flex flex-wrap justify-center gap-3">
            {data.relatedServices.map((s, i) => (
              <Link key={i} to={s.path} className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-full font-semibold text-gray-700 hover:text-primary hover:scale-105 transition-all">
                {s.title} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicePageTemplate;
