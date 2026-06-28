import { Shield, Zap, Award, HeadphonesIcon, TrendingUp, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Reliable",
      description: "Backup equipment always available. Zero downtime guarantee for your events.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Professional team sets up everything in under 2 hours. We handle all technical details.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Latest equipment from top brands. Crystal clear displays and powerful sound systems.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Technical expert on-site during your event. Call us anytime for assistance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive rates with no hidden charges. Flexible packages for every budget.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Trusted by 1000+",
      description: "Successfully delivered 5000+ events. Rated 4.9/5 by satisfied clients.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
            What Makes Us <span className="text-gradient">Different?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            We don't just rent equipment - we deliver complete peace of mind for your events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 md:p-8 border border-blue-100 hover:border-primary transition-all duration-300 hover-lift shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} mb-6 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Make Your Event Spectacular?</h3>
              <p className="text-white/90">Get instant quote or call us now for free consultation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+918655973366"
                className="px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Call +91 86559 73366
              </a>
              <a
                href="https://wa.me/918655973366"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/40 whitespace-nowrap"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
