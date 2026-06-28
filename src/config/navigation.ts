export interface NavItem {
  label: string;
  path: string;
  description?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: "Services",
    items: [
      { label: "All Services", path: "/services", description: "Browse our complete AV rental catalog" },
      { label: "LED Wall Rental", path: "/services/led-wall-rental", description: "P2.5 & P3.9 indoor and outdoor LED screens" },
      { label: "Indoor LED Wall", path: "/services/indoor-led-wall", description: "Fine pixel pitch LED walls for indoor events" },
      { label: "Outdoor LED Wall", path: "/services/outdoor-led-wall", description: "High brightness LED walls for outdoor events" },
      { label: "Projector Rental", path: "/services/projector-rental", description: "HD & 4K projectors with screens" },
      { label: "LED TV Rental", path: "/services/led-tv-rental", description: "LED TVs from 32\" to 85\" for events" },
      { label: "Sound System Rental", path: "/services/sound-system-rental", description: "JBL & Bose sound for 50–5000 guests" },
      { label: "Stage Lighting", path: "/services/stage-lighting-rental", description: "Moving heads, par cans, lasers & haze" },
      { label: "Photography & Videography", path: "/services/photography-videography", description: "4K cameras & cinematic editing" },
      { label: "Karaoke Rental", path: "/services/karaoke-rental", description: "Complete karaoke setups for parties" },
      { label: "PA System Rental", path: "/services/pa-system-rental", description: "Public address systems for speeches" },
      { label: "DJ Equipment Rental", path: "/services/dj-equipment-rental", description: "CDJs, controllers & DJ packages" },
      { label: "Live Streaming", path: "/services/live-streaming", description: "Professional multi-camera live streaming" },
      { label: "Conference Setup", path: "/services/conference-setup", description: "End-to-end conference AV solutions" },
      { label: "Wedding AV", path: "/services/wedding-av", description: "Complete audio-visual for weddings" },
    ],
  },
  {
    title: "Events",
    items: [
      { label: "Weddings", path: "/events/weddings", description: "LED backdrops, concert sound & romantic lighting" },
      { label: "Corporate Events", path: "/events/corporate", description: "Conferences, AGMs & product launches" },
      { label: "Conferences", path: "/events/conferences", description: "Multi-zone audio & large LED displays" },
      { label: "Concerts", path: "/events/concerts", description: "Line arrays, moving heads & LED video walls" },
      { label: "Exhibitions", path: "/events/exhibitions", description: "Booth AV, LED walls & interactive displays" },
      { label: "Birthday Parties", path: "/events/birthday-parties", description: "DJ setups, LED dance floors & karaoke" },
      { label: "Product Launches", path: "/events/product-launches", description: "Dramatic LED reveals & stage setups" },
      { label: "College Events", path: "/events/college-events", description: "Fests, seminars & cultural programs" },
      { label: "Cultural Events", path: "/events/cultural-events", description: "Traditional & modern cultural celebrations" },
      { label: "Fashion Shows", path: "/events/fashion-shows", description: "Runway lighting, sound & LED backdrops" },
      { label: "Award Functions", path: "/events/award-functions", description: "Elegant stage, sound & visual setups" },
      { label: "Music Festivals", path: "/events/music-festivals", description: "Festival-grade sound & LED installations" },
      { label: "Private Parties", path: "/events/private-parties", description: "Intimate gatherings with premium AV" },
    ],
  },
  {
    title: "Locations",
    items: [
      { label: "Mumbai", path: "/locations/mumbai", description: "AV rental across all Mumbai areas" },
      { label: "Navi Mumbai", path: "/locations/navi-mumbai", description: "AV equipment rental in Navi Mumbai" },
      { label: "Thane", path: "/locations/thane", description: "AV rental services in Thane" },
      { label: "Pune", path: "/locations/pune", description: "AV equipment rental in Pune" },
      { label: "Lonavala", path: "/locations/lonavala", description: "Destination event AV in Lonavala" },
      { label: "Surat", path: "/locations/surat", description: "AV rental services in Surat" },
      { label: "Goa", path: "/locations/goa", description: "Destination event AV in Goa" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", path: "/about" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Gallery", path: "/gallery" },
      { label: "Videos", path: "/videos" },
      { label: "Blog", path: "/blog" },
      { label: "Careers", path: "/careers" },
      { label: "Contact", path: "/contact" },
      { label: "Get a Quote", path: "/quote" },
      { label: "FAQ", path: "/faq" },
    ],
  },
];
