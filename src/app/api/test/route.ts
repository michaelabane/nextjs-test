import { after, NextResponse } from "next/server";

export async function GET() {
  console.log("GET /api/test");
  after(async () => {
    // 10 second delay
    await new Promise((resolve) => setTimeout(resolve, 10000));
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
