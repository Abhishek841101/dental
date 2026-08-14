"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  UserRound,
} from "lucide-react";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import SlotSelector from "./SlotSelector";

export default function AppointmentForm() {
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const selectedService = services.find(
    (item) => item.slug === service
  );

  const selectedDoctor = doctors.find(
    (item) => item.id === doctor
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !service ||
      !doctor ||
      !date ||
      !slot ||
      !patientName ||
      !phone
    ) {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm sm:p-12">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF0FF]">
          <CheckCircle2
            size={34}
            className="text-[#10B981]"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-[#1A1A1A]">
          Appointment Request Received
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#6B7280]">
          Thank you, {patientName}. Your appointment request has been
          recorded. Our clinic team will confirm your appointment shortly.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-xl bg-[#F9F9FB] p-5 text-left">

          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              className="text-[#4F46E5]"
            />

            <div>
              <p className="text-xs text-[#6B7280]">
                Appointment
              </p>

              <p className="font-semibold text-[#1A1A1A]">
                {date} · {slot}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <UserRound
              size={18}
              className="text-[#4F46E5]"
            />

            <div>
              <p className="text-xs text-[#6B7280]">
                Doctor
              </p>

              <p className="font-semibold text-[#1A1A1A]">
                {selectedDoctor?.name}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Clock3
              size={18}
              className="text-[#4F46E5]"
            />

            <div>
              <p className="text-xs text-[#6B7280]">
                Treatment
              </p>

              <p className="font-semibold text-[#1A1A1A]">
                {selectedService?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-8">

        {/* Treatment */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Select Treatment
          </label>

          <select
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-sm text-[#1A1A1A] outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
          >
            <option value="">
              Choose a dental service
            </option>

            {services.map((item) => (
              <option
                key={item.slug}
                value={item.slug}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Select Doctor
          </label>

          <select
            value={doctor}
            onChange={(event) => setDoctor(event.target.value)}
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-sm text-[#1A1A1A] outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
          >
            <option value="">
              Choose your preferred doctor
            </option>

            {doctors.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name} — {item.specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Select Date
          </label>

          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(event) => setDate(event.target.value)}
            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-sm text-[#1A1A1A] outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
          />
        </div>

        {/* Slots */}
        {date && (
          <SlotSelector
            selectedSlot={slot}
            onSelect={setSlot}
          />
        )}

        {/* Patient */}
        <div className="border-t border-[#E5E7EB] pt-8">

          <h3 className="text-lg font-bold text-[#1A1A1A]">
            Patient Information
          </h3>

          <p className="mt-1 text-sm text-[#6B7280]">
            Enter your details so we can confirm your appointment.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                Full Name
              </label>

              <input
                type="text"
                value={patientName}
                onChange={(event) =>
                  setPatientName(event.target.value)
                }
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                Email Address
                <span className="ml-1 font-normal text-[#6B7280]">
                  (optional)
                </span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#E5E7EB] px-4 py-3.5 text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        {service && doctor && date && slot && (
          <div className="rounded-xl bg-[#EEF0FF] p-5">

            <p className="text-sm font-semibold text-[#1A1A1A]">
              Appointment Summary
            </p>

            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">

              <div>
                <p className="text-xs text-[#6B7280]">
                  Treatment
                </p>
                <p className="mt-1 font-semibold text-[#1A1A1A]">
                  {selectedService?.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6B7280]">
                  Doctor
                </p>
                <p className="mt-1 font-semibold text-[#1A1A1A]">
                  {selectedDoctor?.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#6B7280]">
                  Date & Time
                </p>
                <p className="mt-1 font-semibold text-[#1A1A1A]">
                  {date} · {slot}
                </p>
              </div>

            </div>
          </div>
        )}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
        >
          Confirm Appointment
          <ArrowRight size={18} />
        </button>

      </div>
    </form>
  );
}