"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
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
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="mx-auto w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-8 md:p-10 shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-2">
            Sign in to your account
          </h2>

          <Button
            type="button"
            variant="outline"
            className="w-full bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white mt-6"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </Button>
        </div>
      </main>
      <footer className="border-t border-zinc-800 bg-black mt-8">
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
