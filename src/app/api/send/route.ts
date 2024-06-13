import { EmailTemplate } from "@/components/emails/EmailTemplate";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, subject, description } = body;

    const { data, error } = await resend.emails.send({
      from: email,
      to: [
        "freelancerahad222@gmail.com",
        "ahmadmunab22@gmail.com",
        "mahmud.amaan@gmail.com",
      ],
      subject: subject,
      react: EmailTemplate({
        firstName: ["Ahads", "Munab", "Amaan"],
        description,
      }),
      text: "gmail.com",
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
