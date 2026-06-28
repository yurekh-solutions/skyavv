import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import FAQAccordion from "@/components/shared/FAQAccordion";
import type { FAQItem } from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { pageSEO } from "@/config/seo";

const FAQPage = () => {
  const faqs: FAQItem[] = [
    { category: "General", question: "What areas do you serve?", answer: "We provide AV equipment rental services across Mumbai, Navi Mumbai, Thane, Pune, Lonavala, Surat, and Goa. We offer free delivery and setup within Mumbai city limits and competitive rates for outstation events." },
    { category: "General", question: "How long have you been in business?", answer: "Sky Vision Multimedia has been Mumbai's trusted AV rental partner for over 15 years. We've powered 5000+ events ranging from intimate birthday parties to large-scale corporate conferences and concerts." },
    { category: "General", question: "What types of events do you cater to?", answer: "We cater to all types of events including weddings, corporate events, conferences, concerts, exhibitions, birthday parties, product launches, college events, cultural events, fashion shows, award functions, music festivals, and private parties." },
    { category: "Booking", question: "How far in advance should I book equipment?", answer: "We recommend booking at least 7-10 days in advance for peak season (October-March) and 3-5 days for regular bookings. However, we also accommodate last-minute bookings subject to availability. Call us at +91 86559 73366 for urgent requirements." },
    { category: "Booking", question: "Do you accept last-minute bookings?", answer: "Yes! We understand that events can be planned at short notice. We offer same-day delivery for urgent bookings within Mumbai, subject to equipment availability. Call us directly for immediate assistance." },
    { category: "Booking", question: "What is your cancellation policy?", answer: "Cancellations made 48 hours before the event receive a full refund. Cancellations within 24-48 hours are subject to 50% charges, and same-day cancellations forfeit the booking amount. We offer flexible rescheduling options." },
    { category: "Services", question: "Do you provide setup and technical support?", answer: "Yes! We provide complete setup, on-site technical support during your event, and breakdown services. Our certified technicians ensure everything runs smoothly from start to finish, all included at no extra cost." },
    { category: "Services", question: "Can I test the equipment before my event?", answer: "Absolutely! We encourage clients to test equipment before major events. Visit our Dahisar office for equipment demonstrations or schedule a pre-event site visit where we'll demonstrate all equipment functionality." },
    { category: "Services", question: "What happens if equipment malfunctions during my event?", answer: "We provide backup equipment for all major rentals and have a rapid response team on standby. In the rare case of malfunction, we replace equipment within 1-2 hours and offer compensation for any inconvenience caused." },
    { category: "Pricing", question: "What are your rental rates?", answer: "Rates vary by equipment type and duration. LED walls start from Rs. 15,000/day, projectors from Rs. 2,500/day, sound systems from Rs. 5,000/day, and stage lighting from Rs. 8,000/day. Contact us for a custom quote tailored to your event needs." },
    { category: "Pricing", question: "What payment methods do you accept?", answer: "We accept all major payment methods including cash, bank transfer, UPI, credit/debit cards, and digital wallets. We require 50% advance payment for booking confirmation and the balance can be paid before or immediately after the event." },
    { category: "Pricing", question: "Do you offer package deals?", answer: "Yes! We offer customized package deals combining projectors, sound systems, LED walls, and other equipment at discounted rates. Contact us with your event details for a personalized quote that fits your budget." },
    { category: "Pricing", question: "Are there any hidden charges?", answer: "No hidden charges ever! Our quotes are transparent and all-inclusive. Delivery, setup, technical support, and breakdown are included in the quoted price. Outstation events may have nominal transportation charges, which are clearly communicated upfront." },
    { category: "Equipment", question: "What LED wall sizes are available?", answer: "We offer LED walls in various sizes from 6ft x 4ft to 40ft x 20ft. Common sizes include 11.5'x6.6', 14.7'x8.2', 16.4'x9.8', and 19.6'x8.2'. Both P2.5 (fine pitch) and P3.9 (standard) pixel pitches are available for indoor and outdoor use." },
    { category: "Equipment", question: "What is the difference between P2.5 and P3.9 LED walls?", answer: "P2.5 has a 2.5mm pixel pitch offering higher resolution, ideal for close-up indoor viewing. P3.9 has a 3.9mm pixel pitch, perfect for larger displays and outdoor events where viewers are further away. P2.5 costs more but offers sharper images at close range." },
    { category: "Equipment", question: "Do you provide outdoor LED walls?", answer: "Yes! Our outdoor LED walls are IP65 weatherproof with 6000+ nits brightness, ensuring clear visibility even in direct sunlight. They're perfect for concerts, festivals, sports events, and outdoor screenings." },
    { category: "Equipment", question: "What sound system sizes are available?", answer: "We have sound systems for events of all sizes — from 50-person meetings to 5000+ audience concerts. Our inventory includes JBL, Bose, and Yamaha speakers, wireless microphones, mixers, and line array systems for large venues." },
    { category: "Delivery", question: "Do you offer free delivery?", answer: "Yes! We offer free delivery and setup within Mumbai city limits. For events in Navi Mumbai, Thane, and Pune, nominal transportation charges apply. Outstation deliveries to Lonavala, Surat, and Goa are charged based on distance." },
    { category: "Delivery", question: "How early do you deliver and set up?", answer: "We typically deliver and set up 2-4 hours before your event starts. For large-scale events, we may set up the day before. Our team coordinates with your venue to ensure timely and hassle-free setup." },
    { category: "Delivery", question: "Do you provide staff during the event?", answer: "Yes, we provide on-site technicians for all major events at no additional cost. For smaller events, we ensure equipment is fully tested and provide remote support. Additional technicians can be arranged for complex setups." },
  ];

  return (
    <>
      <SEO
        title={pageSEO.faq.title}
        description={pageSEO.faq.description}
        keywords={pageSEO.faq.keywords}
        url="https://skyav.in/faq"
        faqSchema={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "FAQ", path: "/faq" }]}
      />

      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        description="Find answers to common questions about our AV equipment rental services. Search or browse by category to get the information you need."
        breadcrumbs={[{ label: "FAQ", path: "/faq" }]}
      />

      <section className="py-8 md:py-16 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection title="Still Have Questions?" description="Our team is just a call away. Get personalized assistance for your AV rental needs." />
    </>
  );
};

export default FAQPage;
