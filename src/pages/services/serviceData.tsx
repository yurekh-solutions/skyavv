import type { ServicePageData } from "@/components/shared/ServicePageTemplate";
import type { TabItem } from "@/components/shared/TabPanel";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import type { GalleryItem } from "@/components/shared/ImageGallery";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ledWallImg from "@/assets/led-wall.jpg";
import projectorImg from "@/assets/projector.jpg";
import soundImg from "@/assets/sound-system.jpg";
import sound1 from "@/assets/sound1.png";
import sound2 from "@/assets/sound2.png";
import tv1 from "@/assets/tv1.jpeg";
import tv2 from "@/assets/tv2.jpeg";
import tv3 from "@/assets/tv3.jpeg";
import tv4 from "@/assets/tv4.jpeg";
import setupImg from "@/assets/setup.png";

const sharedFaqs = (topic: string): FAQItem[] => [
  { category: "Pricing", question: `How much does ${topic} cost?`, answer: "Rates vary by size, duration, and event type. Contact us with your requirements for a custom quote within 30 minutes. Delivery, setup, and technical support are always included." },
  { category: "Delivery", question: "Do you deliver across Mumbai?", answer: "Yes! We offer free delivery and setup across Mumbai city limits. We also serve Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa with competitive outstation rates." },
  { category: "Support", question: "Is technical support included?", answer: "Absolutely. Every rental includes professional on-site technicians who handle setup, operation during your event, and breakdown — all at no extra cost." },
  { category: "Booking", question: "How far in advance should I book?", answer: "We recommend 7-10 days for peak season (Oct-Mar) and 3-5 days for regular bookings. Same-day bookings are available subject to equipment availability." },
];

const sharedGallery = (img1: string, img2: string, img3: string, cat: string): GalleryItem[] => [
  { image: img1, title: `${cat} Setup 1`, category: cat },
  { image: img2, title: `${cat} Setup 2`, category: cat },
  { image: img3, title: `${cat} Setup 3`, category: cat },
];

const relatedSvcs = (exclude: string): { title: string; path: string }[] =>
  [
    { title: "LED Wall Rental", path: "/services/led-wall-rental" },
    { title: "Sound System Rental", path: "/services/sound-system-rental" },
    { title: "Projector Rental", path: "/services/projector-rental" },
    { title: "Stage Lighting", path: "/services/stage-lighting-rental" },
    { title: "LED TV Rental", path: "/services/led-tv-rental" },
    { title: "DJ Equipment", path: "/services/dj-equipment-rental" },
  ].filter((s) => s.title !== exclude);

const makeService = (
  seoKey: string, url: string, pageTitle: string, pageHighlight: string,
  description: string, heroImage: string, overview: string,
  features: { icon: string; title: string; desc: string }[],
  flipCards: { image: string; title: string; badge?: string; frontDescription: string; backDescription: string; features: string[] }[],
  gallery: GalleryItem[],
  pricing: { size: string; spec: string; price: string; popular?: boolean }[],
  specTabs: TabItem[] = [],
): ServicePageData => ({
  seoKey, url, pageTitle, pageHighlight, description, heroImage, overview,
  features, flipCards, specTabs, gallery, pricing,
  faqs: sharedFaqs(pageTitle.toLowerCase()),
  relatedServices: relatedSvcs(pageTitle),
});

// ---- LED Wall Rental ----
const ledWallTabs: TabItem[] = [
  { value: "indoor", label: "Indoor LED Walls", content: (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3">Indoor LED Wall Specifications</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Pixel Pitch: P2.5 / P2.6 / P3.91</li>
        <li>Module Size: 250×250mm / 256×256mm</li>
        <li>Brightness: 800–1500 nits</li>
        <li>Refresh Rate: ≥3840Hz</li>
        <li>Available Sizes: 6ft × 4ft to 20ft × 12ft</li>
      </ul>
    </div>
  )},
  { value: "outdoor", label: "Outdoor LED Walls", content: (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3">Outdoor LED Wall Specifications</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Pixel Pitch: P3.91 / P4.81</li>
        <li>Module Size: 250×250mm / 500×500mm</li>
        <li>Brightness: ≥5000–6500 nits</li>
        <li>IP Rating: IP65 (front & back)</li>
        <li>Available Sizes: 8ft × 6ft to 40ft × 20ft</li>
      </ul>
    </div>
  )},
  { value: "specs", label: "General Specs", content: (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-3">General Specifications</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Cabinet Material: Die-cast aluminum</li>
        <li>Weight per cabinet: 7–12 kg</li>
        <li>Power Consumption: 300–600W per panel</li>
        <li>Input: HDMI, DVI, SDI, VGA</li>
        <li>Processor: Novastar / Colorlight</li>
      </ul>
    </div>
  )},
];

export const ledWallData: ServicePageData = {
  seoKey: "ledWall", url: "/services/led-wall-rental",
  pageTitle: "LED Wall", pageHighlight: "Rental",
  description: "P2.5 & P3.9 LED screens with 6000+ nits brightness. Indoor & outdoor options from 6ft to 40ft. Free delivery & setup in Mumbai.",
  heroImage: ledWallImg,
  overview: "Our LED walls deliver stunning visual impact for any event. From intimate conferences to massive outdoor concerts, we provide pixel-perfect displays with brightness that cuts through any lighting condition.",
  features: [
    { icon: "CheckCircle2", title: "Crystal Clear Display", desc: "P2.5 fine pixel pitch for sharp images even at close viewing distances" },
    { icon: "CheckCircle2", title: "Sunlight Visible", desc: "6000+ nits brightness ensures visibility even in direct outdoor sunlight" },
    { icon: "CheckCircle2", title: "Modular Design", desc: "Seamless panel integration for any size from 6ft to 40ft wide" },
    { icon: "CheckCircle2", title: "Real-time Control", desc: "Professional content management with live switching capability" },
    { icon: "CheckCircle2", title: "Quick Setup", desc: "Our expert team handles delivery, installation, and operation" },
    { icon: "CheckCircle2", title: "Backup System", desc: "Redundant processors and spare panels for zero downtime" },
  ],
  flipCards: [
    { image: ledWallImg, title: "Indoor LED Wall", badge: "Popular", frontDescription: "P2.5 fine pitch for conferences & indoor events", backDescription: "Crystal-clear indoor LED walls with 800-1500 nits brightness. Perfect for conferences, weddings, and corporate events.", features: ["P2.5 pixel pitch", "250×250mm modules", "≥3840Hz refresh", "Sizes: 6ft to 20ft"] },
    { image: tv3, title: "Outdoor LED Wall", frontDescription: "6000+ nits for outdoor sunlight visibility", backDescription: "IP65-rated outdoor LED walls that perform flawlessly in rain, dust, and direct sunlight.", features: ["P3.91 pixel pitch", "IP65 rated", "6000+ nits", "Sizes: 8ft to 40ft"] },
    { image: gallery1, title: "Custom Configurations", frontDescription: "Bespoke LED setups for unique events", backDescription: "Need a curved wall, circular display, or multi-screen setup? We design custom LED configurations for any creative vision.", features: ["Curved walls", "Multi-screen sync", "360° displays", "Creative shapes"] },
  ],
  specTabs: ledWallTabs,
  gallery: [
    { image: ledWallImg, title: "P2.5 Indoor LED Wall", category: "LED Wall" },
    { image: tv3, title: "Outdoor LED Display", category: "LED Wall" },
    { image: gallery1, title: "Conference LED Setup", category: "Corporate" },
    { image: gallery3, title: "Concert LED Screens", category: "Concert" },
  ],
  pricing: [
    { size: "Small", spec: "6ft × 4ft P2.5", price: "Rs. 15,000" },
    { size: "Medium", spec: "10ft × 6ft P3.9", price: "Rs. 25,000", popular: true },
    { size: "Large", spec: "16ft × 10ft P3.9", price: "Rs. 45,000" },
    { size: "XL", spec: "24ft × 14ft P3.9", price: "Rs. 75,000" },
  ],
  faqs: sharedFaqs("led wall rental"),
  relatedServices: relatedSvcs("LED Wall Rental"),
};

export const indoorLedData = makeService("indoorLed", "/services/indoor-led-wall", "Indoor LED Wall", "Rental", "Fine pixel pitch P2.5 LED walls perfect for indoor events. Crystal-clear visuals for conferences, weddings & corporate gatherings.", ledWallImg, "Our indoor LED walls feature ultra-fine pixel pitch technology for stunning visual clarity at close viewing distances.", [
  { icon: "CheckCircle2", title: "Ultra Fine Pitch", desc: "P2.5 pixel pitch for razor-sharp images at close range" },
  { icon: "CheckCircle2", title: "Lightweight Panels", desc: "Easy to install without structural modifications" },
  { icon: "CheckCircle2", title: "Silent Operation", desc: "Fanless design for noise-free environments" },
  { icon: "CheckCircle2", title: "High Refresh Rate", desc: "≥3840Hz for flicker-free camera recording" },
  { icon: "CheckCircle2", title: "Quick Assembly", desc: "Modular panels snap together in under 2 hours" },
  { icon: "CheckCircle2", title: "Multi-Input", desc: "HDMI, DVI, SDI, VGA — connect any source" },
], [
  { image: ledWallImg, title: "P2.5 Indoor", badge: "Best Seller", frontDescription: "Ultra-fine pitch for conferences", backDescription: "Our most popular indoor option with 2.5mm pixel pitch.", features: ["P2.5 pitch", "1500 nits", "250×250mm modules", "Ideal for 3-30m viewing"] },
  { image: gallery1, title: "Conference Setup", frontDescription: "Complete conference AV solution", backDescription: "Full conference package with LED wall, presentation system, and microphones.", features: ["LED wall + processor", "Presentation system", "Wireless mics", "Tech operator"] },
  { image: gallery2, title: "Wedding LED", frontDescription: "Stunning wedding backdrops", backDescription: "Create magical wedding atmospheres with large-format LED backdrops.", features: ["Custom sizes", "Photo/video display", "Live feed", "Romantic content"] },
], sharedGallery(ledWallImg, gallery1, gallery2, "Indoor LED"), [
  { size: "Compact", spec: "6ft × 4ft P2.5", price: "Rs. 12,000" },
  { size: "Standard", spec: "10ft × 6ft P2.5", price: "Rs. 22,000", popular: true },
  { size: "Premium", spec: "14ft × 8ft P2.5", price: "Rs. 35,000" },
  { size: "Grand", spec: "20ft × 12ft P2.5", price: "Rs. 55,000" },
]);

export const outdoorLedData = makeService("outdoorLed", "/services/outdoor-led-wall", "Outdoor LED Wall", "Rental", "High-brightness P3.9 LED walls with 6000+ nits for outdoor events. IP65 rated for rain and dust protection.", tv3, "Our outdoor LED walls are built to perform in the harshest conditions with 6000+ nits brightness and IP65 weatherproofing.", [
  { icon: "CheckCircle2", title: "Sunlight Readable", desc: "6000+ nits brightness visible even in direct sunlight" },
  { icon: "CheckCircle2", title: "Weatherproof", desc: "IP65 rated — works in rain, dust, and humidity" },
  { icon: "CheckCircle2", title: "Robust Build", desc: "Die-cast aluminum cabinets withstand outdoor conditions" },
  { icon: "CheckCircle2", title: "Large Format", desc: "Available up to 40ft wide for massive outdoor displays" },
  { icon: "CheckCircle2", title: "Quick Install", desc: "Modular panels with fast-lock connectors" },
  { icon: "CheckCircle2", title: "Remote Management", desc: "Cloud-based content management available" },
], [
  { image: tv3, title: "P3.9 Outdoor", badge: "Weatherproof", frontDescription: "6000-nit brightness for outdoor events", backDescription: "Our flagship outdoor LED wall with IP65 protection.", features: ["P3.9 pitch", "6000+ nits", "IP65 rated", "Sizes: 8-40ft"] },
  { image: gallery3, title: "Concert Setup", frontDescription: "Festival-grade LED installations", backDescription: "Massive LED screen setups for concerts with multi-screen synchronization.", features: ["Multi-screen sync", "Video processing", "Stage integration", "Live camera feed"] },
  { image: gallery5, title: "Product Launch", frontDescription: "Dramatic reveal displays", backDescription: "Create jaw-dropping product reveals with large-format LED walls.", features: ["Dramatic reveals", "Timed sequences", "Multi-angle", "Impact lighting"] },
], sharedGallery(tv3, gallery3, gallery5, "Outdoor LED"), [
  { size: "Medium", spec: "8ft × 6ft P3.9", price: "Rs. 20,000" },
  { size: "Large", spec: "16ft × 10ft P3.9", price: "Rs. 40,000", popular: true },
  { size: "XL", spec: "24ft × 14ft P3.9", price: "Rs. 65,000" },
  { size: "XXL", spec: "40ft × 20ft P3.9", price: "Rs. 1,20,000" },
]);

export const projectorData = makeService("projector", "/services/projector-rental", "Projector", "Rental", "HD & 4K projectors with motorized screens. Perfect for presentations, training sessions & small events.", projectorImg, "Our projector rental service provides high-lumen HD and 4K projectors paired with premium motorized screens.", [
  { icon: "CheckCircle2", title: "HD & 4K Options", desc: "Choose from Full HD or native 4K projectors" },
  { icon: "CheckCircle2", title: "High Lumens", desc: "4000-10000 lumens for any room lighting" },
  { icon: "CheckCircle2", title: "Motorized Screens", desc: "Automatic screens from 100\" to 300\" diagonal" },
  { icon: "CheckCircle2", title: "Wireless Casting", desc: "Present wirelessly from any device" },
  { icon: "CheckCircle2", title: "Complete Package", desc: "Projector, screen, cables, and remote included" },
  { icon: "CheckCircle2", title: "Setup Included", desc: "Professional alignment and focus by our technicians" },
], [
  { image: projectorImg, title: "HD Projector", badge: "Popular", frontDescription: "Full HD for presentations", backDescription: "Reliable Full HD projector with 4000+ lumens.", features: ["1920×1080 resolution", "4000+ lumens", "HDMI input", "100-200\" screen"] },
  { image: gallery4, title: "4K Projector", frontDescription: "Native 4K for premium events", backDescription: "Stunning native 4K projection with 8000+ lumens.", features: ["3840×2160 resolution", "8000+ lumens", "Laser light source", "200-300\" screen"] },
  { image: setupImg, title: "Complete Setup", frontDescription: "All-in-one presentation package", backDescription: "Everything you need: projector, screen, laptop, and support.", features: ["Projector + screen", "Laptop included", "Wireless clicker", "Tech support"] },
], sharedGallery(projectorImg, gallery4, setupImg, "Projector"), [
  { size: "Basic", spec: "HD + 100\" screen", price: "Rs. 2,500" },
  { size: "Standard", spec: "HD + 150\" screen", price: "Rs. 4,500", popular: true },
  { size: "Premium", spec: "4K + 200\" screen", price: "Rs. 8,000" },
  { size: "Grand", spec: "4K + 300\" screen", price: "Rs. 12,000" },
]);

export const ledTvData = makeService("ledTv", "/services/led-tv-rental", "LED TV", "Rental", "LED TVs from 32\" to 85\" for events. Perfect for exhibitions, retail displays & small presentations.", tv1, "Our LED TV rental offers screens from 32 to 85 inches for exhibitions, retail, and small presentations.", [
  { icon: "CheckCircle2", title: "Multiple Sizes", desc: "32\", 43\", 55\", 65\", 75\", and 85\" options" },
  { icon: "CheckCircle2", title: "4K Displays", desc: "Ultra HD resolution for crystal-clear visuals" },
  { icon: "CheckCircle2", title: "Portrait or Landscape", desc: "Mount in either orientation" },
  { icon: "CheckCircle2", title: "Stand or Wall Mount", desc: "Floor stands, table mounts, or wall brackets" },
  { icon: "CheckCircle2", title: "USB/HDMI/Network", desc: "Multiple input options" },
  { icon: "CheckCircle2", title: "Content Scheduling", desc: "Schedule content to auto-play on loop" },
], [
  { image: tv1, title: "Standard Display", frontDescription: "43-55\" for exhibitions", backDescription: "Mid-size LED TVs for exhibition booths and product displays.", features: ["43-55 inch", "4K resolution", "Floor stand included", "USB/HDMI"] },
  { image: tv2, title: "Large Display", frontDescription: "65-85\" for premium events", backDescription: "Large-format LED TVs for impactful presentations.", features: ["65-85 inch", "4K UHD", "Premium stand", "Network capable"] },
  { image: tv4, title: "Video Wall", frontDescription: "Multi-TV video wall setup", backDescription: "Create a massive display by combining multiple LED TVs.", features: ["2×2 or 3×3 config", "Video wall processor", "Synchronized content", "Custom layouts"] },
], sharedGallery(tv1, tv2, tv4, "LED TV"), [
  { size: "32\"", spec: "HD + floor stand", price: "Rs. 1,500" },
  { size: "43\"", spec: "4K + floor stand", price: "Rs. 2,500", popular: true },
  { size: "55\"", spec: "4K + floor stand", price: "Rs. 4,000" },
  { size: "65-85\"", spec: "4K + premium stand", price: "Rs. 7,000" },
]);

export const soundData = makeService("sound", "/services/sound-system-rental", "Sound System", "Rental", "JBL & Bose sound systems for 50 to 5000 guests. Line arrays, subs, mics & mixing consoles.", soundImg, "Professional sound system rentals featuring JBL and Bose equipment for events of any scale.", [
  { icon: "CheckCircle2", title: "JBL & Bose Gear", desc: "Professional-grade speakers from top brands" },
  { icon: "CheckCircle2", title: "Line Array Systems", desc: "Scalable from small tops to full line arrays" },
  { icon: "CheckCircle2", title: "Wireless Microphones", desc: "Shure & Sennheiser wireless mics" },
  { icon: "CheckCircle2", title: "Mixing Console", desc: "Digital mixing with experienced engineer" },
  { icon: "CheckCircle2", title: "Sub Bass", desc: "Powerful subwoofers for music" },
  { icon: "CheckCircle2", title: "Complete Coverage", desc: "Even sound distribution across venue" },
], [
  { image: soundImg, title: "Small Events", badge: "50-200 guests", frontDescription: "Compact sound for intimate events", backDescription: "Perfect for birthdays and small corporate events.", features: ["2× JBL tops", "1× subwoofer", "2× wireless mics", "Digital mixer"] },
  { image: sound1, title: "Medium Events", frontDescription: "Full sound for 200-1000 guests", backDescription: "Complete sound system for conferences and weddings.", features: ["4× JBL tops", "2× subs", "4× wireless mics", "Sound engineer"] },
  { image: sound2, title: "Large Events", frontDescription: "Concert sound for 1000-5000+", backDescription: "Line array system for concerts and festivals.", features: ["8× line array", "4× subs", "8+ mics", "Monitor mix"] },
], sharedGallery(soundImg, sound1, sound2, "Sound System"), [
  { size: "Basic", spec: "2 speakers + mixer", price: "Rs. 5,000" },
  { size: "Standard", spec: "4 speakers + subs", price: "Rs. 12,000", popular: true },
  { size: "Premium", spec: "Line array + subs", price: "Rs. 25,000" },
  { size: "Concert", spec: "Full line array + monitors", price: "Rs. 50,000" },
]);

export const lightingData = makeService("lighting", "/services/stage-lighting-rental", "Stage Lighting", "Rental", "Moving heads, par cans, lasers & haze machines for dramatic stage effects.", gallery2, "Transform any venue with professional stage lighting — moving heads, LED par cans, lasers, and atmospheric effects.", [
  { icon: "CheckCircle2", title: "Moving Head Lights", desc: "Intelligent lights with pan/tilt and color mixing" },
  { icon: "CheckCircle2", title: "LED Par Cans", desc: "RGBW par lights for color washing" },
  { icon: "CheckCircle2", title: "Laser Systems", desc: "Full-color laser shows" },
  { icon: "CheckCircle2", title: "Haze Machines", desc: "Professional haze for visible beams" },
  { icon: "CheckCircle2", title: "DMX Control", desc: "Professional console with programmed cues" },
  { icon: "CheckCircle2", title: "Stage Wash", desc: "Front, back, and side lighting" },
], [
  { image: gallery2, title: "Basic Package", badge: "Popular", frontDescription: "Par cans for ambient lighting", backDescription: "LED par can package for color washing and ambient lighting.", features: ["6× LED par cans", "DMX control", "Color mixing", "Setup included"] },
  { image: gallery3, title: "Moving Heads", frontDescription: "Intelligent lighting for shows", backDescription: "Moving head beams and spots for dynamic effects.", features: ["4× moving heads", "Beam & spot modes", "Music sync", "DMX programmed"] },
  { image: gallery6, title: "Full Production", frontDescription: "Complete lighting production", backDescription: "Full lighting with moving heads, lasers, and haze.", features: ["Moving heads + lasers", "Haze machines", "LED strips", "Full DMX show"] },
], sharedGallery(gallery2, gallery3, gallery6, "Lighting"), [
  { size: "Ambient", spec: "6 par cans", price: "Rs. 4,000" },
  { size: "Dynamic", spec: "4 moving heads + 6 pars", price: "Rs. 10,000", popular: true },
  { size: "Premium", spec: "Full moving head package", price: "Rs. 20,000" },
  { size: "Production", spec: "Complete lighting production", price: "Rs. 40,000" },
]);

export const photoVideoData = makeService("photoVideo", "/services/photography-videography", "Photography &", "Videography", "4K cameras, cinematic editing & live coverage for events of all sizes.", gallery3, "Professional photography and videography team capturing every moment in stunning detail.", [
  { icon: "CheckCircle2", title: "4K Cameras", desc: "Professional cinema cameras" },
  { icon: "CheckCircle2", title: "Drone Coverage", desc: "Aerial shots for venue overview" },
  { icon: "CheckCircle2", title: "Multi-Camera", desc: "2-4 camera setup" },
  { icon: "CheckCircle2", title: "Same-Day Edit", desc: "Quick highlight reel same day" },
  { icon: "CheckCircle2", title: "Cinematic Editing", desc: "Professional color grading" },
  { icon: "CheckCircle2", title: "Social Media Ready", desc: "Short-form content for reels" },
], [
  { image: gallery3, title: "Photography", badge: "Popular", frontDescription: "Professional event photography", backDescription: "Experienced photographers capturing every moment.", features: ["2 photographers", "8+ hours coverage", "500+ edited photos", "Online gallery"] },
  { image: gallery5, title: "Videography", frontDescription: "Cinematic event videography", backDescription: "Professional videography with 4K cameras and editing.", features: ["2 videographers", "4K cameras", "Highlight reel", "Full event video"] },
  { image: gallery6, title: "Complete Package", frontDescription: "Photo + video combo", backDescription: "Complete coverage with both teams working together.", features: ["Photo + video team", "Drone coverage", "Same-day edit", "Social media clips"] },
], sharedGallery(gallery3, gallery5, gallery6, "Photography"), [
  { size: "Photo Only", spec: "2 photographers", price: "Rs. 8,000" },
  { size: "Video Only", spec: "2 videographers", price: "Rs. 12,000", popular: true },
  { size: "Combo", spec: "Photo + Video team", price: "Rs. 18,000" },
  { size: "Premium", spec: "Full crew + drone", price: "Rs. 30,000" },
]);

export const karaokeData = makeService("karaoke", "/services/karaoke-rental", "Karaoke", "Rental", "Complete karaoke setups with 50,000+ songs, wireless mics & big-screen display.", gallery6, "Professional karaoke rental with 50,000+ tracks in Hindi, English, Punjabi, and regional languages.", [
  { icon: "CheckCircle2", title: "50,000+ Songs", desc: "Hindi, English, Punjabi & more" },
  { icon: "CheckCircle2", title: "Wireless Mics", desc: "2 wireless mics with anti-feedback" },
  { icon: "CheckCircle2", title: "Big Screen", desc: "55\"+ display with lyrics" },
  { icon: "CheckCircle2", title: "Party Lights", desc: "Colorful lights synced to music" },
  { icon: "CheckCircle2", title: "Song Requests", desc: "Request via phone or tablet" },
  { icon: "CheckCircle2", title: "Host Option", desc: "Optional professional karaoke host" },
], [
  { image: gallery6, title: "Basic Karaoke", badge: "Party Fun", frontDescription: "Karaoke for small parties", backDescription: "Complete karaoke setup for birthday and house parties.", features: ["50,000+ songs", "2 wireless mics", "Speaker + display", "Party lights"] },
  { image: gallery5, title: "Premium Karaoke", frontDescription: "Large event karaoke setup", backDescription: "Professional karaoke with premium sound and lighting.", features: ["Premium sound", "2 displays", "4 mics", "Professional lighting"] },
], sharedGallery(gallery6, gallery5, gallery4, "Karaoke"), [
  { size: "Basic", spec: "Speaker + 2 mics + display", price: "Rs. 5,000" },
  { size: "Standard", spec: "Full setup + lights", price: "Rs. 8,000", popular: true },
  { size: "Premium", spec: "Premium sound + 2 displays", price: "Rs. 15,000" },
]);

export const paSystemData = makeService("paSystem", "/services/pa-system-rental", "PA System", "Rental", "Public address systems for speeches, conferences & outdoor announcements.", sound1, "Clear, reliable sound for speeches, conferences, and outdoor announcements.", [
  { icon: "CheckCircle2", title: "Portable PA", desc: "Portable systems for small venues" },
  { icon: "CheckCircle2", title: "Column Speakers", desc: "Sleek column speakers for conferences" },
  { icon: "CheckCircle2", title: "Wireless Mics", desc: "Handheld, lapel, and headset options" },
  { icon: "CheckCircle2", title: "Outdoor PA", desc: "Weatherproof speakers for outdoors" },
  { icon: "CheckCircle2", title: "Mixing Console", desc: "Digital mixer with multiple inputs" },
  { icon: "CheckCircle2", title: "Recording Output", desc: "Clean output for recording" },
], [
  { image: sound1, title: "Portable PA", frontDescription: "Compact PA for small events", backDescription: "All-in-one portable PA for small meetings.", features: ["50-200 people", "Wireless mic", "Battery option", "30-min setup"] },
  { image: sound2, title: "Conference PA", frontDescription: "Professional conference sound", backDescription: "Column speaker system with multiple wireless mics.", features: ["200-1000 people", "Column speakers", "4 wireless mics", "Digital mixer"] },
], sharedGallery(sound1, sound2, setupImg, "PA System"), [
  { size: "Portable", spec: "1 speaker + 1 mic", price: "Rs. 3,000" },
  { size: "Standard", spec: "2 speakers + 2 mics", price: "Rs. 6,000", popular: true },
  { size: "Conference", spec: "4 speakers + 4 mics", price: "Rs. 12,000" },
  { size: "Outdoor", spec: "Full outdoor PA", price: "Rs. 20,000" },
]);

export const djEquipmentData = makeService("dj", "/services/dj-equipment-rental", "DJ Equipment", "Rental", "CDJs, controllers, mixers & complete DJ packages for parties and events.", gallery6, "DJ equipment rental for both professional DJs and event organizers.", [
  { icon: "CheckCircle2", title: "Pioneer CDJs", desc: "Industry-standard CDJ-2000NXS2" },
  { icon: "CheckCircle2", title: "DJ Mixers", desc: "DJM-900NXS2 professional mixers" },
  { icon: "CheckCircle2", title: "Controllers", desc: "All-in-one controllers for mobile DJs" },
  { icon: "CheckCircle2", title: "DJ Speakers", desc: "High-power speakers for DJ sound" },
  { icon: "CheckCircle2", title: "Booth Setup", desc: "Complete DJ booth with table" },
  { icon: "CheckCircle2", title: "DJ Available", desc: "Professional DJ on request" },
], [
  { image: gallery6, title: "Controller Setup", badge: "Popular", frontDescription: "All-in-one DJ controller", backDescription: "Professional controller with speakers for parties.", features: ["Pioneer controller", "2× speakers", "Subwoofer", "Laptop setup"] },
  { image: gallery5, title: "CDJ Setup", frontDescription: "Professional CDJ package", backDescription: "2× CDJ-2000NXS2 + DJM-900NXS2 mixer.", features: ["2× CDJ-2000NXS2", "DJM-900NXS2", "Booth setup", "Monitor speaker"] },
  { image: gallery3, title: "Full Package", frontDescription: "DJ + sound + lights", backDescription: "Complete DJ package with sound and lighting.", features: ["CDJ + mixer", "Full sound system", "Party lights", "DJ booth"] },
], sharedGallery(gallery6, gallery5, gallery3, "DJ Equipment"), [
  { size: "Controller", spec: "Controller + 2 speakers", price: "Rs. 6,000" },
  { size: "CDJ", spec: "2× CDJ + mixer + monitor", price: "Rs. 15,000", popular: true },
  { size: "Full Package", spec: "CDJ + sound + lights", price: "Rs. 25,000" },
]);

export const streamingData = makeService("streaming", "/services/live-streaming", "Live", "Streaming", "Professional multi-camera live streaming with YouTube & Facebook integration.", gallery4, "Broadcast-quality live streaming to YouTube, Facebook, Instagram, or any platform.", [
  { icon: "CheckCircle2", title: "Multi-Camera", desc: "2-4 cameras with professional switching" },
  { icon: "CheckCircle2", title: "Graphics Overlay", desc: "Lower thirds, logos, and branding" },
  { icon: "CheckCircle2", title: "Multi-Platform", desc: "Stream to multiple platforms simultaneously" },
  { icon: "CheckCircle2", title: "Internet Bonding", desc: "Reliable streaming with bonded internet" },
  { icon: "CheckCircle2", title: "Recording", desc: "Full event recording in 1080p or 4K" },
  { icon: "CheckCircle2", title: "Live Chat", desc: "Optional chat moderation service" },
], [
  { image: gallery4, title: "Single Camera", frontDescription: "Basic live stream setup", backDescription: "Single camera with encoder for straightforward streaming.", features: ["1 camera", "OBS encoder", "1080p output", "YouTube/FB"] },
  { image: gallery1, title: "Multi-Camera", frontDescription: "Professional multi-cam stream", backDescription: "Multiple cameras with live switching and graphics.", features: ["2-4 cameras", "Live switching", "Graphics overlay", "Multi-platform"] },
], sharedGallery(gallery4, gallery1, gallery2, "Streaming"), [
  { size: "Basic", spec: "1 camera + encoder", price: "Rs. 8,000" },
  { size: "Standard", spec: "2 cameras + graphics", price: "Rs. 18,000", popular: true },
  { size: "Premium", spec: "4 cameras + full production", price: "Rs. 35,000" },
]);

export const conferenceSetupData = makeService("conference", "/services/conference-setup", "Conference", "Setup", "End-to-end conference AV solutions with LED walls, sound, mics & technical crew.", gallery1, "Complete conference AV handling all requirements — LED walls, sound, microphones, and technical crew.", [
  { icon: "CheckCircle2", title: "LED Wall / Projector", desc: "Large-format display for presentations" },
  { icon: "CheckCircle2", title: "Sound System", desc: "Clear audio for speakers and Q&A" },
  { icon: "CheckCircle2", title: "Wireless Mics", desc: "Handheld, lapel, and podium mics" },
  { icon: "CheckCircle2", title: "Presentation System", desc: "Laptop, clicker, and input switching" },
  { icon: "CheckCircle2", title: "Technical Crew", desc: "On-site AV engineers throughout" },
  { icon: "CheckCircle2", title: "Live Stream Ready", desc: "Optional live streaming integration" },
], [
  { image: gallery1, title: "Small Conference", badge: "Up to 100", frontDescription: "AV for small conferences", backDescription: "Complete AV for small conferences with projector and sound.", features: ["HD projector + screen", "2 speakers", "2 wireless mics", "Tech support"] },
  { image: gallery4, title: "Large Conference", frontDescription: "Full AV for 100-1000 attendees", backDescription: "Professional setup with LED wall, line array, and crew.", features: ["LED wall display", "Line array sound", "4+ wireless mics", "2 tech engineers"] },
], sharedGallery(gallery1, gallery4, gallery2, "Conference"), [
  { size: "Small", spec: "Projector + basic sound", price: "Rs. 8,000" },
  { size: "Medium", spec: "LED wall + full sound", price: "Rs. 20,000", popular: true },
  { size: "Large", spec: "Full production setup", price: "Rs. 45,000" },
]);

export const weddingAvData = makeService("weddingAv", "/services/wedding-av", "Wedding", "AV", "Complete wedding AV with LED backdrops, concert sound, romantic lighting & technical crew.", gallery2, "Make your wedding unforgettable with complete wedding AV — LED backdrops, concert sound, and romantic lighting.", [
  { icon: "CheckCircle2", title: "LED Backdrop", desc: "Stunning LED walls for photos" },
  { icon: "CheckCircle2", title: "Concert Sound", desc: "Powerful sound for sangeet & reception" },
  { icon: "CheckCircle2", title: "Romantic Lighting", desc: "Ambient lighting for perfect mood" },
  { icon: "CheckCircle2", title: "Stage Setup", desc: "Elegant mandap stage with AV" },
  { icon: "CheckCircle2", title: "Live Feed", desc: "Live camera feed to LED wall" },
  { icon: "CheckCircle2", title: "DJ Integration", desc: "Seamless DJ setup with AV" },
], [
  { image: gallery2, title: "Wedding LED", badge: "Most Popular", frontDescription: "LED backdrop for weddings", backDescription: "Breathtaking wedding backdrop with large LED walls.", features: ["16×10ft LED wall", "Content display", "Live feed", "Photo backdrop"] },
  { image: gallery6, title: "Sangeet Night", frontDescription: "Complete sangeet AV setup", backDescription: "Full concert-grade setup for sangeet nights.", features: ["Line array sound", "Moving heads", "LED dance floor", "DJ integration"] },
  { image: gallery5, title: "Reception", frontDescription: "Elegant reception AV", backDescription: "Sophisticated AV for wedding receptions.", features: ["Ambient lighting", "Background music", "Speech system", "Elegant stage"] },
], sharedGallery(gallery2, gallery6, gallery5, "Wedding AV"), [
  { size: "Intimate", spec: "LED + sound for 100", price: "Rs. 25,000" },
  { size: "Grand", spec: "Full setup for 300", price: "Rs. 55,000", popular: true },
  { size: "Royal", spec: "Complete production 500+", price: "Rs. 1,00,000" },
]);
