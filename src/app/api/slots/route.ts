import { NextResponse } from "next/server";

type Slot = {
  id: string;
  time: string;
  available: boolean;
};

const defaultSlots: Slot[] = [
  {
    id: "slot-1",
    time: "09:00 AM",
    available: true,
  },
  {
    id: "slot-2",
    time: "09:30 AM",
    available: true,
  },
  {
    id: "slot-3",
    time: "10:00 AM",
    available: true,
  },
  {
    id: "slot-4",
    time: "10:30 AM",
    available: true,
  },
  {
    id: "slot-5",
    time: "11:00 AM",
    available: true,
  },
  {
    id: "slot-6",
    time: "11:30 AM",
    available: true,
  },
  {
    id: "slot-7",
    time: "04:00 PM",
    available: true,
  },
  {
    id: "slot-8",
    time: "04:30 PM",
    available: true,
  },
  {
    id: "slot-9",
    time: "05:00 PM",
    available: true,
  },
  {
    id: "slot-10",
    time: "05:30 PM",
    available: true,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const doctorId = searchParams.get("doctorId");
  const date = searchParams.get("date");

  if (!doctorId || !date) {
    return NextResponse.json(
      {
        success: false,
        message: "doctorId and date are required",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    doctorId,
    date,
    slots: defaultSlots,
  });
}