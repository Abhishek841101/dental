import { NextResponse } from "next/server";
import { services } from "@/data/services";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body) {
      return NextResponse.json(
        {
          success: false,
          message: "Service data is required",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Service data received successfully",
        data: body,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid service data",
      },
      { status: 400 }
    );
  }
}