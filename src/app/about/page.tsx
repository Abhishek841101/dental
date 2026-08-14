import Link from "next/link";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Patient First",
    description:
      "Every treatment begins with understanding your needs, concerns and expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    description:
      "We follow professional standards and focus on safe, transparent and ethical dental care.",
  },
  {
    icon: Sparkles,
    title: "Modern Dentistry",
    description:
      "Our clinic combines modern techniques with personalized treatment planning.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our dental professionals bring experience and expertise across different areas of dentistry.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">

          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            About Our Clinic
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl">
            Dentistry built around
            <span className="block text-[#4F46E5]">
              your smile.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            We are committed to providing comfortable, modern and
            personalized dental care for individuals and families.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              A better dental experience starts with trust.
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#6B7280]">
              <p>
                Our clinic was built with a simple goal: make quality dental
                care accessible, comfortable and easy to understand.
              </p>

              <p>
                From your first consultation to your follow-up care, our
                team focuses on clear communication, modern treatment
                techniques and a comfortable patient experience.
              </p>

              <p>
                Whether you need a routine checkup, cosmetic treatment,
                orthodontic care or advanced dental treatment, we create a
                personalized plan around your needs.
              </p>
            </div>

            <Link
              href="/appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
            >
              Book an Appointment
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="rounded-3xl bg-[#EEF0FF] p-8 sm:p-10">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Sparkles
                  size={36}
                  className="text-[#4F46E5]"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#1A1A1A]">
                Your comfort matters.
              </h3>

              <p className="mt-4 leading-7 text-[#6B7280]">
                We believe dental care should feel simple, transparent and
                stress-free. Our team takes time to explain your treatment
                and answer your questions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-3xl font-bold text-[#4F46E5]">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-3xl font-bold text-[#4F46E5]">
                    10K+
                  </p>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    Patients Served
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F9F9FB] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
              Care you can feel confident about
            </h2>

            <p className="mt-4 text-[#6B7280]">
              Every part of our clinic is designed around quality care and
              a better patient experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF0FF]">
                    <Icon
                      size={23}
                      className="text-[#4F46E5]"
                    />
                  </div>

                  <h3 className="mt-5 font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <Award
            size={32}
            className="mx-auto text-[#4F46E5]"
          />

          <h2 className="mt-5 text-3xl font-bold text-[#1A1A1A]">
            Ready to take care of your smile?
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Schedule your consultation with our dental team today.
          </p>

          <Link
            href="/appointment"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#4338CA]"
          >
            Schedule Appointment
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}