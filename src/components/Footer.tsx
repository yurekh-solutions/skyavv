import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Facebook, Twitter, ArrowRight } from "lucide-react";
import { navGroups } from "@/config/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = navGroups[0].items.slice(0, 8);
  const events = navGroups[1].items.slice(0, 7);
  const locations = navGroups[2].items;
  const company = navGroups[3].items;

  return (
    <footer className="relative bg-gray-900 text-white pt-16 md:pt-20 pb-24 md:pb-12 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 vibrant-gradient-animated" />

      {/* Decorative blobs */}
      <div className="blob blob-blue w-72 h-72 -top-20 left-1/4 opacity-10" />
      <div className="blob blob-violet w-80 h-80 bottom-0 right-1/4 opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
          {/* Brand + Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl vibrant-gradient flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-lg font-bold text-gradient-vibrant">Sky Vision</span>
                <span className="block text-[10px] text-gray-400 -mt-1 font-medium tracking-wide">MULTIMEDIA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mumbai's trusted AV equipment rental partner for 15+ years. LED walls, sound systems, lighting & more.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+918655973366" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" /> +91 86559 73366
              </a>
              <a href="mailto:sky.av.rentals@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors break-all">
                <Mail className="h-4 w-4 flex-shrink-0" /> sky.av.rentals@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" /> Dahisar West, Mumbai 400068
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <a href="https://www.instagram.com/skyav.in/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass-dark flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a href="https://www.facebook.com/skyavin" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass-dark flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="https://twitter.com/skyavin" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass-dark flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav>
            <h4 className="text-base font-bold mb-4 text-gradient-vibrant">Services</h4>
            <ul className="space-y-1.5 text-sm">
              {services.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Events */}
          <nav>
            <h4 className="text-base font-bold mb-4 text-gradient-vibrant">Events</h4>
            <ul className="space-y-1.5 text-sm">
              {events.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations */}
          <nav>
            <h4 className="text-base font-bold mb-4 text-gradient-vibrant">Locations</h4>
            <ul className="space-y-1.5 text-sm">
              {locations.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company + Newsletter */}
          <div>
            <h4 className="text-base font-bold mb-4 text-gradient-vibrant">Company</h4>
            <ul className="space-y-1.5 text-sm mb-6">
              {company.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms</Link></li>
            </ul>
            {/* Newsletter */}
            <div className="glass-dark rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-2">Get event tips & offers</p>
              <div className="flex gap-1">
                <input type="email" placeholder="Email" className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-sm text-white placeholder-gray-500 outline-none border border-white/10 focus:border-primary/50" />
                <button className="w-9 h-9 vibrant-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sky Vision Multimedia. All Rights Reserved.{" "}
            <a href="https://www.yurekh.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Developed by Yurekh Solutions</a>
          </p>
          <p className="text-gray-500 text-xs">
            Serving Mumbai | Navi Mumbai | Thane | Pune | Lonavala | Surat | Goa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
