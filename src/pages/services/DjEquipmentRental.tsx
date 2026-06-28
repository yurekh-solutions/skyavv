   import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import type { ServicePageData } from "@/components/shared/ServicePageTemplate";
import type { TabItem } from "@/components/shared/TabPanel";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import type { GalleryItem } from "@/components/shared/ImageGallery";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import sound2 from "@/assets/sound2.png";

const specTabs: TabItem[] = [
  { value: "players", label: "Players", content: (
    <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4">DJ Players & Controllers</h3>
      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div><span className="text-gray-500">CDJs:</span> <span className="font-semibold">2× Pioneer CDJ-2000NXS2</span></div>
        <div><span className="text-gray-500">Mixer:</span> <span className="font-semibold">Pioneer DJM-900NXS2</span></div>
        <div><span className="text-gray-500">Controller:</span> <span className="font-semibold">Pioneer DDJ-1000</span></div>
        <div><span className="text-gray-500">Headphones:</span> <span className="font-semibold">Pioneer HDJ-X10</span></div>
      </div>
    </div>
  )},
  { value: "speakers", label: "Speakers", content: (
    <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4">DJ Speaker Systems</h3>
      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div><span className="text-gray-500">Tops:</span> <span className="font-semibold">2× JBL SRX 815 (1500W)</span></div>
        <div><span className="text-gray-500">Subs:</span> <span className="font-semibold">2× JBL SRX 828 (2000W)</span></div>
        <div><span className="text-gray-500">Monitor:</span> <span className="font-semibold">2× JBL EON 712</span></div>
        <div><span className="text-gray-500">Covers:</span> <span className="font-semibold">Up to 1000 guests</span></div>
      </div>
    </div>
  )},
  { value: "lights", label: "DJ Lights", content: (
    <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4">DJ Lighting Package</h3>
      <ul className="space-y-2 text-sm">
        {["4× Moving head beam lights", "2× Derby multi-beam lights", "2× Strobe lights", "1× Haze machine", "DMX controller & foot switch", "LED uplighters (8 units)"].map(item => (
          <li key={item} className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> {item}</li>
        ))}
      </ul>
    </div>
  )},
];

const gallery: GalleryItem[] = [
  { image: gallery6, title: "DJ Setup at Party", category: "Party", description: "Pioneer CDJs with JBL speakers at JW Marriott" },
  { image: gallery3, title: "Concert DJ Setup", category: "Concert", description: "Full DJ rig with moving heads and subs" },
  { image: sound2, title: "DJ Equipment", category: "Equipment", description: "Pioneer mixer and CDJ setup" },
];

const faqs: FAQItem[] = [
  { category: "General", question: "What DJ equipment do you provide?", answer: "We provide complete DJ setups including Pioneer CDJ-2000NXS2 players, DJM-900NXS2 mixer, JBL SRX speakers and subwoofers, Pioneer HDJ-X10 headphones, and DJ lighting packages. Everything a professional DJ needs to perform." },
  { category: "Pricing", question: "How much does DJ equipment rental cost?", answer: "Basic DJ setup (controller, 2 speakers, headphones) starts at Rs. 6,000/day. Professional setup (CDJs, mixer, 4 speakers, 2 subs) starts at Rs. 15,000/day. Full package with lighting starts at Rs. 25,000/day." },
  { category: "Setup", question: "Do you provide a DJ or just the equipment?", answer: "We offer both! You can rent just the equipment (we set it up for your DJ), or we can provide a professional DJ who brings their own music library. Our DJs specialize in Bollywood, EDM, commercial, and retro music." },
  { category: "Technical", question: "Can I connect my laptop to the DJ controller?", answer: "Yes! Our Pioneer DDJ-1000 controller connects to any laptop via USB and works with Rekordbox, Serato, or Traktor. The CDJs also support USB drive playback without a laptop." },
];

const data: ServicePageData = {
  seoKey: "services/dj-equipment-rental",
  url: "/services/dj-equipment-rental",
  pageTitle: "DJ Equipment",
  pageHighlight: "Rental",
  description: "DJ equipment rental in Mumbai — Pioneer CDJs, DJ mixers, controllers, speakers, headphones, lights. For clubs, parties, weddings, corporate events. Professional-grade gear.",
  heroImage: gallery6,
  overview: "Get the club-grade DJ equipment you need for an unforgettable party. We rent Pioneer CDJ-2000NXS2 players, DJM-900NXS2 mixers, DDJ-1000 controllers, JBL SRX speakers with subwoofers, and complete DJ lighting packages. Whether you're a professional DJ needing gear for a gig or hosting a party and need a DJ setup, we've got you covered. Optional professional DJ service available.",
  features: [
    { icon: "Star", title: "Pioneer CDJ-2000NXS2", desc: "Industry-standard professional DJ media players with USB and Wi-Fi." },
    { icon: "CheckCircle2", title: "JBL SRX Speakers", desc: "1500W JBL tops with 2000W subwoofers for thundering bass." },
    { icon: "Star", title: "DDJ-1000 Controller", desc: "Pioneer professional DJ controller with Rekordbox and Serato support." },
    { icon: "CheckCircle2", title: "DJ Lighting", desc: "Moving heads, derby lights, strobes, and haze machines for club vibes." },
    { icon: "Star", title: "Pro Headphones", desc: "Pioneer HDJ-X10 professional DJ headphones included with every setup." },
    { icon: "CheckCircle2", title: "Optional DJ", desc: "Professional DJs available — Bollywood, EDM, commercial, retro specialists." },
  ],
  flipCards: [
    { image: gallery6, title: "Party DJ Setup", badge: "Popular", frontDescription: "Complete setup for parties & weddings", backDescription: "Pioneer DDJ-1000 controller, 2× JBL speakers, subwoofer, and headphones. Perfect for house parties, sangeets, and corporate events.", features: ["DDJ-1000 controller", "2× JBL speakers", "1× subwoofer", "Headphones"] },
    { image: gallery3, title: "Club Setup", badge: "Pro", frontDescription: "CDJ setup for professional DJs", backDescription: "2× Pioneer CDJ-2000NXS2 + DJM-900NXS2 mixer, 4× JBL tops, 2× subs, and monitor. Industry-standard gear for professional DJs.", features: ["2× CDJ-2000NXS2", "DJM-900NXS2", "4× speakers + 2× subs", "Monitor"] },
    { image: sound2, title: "DJ + Lighting", frontDescription: "Full package with lights", backDescription: "Complete DJ setup with moving heads, derby lights, strobes, and haze. Everything you need for a club-quality experience at any venue.", features: ["Full sound system", "Moving heads", "DJ lights", "Haze machine"] },
  ],
  specTabs,
  gallery,
  pricing: [
    { size: "Basic", spec: "Controller + 2 speakers", price: "Rs. 6,000" },
    { size: "Standard", spec: "CDJs + mixer + speakers", price: "Rs. 15,000", popular: true },
    { size: "Full Package", spec: "CDJs + sound + lights", price: "Rs. 25,000" },
    { size: "Concert", spec: "Full production + DJ", price: "Rs. 45,000" },
  ],
  faqs,
  relatedServices: [
    { title: "Sound System Rental", path: "/services/sound-system-rental" },
    { title: "Stage Lighting", path: "/services/stage-lighting-rental" },
    { title: "Karaoke Rental", path: "/services/karaoke-rental" },
    { title: "LED Wall Rental", path: "/services/led-wall-rental" },
    { title: "Photography & Video", path: "/services/photography-videography" },
  ],
};

export default function DjEquipmentRental() {
  return <ServicePageTemplate data={data} />;
}
