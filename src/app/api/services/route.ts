import { NextResponse } from "next/server";
import { getServices } from "@/lib/data";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await getServices();
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { data: [], source: "json", error: "Unable to load services." },
      { status: 500 },
    );
  }
}
