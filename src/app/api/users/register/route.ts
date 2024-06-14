import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const {
      name,
      email,
      is_student,
      is_creator,
      is_admin,
      imageUrl,
      is_premium,
    } = body;

    const postedUser = await db.user.create({
      data: {
        id: userId,
        name,
        email,
        is_student,
        is_creator,
        imageUrl,
        is_premium,
      },
    });

    return NextResponse.json(postedUser);
  } catch (error) {
    console.log("[USERS_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
