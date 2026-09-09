import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "@/components/layouts/MainLayout";
import PageLoader from "@/components/layouts/PageLoader";

const queryClient = new QueryClient();

// Lazy-loaded page components
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Quote = React.lazy(() => import("./pages/Quote"));
const FAQPage = React.lazy(() => import("./pages/FAQPage"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Videos = React.lazy(() => import("./pages/Videos"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const Terms = React.lazy(() => import("./pages/Terms"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Careers = React.lazy(() => import("./pages/Careers"));

// Service pages
const ServicesOverview = React.lazy(() => import("./pages/services/ServicesOverview"));
const LedWallRental = React.lazy(() => import("./pages/services/LedWallRental"));
const IndoorLedWall = React.lazy(() => import("./pages/services/IndoorLedWall"));
const OutdoorLedWall = React.lazy(() => import("./pages/services/OutdoorLedWall"));
const ProjectorRental = React.lazy(() => import("./pages/services/ProjectorRental"));
const LedTvRental = React.lazy(() => import("./pages/services/LedTvRental"));
const SoundSystemRental = React.lazy(() => import("./pages/services/SoundSystemRental"));
const StageLightingRental = React.lazy(() => import("./pages/services/StageLightingRental"));
const PhotographyVideography = React.lazy(() => import("./pages/services/PhotographyVideography"));
const KaraokeRental = React.lazy(() => import("./pages/services/KaraokeRental"));
const PaSystemRental = React.lazy(() => import("./pages/services/PaSystemRental"));
const DjEquipmentRental = React.lazy(() => import("./pages/services/DjEquipmentRental"));
const LiveStreaming = React.lazy(() => import("./pages/services/LiveStreaming"));
const ConferenceSetup = React.lazy(() => import("./pages/services/ConferenceSetup"));
const WeddingAv = React.lazy(() => import("./pages/services/WeddingAv"));

// Event pages
const Weddings = React.lazy(() => import("./pages/events/Weddings"));
const CorporateEvents = React.lazy(() => import("./pages/events/CorporateEvents"));
const Conferences = React.lazy(() => import("./pages/events/Conferences"));
const Concerts = React.lazy(() => import("./pages/events/Concerts"));
const Exhibitions = React.lazy(() => import("./pages/events/Exhibitions"));
const BirthdayParties = React.lazy(() => import("./pages/events/BirthdayParties"));
const ProductLaunches = React.lazy(() => import("./pages/events/ProductLaunches"));
const CollegeEvents = React.lazy(() => import("./pages/events/CollegeEvents"));
const CulturalEvents = React.lazy(() => import("./pages/events/CulturalEvents"));
const FashionShows = React.lazy(() => import("./pages/events/FashionShows"));
const AwardFunctions = React.lazy(() => import("./pages/events/AwardFunctions"));
const MusicFestivals = React.lazy(() => import("./pages/events/MusicFestivals"));
const PrivateParties = React.lazy(() => import("./pages/events/PrivateParties"));

// Location pages
const Mumbai = React.lazy(() => import("./pages/locations/Mumbai"));
const NaviMumbai = React.lazy(() => import("./pages/locations/NaviMumbai"));
const Thane = React.lazy(() => import("./pages/locations/Thane"));
const Pune = React.lazy(() => import("./pages/locations/Pune"));
const Lonavala = React.lazy(() => import("./pages/locations/Lonavala"));
const Surat = React.lazy(() => import("./pages/locations/Surat"));
const Goa = React.lazy(() => import("./pages/locations/Goa"));

// Blog pages
const Blog = React.lazy(() => import("./pages/blog/Blog"));
const HowToChooseLedWall = React.lazy(() => import("./pages/blog/HowToChooseLedWall"));
const LedWallVsProjector = React.lazy(() => import("./pages/blog/LedWallVsProjector"));
const EventAvPlanningGuide = React.lazy(() => import("./pages/blog/EventAvPlanningGuide"));
const LedWallPricingGuide = React.lazy(() => import("./pages/blog/LedWallPricingGuide"));
const SoundSystemSetupGuide = React.lazy(() => import("./pages/blog/SoundSystemSetupGuide"));
const CorporateEventAvGuide = React.lazy(() => import("./pages/blog/CorporateEventAvGuide"));
const WeddingAvPlanningGuide = React.lazy(() => import("./pages/blog/WeddingAvPlanningGuide"));
const StageLightingGuide = React.lazy(() => import("./pages/blog/StageLightingGuide"));
const AvRentalMistakes = React.lazy(() => import("./pages/blog/AvRentalMistakes"));
const IndoorVsOutdoorLedWall = React.lazy(() => import("./pages/blog/IndoorVsOutdoorLedWall"));

// NotFound
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              {/* Core pages */}
              <Route path="/" element={<Suspense fallback={<PageLoader />}><Index /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
              <Route path="/quote" element={<Suspense fallback={<PageLoader />}><Quote /></Suspense>} />
              <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FAQPage /></Suspense>} />
              <Route path="/gallery" element={<Suspense fallback={<PageLoader />}><Gallery /></Suspense>} />
              <Route path="/videos" element={<Suspense fallback={<PageLoader />}><Videos /></Suspense>} />
              <Route path="/testimonials" element={<Suspense fallback={<PageLoader />}><Testimonials /></Suspense>} />
              <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
              <Route path="/careers" element={<Suspense fallback={<PageLoader />}><Careers /></Suspense>} />
              <Route path="/terms" element={<Suspense fallback={<PageLoader />}><Terms /></Suspense>} />
              <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>} />

              {/* Service pages */}
              <Route path="/services" element={<Suspense fallback={<PageLoader />}><ServicesOverview /></Suspense>} />
              <Route path="/services/led-wall-rental" element={<Suspense fallback={<PageLoader />}><LedWallRental /></Suspense>} />
              <Route path="/services/indoor-led-wall" element={<Suspense fallback={<PageLoader />}><IndoorLedWall /></Suspense>} />
              <Route path="/services/outdoor-led-wall" element={<Suspense fallback={<PageLoader />}><OutdoorLedWall /></Suspense>} />
              <Route path="/services/projector-rental" element={<Suspense fallback={<PageLoader />}><ProjectorRental /></Suspense>} />
              <Route path="/services/led-tv-rental" element={<Suspense fallback={<PageLoader />}><LedTvRental /></Suspense>} />
              <Route path="/services/sound-system-rental" element={<Suspense fallback={<PageLoader />}><SoundSystemRental /></Suspense>} />
              <Route path="/services/stage-lighting-rental" element={<Suspense fallback={<PageLoader />}><StageLightingRental /></Suspense>} />
              <Route path="/services/photography-videography" element={<Suspense fallback={<PageLoader />}><PhotographyVideography /></Suspense>} />
              <Route path="/services/karaoke-rental" element={<Suspense fallback={<PageLoader />}><KaraokeRental /></Suspense>} />
              <Route path="/services/pa-system-rental" element={<Suspense fallback={<PageLoader />}><PaSystemRental /></Suspense>} />
              <Route path="/services/dj-equipment-rental" element={<Suspense fallback={<PageLoader />}><DjEquipmentRental /></Suspense>} />
              <Route path="/services/live-streaming" element={<Suspense fallback={<PageLoader />}><LiveStreaming /></Suspense>} />
              <Route path="/services/conference-setup" element={<Suspense fallback={<PageLoader />}><ConferenceSetup /></Suspense>} />
              <Route path="/services/wedding-av" element={<Suspense fallback={<PageLoader />}><WeddingAv /></Suspense>} />

              {/* Event pages */}
              <Route path="/events/weddings" element={<Suspense fallback={<PageLoader />}><Weddings /></Suspense>} />
              <Route path="/events/corporate" element={<Suspense fallback={<PageLoader />}><CorporateEvents /></Suspense>} />
              <Route path="/events/conferences" element={<Suspense fallback={<PageLoader />}><Conferences /></Suspense>} />
              <Route path="/events/concerts" element={<Suspense fallback={<PageLoader />}><Concerts /></Suspense>} />
              <Route path="/events/exhibitions" element={<Suspense fallback={<PageLoader />}><Exhibitions /></Suspense>} />
              <Route path="/events/birthday-parties" element={<Suspense fallback={<PageLoader />}><BirthdayParties /></Suspense>} />
              <Route path="/events/product-launches" element={<Suspense fallback={<PageLoader />}><ProductLaunches /></Suspense>} />
              <Route path="/events/college-events" element={<Suspense fallback={<PageLoader />}><CollegeEvents /></Suspense>} />
              <Route path="/events/cultural-events" element={<Suspense fallback={<PageLoader />}><CulturalEvents /></Suspense>} />
              <Route path="/events/fashion-shows" element={<Suspense fallback={<PageLoader />}><FashionShows /></Suspense>} />
              <Route path="/events/award-functions" element={<Suspense fallback={<PageLoader />}><AwardFunctions /></Suspense>} />
              <Route path="/events/music-festivals" element={<Suspense fallback={<PageLoader />}><MusicFestivals /></Suspense>} />
              <Route path="/events/private-parties" element={<Suspense fallback={<PageLoader />}><PrivateParties /></Suspense>} />

              {/* Location pages */}
              <Route path="/locations/mumbai" element={<Suspense fallback={<PageLoader />}><Mumbai /></Suspense>} />
              <Route path="/locations/navi-mumbai" element={<Suspense fallback={<PageLoader />}><NaviMumbai /></Suspense>} />
              <Route path="/locations/thane" element={<Suspense fallback={<PageLoader />}><Thane /></Suspense>} />
              <Route path="/locations/pune" element={<Suspense fallback={<PageLoader />}><Pune /></Suspense>} />
              <Route path="/locations/lonavala" element={<Suspense fallback={<PageLoader />}><Lonavala /></Suspense>} />
              <Route path="/locations/surat" element={<Suspense fallback={<PageLoader />}><Surat /></Suspense>} />
              <Route path="/locations/goa" element={<Suspense fallback={<PageLoader />}><Goa /></Suspense>} />

              {/* Blog article pages */}
              <Route path="/blog/how-to-choose-led-wall" element={<Suspense fallback={<PageLoader />}><HowToChooseLedWall /></Suspense>} />
              <Route path="/blog/led-wall-vs-projector" element={<Suspense fallback={<PageLoader />}><LedWallVsProjector /></Suspense>} />
              <Route path="/blog/event-av-planning-guide" element={<Suspense fallback={<PageLoader />}><EventAvPlanningGuide /></Suspense>} />
              <Route path="/blog/led-wall-pricing-guide" element={<Suspense fallback={<PageLoader />}><LedWallPricingGuide /></Suspense>} />
              <Route path="/blog/sound-system-setup-guide" element={<Suspense fallback={<PageLoader />}><SoundSystemSetupGuide /></Suspense>} />
              <Route path="/blog/corporate-event-av-guide" element={<Suspense fallback={<PageLoader />}><CorporateEventAvGuide /></Suspense>} />
              <Route path="/blog/wedding-av-planning-guide" element={<Suspense fallback={<PageLoader />}><WeddingAvPlanningGuide /></Suspense>} />
              <Route path="/blog/stage-lighting-guide" element={<Suspense fallback={<PageLoader />}><StageLightingGuide /></Suspense>} />
              <Route path="/blog/av-rental-mistakes" element={<Suspense fallback={<PageLoader />}><AvRentalMistakes /></Suspense>} />
              <Route path="/blog/indoor-vs-outdoor-led-wall" element={<Suspense fallback={<PageLoader />}><IndoorVsOutdoorLedWall /></Suspense>} />

              {/* Catch-all */}
              <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
