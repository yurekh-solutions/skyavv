// SEO Configuration for Sky Vision Multimedia
export const seoConfig = {
  siteName: "Sky Vision Multimedia",
  siteUrl: "https://skyav.in",
  defaultTitle: "Sky Vision Multimedia - Professional AV Equipment Rental in Mumbai",
  defaultDescription: "Premium Projector, LED Wall, Sound System & AV Equipment Rental in Mumbai. 25+ years experience. Serving Mumbai, Navi Mumbai, Thane, Pune. Call +91 86559 73366 / +91 99201 58955",
  defaultKeywords: "projector rental mumbai, LED wall rental, sound system rental, karaoke rental mumbai, AV equipment rental, event equipment rental mumbai, corporate AV rental",
  twitterHandle: "@skyavin",
  instagramHandle: "@skyav.in",
  ogType: "website",
  ogImage: "/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  organization: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sky Vision Multimedia",
    "url": "https://skyav.in",
    "logo": "https://skyav.in/logo.png",
    "image": "https://skyav.in/og-image.jpg",
    "description": "Audio-Video Equipment Rental Company in Mumbai",
    "telephone": ["+918655973366", "+919920158955"],
    "email": "sky.av.rentals@gmail.com",
    "priceRange": "$$",
    "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Lonavala", "Surat", "Goa"],
    "sameAs": ["https://www.instagram.com/skyav.in/", "https://twitter.com/skyavin", "https://www.facebook.com/skyavin"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road",
      "addressLocality": "Dahisar West",
      "addressRegion": "Mumbai",
      "postalCode": "400068",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 19.2544, "longitude": 72.8622 },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "150" },
    "contactPoint": { "@type": "ContactPoint", "telephone": ["+918655973366", "+919920158955"], "contactType": "Customer Service", "areaServed": ["IN"], "availableLanguage": ["English", "Hindi", "Marathi"] }
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://skyav.in/#organization",
    "name": "Sky Vision Multimedia",
    "image": "https://skyav.in/og-image.jpg",
    "address": { "@type": "PostalAddress", "streetAddress": "Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road", "addressLocality": "Dahisar West", "addressRegion": "Mumbai", "postalCode": "400068", "addressCountry": "IN" },
    "geo": { "@type": "GeoCoordinates", "latitude": 19.2544, "longitude": 72.8622 },
    "url": "https://skyav.in",
    "telephone": ["+918655973366", "+919920158955"],
    "email": "sky.av.rentals@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "09:00", "closes": "21:00" }]
  }
};

// Page-specific SEO data for all 52 routes
export const pageSEO: Record<string, { title: string; description: string; keywords: string }> = {
  // Core pages
  home: {
    title: "AV Equipment Rental Mumbai | LED Wall, Projector, Sound System | Sky Vision",
    description: "Mumbai's #1 AV equipment rental company. LED wall rental, projector rental, sound system rental, stage lighting & more. 5 Lakh+ events powered. Free delivery & setup. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV equipment rental Mumbai, LED wall rental Mumbai, projector rental Mumbai, sound system rental, stage lighting rental, event equipment rental, corporate AV rental, wedding AV Mumbai"
  },
  about: {
    title: "About Sky Vision Multimedia | 25+ Years AV Rental Expertise in Mumbai",
    description: "Learn about Sky Vision Multimedia — Mumbai's trusted AV equipment rental company with 25+ years experience. 5 Lakh+ events powered, 5000+ happy clients, 4.8-star rating. Expert team & premium equipment.",
    keywords: "about sky vision, AV rental company Mumbai, event technology Mumbai, AV equipment provider, multimedia company Mumbai"
  },
  contact: {
    title: "Contact Sky Vision Multimedia | Get Instant AV Rental Quote",
    description: "Contact Sky Vision Multimedia for AV equipment rental in Mumbai. Call +91 86559 73366 / +91 99201 58955 or email sky.av.rentals@gmail.com. Free quotes, same-day delivery across Mumbai, Navi Mumbai, Thane, Pune.",
    keywords: "contact AV rental Mumbai, get quote, AV rental enquiry, book LED wall, projector rental contact, sound system booking Mumbai"
  },
  quote: {
    title: "Get a Free AV Equipment Rental Quote | Sky Vision Multimedia",
    description: "Request a free, no-obligation quote for LED wall, projector, sound system, and AV equipment rental in Mumbai. Fast response, competitive pricing, same-day delivery available.",
    keywords: "AV rental quote Mumbai, LED wall quote, projector rental price, sound system rental cost, event equipment quote"
  },
  faq: {
    title: "FAQ - AV Equipment Rental Questions Answered | Sky Vision Mumbai",
    description: "Find answers to common questions about AV equipment rental in Mumbai. LED wall rental, projector hire, sound system booking, delivery, setup, pricing, cancellation policy and more.",
    keywords: "AV rental FAQ, LED wall rental questions, projector hire FAQ, sound system rental guide, event equipment FAQ Mumbai"
  },
  gallery: {
    title: "Event Gallery | AV Setup Photos & Videos | Sky Vision Mumbai",
    description: "Browse our portfolio of 5 Lakh+ events — weddings, corporate events, concerts, exhibitions. See LED walls, sound systems, and lighting setups in action across Mumbai, Pune, Goa.",
    keywords: "event gallery Mumbai, AV setup photos, LED wall photos, event portfolio, wedding AV photos, corporate event gallery"
  },
  videos: {
    title: "Video Gallery | AV Equipment in Action | Sky Vision Mumbai",
    description: "Watch our AV equipment in action — LED wall demos, sound system setups, concert footage, wedding lighting, and corporate event highlights across Mumbai.",
    keywords: "AV equipment videos Mumbai, LED wall video, sound system demo, event video gallery, concert footage Mumbai"
  },
  testimonials: {
    title: "Client Testimonials & Reviews | 4.8★ Rating | Sky Vision Mumbai",
    description: "Read genuine client reviews and testimonials for Sky Vision Multimedia. 150+ Google reviews, 4.8-star rating. Trusted by 500+ clients for AV equipment rental in Mumbai.",
    keywords: "AV rental reviews Mumbai, client testimonials, event equipment reviews, LED wall rental feedback, Sky Vision reviews"
  },
  blog: {
    title: "AV Equipment Rental Blog | Guides & Tips | Sky Vision Mumbai",
    description: "Expert guides on LED wall rental, projector selection, sound system setup, event AV planning, and pricing. Learn how to choose the right AV equipment for your event in Mumbai.",
    keywords: "AV rental blog, LED wall guide, projector tips, sound system setup guide, event AV planning, equipment rental tips Mumbai"
  },
  careers: {
    title: "Careers at Sky Vision Multimedia | Join Mumbai's AV Experts",
    description: "Join Sky Vision Multimedia — Mumbai's leading AV equipment rental company. Explore career opportunities in event technology, AV engineering, sales, and operations.",
    keywords: "AV jobs Mumbai, event technology careers, AV engineer jobs, sound technician jobs Mumbai, Sky Vision careers"
  },
  "privacy-policy": {
    title: "Privacy Policy | Sky Vision Multimedia",
    description: "Read our privacy policy. We protect your personal information when you use our AV equipment rental services in Mumbai.",
    keywords: "privacy policy, data protection, AV rental privacy, Sky Vision privacy"
  },
  terms: {
    title: "Terms & Conditions | Sky Vision Multimedia",
    description: "Terms and conditions for AV equipment rental services from Sky Vision Multimedia in Mumbai.",
    keywords: "terms and conditions, AV rental terms, equipment rental policy, Sky Vision terms"
  },

  // Service pages
  services: {
    title: "AV Equipment Rental Services Mumbai | Complete AV Solutions",
    description: "Complete AV equipment rental services in Mumbai — LED walls, projectors, sound systems, stage lighting, photography, karaoke, DJ equipment, live streaming & more. Free delivery & setup.",
    keywords: "AV services Mumbai, LED wall rental services, projector rental, sound system rental, stage lighting, event AV services, corporate AV solutions"
  },
  "services/led-wall-rental": {
    title: "LED Wall Rental Mumbai | Indoor & Outdoor LED Screens | Sky Vision",
    description: "Premium LED wall rental in Mumbai. P2.5 & P3.9 LED screens for indoor and outdoor events. High brightness, seamless displays, free setup. Sizes from 6ft to 20ft. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "LED wall rental Mumbai, LED screen rental, P2.5 LED wall, P3.9 LED wall, indoor LED display, outdoor LED screen, LED video wall hire"
  },
  "services/indoor-led-wall": {
    title: "Indoor LED Wall Rental Mumbai | High-Resolution LED Displays",
    description: "Indoor LED wall rental in Mumbai with P1.5 to P3.9 pixel pitch. Crystal-clear displays for conferences, weddings, exhibitions. High resolution, seamless panels, expert setup. Call now.",
    keywords: "indoor LED wall Mumbai, indoor LED display rental, high resolution LED screen, P1.5 LED, P2.5 indoor LED, conference LED wall, exhibition LED display"
  },
  "services/outdoor-led-wall": {
    title: "Outdoor LED Wall Rental Mumbai | Weatherproof LED Screens 6000 Nits",
    description: "Outdoor LED wall rental in Mumbai. 6000+ nits brightness, IP65 weatherproof, for concerts, festivals, sports. Sizes up to 40ft. Free delivery & setup across Maharashtra.",
    keywords: "outdoor LED wall Mumbai, weatherproof LED screen, high brightness LED, concert LED wall, festival LED display, outdoor video wall rental"
  },
  "services/projector-rental": {
    title: "Projector Rental Mumbai | HD & 4K Projectors with Screens | Sky Vision",
    description: "Projector rental in Mumbai — 3000 to 10000 lumens, HD & 4K, with motorized screens. Perfect for conferences, presentations, movie nights, weddings. Same-day delivery available.",
    keywords: "projector rental Mumbai, HD projector hire, 4K projector rental, projector with screen, presentation projector, wedding projector, conference projector rental"
  },
  "services/led-tv-rental": {
    title: "LED TV Rental Mumbai | Large Screen TVs for Events | Sky Vision",
    description: "LED TV rental in Mumbai — 32\" to 85\" screens from Samsung, LG. Perfect for exhibitions, product displays, conferences, parties. Wall mount & stand included. Same-day delivery.",
    keywords: "LED TV rental Mumbai, large screen TV hire, TV on rent, Samsung TV rental, exhibition TV, display screen rental, 85 inch TV rental"
  },
  "services/sound-system-rental": {
    title: "Sound System Rental Mumbai | Concert-Grade Audio | Sky Vision",
    description: "Professional sound system rental in Mumbai. JBL, Bose, Yamaha speakers, wireless mics, mixers, line arrays. For weddings, concerts, corporate events. Crystal-clear sound. Free setup.",
    keywords: "sound system rental Mumbai, PA system hire, speaker rental, JBL speakers, wireless microphone rental, line array rental, concert sound system, wedding sound system"
  },
  "services/stage-lighting-rental": {
    title: "Stage Lighting Rental Mumbai | Professional Event Lighting | Sky Vision",
    description: "Stage lighting rental in Mumbai — LED par cans, moving heads, spotlights, wash lights, lasers, haze machines. For concerts, weddings, fashion shows, theatre. DMX control included.",
    keywords: "stage lighting rental Mumbai, event lighting hire, LED par cans, moving head lights, spotlight rental, laser lights, DJ lighting, concert lighting Mumbai"
  },
  "services/photography-videography": {
    title: "Photography & Videography Mumbai | Event Coverage | Sky Vision",
    description: "Professional photography & videography services in Mumbai. Wedding photography, corporate event coverage, product launches, concerts. 4K cameras, drones, cinematic editing. Book now.",
    keywords: "event photography Mumbai, wedding videography, corporate event photography, drone photography, cinematic video, product launch photography, concert filming"
  },
  "services/karaoke-rental": {
    title: "Karaoke Rental Mumbai | Complete Karaoke Setup | Sky Vision",
    description: "Karaoke machine rental in Mumbai — professional karaoke systems with 10,000+ songs, wireless mics, speakers, LED screen lyrics display. Perfect for parties, weddings, corporate events.",
    keywords: "karaoke rental Mumbai, karaoke machine hire, karaoke system rental, party karaoke, wedding karaoke, karaoke setup with screen, Hindi karaoke"
  },
  "services/pa-system-rental": {
    title: "PA System Rental Mumbai | Public Address Systems | Sky Vision",
    description: "PA system rental in Mumbai for conferences, seminars, corporate meetings, public events. Wireless mics, speakers, mixers, stands. Clear, reliable audio. Free delivery & setup.",
    keywords: "PA system rental Mumbai, public address system, conference audio, seminar sound system, meeting microphone rental, corporate PA system"
  },
  "services/dj-equipment-rental": {
    title: "DJ Equipment Rental Mumbai | Turntables, Mixers, Controllers | Sky Vision",
    description: "DJ equipment rental in Mumbai — Pioneer CDJs, DJ mixers, controllers, speakers, headphones, lights. For clubs, parties, weddings, corporate events. Professional-grade gear.",
    keywords: "DJ equipment rental Mumbai, Pioneer CDJ rental, DJ mixer hire, DJ controller rental, turntable rental, DJ speakers, party DJ equipment"
  },
  "services/live-streaming": {
    title: "Live Streaming Services Mumbai | Event Broadcasting | Sky Vision",
    description: "Professional live streaming services in Mumbai. Multi-camera setup, 4K streaming to YouTube, Facebook, Zoom. For weddings, conferences, concerts, product launches. Expert technicians.",
    keywords: "live streaming Mumbai, event streaming services, wedding live streaming, conference streaming, YouTube live, multi-camera streaming, Zoom event streaming"
  },
  "services/conference-setup": {
    title: "Conference AV Setup Mumbai | Complete Conference Solutions | Sky Vision",
    description: "Complete conference AV setup in Mumbai — LED walls, projectors, sound systems, microphones, lighting, live streaming. Full-service conference audio-visual solutions. Book now.",
    keywords: "conference AV setup Mumbai, conference audio visual, meeting room AV, corporate conference equipment, seminar AV rental, event production Mumbai"
  },
  "services/wedding-av": {
    title: "Wedding AV Services Mumbai | Complete Wedding Audio-Visual | Sky Vision",
    description: "Complete wedding AV services in Mumbai — LED backdrops, sound systems, stage lighting, projectors, live streaming, photography. Make your wedding unforgettable. Custom packages available.",
    keywords: "wedding AV Mumbai, wedding sound system, wedding LED wall, wedding lighting, wedding projector, wedding live streaming, wedding audio visual services"
  },

  // Event pages
  "events/weddings": {
    title: "Wedding AV Rental Mumbai | LED Wall, Sound, Lighting for Weddings",
    description: "Complete wedding AV rental in Mumbai — LED backdrop walls, concert-grade sound, romantic lighting, projectors, live streaming. Make your wedding magical. Custom packages from Rs. 15,000.",
    keywords: "wedding AV rental Mumbai, wedding LED wall, wedding sound system, wedding lighting Mumbai, wedding projector, sangeet AV, reception sound system"
  },
  "events/corporate": {
    title: "Corporate Event AV Rental Mumbai | Conference & Meeting Solutions",
    description: "Corporate event AV rental in Mumbai — LED walls, projectors, sound systems, microphones, lighting, live streaming. For AGMs, product launches, team building, annual days. Expert setup.",
    keywords: "corporate event AV Mumbai, corporate AV rental, conference equipment, meeting room AV, corporate event production, annual day AV, AGM audio visual"
  },
  "events/conferences": {
    title: "Conference AV Rental Mumbai | Seminar & Convention AV Solutions",
    description: "Conference AV rental in Mumbai — LED walls, projectors, wireless mics, PA systems, stage lighting, live streaming. For seminars, conventions, summits, workshops. Full-service setup.",
    keywords: "conference AV rental Mumbai, seminar AV, convention audio visual, summit equipment, workshop AV, conference sound system, conference projector"
  },
  "events/concerts": {
    title: "Concert AV Rental Mumbai | Concert-Grade Sound & Lighting | Sky Vision",
    description: "Concert AV rental in Mumbai — line array sound systems, stage lighting, LED walls, lasers, haze machines. For live music, Bollywood nights, DJ events. Powering 1000+ concerts.",
    keywords: "concert AV rental Mumbai, concert sound system, line array rental, concert lighting, concert LED wall, live music AV, Bollywood night sound, DJ event equipment"
  },
  "events/exhibitions": {
    title: "Exhibition AV Rental Mumbai | Trade Show Booth Equipment | Sky Vision",
    description: "Exhibition AV rental in Mumbai — LED displays, TVs, sound systems, lighting for trade show booths. Eye-catching displays that attract footfall. BKC, Nesco, WTC exhibition support.",
    keywords: "exhibition AV rental Mumbai, trade show booth AV, exhibition LED display, trade fair equipment, BKC exhibition, Nesco trade show AV, booth sound system"
  },
  "events/birthday-parties": {
    title: "Birthday Party AV Rental Mumbai | Sound, Lighting, Karaoke | Sky Vision",
    description: "Birthday party AV rental in Mumbai — sound systems, DJ lighting, LED dance floors, karaoke, fog machines. For kids & adults birthdays. Same-day delivery. Packages from Rs. 5,000.",
    keywords: "birthday party AV Mumbai, birthday sound system, party lighting, LED dance floor, birthday karaoke, fog machine rental, kids party sound, party DJ"
  },
  "events/product-launches": {
    title: "Product Launch AV Rental Mumbai | Dramatic Reveal Setups | Sky Vision",
    description: "Product launch AV rental in Mumbai — LED wall reveals, projection mapping, precision lighting, immersive sound, live streaming. Make your product launch unforgettable. Expert production.",
    keywords: "product launch AV Mumbai, product reveal LED wall, projection mapping, launch event sound, product launch lighting, brand launch AV, reveal setup"
  },
  "events/college-events": {
    title: "College Event AV Rental Mumbai | Campus Fest & Cultural AV | Sky Vision",
    description: "College event AV rental in Mumbai — sound systems, stage lighting, LED walls, DJ equipment for college fests, cultural events, freshers party, farewell. Student-friendly pricing.",
    keywords: "college event AV Mumbai, college fest sound system, campus event lighting, cultural fest AV, freshers party sound, farewell event, college DJ equipment"
  },
  "events/cultural-events": {
    title: "Cultural Event AV Rental Mumbai | Festival & Community AV | Sky Vision",
    description: "Cultural event AV rental in Mumbai — sound systems, stage lighting, LED walls, projectors for festivals, community events, religious functions, cultural programs. Reliable setup.",
    keywords: "cultural event AV Mumbai, festival sound system, community event AV, religious function sound, cultural program lighting, Ganesh festival AV, Navratri sound system"
  },
  "events/fashion-shows": {
    title: "Fashion Show AV Rental Mumbai | Runway Lighting & Sound | Sky Vision",
    description: "Fashion show AV rental in Mumbai — runway lighting, LED walls, sound systems, spotlights, haze machines. Professional runway production for designers & brands. Expert technicians.",
    keywords: "fashion show AV Mumbai, runway lighting, fashion show sound, ramp walk lighting, fashion event LED wall, runway sound system, fashion production"
  },
  "events/award-functions": {
    title: "Award Function AV Rental Mumbai | Gala Ceremony Solutions | Sky Vision",
    description: "Award function AV rental in Mumbai — LED walls, sound systems, stage lighting, microphones, live streaming. Professional gala ceremony production. Corporate & industry awards.",
    keywords: "award function AV Mumbai, award ceremony sound, gala event lighting, awards LED wall, ceremony AV, corporate awards production, gala dinner AV"
  },
  "events/music-festivals": {
    title: "Music Festival AV Rental Mumbai | Festival-Scale Production | Sky Vision",
    description: "Music festival AV rental in Mumbai — large-format LED walls, line array sound, stage lighting, pyrotechnics, live streaming. Festival-scale production for 10,000+ audiences.",
    keywords: "music festival AV Mumbai, festival sound system, festival LED wall, large format sound, outdoor festival lighting, festival production, music event equipment"
  },
  "events/private-parties": {
    title: "Private Party AV Rental Mumbai | Intimate Gathering Sound & Lighting",
    description: "Private party AV rental in Mumbai — sound systems, party lighting, karaoke, fog machines, LED dance floors. For house parties, terrace parties, anniversaries. Quick setup.",
    keywords: "private party AV Mumbai, house party sound, terrace party lighting, party sound system, anniversary AV, private event sound, party DJ equipment"
  },

  // Location pages
  "locations/mumbai": {
    title: "AV Equipment Rental Mumbai | LED Wall, Sound, Projector | Sky Vision",
    description: "AV equipment rental in Mumbai — LED walls, projectors, sound systems, lighting across all Mumbai areas. Andheri, Bandra, BKC, Juhu, South Mumbai, Dahisar. Free delivery. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Mumbai, LED wall rental Mumbai, projector rental Mumbai, sound system Mumbai, event equipment Mumbai, AV hire Andheri, Bandra AV rental, BKC event equipment"
  },
  "locations/navi-mumbai": {
    title: "AV Equipment Rental Navi Mumbai | LED Wall, Sound, Projector",
    description: "AV equipment rental in Navi Mumbai — Vashi, Nerul, Belapur, Kharghar, Panvel. LED walls, sound systems, projectors, lighting. Free delivery & setup. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Navi Mumbai, LED wall Vashi, sound system Nerul, projector Belapur, event equipment Kharghar, Panvel AV rental, Navi Mumbai event equipment"
  },
  "locations/thane": {
    title: "AV Equipment Rental Thane | LED Wall, Sound, Projector | Sky Vision",
    description: "AV equipment rental in Thane — LED walls, projectors, sound systems, stage lighting. Covering Thane West, East, Ghodbunder, Majiwada, Kolshet. Free delivery. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Thane, LED wall Thane, sound system Thane, projector Thane, event equipment Thane, Thane West AV, Majiwada event equipment"
  },
  "locations/pune": {
    title: "AV Equipment Rental Pune | LED Wall, Sound, Projector | Sky Vision",
    description: "AV equipment rental in Pune — LED walls, sound systems, projectors, lighting. Covering Hinjewadi, Koregaon Park, Kharadi, Baner, Viman Nagar. Professional setup. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Pune, LED wall Pune, sound system Pune, projector Pune, event equipment Pune, Hinjewadi AV, Koregaon Park event, Kharadi AV rental"
  },
  "locations/lonavala": {
    title: "AV Equipment Rental Lonavala | Event AV for Resorts & Weddings",
    description: "AV equipment rental in Lonavala — LED walls, sound systems, projectors, lighting for destination weddings, resort events, corporate offsites. Free delivery from Mumbai. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Lonavala, LED wall Lonavala, destination wedding AV Lonavala, resort event equipment, Lonavala sound system, corporate offsite AV Lonavala"
  },
  "locations/surat": {
    title: "AV Equipment Rental Surat | LED Wall, Sound, Projector | Sky Vision",
    description: "AV equipment rental in Surat — LED walls, sound systems, projectors, stage lighting for weddings, corporate events, exhibitions. Professional delivery & setup. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Surat, LED wall Surat, sound system Surat, projector Surat, event equipment Surat, Surat wedding AV, Surat corporate event"
  },
  "locations/goa": {
    title: "AV Equipment Rental Goa | Destination Wedding & Event AV | Sky Vision",
    description: "AV equipment rental in Goa — LED walls, sound systems, projectors, lighting for destination weddings, beach parties, corporate offsites, music festivals. Professional setup. Call +91 86559 73366 / +91 99201 58955.",
    keywords: "AV rental Goa, LED wall Goa, destination wedding AV Goa, beach party sound, Goa event equipment, Goa wedding lighting, Goa corporate offsite"
  },

  // Blog pages
  "blog/how-to-choose-led-wall": {
    title: "How to Choose LED Wall for Your Event | Complete Guide | Sky Vision",
    description: "Complete guide to choosing the right LED wall for your event. Pixel pitch explained, indoor vs outdoor, sizing guide, brightness requirements, pricing. Expert tips from 25+ years experience.",
    keywords: "how to choose LED wall, LED wall buying guide, pixel pitch guide, LED screen selection, indoor vs outdoor LED, LED wall sizing, event LED guide"
  },
  "blog/led-wall-vs-projector": {
    title: "LED Wall vs Projector: Which is Better? | Sky Vision Mumbai",
    description: "LED wall vs projector comparison — brightness, resolution, image quality, cost, setup, outdoor use. Find out which is best for your event. Expert analysis from Sky Vision Multimedia.",
    keywords: "LED wall vs projector, LED screen vs projector, which is better LED or projector, event display comparison, projector vs LED brightness, LED wall advantages"
  },
  "blog/event-av-planning-guide": {
    title: "Event AV Planning Guide | Complete Checklist | Sky Vision Mumbai",
    description: "Complete event AV planning guide — equipment checklist, timeline, venue requirements, budgeting, technical specs. Plan your event audio-visual like a pro. Free checklist included.",
    keywords: "event AV planning, AV checklist, event equipment planning, audio visual guide, event production checklist, AV budget guide, event tech planning"
  },
  "blog/led-wall-pricing-guide": {
    title: "LED Wall Rental Pricing Guide Mumbai | Cost & Packages | Sky Vision",
    description: "LED wall rental pricing guide — P2.5 vs P3.9 costs, size-based pricing, daily rates, package deals, hidden costs. Transparent pricing from Sky Vision Multimedia Mumbai.",
    keywords: "LED wall pricing Mumbai, LED wall rental cost, P2.5 LED price, P3.9 LED cost, LED wall daily rate, LED screen rental price, LED wall package"
  },
  "blog/sound-system-setup-guide": {
    title: "Sound System Setup Guide for Events | Expert Tips | Sky Vision",
    description: "Complete sound system setup guide — speaker placement, microphone setup, mixer basics, acoustics, troubleshooting. Get crystal-clear sound at your event. Expert tips included.",
    keywords: "sound system setup guide, speaker placement, microphone setup, PA system guide, event sound setup, audio mixing guide, sound system troubleshooting"
  },
};
