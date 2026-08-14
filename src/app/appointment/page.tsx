import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import AppointmentForm from "@/components/appointment/AppointmentForm";

export default function AppointmentPage() {
  return (
    <main className="bg-[#F9F9FB]">

      {/* Header */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF0FF]">
            <CalendarCheck
              size={27}
              className="text-[#4F46E5]"
            />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Book Appointment
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Schedule your dental visit
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Select your treatment, preferred doctor, date and available
            time slot. It only takes a few minutes.
          </p>

        </div>
      </section>

      {/* Booking */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">

          <AppointmentForm />

          {/* Side Information */}
          <aside className="space-y-5">

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
              <h2 className="font-bold text-[#1A1A1A]">
                Why book online?
              </h2>

              <div className="mt-5 space-y-5">

                <div className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#10B981]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      Easy booking
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                      Choose your preferred date and time from available
                      slots.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock3
                    size={19}
                    className="mt-0.5 shrink-0 text-[#4F46E5]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      Save your time
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                      Avoid unnecessary waiting at the clinic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-[#4F46E5]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      Confirmation
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                      Receive appointment confirmation after your booking.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="rounded-2xl bg-[#4F46E5] p-6 text-white">
              <p className="text-sm font-semibold">
                Need help?
              </p>

              <p className="mt-2 text-sm leading-6 text-indigo-100">
                Contact our clinic team if you need assistance choosing a
                treatment or appointment slot.
              </p>

              <a
                href="tel:+919876543210"
                className="mt-5 inline-block text-sm font-semibold underline underline-offset-4"
              >
                Call Clinic
              </a>
            </div>

          </aside>
        </div>
      </section>
    </main>
  );
}