import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  highlight: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
}

const PageHero = ({ title, highlight, description, breadcrumbs, children }: PageHeroProps) => {
  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 mesh-bg" />
        <div className="blob blob-blue w-80 h-80 -top-20 -left-20 opacity-20" />
        <div className="blob blob-violet w-72 h-72 bottom-0 right-0 opacity-15" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6 animate-fade-in">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {bc.path ? (
                  <Link to={bc.path} className="hover:text-primary transition-colors">{bc.label}</Link>
                ) : (
                  <span className="text-primary font-semibold">{bc.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {title}{" "}
            <span className="text-primary">
              {highlight}
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {description}
          </p>
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
