import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export default function AppointmentConfirmationPage() {
  return (
    <main className="min-h-[75vh] bg-[#F9F9FB] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl">

        {/* Success Card */}
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm sm:p-12">

          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF0FF]">
            <CheckCircle2
              size={42}
              strokeWidth={2}
              className="text-[#10B981]"
            />
          </div>

          {/* Heading */}
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Appointment Confirmed
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Your appointment is booked!
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-[#6B7280]">
            Thank you for choosing our dental clinic. Your appointment
            request has been received successfully.
          </p>

          {/* Appointment Info */}
          <div className="mt-8 rounded-2xl bg-[#EEF0FF] p-5 text-left">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                <CalendarCheck
                  size={21}
                  className="text-[#4F46E5]"
                />
              </div>

              <div>
                <h2 className="font-semibold text-[#1A1A1A]">
                  Appointment Details
                </h2>

                <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                  Your selected doctor, date and time slot will be
                  displayed here after the booking system is connected
                  to the backend.
                </p>
              </div>
            </div>

          </div>

          {/* WhatsApp */}
          <div className="mt-4 rounded-2xl border border-[#E5E7EB] p-5 text-left">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF]">
                <MessageCircle
                  size={21}
                  className="text-[#10B981]"
                />
              </div>

              <div>
                <h2 className="font-semibold text-[#1A1A1A]">
                  WhatsApp Confirmation
                </h2>

                <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                  A confirmation message will be sent to your WhatsApp
                  number once WhatsApp integration is enabled.
                </p>
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F9F9FB]"
            >
              Back to Home
            </Link>

            <Link
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
            >
              View Doctors
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}