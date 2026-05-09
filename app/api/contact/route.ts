import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, inquiryType, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Enquiry" <${process.env.GMAIL_USER}>`,
      to: (process.env.RECIPIENT_EMAILS || '').split(',').map(e => e.trim()).join(', '),
      subject: `New Enquiry Form Submission - ${inquiryType}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #f59e0b; margin-top: 0;">New Inquiry Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Type:</strong> ${inquiryType}</p>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center;">Sent from Annapurna Mahabahu Sewa Website</p>
          </div>
        </div>
      `,
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timed out')), 10000);
    });

    await Promise.race([
      transporter.sendMail(mailOptions),
      timeoutPromise
    ]);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('SERVER_ERROR [POST /api/contact]:', error.message || error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
