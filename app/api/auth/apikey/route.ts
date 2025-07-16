import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
import prisma from "@/lib/prisma";
import { randomBytes } from "crypto";

// Helper to get user from session
async function getUser(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  return user;
}

// List API keys
export async function GET(req: NextRequest) {
  const user = await getUser(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const keys = await prisma.apiKey.findMany({ where: { userId: user.id } });
  return NextResponse.json(keys);
}

// Create API key
export async function POST(req: NextRequest) {
  const user = await getUser(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { description } = await req.json();
  const key = randomBytes(32).toString("hex");
  const apiKey = await prisma.apiKey.create({
    data: { key, userId: user.id, description },
  });
  return NextResponse.json(apiKey);
}

// Delete API key
export async function DELETE(req: NextRequest) {
  const user = await getUser(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  const apiKey = await prisma.apiKey.findUnique({ where: { id } });
  if (!apiKey || apiKey.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  await prisma.apiKey.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
