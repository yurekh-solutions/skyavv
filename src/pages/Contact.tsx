import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Send, CheckCircle2, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import { pageSEO } from "@/config/seo";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", event: "", message: "" });
  };

  const contactCards = [
    { icon: Phone, label: "Call Us", value: "+91 86559 73366", href: "tel:+918655973366", color: "from-blue-500 to-violet-500" },
    { icon: Phone, label: "Call Us (Alt)", value: "+91 99201 58955", href: "tel:+919920158955", color: "from-indigo-500 to-blue-500" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/918655973366", color: "from-green-500 to-emerald-500" },
    { icon: Mail, label: "Email Us", value: "sky.av.rentals@gmail.com", href: "mailto:sky.av.rentals@gmail.com", color: "from-violet-500 to-pink-500" },
    { icon: Clock, label: "Working Hours", value: "Mon-Sun: 9am - 9pm", href: null, color: "from-pink-500 to-orange-500" },
  ];

  const serviceAreas = ["Mumbai", "Navi Mumbai", "Thane", "Pune", "Lonavala", "Surat", "Goa", "Andheri", "Bandra", "BKC", "Juhu", "Dahisar", "Powai", "Worli"];

  const contactFaqs: FAQItem[] = [
    { question: "How quickly do you respond to enquiries?", answer: "We respond to all enquiries within 30 minutes during business hours (9am-9pm, Monday to Sunday). For urgent requirements, call us directly at +91 86559 73366 for immediate assistance.", category: "Response Time" },
    { question: "Do you provide AV equipment rental across all Mumbai areas?", answer: "Yes, we provide AV equipment rental across all Mumbai areas including Andheri, Bandra, BKC, Juhu, Worli, Powai, Dahisar, Navi Mumbai, Thane, and beyond. We also serve Pune, Lonavala, Surat, and Goa.", category: "Service Areas" },
    { question: "Can I get a quote over WhatsApp?", answer: "Absolutely! You can send your event details, requirements, and preferred date via WhatsApp at +91 86559 73366 and we will share a detailed quote within 30 minutes.", category: "Booking" },
    { question: "What information do you need for a quote?", answer: "We need your event type, date, venue location, expected number of guests, and the specific equipment you need (LED wall, sound system, lighting, etc.). Share any details and we will create a customized quote.", category: "Booking" },
    { question: "Do you offer same-day delivery and setup?", answer: "Yes, same-day delivery and professional setup is available across Mumbai, Navi Mumbai, and Thane based on equipment availability. Call us early for the best chance of same-day fulfillment.", category: "Services" },
    { question: "What payment methods do you accept?", answer: "We accept UPI, bank transfer, cash, and all major cards. A 50% advance payment is required to confirm bookings, with the balance due on or before the event day.", category: "Payment" },
  ];

  return (
    <>
      <SEO title={pageSEO.contact.title} description={pageSEO.contact.description} keywords={pageSEO.contact.keywords} url="https://skyav.in/contact" faqSchema={contactFaqs.map((f) => ({ question: f.question, answer: f.answer }))} breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact", path: "/contact" }]} />

      <PageHero
        title="Get in"
        highlight="Touch"
        description="Have a question or need a quote? We're here to help! Reach out via call, WhatsApp, or fill out the form below. Our team responds within 30 minutes during business hours."
        breadcrumbs={[{ label: "Contact", path: "/contact" }]}
      />

      {/* Contact Cards */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <div className="glass-card rounded-2xl p-5 md:p-6 hover-lift group h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{card.label}</div>
                  <div className="text-base font-bold text-gray-900">{card.value}</div>
                </div>
              );
              return card.href ? (
                <a key={i} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{content}</a>
              ) : <div key={i}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="glass-strong rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form and we'll get back to you within 30 minutes.</p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <div><p className="font-semibold text-green-800">Message sent successfully!</p><p className="text-sm text-green-600">We'll get back to you shortly.</p></div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 glass-card rounded-xl outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 glass-card rounded-xl outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 glass-card rounded-xl outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Event Type</label>
                  <select value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="w-full px-4 py-3 glass-card rounded-xl outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                    <option value="">Select event type</option>
                    <option>Wedding</option><option>Corporate Event</option><option>Conference</option><option>Concert</option><option>Birthday Party</option><option>Product Launch</option><option>Exhibition</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="w-full px-4 py-3 glass-card rounded-xl outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" placeholder="Tell us about your event requirements..." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 vibrant-gradient text-white rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg">
                  <Send className="h-5 w-5" /> Send Message
                </button>
              </form>
            </div>

            {/* Map + Info */}
            <div className="space-y-6">
              <div className="glass-strong rounded-3xl p-2 overflow-hidden">
                <iframe
                  title="Sky Vision Multimedia Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0098!2d72.8622!3d19.2544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE1JzE1LjgiTiA3MsKwNTEnNDMuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "1rem" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="glass-card rounded-3xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Office</h3>
                    <p className="text-sm text-gray-600">Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road, Dahisar West, Mumbai - 400068</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Follow Us</h3>
                    <a href="https://www.instagram.com/skyav.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">@skyav.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Coverage" title="Areas We" highlight="Serve" description="Included delivery within Mumbai city limits. Competitive rates for outstation events." />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area, i) => (
              <span key={i} className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-primary hover:scale-105 transition-all cursor-default">
                <MapPin className="h-3.5 w-3.5 inline mr-1 text-primary" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="FAQ" title="Contact &" highlight="Booking Questions" description="Quick answers to common questions about reaching us, getting quotes, and booking AV equipment in Mumbai." />
          <FAQAccordion items={contactFaqs} showCategories={true} showSearch={false} />
        </div>
      </section>
    </>
  );
};

export default Contact;
