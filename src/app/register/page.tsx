"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  User,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F9F9FB] py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm lg:grid-cols-2">

        {/* Left Information */}
        <div className="hidden bg-[#4F46E5] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl font-bold">
              D
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-indigo-100">
              Join DentalCare
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight">
              Your dental care,
              <br />
              all in one place.
            </h1>

            <p className="mt-5 max-w-md leading-7 text-indigo-100">
              Create your patient account to manage appointments,
              view booking information and stay connected with our
              dental team.
            </p>
          </div>

          <div className="mt-12 space-y-4">

            {[
              "Easy appointment booking",
              "Manage your upcoming appointments",
              "Receive appointment updates",
              "Secure patient information",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-indigo-50"
              >
                <CheckCircle2 size={18} />
                {item}
              </div>
            ))}

          </div>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-10 lg:p-12">

          <div className="mx-auto max-w-md">

            <div className="lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F46E5] font-bold text-white">
                D
              </div>
            </div>

            <div className="mt-7 lg:mt-0">
              <p className="text-sm font-semibold text-[#4F46E5]">
                Create Account
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Enter your details to create your patient account.
              </p>
            </div>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-4 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  />

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-4 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-4 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-12 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#4F46E5]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1A1A1A]">
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-12 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#4F46E5]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-[#E5E7EB] accent-[#4F46E5]"
                />

                <span className="text-xs leading-5 text-[#6B7280]">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-[#4F46E5]"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#4F46E5]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
              >
                Create Account
                <ArrowRight size={17} />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-[#6B7280]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#4F46E5] hover:text-[#4338CA]"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}