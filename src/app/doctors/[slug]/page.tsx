import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  IndianRupee,
} from "lucide-react";
import { doctors } from "@/data/doctors";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DoctorProfilePage({
  params,
}: Props) {
  const { slug } = await params;

  const doctor = doctors.find(
    (item) => item.slug === slug
  );

  if (!doctor) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F9F9FB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#4F46E5]"
          >
            <ArrowLeft size={16} />
            Back to Doctors
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">

            {/* Avatar */}
            <div className="flex h-[300px] items-center justify-center rounded-3xl bg-[#EEF0FF]">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-white bg-[#4F46E5] text-4xl font-bold text-white shadow-xl">
                {doctor.avatar}
              </div>
            </div>

            {/* Information */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
                Dental Specialist
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
                {doctor.name}
              </h1>

              <p className="mt-3 text-lg font-semibold text-[#4F46E5]">
                {doctor.specialty}
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#6B7280]">
                {doctor.bio}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#1A1A1A] shadow-sm">
                  <Award size={16} className="text-[#4F46E5]" />
                  {doctor.experience}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#1A1A1A] shadow-sm">
                  <GraduationCap size={16} className="text-[#4F46E5]" />
                  {doctor.qualification}
                </span>

              </div>

              <Link
                href={`/appointment?doctor=${doctor.id}`}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#4338CA]"
              >
                <CalendarCheck size={18} />
                Book Appointment
                <ArrowRight size={17} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">

          {/* Availability */}
          <div className="rounded-2xl border border-[#E5E7EB] p-7">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Clock3
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#1A1A1A]">
              Availability
            </h2>

            <div className="mt-5 space-y-3">
              {doctor.availableDays.map((day) => (
                <div
                  key={day}
                  className="flex items-center gap-3 text-sm text-[#6B7280]"
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#10B981]"
                  />
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Qualification */}
          <div className="rounded-2xl border border-[#E5E7EB] p-7">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <GraduationCap
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#1A1A1A]">
              Qualification
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#6B7280]">
              {doctor.qualification}
            </p>

            <p className="mt-3 text-sm leading-6 text-[#6B7280]">
              {doctor.experience} of professional dental practice.
            </p>
          </div>

          {/* Consultation */}
          <div className="rounded-2xl border border-[#E5E7EB] p-7">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <IndianRupee
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <h2 className="mt-5 text-lg font-bold text-[#1A1A1A]">
              Consultation
            </h2>

            <p className="mt-2 text-xs text-[#6B7280]">
              Starting consultation fee
            </p>

            <p className="mt-2 text-2xl font-bold text-[#1A1A1A]">
              {doctor.consultationFee}
            </p>

            <Link
              href={`/appointment?doctor=${doctor.id}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4F46E5]"
            >
              Schedule Consultation
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            Ready to meet {doctor.name}?
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Choose a convenient date and available appointment slot.
          </p>

          <Link
            href={`/appointment?doctor=${doctor.id}`}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#4338CA]"
          >
            Book Appointment
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>
    </main>
  );
}