import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Stethoscope,
} from "lucide-react";
import { services } from "@/data/services";

export default function AdminServicesPage() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4F46E5]">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            Dental Services
          </h1>

          <p className="mt-2 text-[#6B7280]">
            Manage treatments and services offered by the clinic.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Stethoscope
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Total Services
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              {services.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <CheckCircle2
                size={21}
                className="text-[#10B981]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Active Services
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              {services.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Clock3
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Available Treatments
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              {services.length}
            </p>
          </div>

        </div>

        {/* Services Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF]">
                <Stethoscope
                  size={22}
                  className="text-[#4F46E5]"
                />
              </div>

              {/* Content */}
              <h2 className="mt-5 text-lg font-bold text-[#1A1A1A]">
                {service.name}
              </h2>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6B7280]">
                {service.description}
              </p>

              {/* Action */}
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
              >
                View Service
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}