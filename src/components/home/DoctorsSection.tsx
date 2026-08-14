import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  GraduationCap,
} from "lucide-react";

const doctors = [
  {
    initials: "DS",
    name: "Dr. Sarah Sharma",
    specialty: "Senior Dental Surgeon",
    experience: "15+ Years Experience",
  },
  {
    initials: "AR",
    name: "Dr. Amit Rao",
    specialty: "Cosmetic & Implant Dentist",
    experience: "12+ Years Experience",
  },
  {
    initials: "PM",
    name: "Dr. Priya Mehta",
    specialty: "Orthodontist",
    experience: "10+ Years Experience",
  },
];

export default function DoctorsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
              Our Doctors
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Meet the people
              <span className="block">behind your smile.</span>
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Our experienced dental professionals combine expertise,
              technology and compassionate care to deliver better results.
            </p>
          </div>

          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
          >
            View all doctors
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Doctors */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#4F46E5] hover:shadow-xl hover:shadow-indigo-100/50"
            >
              {/* Doctor Image Placeholder */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#EEF0FF]">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#4F46E5] text-3xl font-bold text-white shadow-xl">
                  {doctor.initials}
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-[#1A1A1A] shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                  Available for appointments
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#4F46E5]">
                  {doctor.specialty}
                </p>

                <div className="mt-5 space-y-3 border-t border-[#E5E7EB] pt-5">
                  <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <Award size={17} className="text-[#4F46E5]" />
                    {doctor.experience}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <GraduationCap size={17} className="text-[#4F46E5]" />
                    Qualified Dental Professional
                  </div>
                </div>

                <Link
                  href="/appointment"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:border-[#4F46E5] hover:text-[#4F46E5]"
                >
                  <CalendarCheck size={17} />
                  Book with Doctor
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}