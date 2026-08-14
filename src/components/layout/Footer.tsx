import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F9F9FB]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF] text-xl">
                🦷
              </div>

              <div>
                <h2 className="font-bold text-[#1A1A1A]">
                  DentalCare
                </h2>
                <p className="text-xs text-[#6B7280]">
                  Advanced Dental Clinic
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#6B7280]">
              Providing modern, comfortable and trusted dental care for
              individuals and families with advanced technology and
              experienced dental professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-[#6B7280] hover:text-[#4F46E5]"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-sm text-[#6B7280] hover:text-[#4F46E5]"
              >
                Services
              </Link>

              <Link
                href="/doctors"
                className="text-sm text-[#6B7280] hover:text-[#4F46E5]"
              >
                Doctors
              </Link>

              <Link
                href="/contact"
                className="text-sm text-[#6B7280] hover:text-[#4F46E5]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A]">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
              <p>📍 Pune, Maharashtra</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@dentalcare.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#E5E7EB] pt-6 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DentalCare. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#4F46E5]">
              Privacy Policy
            </Link>

            <Link href="/contact" className="hover:text-[#4F46E5]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}   