import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navGroups } from "@/config/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  const topLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", isGroup: true },
    { name: "Events", href: "/events/weddings", isGroup: "Events" },
    { name: "Locations", href: "/locations/mumbai", isGroup: "Locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-strong shadow-lg py-2"
          : "bg-white/70 backdrop-blur-md py-3"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl vibrant-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-bold text-gradient-vibrant">Sky Vision</span>
              <span className="block text-[10px] text-gray-500 -mt-1 font-medium tracking-wide">MULTIMEDIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {topLinks.map((link) => {
              if (link.isGroup) {
                const group = navGroups.find((g) => g.title === (link.isGroup === true ? "Services" : link.isGroup));
                if (!group) return null;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(group.title)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        location.pathname.startsWith(link.href.split("/")[1] === "events" ? "/events" : link.href.split("/")[1] === "locations" ? "/locations" : "/services")
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    {/* Mega Menu */}
                    {openGroup === group.title && (
                      <div className="absolute top-full left-0 mt-1 w-80 glass-strong rounded-2xl shadow-2xl p-3 animate-fade-in z-50">
                        <div className="grid grid-cols-1 gap-0.5 max-h-[400px] overflow-y-auto scrollbar-hide">
                          {group.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors group/item"
                            >
                              <div className="text-sm font-semibold text-gray-800 group-hover/item:text-primary transition-colors">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918655973366"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 vibrant-gradient text-white rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <a
              href="tel:+919920158955"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">99201 58955</span>
            </a>
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-strong rounded-2xl shadow-2xl p-3 animate-fade-in max-h-[75vh] overflow-y-auto">
            <Link
              to="/"
              className="block py-2.5 px-3 text-gray-800 font-semibold hover:text-primary rounded-lg hover:bg-primary/5"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2.5 px-3 text-gray-800 font-semibold hover:text-primary rounded-lg hover:bg-primary/5"
            >
              About Us
            </Link>
            {navGroups.map((group) => (
              <div key={group.title}>
                <button
                  onClick={() => setMobileOpenGroup(mobileOpenGroup === group.title ? null : group.title)}
                  className="flex items-center justify-between w-full py-2.5 px-3 text-gray-800 font-semibold hover:text-primary rounded-lg hover:bg-primary/5"
                >
                  {group.title}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", mobileOpenGroup === group.title && "rotate-180")} />
                </button>
                {mobileOpenGroup === group.title && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-primary/5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/gallery"
              className="block py-2.5 px-3 text-gray-800 font-semibold hover:text-primary rounded-lg hover:bg-primary/5"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block py-2.5 px-3 text-gray-800 font-semibold hover:text-primary rounded-lg hover:bg-primary/5"
            >
              Contact
            </Link>
            <a
              href="tel:+918655973366"
              className="flex items-center justify-center gap-2 mt-3 px-4 py-3 vibrant-gradient text-white rounded-xl font-bold"
            >
              <Phone className="h-4 w-4" />
              Call +91 86559 73366
            </a>
            <a
              href="tel:+919920158955"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl font-bold"
            >
              <Phone className="h-4 w-4" />
              Call +91 99201 58955
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
