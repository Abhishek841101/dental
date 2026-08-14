import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    treatment: "Root Canal Treatment",
    text: "The entire experience was smooth and comfortable. The doctor explained every step clearly.",
  },
  {
    name: "Sneha Patel",
    treatment: "Teeth Whitening",
    text: "Very professional clinic with friendly staff. I am extremely happy with the results.",
  },
  {
    name: "Aman Shah",
    treatment: "Dental Cleaning",
    text: "Clean clinic, modern equipment and excellent service. Booking an appointment was very easy.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
            Patient Stories
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Trusted by our patients
          </h2>

          <p className="mt-4 text-[#6B7280]">
            Real experiences from people who trusted us with their smiles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F9F9FB] p-7"
            >
              <Quote size={28} className="text-[#4F46E5]" />

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    className="text-[#4F46E5]"
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-[#6B7280]">
                "{testimonial.text}"
              </p>

              <div className="mt-6 border-t border-[#E5E7EB] pt-5">
                <p className="font-semibold text-[#1A1A1A]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-[#6B7280]">
                  {testimonial.treatment}
                </p>

                <span className="mt-3 inline-flex items-center rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-medium text-[#4F46E5]">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}