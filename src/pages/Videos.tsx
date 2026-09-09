import { useState } from "react";
import { X, Play, Video, Monitor } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import TabPanel from "@/components/shared/TabPanel";
import type { TabItem } from "@/components/shared/TabPanel";
import CTASection from "@/components/shared/CTASection";
import { pageSEO } from "@/config/seo";

// Video paths — loaded dynamically, not bundled as static imports
const VIDEOS = {
  ledwall1: "/videos/ledwall1.mp4",
  ledwall2: "/videos/ledwall2.mp4",
  ledtv: "/videos/ledtv.mp4",
  ledtv2: "/videos/ledtv2.mp4",
  ledtv4: "/videos/ledtv4.mp4",
  led77: "/videos/led77.mp4",
};

const Videos = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  const videoCards = [
    { src: VIDEOS.ledwall1, title: "LED Wall Live Demo", category: "LED Walls", desc: "Watch our P2.5 LED wall in action with vibrant colors" },
    { src: VIDEOS.ledwall2, title: "Outdoor LED Wall Setup", category: "LED Walls", desc: "6000 nit outdoor LED wall at a daytime concert event" },
    { src: VIDEOS.led77, title: "LED Wall Event Coverage", category: "LED Walls", desc: "Large-format LED wall powering a corporate conference" },
    { src: VIDEOS.ledtv, title: "LED TV Display Setup", category: "LED TVs", desc: "Multiple LED TVs configured for an exhibition booth" },
    { src: VIDEOS.ledtv2, title: "LED TV Product Display", category: "LED TVs", desc: "Large-screen TV setup for a product launch event" },
    { src: VIDEOS.ledtv4, title: "LED TV Wall Configuration", category: "LED TVs", desc: "Multi-screen LED TV wall for a trade show display" },
  ];

  const tabs: TabItem[] = [
    { value: "all", label: "All Videos", content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoCards.map((v, i) => (
          <VideoCard key={i} video={v} onClick={() => setPlaying(v.src)} />
        ))}
      </div>
    )},
    { value: "led", label: "LED Walls", content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoCards.filter((v) => v.category === "LED Walls").map((v, i) => (
          <VideoCard key={i} video={v} onClick={() => setPlaying(v.src)} />
        ))}
      </div>
    )},
    { value: "tvs", label: "LED TVs", content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoCards.filter((v) => v.category === "LED TVs").map((v, i) => (
          <VideoCard key={i} video={v} onClick={() => setPlaying(v.src)} />
        ))}
      </div>
    )},
  ];

  return (
    <>
      <SEO title={pageSEO.videos.title} description={pageSEO.videos.description} keywords={pageSEO.videos.keywords} url="https://skyav.in/videos" />

      <PageHero
        title="Video"
        highlight="Gallery"
        description="Watch our AV equipment in action — LED walls, LED TVs, and event setups. See the vibrant colors, crystal-clear sound, and stunning visuals that power our events."
        breadcrumbs={[{ label: "Videos", path: "/videos" }]}
      />

      <section className="py-8 md:py-16 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Watch" title="Equipment in" highlight="Action" description="Click any video to play. See why 500+ clients trust our AV equipment." />
          <TabPanel tabs={tabs} />
        </div>
      </section>

      {/* Video Modal */}
      {playing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in" onClick={() => setPlaying(null)}>
          <button className="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:scale-110 transition-transform" onClick={() => setPlaying(null)}>
            <X className="h-6 w-6" />
          </button>
          <video src={playing} controls autoPlay className="max-w-5xl max-h-[85vh] rounded-xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <CTASection />
    </>
  );
};

const VideoCard = ({ video, onClick }: { video: { src: string; title: string; category: string; desc: string }; onClick: () => void }) => (
  <div className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer" onClick={onClick}>
    <div className="relative h-48 overflow-hidden bg-gray-900">
      <video
        src={video.src}
        className="w-full h-full object-cover"
        muted
        preload="none"
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 rounded-full vibrant-gradient flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl animate-pulse-glow">
          <Play className="h-8 w-8 text-white ml-1" fill="white" />
        </div>
      </div>
      <span className="absolute top-3 left-3 px-3 py-1 vibrant-gradient text-white rounded-full text-xs font-bold">{video.category}</span>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-gray-900 mb-1">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.desc}</p>
    </div>
  </div>
);

export default Videos;
