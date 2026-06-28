interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight: string;
  description?: string;
}

const SectionHeading = ({ badge, title, highlight, description }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-10 md:mb-12 animate-fade-in">
      {badge && (
        <span className="inline-block px-4 py-2 glass-vibrant text-primary rounded-full text-sm font-semibold border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {title}{" "}
        <span className="text-gradient-vibrant">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
