import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { apiKeys } from "@/lib/schema";
import { eq } from "drizzle-orm";

// POST: { key: "..." }
export async function POST(req: NextRequest) {
  const { key } = await req.json();
  if (!key)
    return NextResponse.json(
      { valid: false, error: "No key provided" },
      { status: 400 }
    );
  const apiKey = await db
    .select()
    .from(apiKeys)
    .where(eq(apiKeys.key, key))
    .then((rows) => rows[0]);
  if (!apiKey || !apiKey.isActive) {
    return NextResponse.json({ valid: false }, { status: 200 });
  }
  return NextResponse.json({ valid: true, userId: apiKey.userId });
}
