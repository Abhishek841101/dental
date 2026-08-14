import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesSection />
      <DoctorsSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

function TrustStats() {
  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
    },
    {
      number: "10K+",
      label: "Happy Patients",
    },
    {
      number: "20+",
      label: "Dental Treatments",
    },
    {
      number: "4.9/5",
      label: "Patient Rating",
    },
  ];

  return (
    <section className="border-y border-[#E5E7EB] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-5 py-8 text-center sm:py-10 ${
              index !== stats.length - 1
                ? "border-r border-[#E5E7EB]"
                : ""
            }`}
          >
            <p className="text-2xl font-bold text-[#4F46E5] sm:text-3xl">
              {stat.number}
            </p>

            <p className="mt-1 text-xs text-[#6B7280] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}