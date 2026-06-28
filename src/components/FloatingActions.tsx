import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const phoneNumber = "+918655973366";

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Mobile: Bottom fixed bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="glass-strong border-t border-white/30 px-4 py-3">
          <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
            <a
              href="https://wa.me/918655973366?text=Hi%2C%20I%27m%20interested%20in%20your%20AV%20equipment%20rental%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              aria-label="Contact on WhatsApp"
            >
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] active:scale-95 transition-all">
                <MessageCircle className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">WhatsApp</span>
              </div>
            </a>
            <a href={`tel:${phoneNumber}`} className="flex-1" aria-label="Call now">
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl vibrant-gradient active:scale-95 transition-all">
                <Phone className="h-5 w-5 text-white animate-pulse" />
                <span className="text-sm font-semibold text-white">Call Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: Floating buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href="https://wa.me/918655973366?text=Hi%2C%20I%27m%20interested%20in%20your%20AV%20equipment%20rental%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="Contact on WhatsApp"
        >
          <div className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center cursor-pointer group-hover:scale-110 animate-float shadow-2xl transition-all">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 glass-dark text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
        <a href={`tel:${phoneNumber}`} className="group relative" aria-label="Call now">
          <div className="h-16 w-16 rounded-full vibrant-gradient flex items-center justify-center cursor-pointer group-hover:scale-110 animate-float shadow-2xl transition-all relative" style={{ animationDelay: "150ms" }}>
            <Phone className="h-7 w-7 text-white" />
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
          </div>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 glass-dark text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call: {phoneNumber}
          </span>
        </a>
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="h-16 w-16 rounded-full glass-strong border border-white/30 hover:scale-110 transition-all animate-fade-in flex items-center justify-center cursor-pointer group relative"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-7 w-7 text-primary" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 glass-dark text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Back to top
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingActions;
