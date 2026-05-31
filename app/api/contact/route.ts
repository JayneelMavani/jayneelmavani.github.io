import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Replace with your email service (SendGrid, Resend, etc.)
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
