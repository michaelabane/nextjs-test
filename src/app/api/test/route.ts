import { after } from "next/server";

export async function GET() {
  console.log("GET /api/test");
  after(async () => {
    // 10 second delay
    await new Promise((resolve) => setTimeout(resolve, 10000));
  });

  return new Response(JSON.stringify({ status: "success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
