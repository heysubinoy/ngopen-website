import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
import { db } from "@/lib/db";
import { randomBytes } from "crypto";
import { apiKeys, users } from "@/lib/schema";
import { eq } from "drizzle-orm";

// Helper to get user from session
async function getUser(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email))
    .then((rows) => rows[0]);
  return user;
}

// List API keys
export async function GET(req: NextRequest) {
  const user = await getUser(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const keys = await db
    .select()
    .from(apiKeys)
    .where(eq(apiKeys.userId, user.id));
  return NextResponse.json(keys);
}

// Create API key
export async function POST(req: NextRequest) {
  const user = await getUser(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { description } = await req.json();
  const key = randomBytes(32).toString("hex");
  const inserted = await db
    .insert(apiKeys)
    .values({ key, userId: user.id, description })
    .returning();
  return NextResponse.json(inserted[0]);
}

// Delete API key
export async function DELETE(req: NextRequest) {
  const user = await getUser(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  const apiKey = await db
    .select()
    .from(apiKeys)
    .where(eq(apiKeys.id, id))
    .then((rows) => rows[0]);
  if (!apiKey || apiKey.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  await db.delete(apiKeys).where(eq(apiKeys.id, id));
  return NextResponse.json({ success: true });
}
