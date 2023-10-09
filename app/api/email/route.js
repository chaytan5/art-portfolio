import { NextResponse } from "next/server";
import { Resend } from "resend";
import ThanksEmail from "@/emails/index";
import NewEnquiryEmail from "@/emails/NewEnquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    await resend.sendEmail({
      from: "Neha Rastogi <art@neharastogi.com>",
      to: data.Email,
      subject: "Thanks for contacting Neha Rastogi!",
      react: <ThanksEmail name={data.Name} />,
    });

    await resend.sendEmail({
      from: "Neha Rastogi <info@neharastogi.com>",
      to: "art@neharastogi.com",
      subject: "New enquiry received through contact form",
      react: (
        <NewEnquiryEmail
          name={data.Name}
          email={data.Email}
          message={data.Message}
        />
      ),
    });

    return NextResponse.json({
      status: "Ok",
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
