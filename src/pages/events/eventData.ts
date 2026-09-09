import type { EventPageData } from "@/components/shared/EventPageTemplate";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import type { GalleryItem } from "@/components/shared/ImageGallery";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroEvent from "@/assets/hero-event.jpg";
import ledWallImg from "@/assets/led-wall.jpg";
import soundImg from "@/assets/sound-system.jpg";

const sharedFaqs = (topic: string): FAQItem[] => [
  { category: "Pricing", question: `How much does AV setup for ${topic} cost?`, answer: "Packages vary based on venue size, guest count, and requirements. Contact us for a custom quote — we offer competitive rates with included delivery and setup in Mumbai." },
  { category: "Planning", question: "How far in advance should we book?", answer: "We recommend booking 2-4 weeks in advance for standard events and 4-8 weeks for large-scale events. Same-week bookings are available subject to availability." },
  { category: "Setup", question: "Is setup and teardown included?", answer: "Yes! Every event package includes professional delivery, setup, on-site technical support during the event, and complete teardown — all at no extra cost." },
  { category: "Coverage", question: "Which areas do you serve?", answer: "We serve Mumbai, Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa. Included delivery within Mumbai city limits with competitive outstation rates." },
];

const sharedTestimonials = [
  { name: "Priya Sharma", event: "Mumbai Event", text: "Sky Vision made our event absolutely magical. The LED wall was stunning and the sound was crystal clear. Their team was professional and handled everything flawlessly.", rating: 5 },
  { name: "Rahul Mehta", event: "Corporate Event", text: "Excellent service from start to finish. The AV setup was perfect for our conference — clear visuals, great sound, and zero technical issues. Highly recommended!", rating: 5 },
  { name: "Anita Desai", event: "Wedding Event", text: "They transformed our wedding venue into something out of a dream. The lighting, sound, and LED backdrop were absolutely breathtaking. Thank you Sky Vision!", rating: 5 },
];

const sharedGallery = (img1: string, img2: string, img3: string, cat: string): GalleryItem[] => [
  { image: img1, title: `${cat} Setup`, category: cat },
  { image: img2, title: `${cat} Event`, category: cat },
  { image: img3, title: `${cat} Production`, category: cat },
];

const relatedEvts = (exclude: string): { title: string; path: string }[] =>
  [
    { title: "Weddings", path: "/events/weddings" },
    { title: "Corporate Events", path: "/events/corporate" },
    { title: "Concerts", path: "/events/concerts" },
    { title: "Conferences", path: "/events/conferences" },
    { title: "Birthday Parties", path: "/events/birthday-parties" },
    { title: "Product Launches", path: "/events/product-launches" },
  ].filter((e) => e.title !== exclude);

const makeEvent = (
  seoKey: string, url: string, pageTitle: string, pageHighlight: string,
  description: string, heroImage: string, overview: string,
  whatWeProvide: { icon: string; title: string; desc: string }[],
  flipCards: { image: string; title: string; badge?: string; frontDescription: string; backDescription: string; features: string[] }[],
  gallery: GalleryItem[],
  testimonials = sharedTestimonials,
): EventPageData => ({
  seoKey, url, pageTitle, pageHighlight, description, heroImage, overview,
  whatWeProvide, flipCards, gallery, testimonials,
  faqs: sharedFaqs(pageTitle.toLowerCase()),
  relatedEvents: relatedEvts(pageTitle),
});

export const weddingData = makeEvent(
  "events/weddings", "/events/weddings", "Wedding", "AV",
  "Stunning LED backdrops, concert-grade sound & romantic lighting for your dream wedding.",
  gallery2,
  "Make your wedding unforgettable with our complete wedding AV package. From breathtaking LED backdrops for the perfect photos to concert-grade sound for the sangeet and romantic ambient lighting for the ceremony — we create magical wedding experiences across Mumbai.",
  [
    { icon: "CheckCircle2", title: "LED Backdrop", desc: "Stunning LED walls for photos, videos & live coverage display" },
    { icon: "CheckCircle2", title: "Concert Sound", desc: "Powerful sound for sangeet, reception & ceremonies" },
    { icon: "CheckCircle2", title: "Romantic Lighting", desc: "Ambient and accent lighting for the perfect mood" },
    { icon: "CheckCircle2", title: "Stage Setup", desc: "Elegant mandap stage with AV integration" },
    { icon: "CheckCircle2", title: "Live Feed", desc: "Live camera feed to LED wall for all guests" },
    { icon: "CheckCircle2", title: "DJ Integration", desc: "Seamless DJ setup integrated with AV system" },
  ],
  [
    { image: gallery2, title: "Wedding LED Package", badge: "Most Popular", frontDescription: "LED backdrop for weddings", backDescription: "Create a breathtaking wedding backdrop with large LED walls displaying photos, videos, and romantic visuals.", features: ["16×10ft LED wall", "Content display", "Live feed", "Photo backdrop"] },
    { image: gallery6, title: "Sangeet Night", frontDescription: "Complete sangeet AV setup", backDescription: "Full concert-grade setup for sangeet nights with powerful sound, moving heads, and LED dance floor.", features: ["Line array sound", "Moving heads", "LED dance floor", "DJ integration"] },
    { image: gallery5, title: "Reception Package", frontDescription: "Elegant reception AV", backDescription: "Sophisticated AV for wedding receptions with ambient lighting and speech system.", features: ["Ambient lighting", "Background music", "Speech system", "Elegant stage"] },
  ],
  sharedGallery(gallery2, gallery6, gallery5, "Wedding"),
);

export const corporateData = makeEvent(
  "events/corporate", "/events/corporate", "Corporate", "Events",
  "Professional AV for conferences, AGMs, town halls & corporate gatherings.",
  gallery1,
  "Impress stakeholders with flawless AV at your corporate events. From AGMs and town halls to product launches and award ceremonies — we deliver professional, reliable AV solutions that make your brand shine.",
  [
    { icon: "CheckCircle2", title: "LED Wall / Projector", desc: "Large-format displays for presentations and branding" },
    { icon: "CheckCircle2", title: "Professional Sound", desc: "Crystal-clear audio for speeches and Q&A sessions" },
    { icon: "CheckCircle2", title: "Wireless Mics", desc: "Handheld, lapel, and podium microphones" },
    { icon: "CheckCircle2", title: "Stage & Lighting", desc: "Professional stage setup with branded lighting" },
    { icon: "CheckCircle2", title: "Live Streaming", desc: "Optional live streaming to remote attendees" },
    { icon: "CheckCircle2", title: "Technical Crew", desc: "Dedicated AV engineers throughout the event" },
  ],
  [
    { image: gallery1, title: "Conference Package", badge: "Popular", frontDescription: "Complete conference AV", backDescription: "Full conference setup with LED wall, sound system, microphones, and technical support.", features: ["LED wall display", "Full sound system", "4 wireless mics", "2 tech engineers"] },
    { image: gallery4, title: "AGM Package", frontDescription: "AGM & town hall setup", backDescription: "Professional AV for AGMs and town halls with presentation systems and live streaming.", features: ["Dual LED walls", "Presentation system", "Live streaming", "Recording"] },
    { image: gallery5, title: "Product Launch", frontDescription: "Dramatic product reveal", backDescription: "Create jaw-dropping product launches with LED walls, dramatic lighting, and timed sequences.", features: ["LED reveal wall", "Dramatic lighting", "Timed sequences", "Multi-angle"] },
  ],
  sharedGallery(gallery1, gallery4, gallery5, "Corporate"),
);

export const conferenceData = makeEvent("events/conferences", "/events/conferences", "Conference", "AV", "Multi-zone audio & large LED displays for impactful conferences.", gallery1, "Professional conference AV with multi-zone audio, large LED displays, and dedicated technical support.", [
  { icon: "CheckCircle2", title: "Multi-zone Audio", desc: "Separate sound zones for main hall, breakout rooms & networking" },
  { icon: "CheckCircle2", title: "Large LED Displays", desc: "Crystal-clear content visible from every seat" },
  { icon: "CheckCircle2", title: "Presentation System", desc: "Seamless switching between speakers and content" },
  { icon: "CheckCircle2", title: "Live Streaming", desc: "Broadcast to remote attendees worldwide" },
  { icon: "CheckCircle2", title: "Recording", desc: "Full event recording for post-event distribution" },
  { icon: "CheckCircle2", title: "Tech Support", desc: "Dedicated engineers throughout the conference" },
], [
  { image: gallery1, title: "Small Conference", badge: "Up to 200", frontDescription: "AV for small conferences", backDescription: "Complete AV for conferences up to 200 attendees.", features: ["HD projector", "Sound system", "2 wireless mics", "Tech support"] },
  { image: gallery4, title: "Large Conference", frontDescription: "Full production for 500+", backDescription: "Professional conference with LED walls and line array sound.", features: ["LED wall display", "Line array sound", "4+ mics", "Live streaming"] },
], sharedGallery(gallery1, gallery4, gallery2, "Conference"));

export const concertData = makeEvent("events/concerts", "/events/concerts", "Concert", "Production", "Line arrays, moving heads & LED video walls for unforgettable concerts.", gallery3, "Concert-grade AV with line array sound, intelligent lighting, and massive LED video walls for spectacular live performances.", [
  { icon: "CheckCircle2", title: "Line Array Sound", desc: "JBL line arrays for powerful, even coverage" },
  { icon: "CheckCircle2", title: "LED Video Walls", desc: "Massive LED screens for visuals and branding" },
  { icon: "CheckCircle2", title: "Moving Head Lights", desc: "Intelligent lighting with beam, spot, and wash" },
  { icon: "CheckCircle2", title: "Stage Monitoring", desc: "Professional monitor system for performers" },
  { icon: "CheckCircle2", title: "DMX Control", desc: "Professional lighting console with programmed cues" },
  { icon: "CheckCircle2", title: "Backline", desc: "Drum risers, instrument mics, and DI boxes" },
], [
  { image: gallery3, title: "Small Concert", badge: "500-1000", frontDescription: "Sound & lights for small gigs", backDescription: "Complete AV for small concerts and live performances.", features: ["4× line array", "Moving heads", "LED wall", "Monitors"] },
  { image: gallery6, title: "Large Concert", frontDescription: "Festival-grade production", backDescription: "Full concert production with massive sound, lights, and LED.", features: ["8× line array", "Full lighting rig", "Multiple LED walls", "Stage design"] },
], sharedGallery(gallery3, gallery6, gallery2, "Concert"));

export const exhibitionData = makeEvent("events/exhibitions", "/events/exhibitions", "Exhibition", "AV", "Booth AV, LED walls & interactive displays for trade shows.", gallery4, "Professional exhibition AV with LED walls, interactive displays, and booth setups for trade shows and expos.", [
  { icon: "CheckCircle2", title: "Booth AV", desc: "LED screens and sound for exhibition booths" },
  { icon: "CheckCircle2", title: "Interactive Displays", desc: "Touch screens and interactive kiosks" },
  { icon: "CheckCircle2", title: "LED Walls", desc: "Large-format LED for brand visibility" },
  { icon: "CheckCircle2", title: "PA System", desc: "Announcement and background music systems" },
  { icon: "CheckCircle2", title: "Digital Signage", desc: "Wayfinding and information displays" },
  { icon: "CheckCircle2", title: "Tech Support", desc: "On-site technicians throughout the exhibition" },
], [
  { image: gallery4, title: "Booth Setup", frontDescription: "Standard booth AV package", backDescription: "LED screen, sound, and interactive display for exhibition booths.", features: ["55\" LED display", "Sound bar", "Interactive kiosk", "Tech support"] },
  { image: gallery1, title: "Large Booth", frontDescription: "Premium booth setup", backDescription: "Large LED wall, premium sound, and multiple interactive displays.", features: ["LED wall", "Premium sound", "2 interactive displays", "Branded lighting"] },
], sharedGallery(gallery4, gallery1, gallery5, "Exhibition"));

export const birthdayData = makeEvent("events/birthday-parties", "/events/birthday-parties", "Birthday", "Party", "DJ setups, LED dance floors & karaoke for amazing birthday celebrations.", gallery6, "Make birthdays unforgettable with DJ setups, LED dance floors, karaoke, and party lighting that turns any venue into a celebration.", [
  { icon: "CheckCircle2", title: "DJ Setup", desc: "Professional DJ equipment with speakers and lights" },
  { icon: "CheckCircle2", title: "LED Dance Floor", desc: "Colorful LED dance floor tiles" },
  { icon: "CheckCircle2", title: "Karaoke", desc: "50,000+ songs with wireless microphones" },
  { icon: "CheckCircle2", title: "Party Lights", desc: "Moving heads, lasers, and haze for club vibes" },
  { icon: "CheckCircle2", title: "LED Backdrop", desc: "Custom LED backdrop for photos" },
  { icon: "CheckCircle2", title: "Sound System", desc: "Powerful speakers for music and announcements" },
], [
  { image: gallery6, title: "Kids Birthday", badge: "Fun Pack", frontDescription: "AV for kids' birthday parties", backDescription: "Fun-filled AV setup with karaoke, party lights, and LED backdrop for kids' celebrations.", features: ["Karaoke setup", "Party lights", "LED backdrop", "Sound system"] },
  { image: gallery5, title: "Adult Birthday", frontDescription: "Premium birthday celebration", backDescription: "Complete party setup with DJ, LED dance floor, and professional lighting.", features: ["DJ setup", "LED dance floor", "Moving heads", "Premium sound"] },
], sharedGallery(gallery6, gallery5, gallery3, "Birthday"));

export const productLaunchData = makeEvent("events/product-launches", "/events/product-launches", "Product", "Launch", "Dramatic LED reveals, precision lighting & stage setups for impactful launches.", gallery5, "Create jaw-dropping product launches with dramatic LED reveals, precision lighting, and professional stage setups that leave a lasting impression.", [
  { icon: "CheckCircle2", title: "LED Reveal Wall", desc: "Dramatic LED wall for product reveal moments" },
  { icon: "CheckCircle2", title: "Stage Setup", desc: "Professional stage with branded backdrop" },
  { icon: "CheckCircle2", title: "Lighting Design", desc: "Dramatic lighting for the big reveal moment" },
  { icon: "CheckCircle2", title: "Sound System", desc: "Clear audio for presentations and announcements" },
  { icon: "CheckCircle2", title: "Live Streaming", desc: "Broadcast the launch to global audiences" },
  { icon: "CheckCircle2", title: "Photography", desc: "Professional photo and video coverage" },
], [
  { image: gallery5, title: "Launch Package", badge: "Impact", frontDescription: "Complete product launch AV", backDescription: "Full product launch setup with LED reveal, stage, and lighting.", features: ["LED reveal wall", "Professional stage", "Dramatic lighting", "Sound system"] },
  { image: gallery1, title: "Premium Launch", frontDescription: "Premium launch production", backDescription: "Premium launch with multiple LED walls, live streaming, and full production.", features: ["Multiple LED walls", "Live streaming", "Full production", "Photography"] },
], sharedGallery(gallery5, gallery1, gallery4, "Product Launch"));

export const collegeData = makeEvent("events/college-events", "/events/college-events", "College", "Events", "AV for fests, seminars, cultural programs & college celebrations.", gallery4, "Complete AV solutions for college events — fests, seminars, cultural programs, and celebrations with professional sound, lighting, and visuals.", [
  { icon: "CheckCircle2", title: "Stage Sound", desc: "Powerful sound for performances and speeches" },
  { icon: "CheckCircle2", title: "LED Display", desc: "LED wall or projector for visuals and branding" },
  { icon: "CheckCircle2", title: "Stage Lighting", desc: "Dynamic lighting for performances and shows" },
  { icon: "CheckCircle2", title: "DJ Setup", desc: "DJ equipment for dance and music events" },
  { icon: "CheckCircle2", title: "Mic Setup", desc: "Wireless mics for anchors and speakers" },
  { icon: "CheckCircle2", title: "Budget Friendly", desc: "Student-friendly pricing with complete packages" },
], [
  { image: gallery4, title: "Fest Package", badge: "Student Fav", frontDescription: "AV for college fests", backDescription: "Complete AV package for college fests with sound, lights, and LED.", features: ["Full sound system", "Stage lighting", "LED display", "DJ setup"] },
  { image: gallery3, title: "Seminar Package", frontDescription: "AV for seminars & talks", backDescription: "Professional AV for seminars with projector, sound, and mics.", features: ["HD projector", "Sound system", "Wireless mics", "Tech support"] },
], sharedGallery(gallery4, gallery3, gallery6, "College Event"));

export const culturalData = makeEvent("events/cultural-events", "/events/cultural-events", "Cultural", "Events", "Traditional & modern cultural celebrations with authentic AV setups.", gallery2, "Celebrate culture with professional AV — from traditional performances to modern cultural events, we provide authentic sound, lighting, and visual setups.", [
  { icon: "CheckCircle2", title: "Stage Sound", desc: "Clear sound for performances and music" },
  { icon: "CheckCircle2", title: "Cultural Lighting", desc: "Warm, festive lighting for cultural ambiance" },
  { icon: "CheckCircle2", title: "LED Display", desc: "LED wall for visuals and live coverage" },
  { icon: "CheckCircle2", title: "Backstage", desc: "Backstage monitoring and quick-change area" },
  { icon: "CheckCircle2", title: "Recording", desc: "Full event recording for memories" },
  { icon: "CheckCircle2", title: "Tech Support", desc: "On-site engineers throughout the event" },
], [
  { image: gallery2, title: "Cultural Night", frontDescription: "Complete cultural event AV", backDescription: "Full AV setup for cultural nights with sound, lighting, and LED.", features: ["Full sound system", "Cultural lighting", "LED display", "Recording"] },
], sharedGallery(gallery2, gallery3, gallery4, "Cultural Event"));

export const fashionData = makeEvent("events/fashion-shows", "/events/fashion-shows", "Fashion", "Show", "Runway lighting, sound & LED backdrops for stunning fashion events.", gallery5, "Create stunning fashion shows with professional runway lighting, concert-grade sound, and LED backdrops that complement your collection.", [
  { icon: "CheckCircle2", title: "Runway Lighting", desc: "Precision lighting for the runway walk" },
  { icon: "CheckCircle2", title: "Sound System", desc: "Fashion-show music with powerful bass" },
  { icon: "CheckCircle2", title: "LED Backdrop", desc: "LED wall for branding and visuals" },
  { icon: "CheckCircle2", title: "Ambient Lighting", desc: "Mood lighting for the audience area" },
  { icon: "CheckCircle2", title: "Photography", desc: "Professional photo and video coverage" },
  { icon: "CheckCircle2", title: "Live Streaming", desc: "Stream the show to global audiences" },
], [
  { image: gallery5, title: "Runway Package", badge: "Stunning", frontDescription: "Complete fashion show AV", backDescription: "Full fashion show setup with runway lighting, sound, and LED.", features: ["Runway lights", "Sound system", "LED backdrop", "Photography"] },
], sharedGallery(gallery5, gallery2, gallery6, "Fashion Show"));

export const awardData = makeEvent("events/award-functions", "/events/award-functions", "Award", "Functions", "Elegant stage, sound & visual setups for prestigious award ceremonies.", gallery5, "Host prestigious award ceremonies with elegant stage setups, crystal-clear sound, and stunning visual displays that celebrate achievement.", [
  { icon: "CheckCircle2", title: "Elegant Stage", desc: "Professional stage with branded backdrop" },
  { icon: "CheckCircle2", title: "Sound System", desc: "Clear audio for announcements and speeches" },
  { icon: "CheckCircle2", title: "LED Display", desc: "LED wall for nominees and winner visuals" },
  { icon: "CheckCircle2", title: "Spotlight", desc: "Professional spotlight for awardees" },
  { icon: "CheckCircle2", title: "Background Music", desc: "Dramatic music for walk-ups" },
  { icon: "CheckCircle2", title: "Live Streaming", desc: "Stream the ceremony to remote attendees" },
], [
  { image: gallery5, title: "Award Package", badge: "Elegant", frontDescription: "Complete award function AV", backDescription: "Full award ceremony setup with stage, sound, LED, and spotlight.", features: ["Professional stage", "Sound system", "LED display", "Spotlight"] },
], sharedGallery(gallery5, gallery1, gallery4, "Award Function"));

export const musicFestivalData = makeEvent("events/music-festivals", "/events/music-festivals", "Music", "Festivals", "Festival-grade sound, LED installations & lighting for epic music events.", gallery3, "Epic music festivals need epic AV — festival-grade line arrays, massive LED installations, and professional lighting that keeps the crowd energized.", [
  { icon: "CheckCircle2", title: "Festival Sound", desc: "Massive line arrays for 1000-10000+ attendees" },
  { icon: "CheckCircle2", title: "LED Installations", desc: "Multiple LED walls and creative installations" },
  { icon: "CheckCircle2", title: "Stage Lighting", desc: "Full lighting rig with moving heads and lasers" },
  { icon: "CheckCircle2", title: "Monitor System", desc: "Professional monitoring for artists" },
  { icon: "CheckCircle2", title: "Backline", desc: "Complete backline for multiple artists" },
  { icon: "CheckCircle2", title: "Power Management", desc: "Reliable power distribution for all equipment" },
], [
  { image: gallery3, title: "Festival Package", badge: "Epic", frontDescription: "Full festival AV production", backDescription: "Complete festival AV with massive sound, LED, and lighting.", features: ["Line array system", "Multiple LED walls", "Full lighting rig", "Monitor system"] },
], sharedGallery(gallery3, gallery6, gallery2, "Music Festival"));

export const privatePartyData = makeEvent("events/private-parties", "/events/private-parties", "Private", "Party", "Intimate gatherings with premium AV — DJ, sound, lights & karaoke.", gallery6, "Premium AV for intimate private parties — DJ setups, powerful sound, party lights, and karaoke that turns any gathering into an unforgettable celebration.", [
  { icon: "CheckCircle2", title: "DJ Setup", desc: "Professional DJ equipment and controllers" },
  { icon: "CheckCircle2", title: "Sound System", desc: "Quality speakers for music and ambiance" },
  { icon: "CheckCircle2", title: "Party Lights", desc: "Moving heads, par cans, and atmosphere effects" },
  { icon: "CheckCircle2", title: "Karaoke", desc: "50,000+ songs with wireless microphones" },
  { icon: "CheckCircle2", title: "LED Display", desc: "LED wall or TV for visuals and photos" },
  { icon: "CheckCircle2", title: "Complete Setup", desc: "Delivery, setup, and support included" },
], [
  { image: gallery6, title: "Party Package", badge: "Fun", frontDescription: "Complete private party AV", backDescription: "Full party setup with DJ, sound, lights, and karaoke.", features: ["DJ setup", "Sound system", "Party lights", "Karaoke"] },
], sharedGallery(gallery6, gallery5, gallery3, "Private Party"));
