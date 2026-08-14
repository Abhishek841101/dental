import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";
import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F9F9FB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#4F46E5]"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <span className="inline-flex rounded-full bg-[#EEF0FF] px-4 py-2 text-sm font-semibold text-[#4F46E5]">
                Dental Treatment
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
                {service.name}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
                {service.description}
              </p>
            </div>

            {/* Info Card */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-5">
                <Clock3
                  size={20}
                  className="text-[#4F46E5]"
                />

                <div>
                  <p className="text-xs text-[#6B7280]">
                    Treatment Duration
                  </p>

                  <p className="font-semibold text-[#1A1A1A]">
                    {service.duration}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <IndianRupee
                  size={20}
                  className="text-[#4F46E5]"
                />

                <div>
                  <p className="text-xs text-[#6B7280]">
                    Starting Price
                  </p>

                  <p className="font-semibold text-[#1A1A1A]">
                    {service.startingPrice}
                  </p>
                </div>
              </div>

              <Link
                href={`/appointment?service=${service.slug}`}
                className="mt-7 flex items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#4338CA]"
              >
                Book This Treatment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            What you can expect
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-5"
              >
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-[#10B981]"
                />

                <span className="text-sm font-medium text-[#1A1A1A]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#EEF0FF] p-7">
            <h3 className="text-xl font-bold text-[#1A1A1A]">
              Have questions about this treatment?
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Book a consultation with our dental team and discuss your
              specific requirements before starting treatment.
            </p>

            <Link
              href="/appointment"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4F46E5]"
            >
              Schedule Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}