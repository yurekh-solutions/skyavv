import { MapPin, CheckCircle } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      city: "Mumbai",
      zones: ["Andheri", "Bandra", "Borivali", "Dahisar", "Goregaon", "Juhu", "Malad", "Powai", "Santacruz", "Vile Parle"],
      featured: true
    },
    {
      city: "Navi Mumbai",
      zones: ["Airoli", "Belapur", "Ghansoli", "Kharghar", "Nerul", "Panvel", "Vashi"],
      featured: true
    },
    {
      city: "Thane",
      zones: ["Ghodbunder", "Kasarvadavali", "Majiwada", "Manpada", "Thane West"],
      featured: false
    },
    {
      city: "Extended Areas",
      zones: ["Pune", "Lonavala", "Surat", "Goa"],
      featured: false
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Service Coverage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
            We Serve <span className="text-gradient">Across Maharashtra</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Professional AV equipment rental and delivery across Mumbai and nearby cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {areas.map((area, index) => (
            <div
              key={area.city}
              className={`relative bg-gradient-to-br ${
                area.featured
                  ? "from-primary/5 to-blue-50 border-primary/30"
                  : "from-white to-blue-50/30 border-blue-100"
              } rounded-2xl p-6 md:p-8 border-2 hover:border-primary transition-all duration-300 hover-lift shadow-lg hover:shadow-xl`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {area.featured && (
                <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full text-xs font-semibold shadow-lg">
                  Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{area.city}</h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {area.zones.map((zone) => (
                  <div key={zone} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Don't see your area? <span className="font-semibold">We deliver anywhere in Maharashtra!</span>
          </p>
          <a
            href="tel:+918655973366"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Call +91 86559 73366 to check availability
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
