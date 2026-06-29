import { Link } from "react-router-dom";
import { ArrowRight, Camera, Video } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ImageGallery from "@/components/shared/ImageGallery";
import type { GalleryItem } from "@/components/shared/ImageGallery";
import CTASection from "@/components/shared/CTASection";
import { pageSEO } from "@/config/seo";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import ledWallImg from "@/assets/led-wall.jpg";
import projectorImg from "@/assets/projector.jpg";
import soundImg from "@/assets/sound-system.jpg";
import tv1 from "@/assets/tv1.jpeg";
import tv2 from "@/assets/tv2.jpeg";
import tv3 from "@/assets/tv3.jpeg";
import tv4 from "@/assets/tv4.jpeg";
import sound1 from "@/assets/sound1.png";
import sound2 from "@/assets/sound2.png";

const Gallery = () => {
  const items: GalleryItem[] = [
    { image: gallery1, title: "Tech Summit 2024", category: "Corporate", description: "LED wall & multi-zone audio for 1000+ attendees at BKC Convention Center" },
    { image: gallery2, title: "Royal Wedding Extravaganza", category: "Wedding", description: "LED backdrop, concert sound, cinematic lighting at Taj Lands End" },
    { image: gallery3, title: "Bollywood Night Concert", category: "Concert", description: "Line array sound, dynamic lighting, LED screens for 5000+ audience" },
    { image: gallery4, title: "School Annual Fest", category: "Education", description: "Complete stage setup with LED walls and theatrical lighting at NCPA" },
    { image: gallery5, title: "Luxury Car Launch", category: "Product Launch", description: "Dramatic LED wall reveal, precision lighting at World Trade Center" },
    { image: gallery6, title: "Celebrity Birthday Bash", category: "Party", description: "DJ setup, LED dance floor, ambient lighting at JW Marriott" },
    { image: ledWallImg, title: "LED Wall Display Setup", category: "Equipment", description: "P2.5 LED wall configuration for indoor conference event" },
    { image: projectorImg, title: "Projector & Screen Setup", category: "Equipment", description: "High-lumen projector with motorized screen for corporate presentation" },
    { image: soundImg, title: "Concert Sound System", category: "Equipment", description: "JBL line array sound system for outdoor concert event" },
    { image: tv1, title: "LED TV Display Wall", category: "Equipment", description: "Multiple LED TVs arranged for exhibition booth display" },
    { image: tv2, title: "Large Screen TV Setup", category: "Equipment", description: "85-inch LED TV for corporate product display event" },
    { image: tv3, title: "LED Wall Installation", category: "Equipment", description: "Outdoor LED wall with 6000 nits brightness for daytime event" },
    { image: tv4, title: "Event Display Screens", category: "Equipment", description: "LED TV setup for trade show exhibition booth" },
    { image: sound1, title: "Professional Audio Setup", category: "Equipment", description: "Complete sound system with speakers, mics, and mixing console" },
    { image: sound2, title: "Stage Sound Equipment", category: "Equipment", description: "PA system with wireless microphones for conference event" },
  ];

  return (
    <>
      <SEO title={pageSEO.gallery.title} description={pageSEO.gallery.description} keywords={pageSEO.gallery.keywords} url="https://skyav.in/gallery" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery", path: "/gallery" }]} />

      <PageHero
        title="Our Event"
        highlight="Gallery"
        description="Browse our portfolio of spectacular events powered by Sky Vision Multimedia. From intimate gatherings to grand productions — witness the magic of premium AV in action."
        breadcrumbs={[{ label: "Gallery", path: "/gallery" }]}
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <Link to="/videos" className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full font-semibold text-primary hover:scale-105 transition-transform">
            <Video className="h-4 w-4" /> Watch Videos
          </Link>
          <Link to="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform">
            <Camera className="h-4 w-4" /> Get a Quote
          </Link>
        </div>
      </PageHero>

      <section className="py-8 md:py-16 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Portfolio" title="10 Lakh+ Events" highlight="Powered" description="Filter by category to explore our work across different event types and equipment." />
          <ImageGallery items={items} columns={3} />
        </div>
      </section>

      <CTASection title="Want Your Event Featured Here?" description="Let us power your next event with premium AV equipment and professional service." />
    </>
  );
};

export default Gallery;
