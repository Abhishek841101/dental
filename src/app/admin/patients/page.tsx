import {
  Search,
  UserRound,
  Phone,
  Mail,
  CalendarDays,
} from "lucide-react";

export default function AdminPatientsPage() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4F46E5]">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            Patients
          </h1>

          <p className="mt-2 text-[#6B7280]">
            View and manage registered clinic patients.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <UserRound
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Total Patients
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <CalendarDays
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              New This Month
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Phone
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Contact Records
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              0
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-5">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
            />

            <input
              type="text"
              placeholder="Search patients..."
              className="w-full rounded-xl border border-[#E5E7EB] bg-white py-3 pl-10 pr-4 text-sm text-[#1A1A1A] outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
            />
          </div>
        </div>

        {/* Patients Table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">

          <div className="border-b border-[#E5E7EB] px-6 py-5">
            <h2 className="font-bold text-[#1A1A1A]">
              Patient Records
            </h2>

            <p className="mt-1 text-sm text-[#6B7280]">
              Registered patient information will appear here.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">

              <thead className="bg-[#F9F9FB]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Patient
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Email
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Joined
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-14 text-center"
                  >
                    <UserRound
                      size={32}
                      className="mx-auto text-[#6B7280]"
                    />

                    <p className="mt-4 font-medium text-[#1A1A1A]">
                      No patients yet
                    </p>

                    <p className="mt-1 text-sm text-[#6B7280]">
                      Patient records will appear after registration.
                    </p>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </main>
  );
}