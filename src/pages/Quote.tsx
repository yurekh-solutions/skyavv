import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle2, Send, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import { pageSEO } from "@/config/seo";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", eventDate: "", guestCount: "",
    equipment: "", venue: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const quoteFaqs: FAQItem[] = [
    { category: "Quote Process", question: "How fast will I receive my AV rental quote?", answer: "We respond to every quote request within 30 minutes during business hours (9am-9pm, Monday to Sunday). For urgent same-day requirements, call us directly at +91 86559 73366 for an instant quote." },
    { category: "Quote Process", question: "Is the quote request binding? Do I have to pay anything?", answer: "No, a quote request is completely non-binding. We provide transparent, all-inclusive pricing with no hidden charges. You only pay the 50% advance if you decide to confirm your booking." },
    { category: "Pricing", question: "What information should I include for an accurate quote?", answer: "For the most accurate quote, include your event type, date, venue location, expected guest count, and the equipment you need (LED wall, sound system, lighting, etc.). Our form above captures all of this." },
    { category: "Pricing", question: "How much does AV equipment rental cost in Mumbai?", answer: "LED walls start from Rs. 15,000 per day, projectors from Rs. 2,500 per day, sound systems from Rs. 5,000 per day, and stage lighting from Rs. 8,000 per day. All packages include delivery, setup, and technical support. Bundle discounts apply for multiple equipment." },
    { category: "Booking", question: "Can I get a same-day quote and delivery?", answer: "Yes, we provide same-day quotes within 30 minutes and same-day delivery across Mumbai, Navi Mumbai, and Thane subject to equipment availability. Call +91 86559 73366 early for the best availability." },
    { category: "Payment", question: "What payment methods do you accept?", answer: "We accept UPI, bank transfer, cash, and all major credit/debit cards. A 50% advance payment confirms your booking, with the balance due on or before the event day. GST invoices are provided for all transactions." },
  ];

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
        title={pageSEO.quote.title}
        description={pageSEO.quote.description}
        keywords={pageSEO.quote.keywords}
        url="https://skyav.in/quote"
        faqSchema={quoteFaqs.map((f) => ({ question: f.question, answer: f.answer }))}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Get a Quote", path: "/quote" }]}
      />

      <PageHero
        title="Get an Instant"
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
            <SectionHeading badge="Instant Quote" title="Request a" highlight="Custom Quote" description="Fill in your event details and we'll get back to you with a detailed quote." />

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

      {/* FAQ Section — AEO/GEO */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="FAQ" title="Quote &" highlight="Pricing Questions" description="Everything you need to know about getting a quote, pricing, and booking AV equipment in Mumbai." />
          <FAQAccordion items={quoteFaqs} showCategories={true} showSearch={false} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
