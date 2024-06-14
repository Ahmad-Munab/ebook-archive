import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import db from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.userId) {
      return new NextResponse("Missing UserId", { status: 404 });
    }

    const user = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.userId) {
      return new NextResponse("Missing userId", { status: 401 });
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

    const updatedUser = await db.user.update({
      where: {
        id: params.userId,
      },
      data: {
        id: params.userId,
        name,
        email,
        is_student,
        is_creator,
        imageUrl,
        is_premium,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("[USER_PUT]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.userId) {
      return new NextResponse("Missing userId", { status: 401 });
    }

    const deletedUser = await db.user.delete({
      where: { id: params.userId },
    });

    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log("[USER_PUT]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
