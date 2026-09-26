import { NextResponse } from "next/server";
import { getHealth } from "@/lib/data";

export async function GET() {
  const health = await getHealth();
  return NextResponse.json(health);
}
