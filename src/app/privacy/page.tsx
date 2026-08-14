import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#F9F9FB] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#4F46E5]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF]">
            <ShieldCheck
              size={24}
              className="text-[#4F46E5]"
            />
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-[#6B7280]">
            Last updated: August 14, 2026
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Your privacy is important to us. This policy explains how our
            dental clinic collects, uses and protects information when you
            use our website and appointment services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">

          <div className="space-y-12">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                1. Information We Collect
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                When you contact us or request an appointment, we may
                collect information necessary to provide our services.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Full name",
                  "Phone number",
                  "Email address",
                  "Appointment date and time",
                  "Selected doctor or dental service",
                  "Information you voluntarily provide through forms",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-[#6B7280]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#10B981]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                2. How We Use Your Information
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Information provided through our website may be used to:
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-[#6B7280]">
                <li>Process and manage appointments.</li>
                <li>Contact you regarding your appointment.</li>
                <li>Respond to enquiries and support requests.</li>
                <li>Send appointment confirmations and reminders.</li>
                <li>Improve our website and patient experience.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                3. Appointment Information
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Appointment information is used only for managing your
                requested consultation or treatment. We may contact you
                through the phone number or communication method you
                provide for appointment-related purposes.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                4. WhatsApp Communication
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                If WhatsApp communication is enabled for our appointment
                service, we may use the phone number provided by you to
                send appointment confirmations, reminders or other
                appointment-related messages.
              </p>

              <p className="mt-4 leading-7 text-[#6B7280]">
                WhatsApp communications are subject to WhatsApp's own
                privacy policy and terms of service.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                5. Data Security
              </h2>

              <div className="mt-5 rounded-2xl bg-[#EEF0FF] p-6">
                <div className="flex gap-4">
                  <LockKeyhole
                    size={22}
                    className="mt-1 shrink-0 text-[#4F46E5]"
                  />

                  <p className="text-sm leading-6 text-[#6B7280]">
                    We take reasonable measures to protect information
                    submitted through our website. However, no method of
                    transmission or electronic storage can be guaranteed
                    to be completely secure.
                  </p>
                </div>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                6. Information Sharing
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                We do not sell your personal information. Information may
                be shared with trusted service providers only when
                necessary to operate our website, appointment system or
                communication services.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                7. Cookies
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Our website may use cookies or similar technologies to
                maintain functionality, improve performance and
                understand how visitors use the website.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                8. Your Choices
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                You may contact us if you want to ask about the personal
                information we hold about you, request correction of
                inaccurate information or ask about deletion where
                applicable.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                9. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                If you have questions about this Privacy Policy, please
                contact our clinic.
              </p>

              <div className="mt-5 rounded-2xl border border-[#E5E7EB] p-6">
                <p className="font-semibold text-[#1A1A1A]">
                  DentalCare Dental Clinic
                </p>

                <p className="mt-2 text-sm text-[#6B7280]">
                  123 Dental Avenue, Pune, Maharashtra, India
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Email: hello@dentalclinic.com
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Phone: +91 98765 43210
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}