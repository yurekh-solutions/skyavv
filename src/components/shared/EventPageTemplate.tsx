import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FlipCard from "@/components/shared/FlipCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import type { GalleryItem } from "@/components/shared/ImageGallery";
import ImageGallery from "@/components/shared/ImageGallery";
import { pageSEO } from "@/config/seo";

export interface EventPageData {
  seoKey: string;
  url: string;
  pageTitle: string;
  pageHighlight: string;
  description: string;
  heroImage: string;
  overview: string;
  whatWeProvide: { icon: string; title: string; desc: string }[];
  flipCards: { image: string; title: string; badge?: string; frontDescription: string; backDescription: string; features: string[] }[];
  gallery: GalleryItem[];
  testimonials: { name: string; event: string; text: string; rating: number }[];
  faqs: FAQItem[];
  relatedEvents: { title: string; path: string }[];
}

const EventPageTemplate = ({ data }: { data: EventPageData }) => {
  return (
    <>
      <SEO
        title={(pageSEO[data.seoKey] || { title: data.pageTitle }).title}
        description={(pageSEO[data.seoKey] || { description: data.description }).description}
        keywords={(pageSEO[data.seoKey] || { keywords: "" }).keywords}
        url={`https://skyav.in${data.url}`}
        faqSchema={data.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Events", path: "/events/weddings" }, { label: data.pageTitle, path: data.url }]}
      />

      <PageHero
        title={data.pageTitle}
        highlight={data.pageHighlight}
        description={data.description}
        breadcrumbs={[{ label: "Events", path: "/events/weddings" }, { label: data.pageTitle }]}
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
                {["Included delivery & setup in Mumbai", "Professional on-site technicians", "Premium branded equipment", "Custom packages available"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What We Provide" title={data.pageTitle} highlight="Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whatWeProvide.map((f, i) => (
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
            <SectionHeading badge="Explore" title={data.pageTitle} highlight="Packages" description="Hover or tap cards to see details." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.flipCards.map((card, i) => (
                <FlipCard key={i} {...card} linkTo={data.url} />
              ))}
            </div>
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

      {/* Testimonials */}
      {data.testimonials.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Reviews" title={data.pageTitle} highlight="Testimonials" />
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
        <section className="py-12 md:py-16 mesh-bg-soft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="FAQ" title={data.pageTitle} highlight="Questions" />
            <FAQAccordion items={data.faqs} showCategories={false} showSearch={false} />
          </div>
        </section>
      )}

      {/* Related Events */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Explore More" title="Related" highlight="Events" />
          <div className="flex flex-wrap justify-center gap-3">
            {data.relatedEvents.map((s, i) => (
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

export default EventPageTemplate;
