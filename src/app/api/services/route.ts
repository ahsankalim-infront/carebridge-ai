import { NextResponse } from "next/server";
import { getServices } from "@/lib/data";

export async function GET() {
  const result = await getServices();
  return NextResponse.json(result);
}
