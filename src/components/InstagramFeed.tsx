import { Instagram, Play, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

interface VideoPost {
  src: string;
  caption: string;
  likes: number;
  comments: number;
  type: string;
}

const videoPosts: VideoPost[] = [
  { src: "/videos/ledwall1.mp4", caption: "Spectacular LED wall at BKC conference", likes: 1240, comments: 89, type: "LED Wall" },
  { src: "/videos/ledtv2.mp4", caption: "Concert sound setup for 5000+ audience", likes: 892, comments: 45, type: "Sound" },
  { src: "/videos/ledwall2.mp4", caption: "Wedding LED backdrop in action", likes: 2103, comments: 156, type: "Wedding" },
  { src: "/videos/ledtv.mp4", caption: "Multi-zone corporate event AV", likes: 567, comments: 32, type: "Corporate" },
  { src: "/videos/ledtv4.mp4", caption: "Outdoor LED wall at music festival", likes: 3401, comments: 245, type: "Outdoor" },
  { src: "/videos/led77.mp4", caption: "P2.5 LED wall — pixel-perfect clarity", likes: 1578, comments: 98, type: "LED Wall" },
];

const formatCount = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n));

const InstagramFeed = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 lg:py-24 mesh-bg-soft relative overflow-hidden">
      <div className="blob blob-pink w-96 h-96 -top-20 -right-20 opacity-10" />
      <div className="blob blob-violet w-80 h-80 -bottom-20 -left-20 opacity-10" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 p-0.5 shadow-xl animate-float">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Instagram className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">@skyav.in</h2>
              <p className="text-gray-600 text-sm md:text-base">Mumbai's #1 AV Rental Company · 5000+ Events</p>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-700">
                <span><strong className="text-gray-900">12.4K</strong> Followers</span>
                <span><strong className="text-gray-900">850+</strong> Posts</span>
                <span><strong className="text-gray-900">500+</strong> Events</span>
              </div>
            </div>
          </div>
          <a
            href="https://www.instagram.com/skyav.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Instagram className="w-4 h-4" /> Follow Us
          </a>
        </div>

        {/* 6-Video Grid */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 glass-vibrant text-primary rounded-full text-xs font-semibold border border-primary/20">
              <Play className="h-3 w-3 fill-primary" /> Latest Reels
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">Follow Our Journey</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {videoPosts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/skyav.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden glass-card hover-lift"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <video
                src={post.src}
                muted
                loop
                playsInline
                preload="metadata"
                ref={(el) => {
                  if (el) {
                    if (hoveredIndex === i) {
                      el.play().catch(() => {});
                    } else {
                      el.pause();
                      el.currentTime = 0;
                    }
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-2 left-2 md:top-3 md:left-3">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 md:px-2.5 md:py-1 glass-dark rounded-full text-[10px] md:text-xs font-bold text-white">
                  {post.type}
                </span>
              </div>

              <div className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-9 md:h-9 rounded-full glass-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-3 w-3 md:h-4 md:w-4 text-white fill-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white text-[10px] md:text-xs font-semibold leading-tight line-clamp-2 mb-1">
                  {post.caption}
                </p>
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-white/90">
                  <span className="flex items-center gap-1">
                    <Heart className="h-2.5 w-2.5 md:h-3 md:w-3 fill-white" /> {formatCount(post.likes)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-2.5 w-2.5 md:h-3 md:w-3" /> {formatCount(post.comments)}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/skyav.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full font-bold text-primary hover:scale-105 transition-transform"
          >
            See More on Instagram <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
