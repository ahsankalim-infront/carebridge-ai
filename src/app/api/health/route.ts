import { NextResponse } from "next/server";
import { isMysqlEnabled } from "@/lib/mysql-enabled";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    mysql: isMysqlEnabled(),
    fallback: "json",
    source: isMysqlEnabled() ? "mysql" : "json",
  });
}
