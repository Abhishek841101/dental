import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Experienced Professionals",
    description:
      "Get treated by qualified dentists with years of clinical experience.",
  },
  {
    icon: Microscope,
    title: "Modern Technology",
    description:
      "We use modern dental equipment to make diagnosis and treatment more precise.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    description:
      "Your comfort, concerns and long-term oral health always come first.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Experience",
    description:
      "A calm and welcoming environment designed to make dental visits easier.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F9F9FB] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Dental care that puts
            <span className="block text-[#4F46E5]">
              you first.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#6B7280]">
            We believe good dentistry is more than just treatment. It is
            about understanding your needs, explaining your options and
            making you feel comfortable throughout your journey.
          </p>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
          >
            Learn About Our Clinic

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Features */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
                  <Icon size={21} className="text-[#4F46E5]" />
                </div>

                <h3 className="mt-5 font-semibold text-[#1A1A1A]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}