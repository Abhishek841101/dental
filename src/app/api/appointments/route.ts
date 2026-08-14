import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Appointments API is working",
    data: [],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment data is required",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Appointment received successfully",
        data: body,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request data",
      },
      { status: 400 }
    );
  }
}
