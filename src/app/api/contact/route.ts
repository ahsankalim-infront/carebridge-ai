import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/data";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const fullName = String(body?.fullName ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const organization = String(body?.organization ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!fullName || !email || !phone || !organization || !message) {
      return NextResponse.json(
        { error: "Please complete every field." },
        { status: 400 },
      );
    }

    const result = await saveContactMessage({
      fullName,
      email,
      phone,
      organization,
      message,
    });

    return NextResponse.json({
      ok: true,
      source: result.source,
      id: result.data.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
