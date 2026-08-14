import { doctors } from "@/data/doctors";
import { Award, CalendarCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function AdminDoctorsPage() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4F46E5]">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            Doctors
          </h1>

          <p className="mt-2 text-[#6B7280]">
            Manage doctors, specialties and consultation details.
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
              Total Doctors
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              {doctors.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Award
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Specialists
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              {doctors.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <CalendarCheck
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Available Doctors
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              {doctors.length}
            </p>
          </div>

        </div>

        {/* Doctors */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6"
            >

              {/* Doctor Avatar */}
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] text-lg font-bold text-white">
                  {doctor.avatar}
                </div>

                <div className="min-w-0">
                  <h2 className="truncate font-bold text-[#1A1A1A]">
                    {doctor.name}
                  </h2>

                  <p className="mt-1 text-sm text-[#4F46E5]">
                    {doctor.specialty}
                  </p>
                </div>

              </div>

              {/* Details */}
              <div className="mt-6 space-y-3">

                <div>
                  <p className="text-xs font-semibold uppercase text-[#6B7280]">
                    Qualification
                  </p>

                  <p className="mt-1 text-sm text-[#1A1A1A]">
                    {doctor.qualification}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-[#6B7280]">
                    Experience
                  </p>

                  <p className="mt-1 text-sm text-[#1A1A1A]">
                    {doctor.experience}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-[#6B7280]">
                    Consultation Fee
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">
                    ₹{doctor.consultationFee}
                  </p>
                </div>

              </div>

              {/* Action */}
              <Link
                href={`/doctors/${doctor.slug}`}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#4F46E5] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
              >
                View Doctor
              </Link>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}