import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Braces,
  CircleDot,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Complete dental checkups, preventive care and treatment for your everyday oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments designed to give you a brighter, more confident smile.",
  },
  {
    icon: Syringe,
    title: "Root Canal Treatment",
    description:
      "Advanced root canal care focused on preserving your natural tooth and relieving discomfort.",
  },
  {
    icon: Braces,
    title: "Braces & Aligners",
    description:
      "Modern orthodontic solutions to help create a straighter and healthier smile.",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description:
      "Natural-looking tooth replacement solutions designed for long-term function and confidence.",
  },
  {
    icon: Baby,
    title: "Kids Dentistry",
    description:
      "Gentle and friendly dental care designed to make children's dental visits comfortable.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F9F9FB] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Complete dental care,
              <span className="block">
                all in one place.
              </span>
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              From routine checkups to advanced treatments, our team
              provides personalized care for every stage of your dental
              journey.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
          >
            View all services

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#4F46E5] hover:shadow-xl hover:shadow-indigo-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF] transition group-hover:bg-[#4F46E5]">
                  <Icon
                    size={23}
                    className="text-[#4F46E5] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#1A1A1A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#4F46E5]"
                >
                  Learn more
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}