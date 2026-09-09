import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Clock, Calendar, User, ArrowLeft, BookOpen, Lightbulb, Phone, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { pageSEO } from "@/config/seo";

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  callout?: { text: string; type?: "tip" | "warning" | "info" };
  links?: { text: string; path: string }[];
}

export interface BlogArticleData {
  seoKey: string;
  url: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  readTime: string;
  heroImage?: string;
  intro: string;
  sections: BlogSection[];
  faqs: FAQItem[];
  relatedArticles: { title: string; path: string }[];
}

const BlogArticleTemplate = ({ data }: { data: BlogArticleData }) => {
  const seo = pageSEO[data.seoKey] || { title: data.title, description: data.description, keywords: "" };
  const faqSchemaItems = data.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url={`https://skyav.in${data.url}`}
        type="article"
        faqSchema={faqSchemaItems}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Blog", path: "/blog" }, { label: data.title, path: data.url }]}
        articleSchema={{ author: data.author, publishDate: data.publishDate }}
      />

      <PageHero
        title="Blog"
        highlight="Guide"
        description={data.title}
        breadcrumbs={[{ label: "Blog", path: "/blog" }, { label: data.title }]}
      />

      {/* Article Meta */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20 mb-4">Article</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">{data.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{data.intro}</p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 glass-card rounded-2xl px-5 py-3 inline-flex">
              <span className="flex items-center gap-2"><User className="h-4 w-4 text-primary" /> {data.author}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {data.publishDate}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {data.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {data.heroImage && (
        <section className="pb-8 md:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden glass-card p-2">
              <img src={data.heroImage} alt={data.title} className="w-full rounded-2xl" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
      )}

      {/* Table of Contents */}
      <section className="py-6 md:py-8 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" /> Table of Contents
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                    <span className="font-bold text-primary flex-shrink-0">{i + 1}.</span>
                    <span>{s.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Article Sections */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
            {data.sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2 my-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.callout && (
                  <div className="my-6 rounded-2xl glass-vibrant border border-primary/20 p-5 md:p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed font-medium">{section.callout.text}</p>
                    </div>
                  </div>
                )}
                {section.links && section.links.length > 0 && (
                  <div className="my-4 flex flex-wrap gap-3">
                    {section.links.map((link, i) => (
                      <Link key={i} to={link.path} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-violet-600 transition-colors">
                        {link.text} <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* In-article lead CTA */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 md:p-10 text-center">
            <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Need Help With Your Event AV?</h3>
            <p className="text-gray-600 mb-5 max-w-xl mx-auto">Speak to our AV experts for a personalised recommendation based on your venue, guest count, and budget.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+918655973366" className="inline-flex items-center justify-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform"><Phone className="h-4 w-4" /> +91 86559 73366</a>
              <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-bold hover:scale-105 transition-transform">Get Instant Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="py-12 md:py-16 mesh-bg-soft">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="FAQ" title="Common" highlight="Questions" />
            <FAQAccordion items={data.faqs} showCategories={false} showSearch={false} />
          </div>
        </section>
      )}

      {/* Related Articles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Keep Reading" title="Related" highlight="Articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.relatedArticles.map((article, i) => (
              <Link key={i} to={article.path} className="glass-card rounded-2xl p-6 hover-lift group block">
                <BookOpen className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-full font-semibold text-gray-700 hover:text-primary hover:scale-105 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default BlogArticleTemplate;
