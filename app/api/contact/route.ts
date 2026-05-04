import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Here you would typically send the email to your email service
    console.log('Contact form submission:', data)

    // Simulate sending email (in production, use SendGrid, Nodemailer, etc.)
    // await sendEmail(data)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
