"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarCheck,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F46E5] text-lg font-bold text-white">
            D
          </div>

          <div>
            <p className="text-base font-bold leading-none text-[#1A1A1A]">
              DentalCare
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6B7280]">
              Dental Clinic
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6B7280] transition hover:text-[#4F46E5]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          <Link
            href="/login"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#6B7280] hover:bg-[#F9F9FB] hover:text-[#4F46E5]"
          >
            Login
          </Link>

          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
          >
            <CalendarCheck size={17} />
            Book Appointment
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1A1A1A] hover:bg-[#F9F9FB] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#E5E7EB] bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-[#6B7280] hover:bg-[#EEF0FF] hover:text-[#4F46E5]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 border-t border-[#E5E7EB] pt-4">

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#6B7280]"
              >
                Login
              </Link>

              <Link
                href="/appointment"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-3.5 text-sm font-semibold text-white"
              >
                <CalendarCheck size={17} />
                Book Appointment
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}