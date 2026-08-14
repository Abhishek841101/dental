"use client";

type SlotSelectorProps = {
  selectedSlot: string;
  onSelect: (slot: string) => void;
};

const slots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

export default function SlotSelector({
  selectedSlot,
  onSelect,
}: SlotSelectorProps) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-semibold text-[#1A1A1A]">
          Select an available slot
        </h3>

        <p className="mt-1 text-sm text-[#6B7280]">
          Choose a convenient time for your appointment.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {slots.map((slot) => {
          const selected = selectedSlot === slot;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelect(slot)}
              className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                selected
                  ? "border-[#4F46E5] bg-[#4F46E5] text-white"
                  : "border-[#E5E7EB] bg-white text-[#1A1A1A] hover:border-[#4F46E5] hover:text-[#4F46E5]"
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}