import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import { pageSEO } from "@/config/seo";

const Terms = () => {
  const sections = [
    { title: "Acceptance of Terms", content: "By accessing and using the services provided by Sky Vision Multimedia (the \"Company\"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services. These terms apply to all AV equipment rental bookings made with Sky Vision Multimedia." },
    { title: "Booking and Confirmation", content: "All bookings are subject to equipment availability. A booking is confirmed only upon receipt of 50% advance payment. The remaining 50% balance must be paid before or immediately after the event. Bookings made without advance payment are considered tentative and may be cancelled without notice if equipment is required by another confirmed booking." },
    { title: "Rental Period", content: "The rental period is defined as the duration for which equipment is booked, typically from the time of delivery to the time of pickup. Standard rental periods are per day (24 hours). Extended rental periods will be charged at the agreed daily rate. Any delays in returning equipment beyond the agreed period may incur additional charges." },
    { title: "Delivery and Setup", content: "Delivery and setup are included within Mumbai city limits. For events outside Mumbai, nominal transportation charges apply. Setup is performed by our certified technicians. The client must ensure the venue is accessible and ready for setup at the agreed time. Any delays caused by the venue or client may result in additional labor charges." },
    { title: "Equipment Care and Liability", content: "The client is responsible for the safe care of all rented equipment from the time of delivery to pickup. Any damage, loss, or theft of equipment during the rental period is the client's responsibility. The client will be charged for repair or replacement of damaged equipment at market value. We recommend clients ensure adequate event insurance coverage." },
    { title: "Cancellation Policy", content: "Cancellations made 48 hours or more before the event: Full refund of advance payment. Cancellations within 24-48 hours of the event: 50% of advance payment refunded. Same-day cancellations: No refund. We offer flexible rescheduling subject to availability. Force majeure events (natural disasters, government restrictions) will be handled on a case-by-case basis." },
    { title: "Payment Terms", content: "We accept cash, bank transfer, UPI, credit/debit cards, and digital wallets. All payments must be made in Indian Rupees (INR). GST at applicable rates is additional to the quoted prices. Invoices are provided for all transactions. Any outstanding payments beyond 7 days of the event date will incur interest at 2% per month." },
    { title: "Technical Support", content: "We provide on-site technical support for all major events at no additional cost. Our technicians ensure smooth operation throughout your event. For smaller events, we ensure equipment is fully tested before handover and provide remote support. Equipment malfunction will be addressed within 1-2 hours, and backup equipment will be provided where possible." },
    { title: "Limitation of Liability", content: "Sky Vision Multimedia shall not be liable for any indirect, incidental, or consequential damages arising from the use of our equipment or services. Our total liability is limited to the rental amount paid by the client. We are not responsible for any event disruptions caused by factors beyond our control, including power failures, venue issues, or third-party service failures." },
    { title: "Force Majeure", content: "Neither party shall be liable for failure to perform obligations under these terms due to circumstances beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, war, civil unrest, or other force majeure events. In such cases, bookings may be rescheduled or refunded at the Company's discretion." },
    { title: "Governing Law", content: "These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra. The parties agree to attempt resolution of any disputes through good-faith negotiation before pursuing legal action." },
    { title: "Contact Information", content: "For any questions about these Terms and Conditions, please contact: Sky Vision Multimedia, Phone: +91 86559 73366 / +91 99201 58955, Email: sky.av.rentals@gmail.com, Address: Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road, Dahisar West, Mumbai - 400068." },
  ];

  return (
    <>
      <SEO title={pageSEO.terms.title} description={pageSEO.terms.description} keywords={pageSEO.terms.keywords} url="https://skyav.in/terms" />

      <PageHero
        title="Terms &"
        highlight="Conditions"
        description="Please read these terms carefully before booking AV equipment rental services with Sky Vision Multimedia. These terms govern your use of our services."
        breadcrumbs={[{ label: "Terms", path: "/terms" }]}
      />

      <section className="py-8 md:py-16 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>
            <div className="space-y-6">
              {sections.map((section, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full vibrant-gradient flex items-center justify-center text-white text-sm flex-shrink-0">{i + 1}</span>
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
