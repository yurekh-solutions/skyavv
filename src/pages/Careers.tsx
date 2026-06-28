import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Award } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const openPositions = [
  { title: "AV Technician", location: "Mumbai", type: "Full-time", description: "Set up and operate LED walls, sound systems, and lighting at events. 2+ years experience required." },
  { title: "Sales Executive", location: "Mumbai", type: "Full-time", description: "Handle inbound leads, generate quotes, and close deals for AV rental services. Event industry experience preferred." },
  { title: "Sound Engineer", location: "Mumbai", type: "Full-time", description: "Manage sound system design, setup, and mixing for events of 50–5000 guests. JBL/Bose equipment expertise required." },
  { title: "Content Creator / Videographer", location: "Mumbai", type: "Full-time", description: "Shoot and edit event videos, create social media content. Proficiency in Premiere Pro / DaVinci Resolve required." },
  { title: "Logistics Coordinator", location: "Mumbai", type: "Full-time", description: "Manage equipment inventory, coordinate deliveries, and oversee transport logistics across Mumbai and beyond." },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="careers"
        description="careers"
        keywords="careers"
        url="https://skyav.in/careers"
      />

      <PageHero
        title="Join Our"
        highlight="Team"
        description="Be part of Mumbai's most dynamic AV rental company. We're always looking for passionate people who love events and technology."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Why Work With Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Sky Vision" title="Why Work" highlight="With Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: "Passion for Events", desc: "Work at the intersection of technology and entertainment" },
              { icon: Zap, title: "Cutting-Edge Tech", desc: "Hands-on experience with the latest AV equipment" },
              { icon: Users, title: "Great Team", desc: "Join a supportive, fun-loving crew of 25+ professionals" },
              { icon: Award, title: "Growth Opportunity", desc: "Learn, upskill, and grow your career in event technology" },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-xl vibrant-gradient flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-16 mesh-bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Openings" title="Current" highlight="Openings" />
          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((job, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                <a href="mailto:sky.av.rentals@gmail.com?subject=Application for {job.title}" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Openings CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-10 text-center">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Don't See a Fit?</h2>
            <p className="text-gray-600 mb-6">We're always open to meeting talented people. Send us your resume and we'll reach out when the right opportunity comes up.</p>
            <a href="mailto:sky.av.rentals@gmail.com?subject=Spontaneous Application" className="inline-flex items-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
              Send Resume <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
