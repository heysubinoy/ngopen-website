import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST: { key: "..." }
export async function POST(req: NextRequest) {
  const { key } = await req.json();
  if (!key)
    return NextResponse.json(
      { valid: false, error: "No key provided" },
      { status: 400 }
    );
  const apiKey = await prisma.apiKey.findUnique({ where: { key } });
  if (!apiKey || !apiKey.isActive) {
    return NextResponse.json({ valid: false }, { status: 200 });
  }
  return NextResponse.json({ valid: true, userId: apiKey.userId });
}
