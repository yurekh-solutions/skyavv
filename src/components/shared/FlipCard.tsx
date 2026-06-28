import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, RotateCw } from "lucide-react";

interface FlipCardProps {
  image: string;
  title: string;
  badge?: string;
  frontDescription: string;
  backDescription: string;
  features?: string[];
  linkTo?: string;
  linkLabel?: string;
  className?: string;
}

const FlipCard = ({ image, title, badge, frontDescription, backDescription, features, linkTo, linkLabel = "Learn More", className = "" }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative cursor-pointer group ${className}`}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div className="relative rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div className="relative h-72 md:h-80">
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            {badge && (
              <span className="absolute top-3 right-3 px-2.5 py-1 vibrant-gradient text-white rounded-full text-xs font-bold shadow-lg">
                {badge}
              </span>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{frontDescription}</p>
            </div>
          </div>
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full glass-dark flex items-center justify-center">
            <RotateCw className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl glass-card p-6 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{backDescription}</p>
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
          )}
          {linkTo && (
            <Link
              to={linkTo}
              className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {linkLabel} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
