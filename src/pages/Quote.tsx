import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle2, Send, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", eventDate: "", guestCount: "",
    equipment: "", venue: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="quote"
        description="quote"
        keywords="quote"
        url="https://skyav.in/quote"
      />

      <PageHero
        title="Get a Free"
        highlight="Quote"
        description="Tell us about your event and get a customized quote within 30 minutes. No obligations, no hidden charges — just transparent pricing for premium AV equipment."
        breadcrumbs={[{ label: "Get a Quote" }]}
      />

      {/* Contact Info Cards */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Phone, label: "Call Us", value: "+91 86559 73366", href: "tel:+918655973366" },
                            { icon: Phone, label: "Call Us (Alt)", value: "+91 99201 58955", href: "tel:+919920158955" },
              { icon: Mail, label: "Email Us", value: "sky.av.rentals@gmail.com", href: "mailto:sky.av.rentals@gmail.com" },
              { icon: Clock, label: "Response Time", value: "Within 30 minutes", href: undefined },
              { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra", href: undefined },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 text-center hover-lift">
                <div className="w-10 h-10 rounded-xl vibrant-gradient flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-sm font-bold text-primary hover:underline">{item.value}</a>
                ) : (
                  <div className="text-sm font-bold text-gray-900">{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading badge="Free Quote" title="Request a" highlight="Custom Quote" description="Fill in your event details and we'll get back to you with a detailed quote." />

            {submitted ? (
              <div className="glass-card rounded-3xl p-10 text-center">
                <div className="w-16 h-16 rounded-full vibrant-gradient flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quote Request Received!</h3>
                <p className="text-gray-600 leading-relaxed">Thank you! Our team will review your requirements and get back to you within 30 minutes during business hours. For urgent queries, call us directly at <a href="tel:+918655973366" className="font-bold text-primary">+91 86559 73366</a> or <a href="tel:+919920158955" className="font-bold text-primary">+91 99201 58955</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event Type *</label>
                    <select name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                      <option value="">Select event type</option>
                      <option>Wedding</option><option>Corporate Event</option><option>Conference</option>
                      <option>Concert</option><option>Birthday Party</option><option>Exhibition</option>
                      <option>Product Launch</option><option>College Event</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date</label>
                    <input name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Guests</label>
                    <input name="guestCount" value={formData.guestCount} onChange={handleChange} className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="e.g., 200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Equipment Needed</label>
                  <input name="equipment" value={formData.equipment} onChange={handleChange} className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="e.g., LED Wall, Sound System, Stage Lighting" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Venue / Location</label>
                  <input name="venue" value={formData.venue} onChange={handleChange} className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="e.g., Grand Hyatt, Mumbai" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl glass-card border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none" placeholder="Tell us more about your requirements..." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 vibrant-gradient text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg">
                  <Send className="h-5 w-5" /> Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
