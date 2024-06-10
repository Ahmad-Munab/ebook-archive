import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      message: "Hello Deployment",
    });
  } catch (error) {
    console.log(error);
  }
}
