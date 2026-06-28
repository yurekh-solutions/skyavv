import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { blogArticles } from "./blogData";

export default function Blog() {
  return (
    <>
      <SEO
        title="blog"
        description="blog"
        keywords="blog"
        url="https://skyav.in/blog"
      />

      <PageHero
        title="AV Equipment Rental"
        highlight="Blog & Guides"
        description="Expert guides, tips, and insights on LED wall rental, projector selection, sound system setup, event AV planning, and pricing from Mumbai's trusted AV rental company."
        breadcrumbs={[{ label: "Blog" }]}
      />

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

      <CTASection />
    </>
  );
}
