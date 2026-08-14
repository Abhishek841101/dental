import { CalendarCheck, Clock3, UserRound } from "lucide-react";

export default function AdminAppointmentsPage() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4F46E5]">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            Appointments
          </h1>

          <p className="mt-2 text-[#6B7280]">
            View and manage all patient appointments.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <CalendarCheck
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Total Appointments
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              0
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
              Today
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              0
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <UserRound
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <p className="mt-5 text-sm text-[#6B7280]">
              Patients
            </p>

            <p className="mt-1 text-3xl font-bold text-[#1A1A1A]">
              0
            </p>
          </div>

        </div>

        {/* Appointment Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">

          <div className="border-b border-[#E5E7EB] px-6 py-5">
            <h2 className="font-bold text-[#1A1A1A]">
              Recent Appointments
            </h2>

            <p className="mt-1 text-sm text-[#6B7280]">
              Appointment records will appear here after backend integration.
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
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Date
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Slot
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase text-[#6B7280]">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-14 text-center"
                  >
                    <CalendarCheck
                      size={32}
                      className="mx-auto text-[#6B7280]"
                    />

                    <p className="mt-4 font-medium text-[#1A1A1A]">
                      No appointments yet
                    </p>

                    <p className="mt-1 text-sm text-[#6B7280]">
                      Booked appointments will appear here.
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