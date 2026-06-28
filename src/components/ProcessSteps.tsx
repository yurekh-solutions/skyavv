import { Phone, Calendar, Truck, Settings, PlayCircle, ThumbsUp } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Contact Us",
      description: "Call or WhatsApp us with your event details. We respond within 30 minutes.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      number: "02",
      title: "Get Quote",
      description: "Receive instant pricing and equipment recommendations for your event.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      number: "03",
      title: "Delivery",
      description: "We deliver equipment to your venue on time. Free delivery in Mumbai.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Settings,
      number: "04",
      title: "Setup",
      description: "Our technicians install and configure everything professionally.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: PlayCircle,
      number: "05",
      title: "Event Support",
      description: "Technical expert stays on-site to ensure smooth operation throughout.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: ThumbsUp,
      number: "06",
      title: "Pickup",
      description: "After your event, we handle all breakdown and equipment pickup.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/60 backdrop-blur-md text-primary rounded-full text-sm font-semibold border border-white/40 shadow-lg">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            From booking to event completion - we make AV equipment rental simple and hassle-free
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>
          
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl z-10`}>
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex gap-4 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon and Line */}
                <div className="flex flex-col items-center">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-primary to-transparent opacity-30 mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/70 backdrop-blur-md rounded-xl p-5 border border-white/40 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Ready to get started? It takes less than 5 minutes!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Equipment Now
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
