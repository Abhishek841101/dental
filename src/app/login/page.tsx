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
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F9F9FB] py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm lg:grid-cols-2">

        {/* Left */}
        <div className="hidden bg-[#4F46E5] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl font-bold">
              D
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-indigo-100">
              Welcome Back
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight">
              Manage your
              <br />
              dental care easily.
            </h1>

            <p className="mt-5 max-w-md leading-7 text-indigo-100">
              Login to manage your appointments and stay connected with
              our dental clinic.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "View your appointments",
              "Manage your booking details",
              "Receive appointment updates",
              "Easy access to your patient account",
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
                Patient Portal
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                Login to access your patient account.
              </p>
            </div>

            <form className="mt-8 space-y-5">

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
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-[#1A1A1A]">
                    Password
                  </label>

                  <Link
                    href="#"
                    className="text-xs font-semibold text-[#4F46E5] hover:text-[#4338CA]"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#E5E7EB] py-3.5 pl-11 pr-12 text-sm outline-none transition placeholder:text-[#6B7280] focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF0FF]"
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

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#E5E7EB] accent-[#4F46E5]"
                />

                <span className="text-sm text-[#6B7280]">
                  Remember me
                </span>
              </label>

              {/* Login */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
              >
                Login
                <ArrowRight size={17} />
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E5E7EB]" />
              <span className="text-xs text-[#6B7280]">
                New patient?
              </span>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <Link
              href="/register"
              className="flex w-full items-center justify-center rounded-xl border border-[#E5E7EB] px-6 py-3.5 text-sm font-semibold text-[#1A1A1A] transition hover:border-[#4F46E5] hover:bg-[#EEF0FF] hover:text-[#4F46E5]"
            >
              Create Patient Account
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}