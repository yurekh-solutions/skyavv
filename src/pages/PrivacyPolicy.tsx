import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="privacy-policy"
        description="privacy-policy"
        keywords="privacy-policy"
        url="https://skyav.in/privacy-policy"
      />

      <PageHero
        title="Privacy"
        highlight="Policy"
        description="Your privacy matters to us. Learn how we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              {
                title: "Information We Collect",
                content: "We collect information you provide directly, including your name, email address, phone number, event details, and venue information when you submit a quote request or contact us. We also automatically collect certain information about your device and browsing activity when you visit our website."
              },
              {
                title: "How We Use Your Information",
                content: "We use the information we collect to: respond to your inquiries and quote requests, provide and improve our AV rental services, communicate with you about your events, send promotional communications (with your consent), and comply with legal obligations."
              },
              {
                title: "Information Sharing",
                content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with: service providers who assist in our operations, professional advisors (lawyers, accountants), and authorities when required by law."
              },
              {
                title: "Data Security",
                content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
              },
              {
                title: "Cookies & Tracking",
                content: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences."
              },
              {
                title: "Your Rights",
                content: "You have the right to: access, correct, or delete your personal information; opt out of marketing communications; request a copy of your data; and lodge a complaint with a supervisory authority. Contact us at sky.av.rentals@gmail.com to exercise these rights."
              },
              {
                title: "Data Retention",
                content: "We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements."
              },
              {
                title: "Changes to This Policy",
                content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date."
              },
              {
                title: "Contact Us",
                content: "If you have questions about this privacy policy or our data practices, please contact us at: Sky Vision Multimedia, Room No 951, Nayagaon Near Maharashtra Hotel, Laxman Mahatre Road, Dahisar West, Mumbai 400068. Email: sky.av.rentals@gmail.com. Phone: +91 86559 73366."
              },
            ].map((section, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}

            <p className="text-sm text-gray-500 text-center pt-4">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
