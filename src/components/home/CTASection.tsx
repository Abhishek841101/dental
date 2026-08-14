import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Phone,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[28px] bg-[#4F46E5] px-6 py-14 sm:px-12 sm:py-16">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <CalendarCheck size={27} className="text-white" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Ready for a healthier smile?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
              Book your appointment today and take the first step toward
              better oral health.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/appointment"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#4F46E5] transition hover:bg-[#EEF0FF]"
              >
                Book Appointment

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={17} />
                Call Clinic
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}