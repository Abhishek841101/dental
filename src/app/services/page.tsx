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
import { services } from "@/data/services";

const icons = {
  Stethoscope,
  Sparkles,
  Syringe,
  Braces,
  CircleDot,
  Baby,
};

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Dental Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Complete care for
            <span className="block text-[#4F46E5]">
              every smile.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
            From preventive checkups to advanced treatments, explore our
            range of professional dental services.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon =
                icons[service.icon as keyof typeof icons];

              return (
                <article
                  key={service.slug}
                  className="group flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#4F46E5] hover:shadow-xl hover:shadow-indigo-100/40"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#EEF0FF]">
                    <Icon size={24} className="text-[#4F46E5]" />
                  </div>

                  <h2 className="mt-6 text-xl font-bold text-[#1A1A1A]">
                    {service.name}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#6B7280]">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-5">
                    <div>
                      <p className="text-xs text-[#6B7280]">
                        Starting from
                      </p>

                      <p className="mt-1 font-semibold text-[#1A1A1A]">
                        {service.startingPrice}
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            Not sure which treatment you need?
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Book a consultation and let our dental team recommend the
            right treatment for you.
          </p>

          <Link
            href="/appointment"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#4338CA]"
          >
            Book a Consultation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}