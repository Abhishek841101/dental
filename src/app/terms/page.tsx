import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function TermsPage() {
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
            <FileText
              size={24}
              className="text-[#4F46E5]"
            />
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-sm text-[#6B7280]">
            Last updated: August 14, 2026
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
            These terms explain the rules for using our website and
            appointment booking services.
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
                1. Use of Our Website
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                By using this website, you agree to use it responsibly and
                in accordance with these Terms & Conditions. The website is
                intended to provide information about our dental clinic,
                services and appointment availability.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                2. Appointment Booking
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Online appointment requests are subject to availability.
                Submitting an appointment request does not necessarily
                guarantee that the appointment has been confirmed until
                confirmation is provided by the clinic.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Please provide accurate contact information.",
                  "Please select the correct date and available time slot.",
                  "Appointments may be changed or cancelled by the clinic when necessary.",
                  "Patients should arrive on time for their scheduled appointment.",
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

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                3. Appointment Cancellation
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                If you are unable to attend your appointment, please
                contact the clinic as early as possible so that the slot
                can be made available to another patient.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                4. Medical Information
              </h2>

              <div className="mt-5 rounded-2xl bg-[#EEF0FF] p-6">
                <div className="flex gap-4">
                  <AlertCircle
                    size={22}
                    className="mt-1 shrink-0 text-[#4F46E5]"
                  />

                  <p className="text-sm leading-6 text-[#6B7280]">
                    Information available on this website is for general
                    informational purposes and should not be considered a
                    substitute for professional dental examination,
                    diagnosis or treatment.
                  </p>
                </div>
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                5. Services and Pricing
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Service descriptions and displayed prices are provided for
                general information. Actual treatment plans and fees may
                vary depending on the patient's condition, required
                treatment and clinical assessment.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                6. Website Content
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                We make reasonable efforts to keep website information
                accurate and current. However, we do not guarantee that
                all content will always be complete, accurate or
                up-to-date.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                7. Third-Party Services
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                Our website may use third-party services such as maps,
                communication platforms, analytics services or payment
                providers. Their services may be governed by their own
                terms and privacy policies.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                8. Limitation of Liability
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                To the extent permitted by applicable law, the clinic is
                not responsible for temporary website interruptions,
                third-party service failures or information submitted
                incorrectly by users.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                9. Changes to These Terms
              </h2>

              <p className="mt-4 leading-7 text-[#6B7280]">
                We may update these Terms & Conditions from time to time.
                Updated terms will be published on this page with a
                revised date.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                10. Contact Us
              </h2>

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