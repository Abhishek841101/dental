import Link from "next/link";

export default function AdminPage() {
  const items = [
    ["Appointments", "/admin/appointments"],
    ["Doctors", "/admin/doctors"],
    ["Patients", "/admin/patients"],
    ["Services", "/admin/services"],
    ["Settings", "/admin/settings"],
  ];

  return (
    <main className="min-h-screen bg-[#F9F9FB] p-6 sm:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-[#6B7280]">
          Manage your dental clinic.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-6 transition hover:border-[#4F46E5] hover:bg-[#EEF0FF]"
            >
              <h2 className="font-semibold text-[#1A1A1A]">
                {name}
              </h2>
              <p className="mt-2 text-sm text-[#6B7280]">
                Manage {name.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}