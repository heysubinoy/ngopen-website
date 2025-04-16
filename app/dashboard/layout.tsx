import type React from "react"
import { redirect } from "next/navigation"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/auth"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6" />
            <span>ngopen</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">Welcome, {user.name}</span>
            <Button variant="outline" size="sm" asChild>
              <a href="/api/logout">Logout</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6 px-4 md:px-6">{children}</main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <Code className="h-5 w-5" />
              <span>ngopen</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} ngopen. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
