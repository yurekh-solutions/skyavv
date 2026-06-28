import type { BlogArticleData } from "@/components/shared/BlogArticleTemplate";
import type { FAQItem } from "@/components/shared/FAQAccordion";

const sharedFaqs = (topic: string): FAQItem[] => [
  { category: "General", question: `What is the most important thing to know about ${topic}?`, answer: "The key is matching equipment specs to your venue size and guest count. A 200-guest wedding needs very different AV from a 50-person conference. Always consult with your AV provider early." },
  { category: "Pricing", question: `How much should I budget for ${topic}?`, answer: "Budgets vary widely. For LED walls, expect Rs. 15,000–1,50,000/day depending on size. Sound systems range Rs. 5,000–2,00,000. Contact us for a custom quote based on your specific requirements." },
  { category: "Booking", question: "How far in advance should I book?", answer: "We recommend booking 2–4 weeks in advance for standard events and 6–8 weeks for large weddings or corporate events. However, we also handle same-day urgent requirements — call +91 86559 73366." },
];

const relatedArticles = (exclude: string) =>
  [
    { title: "How to Choose LED Wall for Your Event", path: "/blog/how-to-choose-led-wall" },
    { title: "LED Wall vs Projector: Which is Better?", path: "/blog/led-wall-vs-projector" },
    { title: "Event AV Planning Guide", path: "/blog/event-av-planning-guide" },
    { title: "LED Wall Rental Pricing Guide", path: "/blog/led-wall-pricing-guide" },
    { title: "Sound System Setup Guide", path: "/blog/sound-system-setup-guide" },
  ].filter((a) => a.path !== exclude);

export interface BlogMeta {
  title: string;
  description: string;
  path: string;
  readTime: string;
}

export const blogArticles: BlogMeta[] = [
  { title: "How to Choose LED Wall for Your Event", description: "Complete guide to selecting the perfect LED wall — pixel pitch, sizing, brightness, and pricing explained.", path: "/blog/how-to-choose-led-wall", readTime: "8 min read" },
  { title: "LED Wall vs Projector: Which is Better?", description: "Head-to-head comparison of LED walls and projectors for events — brightness, cost, image quality, and best use cases.", path: "/blog/led-wall-vs-projector", readTime: "6 min read" },
  { title: "Event AV Planning Guide", description: "Complete checklist and timeline for planning audio-visual for your event — from venue scout to showtime.", path: "/blog/event-av-planning-guide", readTime: "10 min read" },
  { title: "LED Wall Rental Pricing Guide", description: "Transparent pricing breakdown for LED wall rentals in Mumbai — P2.5 vs P3.9, size-based costs, and package deals.", path: "/blog/led-wall-pricing-guide", readTime: "7 min read" },
  { title: "Sound System Setup Guide for Events", description: "Expert guide to event sound — speaker placement, microphone setup, mixer basics, and troubleshooting tips.", path: "/blog/sound-system-setup-guide", readTime: "9 min read" },
];

export const howToChooseLedWallData: BlogArticleData = {
  seoKey: "blog/how-to-choose-led-wall",
  url: "/blog/how-to-choose-led-wall",
  title: "How to Choose LED Wall for Your Event — Complete Guide",
  description: "The complete guide to selecting the perfect LED wall for your event in Mumbai.",
  author: "Sky Vision Team",
  publishDate: "2025-01-15",
  readTime: "8 min read",
  intro: "Choosing the right LED wall can make or break your event's visual impact. With 15+ years and 5000+ events under our belt, we've compiled the definitive guide to help you make the perfect choice — whether it's a wedding, corporate event, concert, or exhibition.",
  sections: [
    {
      id: "pixel-pitch",
      heading: "Understanding Pixel Pitch",
      paragraphs: [
        "Pixel pitch is the distance (in mm) between the center of one LED pixel and the next. Common options are P1.5, P2.5, P3.9, and P4.8. The smaller the number, the higher the resolution and the closer the viewing distance.",
        "For indoor events with guests sitting close (weddings, conferences), P2.5 or P1.5 delivers crystal-clear images. For outdoor events or large venues where viewers are far away, P3.9 or P4.8 is perfectly adequate and more cost-effective.",
      ],
      list: ["P1.5 — Premium indoor, closest viewing distance, highest cost", "P2.5 — Standard indoor, excellent clarity, mid-range pricing", "P3.9 — Versatile indoor/outdoor, great value, most popular", "P4.8 — Outdoor/large venues, budget-friendly, long viewing distance"],
    },
    {
      id: "indoor-vs-outdoor",
      heading: "Indoor vs Outdoor LED Walls",
      paragraphs: [
        "Indoor LED walls prioritize resolution and color accuracy. They typically have brightness of 800–1500 nits, which is perfect for controlled lighting environments.",
        "Outdoor LED walls need to combat sunlight, so they feature 5000–6500 nits brightness and IP65 weatherproofing. They're built to withstand rain, dust, and temperature variations.",
      ],
      callout: { text: "Pro tip: If your event transitions from day to night outdoors, choose a high-brightness indoor/outdoor panel like P3.9 with 4500+ nits.", type: "tip" },
    },
    {
      id: "sizing",
      heading: "How to Determine the Right Size",
      paragraphs: [
        "LED wall size depends on three factors: venue dimensions, audience size, and content type. A general rule: the wall should be visible from the farthest seat without straining.",
        "For 100–200 guests, a 10ft × 6ft to 14ft × 8ft wall works well. For 300–500 guests, go 16ft × 9ft to 20ft × 10ft. For 1000+ guests at concerts, 24ft+ widths are common.",
      ],
      list: ["50–100 guests: 8ft × 5ft to 10ft × 6ft", "100–300 guests: 12ft × 7ft to 16ft × 9ft", "300–500 guests: 16ft × 9ft to 20ft × 10ft", "500–1000 guests: 20ft × 10ft to 24ft × 12ft", "1000+ guests: 24ft+ width, custom configurations"],
    },
    {
      id: "content-tips",
      heading: "Content Tips for LED Walls",
      paragraphs: [
        "Content designed for LED walls should use high contrast, bold typography, and avoid fine details. Remember: the content resolution should match the panel resolution for best results.",
        "For weddings, prepare a mix of photos, video clips, and live camera feed. For corporate events, ensure presentations are in 16:9 format with large fonts.",
      ],
      links: [{ text: "Check our LED Wall Rental Service", path: "/services/led-wall-rental" }],
    },
  ],
  faqs: sharedFaqs("LED wall selection"),
  relatedArticles: relatedArticles("/blog/how-to-choose-led-wall"),
};

export const ledWallVsProjectorData: BlogArticleData = {
  seoKey: "blog/led-wall-vs-projector",
  url: "/blog/led-wall-vs-projector",
  title: "LED Wall vs Projector: Which is Better for Your Event?",
  description: "Head-to-head comparison of LED walls and projectors for events.",
  author: "Sky Vision Team",
  publishDate: "2025-02-01",
  readTime: "6 min read",
  intro: "The age-old debate: LED wall or projector? The answer depends on your venue, audience size, ambient light, budget, and content type. Let's break it down with real-world examples from 5000+ events.",
  sections: [
    {
      id: "brightness",
      heading: "Brightness & Ambient Light",
      paragraphs: [
        "LED walls win hands-down in bright environments. With 5000–6500 nits outdoors, they're visible even in direct sunlight. Projectors typically max out at 10,000 lumens, which gets washed out in well-lit rooms.",
        "If your venue has lots of windows or is outdoors during daytime, LED wall is the clear winner. For dark conference rooms or evening-only events, projectors can deliver excellent results.",
      ],
    },
    {
      id: "image-quality",
      heading: "Image Quality & Resolution",
      paragraphs: [
        "Projectors can achieve higher native resolutions (4K is standard) at lower cost. However, LED walls at P2.5 pixel pitch deliver comparable perceived quality at typical viewing distances.",
        "LED walls also offer better color consistency across the screen — no hot spots or edge dimming that projectors suffer from.",
      ],
    },
    {
      id: "cost",
      heading: "Cost Comparison",
      paragraphs: [
        "Projectors are generally more affordable for small to medium setups. A good projector + screen rental runs Rs. 5,000–15,000/day. LED walls start at Rs. 15,000/day for a small setup.",
        "However, for large displays (14ft+), LED walls become more cost-effective because projector costs scale exponentially with size while LED panels scale linearly.",
      ],
      callout: { text: "Rule of thumb: Under 10ft display → Projector. Over 10ft → LED wall. Between 8–12ft → depends on ambient light.", type: "info" },
    },
    {
      id: "verdict",
      heading: "The Verdict",
      paragraphs: [
        "Choose LED wall for: outdoor events, large audiences (200+), bright venues, premium visual impact, and displays over 10ft.",
        "Choose projector for: small meetings, dark rooms, budget-conscious events, 4K content needs, and displays under 10ft.",
      ],
      links: [
        { text: "Explore LED Wall Rental", path: "/services/led-wall-rental" },
        { text: "Explore Projector Rental", path: "/services/projector-rental" },
      ],
    },
  ],
  faqs: sharedFaqs("LED wall vs projector"),
  relatedArticles: relatedArticles("/blog/led-wall-vs-projector"),
};

export const eventAvPlanningData: BlogArticleData = {
  seoKey: "blog/event-av-planning-guide",
  url: "/blog/event-av-planning-guide",
  title: "Event AV Planning Guide — Complete Checklist & Timeline",
  description: "Complete checklist and timeline for planning event audio-visual.",
  author: "Sky Vision Team",
  publishDate: "2025-02-15",
  readTime: "10 min read",
  intro: "Planning AV for an event can feel overwhelming. This comprehensive guide breaks it down into a clear timeline with checklists, so you don't miss anything — from 8 weeks before to showtime.",
  sections: [
    {
      id: "8-weeks-before",
      heading: "8 Weeks Before: Initial Planning",
      list: [
        "Define event type, expected guest count, and venue",
        "Determine AV requirements: LED wall, sound, lighting, photography",
        "Set AV budget (typically 15–25% of total event budget)",
        "Research and shortlist AV vendors — get 3 quotes minimum",
        "Check venue power capacity and access points",
      ],
    },
    {
      id: "6-weeks-before",
      heading: "6 Weeks Before: Vendor Selection",
      list: [
        "Finalize AV vendor and sign contract",
        "Share venue floor plan with AV team",
        "Discuss content requirements (presentations, videos, live feed)",
        "Plan stage layout and seating arrangement with AV in mind",
        "Book any additional services (live streaming, photography)",
      ],
    },
    {
      id: "4-weeks-before",
      heading: "4 Weeks Before: Content & Technical",
      list: [
        "Start preparing event content — presentations, slideshows, videos",
        "Confirm LED wall size and pixel pitch based on venue",
        "Plan microphone requirements (wireless handhelds, lapels, podium)",
        "Discuss special effects (haze, confetti, pyrotechnics) if any",
        "Schedule a venue site visit with AV team",
      ],
    },
    {
      id: "1-week-before",
      heading: "1 Week Before: Final Checks",
      list: [
        "Final content deadline — all presentations, videos ready",
        "Confirm delivery timing and setup schedule with vendor",
        "Share run-of-show document with AV team",
        "Test any pre-recorded content on similar equipment",
        "Confirm power requirements and backup plans",
      ],
      callout: { text: "Always have a backup plan for critical equipment. We always bring spare cables, adapters, and even backup media players for important events.", type: "tip" },
    },
    {
      id: "event-day",
      heading: "Event Day: Showtime",
      list: [
        "AV team arrives for setup (typically 3–4 hours before event)",
        "Sound check and visual check with event coordinator",
        "Test all microphones, video sources, and audio levels",
        "Designate a point person for AV coordination during event",
        "Enjoy your event — your AV team has everything covered!",
      ],
      links: [{ text: "Get a Free AV Quote", path: "/quote" }],
    },
  ],
  faqs: sharedFaqs("event AV planning"),
  relatedArticles: relatedArticles("/blog/event-av-planning-guide"),
};

export const ledWallPricingData: BlogArticleData = {
  seoKey: "blog/led-wall-pricing-guide",
  url: "/blog/led-wall-pricing-guide",
  title: "LED Wall Rental Pricing Guide — Mumbai Rates & Packages",
  description: "Transparent pricing breakdown for LED wall rentals in Mumbai.",
  author: "Sky Vision Team",
  publishDate: "2025-03-01",
  readTime: "7 min read",
  intro: "Wondering how much LED wall rental costs in Mumbai? Here's a transparent breakdown of pricing factors, typical rates, and how to get the best value for your event.",
  sections: [
    {
      id: "pricing-factors",
      heading: "What Determines LED Wall Pricing?",
      paragraphs: [
        "LED wall rental pricing depends on four main factors: panel type (pixel pitch), total screen size, rental duration, and additional services like content management or technical operation.",
        "Panel type has the biggest impact. P2.5 indoor panels cost more per square foot than P3.9 panels. Outdoor high-brightness panels carry a premium over indoor panels.",
      ],
    },
    {
      id: "typical-rates",
      heading: "Typical Rates in Mumbai (2025)",
      paragraphs: [
        "Here are approximate daily rates for common LED wall configurations in Mumbai. These include delivery, setup, and basic technical support within city limits.",
      ],
      list: [
        "P2.5 Indoor (8ft × 5ft): Rs. 15,000–25,000/day",
        "P2.5 Indoor (12ft × 7ft): Rs. 30,000–50,000/day",
        "P3.9 Indoor/Outdoor (14ft × 8ft): Rs. 35,000–60,000/day",
        "P3.9 Outdoor (16ft × 9ft): Rs. 45,000–80,000/day",
        "P3.9 Large (20ft × 10ft+): Rs. 70,000–1,50,000/day",
        "Custom installations (24ft+): Rs. 1,00,000–3,00,000/day",
      ],
      callout: { text: "All our rates include delivery within Mumbai city limits, professional setup, and teardown. No hidden charges!", type: "info" },
    },
    {
      id: "save-money",
      heading: "How to Get the Best Value",
      list: [
        "Book early — advance bookings get 10–15% discount",
        "Choose the right pixel pitch — don't overpay for P2.5 if P3.9 suffices",
        "Multi-day events get reduced per-day rates",
        "Combine services (LED + sound + lighting) for package pricing",
        "Off-peak season (monsoon) often has special rates",
      ],
    },
    {
      id: "get-quote",
      heading: "Get an Accurate Quote",
      paragraphs: [
        "The best way to get accurate pricing is to share your event details with us. We'll recommend the optimal setup based on your venue, guest count, and content — and provide transparent pricing with no surprises.",
      ],
      links: [{ text: "Request a Free Quote", path: "/quote" }, { text: "View LED Wall Rental Service", path: "/services/led-wall-rental" }],
    },
  ],
  faqs: sharedFaqs("LED wall pricing"),
  relatedArticles: relatedArticles("/blog/led-wall-pricing-guide"),
};

export const soundSystemSetupData: BlogArticleData = {
  seoKey: "blog/sound-system-setup-guide",
  url: "/blog/sound-system-setup-guide",
  title: "Sound System Setup Guide for Events — Expert Tips",
  description: "Expert guide to event sound system setup.",
  author: "Sky Vision Team",
  publishDate: "2025-03-15",
  readTime: "9 min read",
  intro: "Great sound can elevate an event from good to unforgettable. This guide covers speaker placement, microphone setup, mixer basics, and troubleshooting — all from our 15 years of powering 5000+ events.",
  sections: [
    {
      id: "speaker-placement",
      heading: "Speaker Placement Fundamentals",
      paragraphs: [
        "Speaker placement is the single most important factor in sound quality. The goal is even coverage — every guest should hear clearly without being too loud or too quiet.",
        "For small rooms (under 100 guests), two speakers on stands at the front of the room, angled slightly inward, provide excellent coverage. Keep them above head height (6ft+) to avoid absorption by people.",
        "For larger venues (200+ guests), use a line array or clustered point-source system. Position main speakers flanking the stage, with delay speakers at 50ft intervals for large halls.",
      ],
      list: [
        "Small rooms (50–100): 2× point-source speakers on stands",
        "Medium halls (100–300): 4× speakers (2 mains + 2 fills)",
        "Large halls (300–500): Line array or 6+ speaker cluster",
        "Outdoors (500+): Line array with subwoofers and delay towers",
      ],
    },
    {
      id: "microphones",
      heading: "Microphone Setup",
      paragraphs: [
        "Choose the right microphone for each use case. Wireless handhelds for emcees and Q&A, lapel/lavalier mics for speakers who need hands-free, and shotgun mics for panel discussions.",
        "Always do a frequency scan before the event to avoid interference. Keep spare batteries for all wireless mics. Position lapel mics 6 inches below the chin for best pickup.",
      ],
      callout: { text: "Pro tip: Always do a sound check with the actual person speaking. Voice levels vary dramatically between individuals.", type: "tip" },
    },
    {
      id: "mixer-basics",
      heading: "Mixer Basics",
      paragraphs: [
        "The mixer (console) is the brain of your sound system. It combines all audio sources — microphones, music players, video audio — and controls their levels, EQ, and effects.",
        "Start with all faders at unity (0dB). Bring up sources one by one. The golden rule: the master output should peak at -6dB to -3dB, never hitting 0dB (clipping).",
      ],
    },
    {
      id: "troubleshooting",
      heading: "Common Issues & Troubleshooting",
      list: [
        "Feedback/screeching: Move mic away from speakers, reduce mic gain, or use EQ to cut the feedback frequency",
        "No sound: Check all cable connections, ensure phantom power is on for condenser mics, verify correct input channel is selected",
        "Muddy audio: Cut low-mid frequencies (200–500Hz) on speech mics, add high-pass filter to remove rumble",
        "Uneven coverage: Add delay speakers or adjust speaker angles. Use a SPL meter app to check levels across the venue",
      ],
      links: [{ text: "Explore Sound System Rental", path: "/services/sound-system-rental" }, { text: "Get a Sound Quote", path: "/quote" }],
    },
  ],
  faqs: sharedFaqs("sound system setup"),
  relatedArticles: relatedArticles("/blog/sound-system-setup-guide"),
};
