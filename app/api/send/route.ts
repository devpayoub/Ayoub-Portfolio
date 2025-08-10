import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.BURNER_EMAIL,
      pass: process.env.BURNER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.BURNER_EMAIL,
      to: process.env.EMAIL,
      subject: `Message from ${email}`,
      html: `
            <p>Email: ${email} </p>
            <p>Subject: ${subject} </p>
            <p>Message: ${message} </p>
            `,
    });
    return NextResponse.json({ message: "Message was sent sucessfully" });
  } catch (error) {
    NextResponse.json({ message: "Unable to send message" });
  }
}
