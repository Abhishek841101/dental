import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 -z-0 h-96 w-96 rounded-full bg-[#EEF0FF] blur-3xl opacity-70" />

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="relative z-10">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF0FF]">
              <ShieldCheck
                size={15}
                className="text-[#4F46E5]"
              />
            </span>

            <span className="text-sm font-medium text-[#1A1A1A]">
              Trusted Dental Care
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-[68px]">
            A healthier smile
            <span className="block text-[#4F46E5]">
              starts here.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#6B7280]">
            Experience personalized dental care from experienced
            professionals using modern technology in a comfortable,
            patient-first environment.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-[#4338CA]"
            >
              <CalendarCheck size={18} />

              Book Appointment

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#1A1A1A] transition hover:border-[#4F46E5] hover:text-[#4F46E5]"
            >
              Explore Services
            </Link>

          </div>

          {/* Trust points */}
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              "Experienced Doctors",
              "Modern Technology",
              "Patient First Care",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#6B7280]"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#10B981]"
                />

                {item}
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="mt-10 flex items-center gap-4 border-t border-[#E5E7EB] pt-7">

            <div className="flex -space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#EEF0FF] text-xs font-semibold text-[#4F46E5]">
                AK
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#F9F9FB] text-xs font-semibold text-[#1A1A1A]">
                RS
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#EEF0FF] text-xs font-semibold text-[#4F46E5]">
                PM
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="currentColor"
                    className="text-[#4F46E5]"
                  />
                ))}

                <span className="ml-1 text-sm font-semibold text-[#1A1A1A]">
                  4.9/5
                </span>
              </div>

              <p className="mt-0.5 text-xs text-[#6B7280]">
                Trusted by 10,000+ patients
              </p>
            </div>

          </div>
        </div>

        {/* Right Visual */}
        <div className="relative z-10">

          <div className="relative mx-auto max-w-[520px]">

            {/* Main card */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#EEF0FF]">

              {/* Decorative shapes */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/60" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#4F46E5]/10" />

              {/* Doctor placeholder */}
              <div className="absolute inset-8 flex items-center justify-center rounded-[26px] border border-white/70 bg-white/70">

                <div className="text-center">

                  <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-[#4F46E5] text-7xl text-white shadow-2xl shadow-indigo-200">
                    <span>DR</span>
                  </div>

                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F46E5]">
                    Expert Dental Care
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#1A1A1A]">
                    Care you can trust.
                  </h2>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#6B7280]">
                    Professional treatment with a focus on your comfort
                    and long-term oral health.
                  </p>

                </div>

              </div>
            </div>

            {/* Floating rating card */}
            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-xl sm:-left-8">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
                  <Star
                    size={21}
                    fill="currentColor"
                    className="text-[#4F46E5]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#6B7280]">
                    Patient Rating
                  </p>

                  <p className="font-bold text-[#1A1A1A]">
                    4.9 / 5.0
                  </p>
                </div>

              </div>
            </div>

            {/* Floating appointment card */}
            <div className="absolute -right-4 top-10 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-xl sm:-right-8">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
                  <CalendarCheck
                    size={21}
                    className="text-[#4F46E5]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#6B7280]">
                    Easy Booking
                  </p>

                  <p className="font-semibold text-[#1A1A1A]">
                    Available Today
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}   