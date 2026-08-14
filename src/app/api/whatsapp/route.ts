import { NextResponse } from "next/server";

type WhatsAppRequest = {
  phone?: string;
  name?: string;
  doctor?: string;
  date?: string;
  time?: string;
};

export async function POST(request: Request) {
  try {
    const body: WhatsAppRequest = await request.json();

    const {
      phone,
      name,
      doctor,
      date,
      time,
    } = body;

    if (!phone || !name || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Phone, name, date and time are required",
        },
        { status: 400 }
      );
    }

    /*
     * WhatsApp Business API integration
     * will be connected here later.
     *
     * Example flow:
     *
     * Appointment confirmed
     *        ↓
     * WhatsApp API
     *        ↓
     * Patient WhatsApp number
     */

    const message = `
Hello ${name},

Your dental appointment has been confirmed.

Doctor: ${doctor || "Dental Specialist"}
Date: ${date}
Time: ${time}

Thank you for choosing our dental clinic.
`;

    return NextResponse.json({
      success: true,
      message: "WhatsApp notification prepared successfully",
      data: {
        phone,
        message: message.trim(),
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid WhatsApp request",
      },
      { status: 400 }
    );
  }
}