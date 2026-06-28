import { useState, useMemo } from "react";
import { ChevronDown, Search, Phone, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  showSearch?: boolean;
  showCategories?: boolean;
  className?: string;
}

const FAQAccordion = ({
  items,
  showSearch = true,
  showCategories = true,
  className,
}: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchCategory = activeCategory === "All" || item.category === activeCategory;
      const matchSearch =
        !search ||
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [items, activeCategory, search]);

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filtered.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className={cn("max-w-3xl mx-auto", className)}>
        {/* Search */}
        {showSearch && (
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 glass-card rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        )}

        {/* Category Filters */}
        {showCategories && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "vibrant-gradient text-white shadow-lg"
                    : "glass-card text-gray-700 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No questions found. Try a different search.</p>
          ) : (
            filtered.map((faq, index) => (
              <article
                key={index}
                className={cn(
                  "glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl",
                  openIndex === index && "ring-2 ring-primary/30"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-5 md:p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base md:text-lg font-semibold pr-8 text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </article>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-base md:text-lg mb-4 text-gray-700">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+918655973366"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              Call +91 86559 73366
            </a>
            <a
              href="https://wa.me/918655973366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card rounded-full font-semibold hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
