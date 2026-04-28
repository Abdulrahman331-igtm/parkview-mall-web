import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Grab the data sent from your frontend form
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // 2. Validate the data (make sure they didn't send an empty form)
    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 3. Send the email using Resend
    const data = await resend.emails.send({
      from: 'Parkview Mall Website <onboarding@resend.dev>', // Resend's default testing address
      to: 'abdirahmanshaffy22@gmail.com', // The mall's real email address!
      subject: `New Mall Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #111;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h3 style="color: #555;">Message:</h3>
          <p style="white-space: pre-wrap; color: #333; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    // 4. Tell the frontend it was a success!
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}