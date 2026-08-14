import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Mon–Sat, 9:00 AM – 8:00 PM",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@dentalclinic.com",
    description: "We usually reply within 24 hours",
    href: "mailto:hello@dentalclinic.com",
  },
  {
    icon: MapPin,
    title: "Visit Our Clinic",
    value: "123 Dental Avenue",
    description: "Pune, Maharashtra, India",
    href: "#location",
  },
  {
    icon: Clock3,
    title: "Clinic Hours",
    value: "Mon – Sat",
    description: "9:00 AM – 8:00 PM",
    href: "#hours",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">

          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            We are here to
            <span className="block text-[#4F46E5]">
              help you.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Have a question about a treatment, appointment or our clinic?
            Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4F46E5] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF]">
                    <Icon
                      size={22}
                      className="text-[#4F46E5]"
                    />
                  </div>

                  <h2 className="mt-5 font-bold text-[#1A1A1A]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm font-semibold text-[#4F46E5]">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                    {item.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Location */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Form */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm sm:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <MessageSquare
                size={23}
                className="text-[#4F46E5]"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#1A1A1A]">
              Send us a message
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Fill out the form and our team will get back to you.
            </p>

            <form className="mt-7 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
              >
                Send Message
                <ArrowRight size={17} />
              </button>

            </form>
          </div>

          {/* Location */}
          <div
            id="location"
            className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm sm:p-8"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <MapPin
                size={23}
                className="text-[#4F46E5]"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#1A1A1A]">
              Find our clinic
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Visit us for consultation, treatment and complete dental
              care.
            </p>

            {/* Map Placeholder */}
            <div className="mt-7 flex min-h-[300px] flex-1 items-center justify-center rounded-2xl bg-[#F9F9FB]">

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF0FF]">
                  <MapPin
                    size={26}
                    className="text-[#4F46E5]"
                  />
                </div>

                <p className="mt-4 font-semibold text-[#1A1A1A]">
                  123 Dental Avenue
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Pune, Maharashtra, India
                </p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]"
                >
                  Open in Google Maps
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Appointment CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Prefer to book directly?
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Choose your preferred doctor, date and available time slot.
          </p>

          <Link
            href="/appointment"
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