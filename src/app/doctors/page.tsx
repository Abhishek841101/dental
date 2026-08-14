import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  GraduationCap,
} from "lucide-react";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Our Dental Team
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Meet our experienced
            <span className="block text-[#4F46E5]">
              dental specialists.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Our team of experienced dental professionals is committed to
            providing personalized, comfortable and high-quality care.
          </p>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {doctors.map((doctor) => (
              <article
                key={doctor.id}
                className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#4F46E5] hover:shadow-xl hover:shadow-indigo-100/40"
              >
                {/* Doctor Image Placeholder */}
                <div className="flex h-64 items-center justify-center bg-[#EEF0FF]">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-[#4F46E5] text-3xl font-bold text-white shadow-lg">
                    {doctor.avatar}
                  </div>
                </div>

                <div className="p-7">

                  <h2 className="text-xl font-bold text-[#1A1A1A]">
                    {doctor.name}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-[#4F46E5]">
                    {doctor.specialty}
                  </p>

                  <div className="mt-5 space-y-3">

                    <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                      <Award
                        size={17}
                        className="shrink-0 text-[#4F46E5]"
                      />
                      {doctor.experience}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                      <GraduationCap
                        size={17}
                        className="shrink-0 text-[#4F46E5]"
                      />
                      {doctor.qualification}
                    </div>

                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#E5E7EB] pt-5">

                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
                    >
                      View Profile
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      href={`/appointment?doctor=${doctor.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#4338CA]"
                    >
                      <CalendarCheck size={15} />
                      Book
                    </Link>

                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            Not sure which doctor to choose?
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Book a consultation and our team can guide you to the right
            specialist.
          </p>

          <Link
            href="/appointment"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#4338CA]"
          >
            Book Consultation
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>
    </main>
  );
}