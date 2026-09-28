import { NextResponse } from "next/server";
import { saveAppointment } from "@/lib/data";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const preferredDate = String(body?.preferredDate ?? "").trim();
    const preferredTime = String(body?.preferredTime ?? "").trim();
    const reason = String(body?.reason ?? "").trim();

    if (!name || !email || !phone || !preferredDate || !preferredTime || !reason) {
      return NextResponse.json(
        { error: "Please complete every field." },
        { status: 400 },
      );
    }

    const result = await saveAppointment({
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      reason,
    });

    return NextResponse.json({
      ok: true,
      source: result.source,
      id: result.data.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to book this consultation right now." },
      { status: 500 },
    );
  }
}
