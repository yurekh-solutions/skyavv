import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Award,
  Users,
  Calendar,
  Monitor,
  Speaker,
  Lightbulb,
  Camera,
  Sparkles,
  MapPin,
  Play,
  Instagram,
  Quote,
} from "lucide-react";
import SEO from "@/components/SEO";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { pageSEO } from "@/config/seo";
import { initTracking, trackPageView } from "@/lib/tracking";
import { initPerformanceMonitoring } from "@/lib/performance";
import StatsBar from "@/components/shared/StatsBar";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import TabPanel from "@/components/shared/TabPanel";
import type { TabItem } from "@/components/shared/TabPanel";
import FlipCard from "@/components/shared/FlipCard";
import InstagramFeed from "@/components/InstagramFeed";
import ledWallImg from "@/assets/tv3.jpeg";
import projectorImg from "@/assets/projector.jpg";
import soundSystemImg from "@/assets/sound1.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ledWallVideo from "@/assets/ledwall1.mp4";

const Index = () => {
  useEffect(() => {
    initTracking();
    trackPageView(window.location.pathname, document.title);
    initPerformanceMonitoring();
  }, []);

  const events = [
    { title: "Weddings", description: "LED backdrops, concert sound & romantic lighting", image: gallery2, tag: "Most Popular", link: "/events/weddings" },
    { title: "Corporate", description: "Conferences, AGMs & product launches", image: gallery1, tag: "B2B", link: "/events/corporate" },
    { title: "Concerts", description: "Line arrays, moving heads & LED video walls", image: gallery3, tag: "Large Scale", link: "/events/concerts" },
    { title: "Parties", description: "DJ setups, LED dance floors & karaoke", image: gallery6, tag: "Fun", link: "/events/birthday-parties" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "15+ Years Experience", desc: "Mumbai's most trusted AV rental company with 5000+ events powered" },
    { icon: Clock, title: "Same-Day Delivery", desc: "Urgent requirement? We deliver and set up within hours across Mumbai" },
    { icon: Shield, title: "Quality Guaranteed", desc: "Premium equipment with backup units and 24/7 technical support" },
    { icon: Users, title: "Expert Team", desc: "Certified AV technicians who ensure flawless event execution" },
  ];

  const processSteps = [
    { icon: Phone, title: "Contact Us", desc: "Call or WhatsApp us with your event details and requirements" },
    { icon: Zap, title: "Get a Quote", desc: "Receive a personalized quote within 30 minutes" },
    { icon: Calendar, title: "Book & Confirm", desc: "Confirm your booking with 50% advance payment" },
    { icon: CheckCircle2, title: "Relax & Enjoy", desc: "We handle delivery, setup, and support — you enjoy the event" },
  ];

  const galleryItems = [
    { image: gallery1, title: "Tech Summit 2024", category: "Corporate", description: "LED wall & multi-zone audio for 1000+ attendees at BKC" },
    { image: gallery2, title: "Royal Wedding Setup", category: "Wedding", description: "LED backdrop & concert sound at Taj Lands End" },
    { image: gallery3, title: "Bollywood Night Concert", category: "Concert", description: "Line array sound for 5000+ audience" },
    { image: gallery4, title: "School Annual Fest", category: "Education", description: "Complete stage setup at NCPA" },
    { image: gallery5, title: "Luxury Car Launch", category: "Product Launch", description: "Dramatic LED reveal at WTC" },
    { image: gallery6, title: "Celebrity Birthday Bash", category: "Party", description: "DJ setup & LED dance floor at JW Marriott" },
  ];

  const faqs = [
    { question: "What areas do you serve?", answer: "We provide AV equipment rental across Mumbai, Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa with free delivery within Mumbai city limits." },
    { question: "How far in advance should I book?", answer: "We recommend 7-10 days for peak season (Oct-Mar) and 3-5 days for regular bookings. Same-day bookings are available subject to availability." },
    { question: "Do you provide setup and technical support?", answer: "Yes! We provide complete setup, on-site technical support during your event, and breakdown services — all included at no extra cost." },
    { question: "What are your rental rates?", answer: "Rates vary by equipment and duration. LED walls start from Rs. 15,000/day, projectors from Rs. 2,500/day, sound systems from Rs. 5,000/day. Call for a custom quote." },
    { question: "Do you offer package deals?", answer: "Yes! We offer customized packages combining multiple equipment at discounted rates. Contact us with your event details for a personalized package." },
  ];

  const locations = [
    { name: "Mumbai", path: "/locations/mumbai" },
    { name: "Navi Mumbai", path: "/locations/navi-mumbai" },
    { name: "Thane", path: "/locations/thane" },
    { name: "Pune", path: "/locations/pune" },
    { name: "Lonavala", path: "/locations/lonavala" },
    { name: "Surat", path: "/locations/surat" },
    { name: "Goa", path: "/locations/goa" },
  ];

  // Flip card data for tabs section
  const flipCardTabs: TabItem[] = [
    {
      value: "led",
      label: "LED Walls",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FlipCard image={ledWallImg} title="Indoor LED Wall" badge="P2.5" frontDescription="Crystal-clear indoor LED screens for conferences, weddings & exhibitions." backDescription="Fine pixel pitch P2.5 panels deliver stunning clarity at close viewing distances. Perfect for indoor events." features={["P2.5 pixel pitch", "6000+ nits brightness", "Sizes 6ft to 20ft", "Seamless panels"]} linkTo="/services/indoor-led-wall" linkLabel="View Details" />
          <FlipCard image={gallery1} title="Outdoor LED Wall" badge="P3.9" frontDescription="High-brightness outdoor LED walls for concerts, festivals & sports events." backDescription="Weatherproof IP65 panels with 6000+ nits brightness. Visible even in direct sunlight." features={["P3.9 pixel pitch", "IP65 weatherproof", "Sizes up to 40ft", "Wind-rated structure"]} linkTo="/services/outdoor-led-wall" linkLabel="View Details" />
          <FlipCard image={gallery5} title="Mobile LED Wall" badge="Portable" frontDescription="Quick-deploy mobile LED walls for roadshows, activations & pop-ups." backDescription="Self-contained mobile LED systems that can be deployed in under 30 minutes." features={["Quick 30-min setup", "Battery powered option", "Built-in media player", "Transport included"]} linkTo="/services/led-wall-rental" linkLabel="View Details" />
        </div>
      ),
    },
    {
      value: "sound",
      label: "Sound Systems",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FlipCard image={soundSystemImg} title="Concert Sound" badge="JBL/Bose" frontDescription="Line array sound systems for concerts, festivals & large events." backDescription="Professional-grade line arrays delivering crystal-clear sound for audiences of 500–10,000+." features={["JBL & Bose systems", "500W to 50,000W", "Wireless mics included", "Sound engineer on-site"]} linkTo="/services/sound-system-rental" linkLabel="View Details" />
          <FlipCard image={gallery3} title="PA Systems" badge="Speech" frontDescription="Public address systems for conferences, seminars & corporate events." backDescription="Clear, reliable audio for speeches, presentations, and announcements." features={["Wireless handheld mics", "Lapel microphones", "Mixer & stands", "Setup included"]} linkTo="/services/pa-system-rental" linkLabel="View Details" />
          <FlipCard image={gallery6} title="DJ Equipment" badge="Pioneer" frontDescription="Pioneer CDJs, mixers & DJ controllers for parties & clubs." backDescription="Professional DJ gear for weddings, parties, and club events." features={["Pioneer CDJ-3000", "DJM-900NXS2 mixer", "Speakers & headphones", "Lighting add-on"]} linkTo="/services/dj-equipment-rental" linkLabel="View Details" />
        </div>
      ),
    },
    {
      value: "lighting",
      label: "Stage Lighting",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FlipCard image={gallery2} title="Moving Heads" badge="DMX" frontDescription="Intelligent moving head lights for dynamic stage effects." backDescription="Programmable moving head fixtures with gobos, prisms, and color wheels." features={["Beam, spot & wash", "DMX control", "Gobo patterns", "Haze machine add-on"]} linkTo="/services/stage-lighting-rental" linkLabel="View Details" />
          <FlipCard image={gallery4} title="LED Par Cans" badge="Color" frontDescription="RGBW LED par cans for stage wash and ambient lighting." backDescription="Energy-efficient LED par lights with millions of color combinations." features={["RGBW color mixing", "Dimmable", "Stand or truss mount", "DMX programmable"]} linkTo="/services/stage-lighting-rental" linkLabel="View Details" />
          <FlipCard image={gallery5} title="Laser & Effects" badge="Wow Factor" frontDescription="Laser projectors, fog machines & special effects for dramatic impact." backDescription="Create unforgettable moments with lasers, fog, confetti & pyrotechnics." features={["RGB laser projectors", "Fog & haze machines", "Confetti cannons", "Cold pyro available"]} linkTo="/services/stage-lighting-rental" linkLabel="View Details" />
        </div>
      ),
    },
    {
      value: "special",
      label: "Special Services",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FlipCard image={gallery1} title="Live Streaming" badge="4K" frontDescription="Multi-camera live streaming to YouTube, Facebook & Zoom." backDescription="Professional broadcast-quality streaming with multiple camera angles." features={["4K streaming", "Multi-camera setup", "YouTube/Facebook/Zoom", "Dedicated technician"]} linkTo="/services/live-streaming" linkLabel="View Details" />
          <FlipCard image={gallery3} title="Photography & Video" badge="4K" frontDescription="Professional event photography and cinematic videography." backDescription="Capture every moment with our professional photography and videography team." features={["4K cameras", "Drone coverage", "Same-day edits", "Cinematic delivery"]} linkTo="/services/photography-videography" linkLabel="View Details" />
          <FlipCard image={gallery2} title="Karaoke Setup" badge="Fun" frontDescription="Complete karaoke systems with 10,000+ songs for parties & weddings." backDescription="Professional karaoke with wireless mics, speakers, and LED lyrics display." features={["10,000+ Hindi & English songs", "Wireless mics", "LED lyrics screen", "DJ add-on available"]} linkTo="/services/karaoke-rental" linkLabel="View Details" />
        </div>
      ),
    },
  ];

  // Testimonials for marquee
  const testimonials = [
    { name: "Rajesh Kumar", event: "Corporate Conference · BKC", text: "Sky Vision powered our annual conference flawlessly. The LED wall was spectacular and the sound was crystal clear!", rating: 5 },
    { name: "Priya Sharma", event: "Wedding · Taj Lands End", text: "They made our wedding absolutely magical. The LED backdrop was stunning and every guest was impressed!", rating: 5 },
    { name: "Amit Patel", event: "Concert · NSCI Dome", text: "Concert-grade sound and lighting. Our 5000+ audience had an incredible experience. Highly recommended!", rating: 5 },
    { name: "Sneha Desai", event: "Product Launch · WTC", text: "The LED reveal was breathtaking. Sky Vision understood our vision perfectly and executed it beyond expectations.", rating: 5 },
    { name: "Vikram Singh", event: "College Fest · IIT Bombay", text: "Best AV team we've worked with. They handled our 3-day fest with professionalism and energy!", rating: 5 },
    { name: "Meera Joshi", event: "Corporate Offsite · Lonavala", text: "They transported everything from Mumbai and set up flawlessly at our resort. Incredible service!", rating: 5 },
    { name: "Arjun Reddy", event: "Birthday Party · Juhu", text: "They transformed our venue into something out of a dream. The lighting and sound were breathtaking!", rating: 5 },
    { name: "Kavya Nair", event: "Fashion Show · Palladium", text: "Runway lighting and sound were perfect. The models looked stunning under their setup!", rating: 5 },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...testimonials, ...testimonials];

  // SEO keyword services
  const seoServices = [
    { title: "LED Wall Rental Mumbai", desc: "P2.5 & P3.9 LED screen rental for indoor and outdoor events. Sizes from 6ft to 40ft with free delivery and setup across Mumbai, Navi Mumbai, Thane, and Pune.", link: "/services/led-wall-rental" },
    { title: "Projector Rental Mumbai", desc: "HD & 4K projector rental with motorized screens. 3000 to 10000 lumens for conferences, presentations, movie nights, and weddings. Same-day delivery available.", link: "/services/projector-rental" },
    { title: "Sound System Rental Mumbai", desc: "Professional JBL & Bose sound system rental for 50 to 5000 guests. Concert-grade line arrays, wireless microphones, mixers, and PA systems for all event types.", link: "/services/sound-system-rental" },
    { title: "Stage Lighting Rental Mumbai", desc: "LED par cans, moving head lights, spotlights, lasers, and haze machines for concerts, weddings, fashion shows, and corporate events. DMX control included.", link: "/services/stage-lighting-rental" },
    { title: "LED TV Rental Mumbai", desc: "LED TV rental from 32\" to 85\" for exhibitions, product displays, conferences, and parties. Samsung & LG screens with wall mount and stand included.", link: "/services/led-tv-rental" },
    { title: "Live Streaming Services Mumbai", desc: "Professional multi-camera live streaming to YouTube, Facebook, and Zoom. 4K broadcast quality for weddings, conferences, concerts, and product launches.", link: "/services/live-streaming" },
  ];

  return (
    <>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        url="https://skyav.in"
        faqSchema={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        breadcrumbs={[{ label: "Home", path: "/" }]}
      />
      <GoogleAnalytics enabled={false} />

      {/* ===== HERO — Redesigned ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 mesh-bg" />
          <div className="blob blob-blue w-96 h-96 top-10 -left-20 opacity-20" />
          <div className="blob blob-violet w-80 h-80 bottom-10 right-10 opacity-20" />
          <div className="blob blob-pink w-72 h-72 top-1/2 left-1/3 opacity-10" />
          <div className="blob blob-cyan w-64 h-64 top-20 right-1/4 opacity-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 glass-vibrant px-4 py-2 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Mumbai's #1 AV Rental Company</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900">
                Spectacular Events
                <br />
                Start with{" "}
                <span className="text-primary">Premium AV</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                LED walls, concert-grade sound, stage lighting & complete AV rentals across Mumbai, Navi Mumbai, Thane, Pune & Goa. 5000+ events powered with flawless execution and same-day setup.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 vibrant-gradient text-white rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="tel:+918655973366" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-strong text-gray-800 rounded-full font-bold text-lg border border-primary/20 hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5 text-primary" /> +91 86559 73366
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-sm text-gray-600 font-medium">4.8/5 · 500+ Happy Clients</span>
              </div>
            </div>

            {/* Right: Video showcase with floating elements */}
            <div className="relative animate-scale-in animate-delay-300">
              <div className="absolute -inset-4 vibrant-gradient-animated rounded-[2.5rem] opacity-20 blur-2xl" />
              <div className="relative glass-card rounded-3xl p-3 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <video src={ledWallVideo} autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 glass-dark rounded-full">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">LIVE DEMO</span>
                  </div>
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 glass-dark rounded-full">
                    <Play className="h-3 w-3 text-white fill-white" />
                    <span className="text-xs font-semibold text-white">LED Wall</span>
                  </div>
                </div>
              </div>

              {/* Floating stat badges */}
              <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-2xl md:text-3xl font-bold text-gradient-vibrant">5000+</div>
                <div className="text-xs text-gray-500 font-medium">Events Powered</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl p-4 shadow-xl animate-float-slow">
                <div className="text-2xl md:text-3xl font-bold text-gradient-vibrant">4.8★</div>
                <div className="text-xs text-gray-500 font-medium">Avg Rating</div>
              </div>
              <div className="absolute top-1/2 -right-8 glass-strong rounded-2xl p-3 shadow-xl animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg vibrant-gradient flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Same-Day</div>
                    <div className="text-xs text-gray-500">Setup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats Strip ===== */}
      <section className="py-8 md:py-12 relative -mt-4 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      {/* ===== Services — Bento Grid ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What We Offer" title="Premium AV" highlight="Services" description="From LED walls to concert sound — everything you need for a spectacular event." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            <Link to="/services/led-wall-rental" className="group md:col-span-2 relative h-80 md:h-96 rounded-2xl overflow-hidden hover-lift">
              <img src={ledWallImg} alt="LED Wall Rental Mumbai" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 vibrant-gradient text-white rounded-full text-xs font-bold shadow-lg">Popular</span>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2"><Monitor className="h-5 w-5 text-white" /><h3 className="text-2xl font-bold text-white">LED Wall Rental</h3></div>
                <p className="text-white/80 mb-3 max-w-md">P2.5 & P3.9 LED screens with 6000+ nits brightness. Indoor & outdoor, sizes from 6ft to 40ft.</p>
                <span className="inline-flex items-center gap-1 text-white font-semibold group-hover:gap-2 transition-all">Learn More <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
            <Link to="/services/sound-system-rental" className="group relative h-80 md:h-96 rounded-2xl overflow-hidden hover-lift">
              <img src={soundSystemImg} alt="Sound System Rental Mumbai" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-cyan-500 text-white rounded-full text-xs font-bold shadow-lg">Quality</span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1"><Speaker className="h-5 w-5 text-white" /><h3 className="text-xl font-bold text-white">Sound Systems</h3></div>
                <p className="text-white/70 text-sm">JBL & Bose for 50-5000 guests</p>
              </div>
            </Link>
            <Link to="/services/projector-rental" className="group relative h-72 rounded-2xl overflow-hidden hover-lift">
              <img src={projectorImg} alt="Projector Rental Mumbai" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-violet-500 text-white rounded-full text-xs font-bold shadow-lg">Best Seller</span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1"><Monitor className="h-5 w-5 text-white" /><h3 className="text-lg font-bold text-white">Projectors</h3></div>
                <p className="text-white/70 text-sm">HD & 4K with screens</p>
              </div>
            </Link>
            <Link to="/services/stage-lighting-rental" className="group relative h-72 rounded-2xl overflow-hidden hover-lift">
              <img src={gallery2} alt="Stage Lighting Rental Mumbai" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white rounded-full text-xs font-bold shadow-lg">Trending</span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1"><Lightbulb className="h-5 w-5 text-white" /><h3 className="text-lg font-bold text-white">Stage Lighting</h3></div>
                <p className="text-white/70 text-sm">Moving heads, lasers & haze</p>
              </div>
            </Link>
            <Link to="/services/photography-videography" className="group relative h-72 rounded-2xl overflow-hidden hover-lift">
              <img src={gallery3} alt="Photography Videography Mumbai" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold shadow-lg">Complete</span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1"><Camera className="h-5 w-5 text-white" /><h3 className="text-lg font-bold text-white">Photo & Video</h3></div>
                <p className="text-white/70 text-sm">4K cameras & cinematic editing</p>
              </div>
            </Link>
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform">View All Services <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      {/* ===== NEW: Interactive Tabs + Flip Cards ===== */}
      <section className="py-16 md:py-24 mesh-bg-soft relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Explore Equipment" title="Interactive" highlight="Equipment Showcase" description="Click any card to flip and discover features. Browse categories using the tabs above." />
          <TabPanel tabs={flipCardTabs} />
        </div>
      </section>

      {/* ===== Events — Card Grid ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Events We Power" title="Every Event," highlight="Elevated" description="Whatever your event type, we have the AV solutions to make it spectacular." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {events.map((event, i) => (
              <Link key={i} to={event.link} className="group relative h-80 rounded-2xl overflow-hidden hover-lift">
                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-2.5 py-0.5 glass-dark rounded-full text-xs text-white font-semibold mb-2">{event.tag}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-white/70">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us + Process — Split Layout ===== */}
      <section className="py-16 md:py-24 mesh-bg-soft relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="mb-4"><span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20">Why Sky Vision</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Customers <span className="text-gradient-vibrant">Choose Us</span></h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="glass-card rounded-2xl p-5 hover-lift group">
                      <div className="w-12 h-12 rounded-xl vibrant-gradient flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"><Icon className="h-6 w-6 text-white" /></div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="mb-4"><span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20">How It Works</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Simple <span className="text-gradient-vibrant">4-Step Process</span></h2>
              <div className="space-y-4">
                {processSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 group glass-card rounded-2xl p-4 hover-lift">
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl glass-strong border-2 border-primary/20 group-hover:border-primary transition-colors flex items-center justify-center"><Icon className="h-6 w-6 text-primary" /></div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full vibrant-gradient flex items-center justify-center text-white text-xs font-bold shadow-lg">{i + 1}</div>
                      </div>
                      <div className="pt-1.5">
                        <h3 className="font-bold text-gray-900 mb-0.5">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Video Spotlight ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 vibrant-gradient-animated rounded-3xl opacity-15 blur-2xl" />
              <div className="relative glass-card rounded-3xl p-2 shadow-2xl">
                <video src={ledWallVideo} autoPlay loop muted playsInline className="w-full rounded-2xl aspect-video object-cover" />
              </div>
            </div>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 glass-vibrant px-4 py-2 rounded-full border border-primary/20"><Sparkles className="h-4 w-4 text-primary" /><span className="text-sm font-semibold text-gray-700">See It In Action</span></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vibrant LED Wall <span className="text-gradient-vibrant">Technology</span></h2>
              <p className="text-gray-600 leading-relaxed text-lg">Our P2.5 and P3.9 LED walls deliver stunning 6000+ nit brightness with seamless panel integration. Whether indoor conferences or outdoor concerts, your content looks spectacular from every angle.</p>
              <ul className="space-y-3">
                {["P2.5 fine pixel pitch for crystal-clear images", "6000+ nits for outdoor sunlight visibility", "Seamless modular panels up to 40ft wide", "Real-time content management system"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
              <Link to="/services/led-wall-rental" className="inline-flex items-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform">Explore LED Wall Options <ArrowRight className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Gallery — Masonry ===== */}
      <section className="py-16 md:py-24 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Portfolio" title="Events We've" highlight="Powered" description="From intimate gatherings to grand productions — witness the magic of premium AV in action." />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 max-w-6xl mx-auto [&>*]:mb-4 md:[&>*]:mb-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="break-inside-avoid group relative rounded-2xl overflow-hidden hover-lift">
                <img src={item.image} alt={item.title} className="w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-2.5 py-0.5 glass-dark rounded-full text-xs text-white font-semibold mb-1.5">{item.category}</span>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10"><Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform">View Full Gallery <ArrowRight className="h-5 w-5" /></Link></div>
        </div>
      </section>

      {/* ===== NEW: Testimonials Marquee (Forward + Reverse) ===== */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Client Love" title="What Our" highlight="Clients Say" description="500+ happy clients and a 4.8-star rating across Mumbai, Pune, and Goa." />
        </div>

        {/* Forward marquee row */}
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {marqueeItems.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-80 md:w-96 mx-3">
                <div className="glass-card rounded-2xl p-6 h-full hover-lift">
                  <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full vibrant-gradient flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.event}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reverse marquee row */}
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-marquee-reverse" style={{ width: "max-content" }}>
            {[...marqueeItems].reverse().map((t, i) => (
              <div key={i} className="flex-shrink-0 w-80 md:w-96 mx-3">
                <div className="glass-card rounded-2xl p-6 h-full hover-lift">
                  <div className="flex gap-1 mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full vibrant-gradient flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.event}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8"><Link to="/testimonials" className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform">Read More Reviews <ArrowRight className="h-5 w-5" /></Link></div>
      </section>

      {/* ===== NEW: Instagram Section ===== */}
      <InstagramFeed />

      {/* ===== NEW: SEO Keyword-Rich Services Section ===== */}
      <section className="py-16 md:py-24 mesh-bg-soft relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="AV Equipment Rental" title="Complete" highlight="AV Solutions" description="Mumbai's most comprehensive AV equipment rental service. Free delivery, professional setup, and 24/7 technical support." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {seoServices.map((s, i) => (
              <Link key={i} to={s.link} className="glass-card rounded-2xl p-6 hover-lift group block">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Service Areas Strip ===== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Serving Maharashtra & Beyond</h3>
                <p className="text-sm text-gray-600">Free delivery across Mumbai. Professional setup at all locations.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {locations.map((loc) => (
                  <Link key={loc.path} to={loc.path} className="inline-flex items-center gap-1.5 px-4 py-2 glass-vibrant rounded-full text-sm font-semibold text-gray-700 hover:text-primary hover:scale-105 transition-all"><MapPin className="h-3.5 w-3.5 text-primary" /> {loc.name}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection />
    </>
  );
};

export default Index;
