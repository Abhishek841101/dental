import { NextResponse } from "next/server";
import { doctors } from "@/data/doctors";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: doctors,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        message: "Doctor data received successfully",
        data: body,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid doctor data",
      },
      { status: 400 }
    );
  }
}