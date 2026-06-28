import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection = ({ title, description }: CTASectionProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 vibrant-gradient-animated opacity-90" />
      <div className="blob blob-blue w-96 h-96 -top-20 -left-20 opacity-20" />
      <div className="blob blob-pink w-80 h-80 bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title || "Ready to Make Your Event Spectacular?"}
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          {description || "Get a free quote within 30 minutes. Free delivery, setup & technical support across Mumbai."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            Get Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="tel:+918655973366"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-dark text-white rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            <Phone className="h-5 w-5" /> +91 86559 73366
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
