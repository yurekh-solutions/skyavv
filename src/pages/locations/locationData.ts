import type { LocationPageData } from "@/components/shared/LocationPageTemplate";
import type { FAQItem } from "@/components/shared/FAQAccordion";

const sharedServices = [
  { title: "LED Wall Rental", desc: "Indoor & outdoor LED screens for any event", path: "/services/led-wall-rental" },
  { title: "Sound System Rental", desc: "JBL & Bose sound for 50–5000 guests", path: "/services/sound-system-rental" },
  { title: "Projector Rental", desc: "HD & 4K projectors with screens", path: "/services/projector-rental" },
  { title: "Stage Lighting", desc: "Moving heads, par cans, lasers & haze", path: "/services/stage-lighting-rental" },
  { title: "LED TV Rental", desc: "LED TVs from 32\" to 85\" for events", path: "/services/led-tv-rental" },
  { title: "DJ Equipment", desc: "CDJs, controllers & complete DJ packages", path: "/services/dj-equipment-rental" },
];

const sharedWhyChooseUs = (city: string) => [
  { title: "Included Delivery in " + city, desc: "Included delivery and setup within city limits" },
  { title: "15+ Years Experience", desc: "Trusted AV partner with 5000+ events powered" },
  { title: "Same-Day Setup", desc: "Urgent requirement? We deliver within hours" },
  { title: "24/7 Support", desc: "Round-the-clock technical support during events" },
  { title: "Premium Equipment", desc: "Only branded gear — JBL, Bose, Pioneer, Novastar" },
  { title: "Expert Technicians", desc: "Certified AV engineers for flawless execution" },
];

const sharedStats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Events Powered" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 4.8, suffix: "★", label: "Average Rating" },
];

const sharedTestimonials = (city: string) => [
  { name: "Priya Sharma", event: "Wedding in " + city, text: "Sky Vision made our wedding absolutely magical. The LED wall was stunning and the sound was crystal clear. Highly recommended!", rating: 5 },
  { name: "Rahul Mehta", event: "Corporate Event in " + city, text: "Excellent service from start to finish. The AV setup was perfect for our conference. Highly recommended!", rating: 5 },
  { name: "Anita Desai", event: "Birthday Party in " + city, text: "They transformed our venue into something out of a dream. The lighting and sound were absolutely breathtaking!", rating: 5 },
];

const sharedFaqs = (city: string): FAQItem[] => [
  { category: "Delivery", question: `Do you deliver to ${city}?`, answer: `Yes! We provide complete AV equipment rental in ${city} with included delivery and setup. We also serve all surrounding areas.` },
  { category: "Pricing", question: `How much does AV rental cost in ${city}?`, answer: "Rates vary by equipment and event type. LED walls start from Rs. 15,000/day, projectors from Rs. 2,500/day, sound from Rs. 5,000/day. Contact us for a custom quote." },
  { category: "Setup", question: "Is setup included?", answer: "Yes! Every rental includes professional delivery, setup, on-site technical support, and teardown at no extra cost." },
  { category: "Booking", question: `How do I book AV equipment in ${city}?`, answer: "Call us at +91 86559 73366 or submit a quote request online. We respond within 30 minutes during business hours." },
];

const relatedLocs = (exclude: string) =>
  [
    { title: "Mumbai", path: "/locations/mumbai" },
    { title: "Navi Mumbai", path: "/locations/navi-mumbai" },
    { title: "Thane", path: "/locations/thane" },
    { title: "Pune", path: "/locations/pune" },
    { title: "Lonavala", path: "/locations/lonavala" },
    { title: "Surat", path: "/locations/surat" },
    { title: "Goa", path: "/locations/goa" },
  ].filter((l) => l.title !== exclude);

const makeLocation = (
  seoKey: string, url: string, pageTitle: string, pageHighlight: string,
  description: string, overview: string, areasCovered: string[],
  city: string,
): LocationPageData => ({
  seoKey, url, pageTitle, pageHighlight, description, overview, areasCovered,
  services: sharedServices,
  whyChooseUs: sharedWhyChooseUs(city),
  stats: sharedStats,
  testimonials: sharedTestimonials(city),
  faqs: sharedFaqs(city),
  relatedLocations: relatedLocs(pageTitle),
});

export const mumbaiData: LocationPageData = {
  ...makeLocation("locations/mumbai", "/locations/mumbai", "Mumbai", "AV Rental",
    "AV equipment rental across all Mumbai areas — LED walls, sound, lighting, projectors & more. Included delivery citywide.",
    "As Mumbai's most trusted AV rental company, we serve every corner of the city — from South Mumbai to the Western Suburbs, Central Mumbai to the Harbour Line. With 15+ years of experience and 5000+ events, we deliver premium AV equipment with included setup across all Mumbai areas.",
    ["Andheri", "Bandra", "BKC", "Colaba", "Dahisar", "Juhu", "Lower Parel", "Malad", "Powai", "Thane Road", "Worli", "Navi Mumbai"],
    "Mumbai",
  ),
};

export const naviMumbaiData: LocationPageData = {
  ...makeLocation("locations/navi-mumbai", "/locations/navi-mumbai", "Navi Mumbai", "AV Rental",
    "AV equipment rental in Navi Mumbai — LED walls, sound systems, lighting & projectors. Included delivery across Navi Mumbai.",
    "We provide complete AV equipment rental across Navi Mumbai — Vashi, Kharghar, Belapur, Panvel, and all surrounding nodes. From corporate events in Vashi to weddings in Kharghar, we deliver premium AV with professional setup.",
    ["Belapur", "CBD Belapur", "Kharghar", "Nerul", "Panvel", "Sanpada", "Seawoods", "Ulwe", "Vashi"],
    "Navi Mumbai",
  ),
};

export const thaneData: LocationPageData = {
  ...makeLocation("locations/thane", "/locations/thane", "Thane", "AV Rental",
    "AV equipment rental in Thane — LED walls, sound, lighting & projectors for events across Thane city.",
    "Serving all of Thane — from Thane West to Thane East, Kalyan to Dombivli. We provide premium AV equipment for weddings, corporate events, and celebrations across Thane with included delivery and expert setup.",
    ["Dombivli", "Ghodbunder Road", "Kalyan", "Majiwada", "Pokhran Road", "Thane West", "Vasant Vihar"],
    "Thane",
  ),
};

export const puneData: LocationPageData = {
  ...makeLocation("locations/pune", "/locations/pune", "Pune", "AV Rental",
    "AV equipment rental in Pune — LED walls, sound systems, stage lighting & more for all event types.",
    "We extend our premium AV services to Pune — covering Hinjewadi, Kharadi, Koregaon Park, Baner, and all major areas. From IT corporate events to grand weddings, we deliver the same quality that Mumbai trusts.",
    ["Baner", "Hinjewadi", "Kharadi", "Koregaon Park", "Magarpatta", "Shivaji Nagar", "Viman Nagar", "Wakad"],
    "Pune",
  ),
};

export const lonavalaData: LocationPageData = {
  seoKey: "locations/lonavala", url: "/locations/lonavala",
  pageTitle: "Lonavala", pageHighlight: "AV Rental",
  description: "Destination event AV rental in Lonavala — LED walls, sound & lighting for resort weddings, corporate offsites & retreats.",
  overview: "Planning a resort wedding, corporate offsite, or retreat in Lonavala? We bring Mumbai's premium AV equipment to the hills. Our team handles transportation, setup, and support at any resort or venue in and around Lonavala.",
  areasCovered: ["Khandala", "Tungarli", "Rajmachi", "Tikona", "Visapur"],
  services: sharedServices,
  whyChooseUs: [
    { title: "Resort Experience", desc: "AV setup at 50+ resorts and farmhouses in Lonavala" },
    { title: "Transport Included", desc: "We handle equipment transport from Mumbai to your venue" },
    { title: "Destination Specialists", desc: "Expert team experienced in hill-station event setups" },
    { title: "All-Weather Gear", desc: "Equipment rated for monsoon and outdoor conditions" },
    { title: "Complete Package", desc: "Delivery, setup, operation & teardown — we handle everything" },
    { title: "Competitive Rates", desc: "Same Mumbai rates plus nominal transport charges" },
  ],
  stats: sharedStats,
  testimonials: [
    { name: "Vikram Patel", event: "Resort Wedding in Lonavala", text: "Sky Vision transported everything from Mumbai and set up flawlessly at our resort. The LED wall was spectacular against the hill backdrop!", rating: 5 },
    { name: "Meera Joshi", event: "Corporate Offsite in Lonavala", text: "Our company offsite was perfectly powered by Sky Vision. Professional setup, great sound, and the team was very accommodating.", rating: 5 },
    { name: "Arjun Singh", event: "Birthday in Lonavala", text: "Amazing service! They handled the entire transport and setup at our farmhouse. The party was unforgettable!", rating: 5 },
  ],
  faqs: [
    { category: "Transport", question: "Do you transport equipment to Lonavala?", answer: "Yes! We regularly transport AV equipment from Mumbai to Lonavala for events. Transport charges are nominal and we handle all logistics." },
    { category: "Setup", question: "Will your team come to Lonavala for setup?", answer: "Absolutely! Our technicians travel to Lonavala for delivery, setup, on-site support during the event, and teardown." },
    { category: "Resorts", question: "Which resorts have you worked at?", answer: "We've set up AV at 50+ resorts in Lonavala and Khandala including popular venues. Contact us for specific resort experience." },
    { category: "Pricing", question: "Does it cost more for Lonavala events?", answer: "Our equipment rates are the same as Mumbai. A nominal transport charge applies based on the volume of equipment and distance." },
  ],
  relatedLocations: relatedLocs("Lonavala"),
};

export const suratData: LocationPageData = {
  seoKey: "locations/surat", url: "/locations/surat",
  pageTitle: "Surat", pageHighlight: "AV Rental",
  description: "AV equipment rental in Surat — LED walls, sound systems, lighting & projectors for weddings and corporate events.",
  overview: "We bring Mumbai's premium AV equipment to Surat. From grand weddings to corporate events, we deliver top-quality LED walls, sound systems, and lighting with professional setup and technical support across Surat.",
  areasCovered: ["Adajan", "Athwa", "Ghod Dod Road", "Piplod", "Vesu", "Varachha"],
  services: sharedServices,
  whyChooseUs: [
    { title: "Mumbai Quality in Surat", desc: "Same premium equipment and service as our Mumbai operations" },
    { title: "Wedding Specialists", desc: "Experienced in grand Surat weddings with 1000+ guests" },
    { title: "Transport & Setup", desc: "Complete logistics handled from Mumbai to Surat" },
    { title: "Local Support", desc: "On-ground team available for coordination" },
    { title: "Competitive Pricing", desc: "Transparent pricing with no hidden charges" },
    { title: "All Equipment", desc: "Full range — LED, sound, lighting, projectors, DJ gear" },
  ],
  stats: sharedStats,
  testimonials: [
    { name: "Kiran Shah", event: "Wedding in Surat", text: "Sky Vision brought Mumbai-quality AV to our Surat wedding. The LED wall and sound were phenomenal. Guests were amazed!", rating: 5 },
    { name: "Nikhil Patel", event: "Corporate Event in Surat", text: "Professional service from start to finish. The conference setup was flawless with great audio and visuals.", rating: 5 },
    { name: "Divya Desai", event: "Birthday in Surat", text: "Incredible setup for my son's birthday. The DJ setup and lighting created an amazing atmosphere!", rating: 5 },
  ],
  faqs: [
    { category: "Service", question: "Do you provide AV rental in Surat?", answer: "Yes! We regularly serve Surat with premium AV equipment transported from Mumbai. Full setup and technical support included." },
    { category: "Pricing", question: "Are rates different for Surat?", answer: "Equipment rates are the same as Mumbai. Transport charges apply based on volume and distance." },
    { category: "Weddings", question: "Can you handle grand Surat weddings?", answer: "Absolutely! We specialize in grand wedding AV with massive LED walls, concert sound, and spectacular lighting for 1000+ guest weddings." },
    { category: "Booking", question: "How do I book from Surat?", answer: "Call +91 86559 73366 or request a quote online. We coordinate everything remotely for Surat events." },
  ],
  relatedLocations: relatedLocs("Surat"),
};

export const goaData: LocationPageData = {
  seoKey: "locations/goa", url: "/locations/goa",
  pageTitle: "Goa", pageHighlight: "AV Rental",
  description: "Destination event AV rental in Goa — LED walls, sound & lighting for beach weddings, corporate retreats & parties.",
  overview: "Planning a destination event in Goa? We bring Mumbai's premium AV equipment to Goa's most beautiful venues. From beach weddings to corporate retreats, villa parties to music festivals — we deliver spectacular AV at any Goan location.",
  areasCovered: ["Anjuna", "Baga", "Calangute", "Candolim", "Colva", "Morjim", "Palolem", "Panaji"],
  services: sharedServices,
  whyChooseUs: [
    { title: "Destination Experts", desc: "Regular AV setups at Goa's top resorts and beaches" },
    { title: "Beach-Ready Equipment", desc: "Weatherproof gear suitable for beach and outdoor venues" },
    { title: "Full Logistics", desc: "We handle transport, accommodation coordination & setup" },
    { title: "Wedding Specialists", desc: "Experienced in grand destination weddings in Goa" },
    { title: "Corporate Retreats", desc: "Professional AV for offsites, conferences & team events" },
    { title: "Party Masters", desc: "DJ setups, LED dance floors & party lighting for villa events" },
  ],
  stats: sharedStats,
  testimonials: [
    { name: "Siddharth Rao", event: "Beach Wedding in Goa", text: "Sky Vision made our beach wedding dreams come true. The LED wall on the beach with the sunset backdrop was absolutely magical!", rating: 5 },
    { name: "Kavya Nair", event: "Corporate Retreat in Goa", text: "Our company retreat was perfectly powered by Sky Vision. Professional setup at the resort with great sound and visuals.", rating: 5 },
    { name: "Aditya Kapoor", event: "Villa Party in Goa", text: "They transformed our villa into a nightclub! The DJ setup and LED dance floor were incredible. Best party ever!", rating: 5 },
  ],
  faqs: [
    { category: "Destination", question: "Do you provide AV rental in Goa?", answer: "Yes! We regularly serve Goa with premium AV equipment transported from Mumbai. Full logistics, setup, and support included." },
    { category: "Beach Events", question: "Can you set up on the beach?", answer: "Absolutely! We have extensive experience with beach weddings and events. We use weatherproof equipment and take special precautions for sand and moisture." },
    { category: "Transport", question: "How does equipment transport work?", answer: "We handle all transport from Mumbai to Goa. Equipment is carefully packed and transported by road. We coordinate timing to ensure everything arrives before your event." },
    { category: "Pricing", question: "What are the charges for Goa events?", answer: "Equipment rates are the same as Mumbai. Transport and logistics charges apply based on volume and distance. Contact us for a detailed quote." },
  ],
  relatedLocations: relatedLocs("Goa"),
};
