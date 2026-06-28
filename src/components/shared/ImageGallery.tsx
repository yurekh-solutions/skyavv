import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  description?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  showFilters?: boolean;
  columns?: number;
  className?: string;
}

const ImageGallery = ({ items, showFilters = true, columns = 3, className = "" }: ImageGalleryProps) => {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const colClass = columns === 4
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    : columns === 2
    ? "grid-cols-1 sm:grid-cols-2"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const openLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((p) => (p !== null ? (p - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const next = useCallback(() => setLightbox((p) => (p !== null ? (p + 1) % filtered.length : null)), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <div className={className}>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "vibrant-gradient text-white shadow-lg"
                  : "glass-card text-gray-600 hover:text-primary hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className={`grid ${colClass} gap-4 md:gap-6 max-w-6xl mx-auto`}>
        {filtered.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            onClick={() => openLightbox(i)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer hover-lift aspect-square"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="inline-block px-2 py-0.5 glass-dark rounded-full text-xs text-white font-semibold mb-1">
                {item.category}
              </span>
              <h3 className="font-bold text-white">{item.title}</h3>
              {item.description && <p className="text-sm text-white/70 mt-1">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:scale-110 transition-transform z-10">
            <X className="h-6 w-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:scale-110 transition-transform z-10">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:scale-110 transition-transform z-10">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].image} alt={filtered[lightbox].title} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-lg">{filtered[lightbox].title}</h3>
              {filtered[lightbox].description && <p className="text-white/70 text-sm mt-1">{filtered[lightbox].description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
