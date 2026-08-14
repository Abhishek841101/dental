import {
  Building2,
  Globe2,
  Bell,
  ShieldCheck,
  Save,
} from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] p-6 sm:p-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4F46E5]">
            Admin Panel
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1A1A1A]">
            Clinic Settings
          </h1>

          <p className="mt-2 text-[#6B7280]">
            Manage your dental clinic information and preferences.
          </p>
        </div>

        {/* Clinic Information */}
        <section className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white">

          <div className="flex items-center gap-4 border-b border-[#E5E7EB] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Building2
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <div>
              <h2 className="font-bold text-[#1A1A1A]">
                Clinic Information
              </h2>

              <p className="mt-1 text-sm text-[#6B7280]">
                Basic information displayed to patients.
              </p>
            </div>
          </div>

          <div className="grid gap-5 p-6 sm:grid-cols-2">

            <div>
              <label className="text-sm font-medium text-[#1A1A1A]">
                Clinic Name
              </label>

              <input
                type="text"
                defaultValue="Smile Dental Clinic"
                className="mt-2 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1A1A1A]">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-[#1A1A1A]">
                Clinic Address
              </label>

              <textarea
                rows={3}
                placeholder="Enter clinic address"
                className="mt-2 w-full resize-none rounded-xl border border-[#E5E7EB] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#EEF0FF]"
              />
            </div>

          </div>
        </section>

        {/* Website Settings */}
        <section className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white">

          <div className="flex items-center gap-4 border-b border-[#E5E7EB] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Globe2
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <div>
              <h2 className="font-bold text-[#1A1A1A]">
                Website Settings
              </h2>

              <p className="mt-1 text-sm text-[#6B7280]">
                Configure basic website preferences.
              </p>
            </div>
          </div>

          <div className="space-y-5 p-6">

            <label className="flex cursor-pointer items-center justify-between gap-5">
              <div>
                <p className="font-medium text-[#1A1A1A]">
                  Online Booking
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Allow patients to request appointments online.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 accent-[#4F46E5]"
              />
            </label>

            <div className="border-t border-[#E5E7EB]" />

            <label className="flex cursor-pointer items-center justify-between gap-5">
              <div>
                <p className="font-medium text-[#1A1A1A]">
                  WhatsApp Notifications
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Send appointment confirmations through WhatsApp.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 accent-[#4F46E5]"
              />
            </label>

          </div>
        </section>

        {/* Notifications */}
        <section className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white">

          <div className="flex items-center gap-4 border-b border-[#E5E7EB] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <Bell
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <div>
              <h2 className="font-bold text-[#1A1A1A]">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-[#6B7280]">
                Configure clinic notification preferences.
              </p>
            </div>
          </div>

          <div className="space-y-5 p-6">

            <label className="flex cursor-pointer items-center justify-between gap-5">
              <div>
                <p className="font-medium text-[#1A1A1A]">
                  Appointment Reminders
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Enable reminders before appointments.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 accent-[#4F46E5]"
              />
            </label>

          </div>
        </section>

        {/* Security */}
        <section className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white">

          <div className="flex items-center gap-4 border-b border-[#E5E7EB] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF0FF]">
              <ShieldCheck
                size={21}
                className="text-[#4F46E5]"
              />
            </div>

            <div>
              <h2 className="font-bold text-[#1A1A1A]">
                Security
              </h2>

              <p className="mt-1 text-sm text-[#6B7280]">
                Security settings will be connected to authentication.
              </p>
            </div>
          </div>

          <div className="p-6">
            <p className="text-sm text-[#6B7280]">
              Admin authentication and role-based access will be
              configured during the backend integration.
            </p>
          </div>
        </section>

        {/* Save */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
          >
            <Save size={18} />
            Save Settings
          </button>
        </div>

      </div>
    </main>
  );
}