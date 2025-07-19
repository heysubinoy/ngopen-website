import type React from "react";
import { redirect } from "next/navigation";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6 text-emerald-400" />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              ngopen
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">
              Welcome, {user?.name || "User"}
            </span>
            <Button
              variant="secondary"
              size="sm"
              className="border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800"
              asChild
            >
              <a href="/api/auth/signout">Logout</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 px-4 md:px-6">{children}</main>

      <footer className="border-t border-zinc-800 bg-black">
        <div className="container flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <Code className="h-5 w-5 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                ngopen
              </span>
            </div>
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} ngopen. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
