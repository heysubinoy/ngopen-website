import Link from "next/link"
import { ArrowLeft, Code, FileText, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                ngopen
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Button variant="outline" className="bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-4">ngopen Documentation</h1>
              <p className="text-zinc-400">
                Comprehensive guide to installing, configuring, and using ngopen for your development workflow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
                <p className="text-zinc-400">
                  ngopen is a self-hosted reverse tunneling and HTTP exposure service. This guide will help you get
                  started with installation and basic usage.
                </p>
              </div>

              {/* <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Installation</h3>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Learn how to install ngopen on different platforms and environments.
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="px-0 mt-2 text-emerald-400 hover:text-emerald-300"
                    asChild
                  >
                    <Link href="/docs/installation">Read More</Link>
                  </Button>
                </div>

                <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-blue-400" />
                    <h3 className="font-semibold">Configuration</h3>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Configure ngopen to match your project requirements and preferences.
                  </p>
                  <Button variant="link" size="sm" className="px-0 mt-2 text-blue-400 hover:text-blue-300" asChild>
                    <Link href="/docs/configuration">Read More</Link>
                  </Button>
                </div>
              </div> */}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Core Concepts</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-zinc-800 p-4">
                  <h3 className="font-semibold mb-2">How Tunneling Works</h3>
                  <p className="text-sm text-zinc-400">
                    ngopen creates a secure tunnel between your local machine and the ngopen server. When a request
                    comes to the public URL, it's forwarded through this tunnel to your local service. This allows
                    external access to services running on your local machine without requiring you to open ports in
                    your firewall or set up complex networking.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 p-4">
                  <h3 className="font-semibold mb-2">Self-Hosting</h3>
                  <p className="text-sm text-zinc-400">
                    Unlike other tunneling services, ngopen is designed to be self-hosted. This means you have complete
                    control over your data and can customize the service to your needs. You can run ngopen on your own
                    server, in a Docker container, or on a cloud provider.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 p-4">
                  <h3 className="font-semibold mb-2">Security Considerations</h3>
                  <p className="text-sm text-zinc-400">
                    When exposing local services to the internet, security is paramount. ngopen provides TLS encryption,
                    authentication options, and access controls to help you secure your tunnels. Always be mindful of
                    what services you expose and who has access to them.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Command Reference</h2>
              <div className="space-y-2">
                <div className="rounded-md bg-zinc-900 p-3">
                  <div className="font-mono text-sm">
                    <span className="text-emerald-400">ngopen -local localhost:3000 -auth XXX</span> - Initialize a new ngopen server
                  </div>
                </div>

                {/* <div className="rounded-md bg-zinc-900 p-3">
                  <div className="font-mono text-sm">
                    <span className="text-emerald-400">ngopen expose --port [PORT]</span> - Expose a local port
                  </div>
                </div> */}

                <div className="rounded-md bg-zinc-900 p-3">
                  <div className="font-mono text-sm">
                    <span className="text-emerald-400">ngopen config [get|set] [KEY] [VALUE]</span> - Manage
                    configuration
                  </div>
                </div>

                <div className="rounded-md bg-zinc-900 p-3">
                  <div className="font-mono text-sm">
                    <span className="text-emerald-400">ngopen help</span> - Display help information
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-zinc-800 bg-black">
        <div className="container flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <Code className="h-5 w-5 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                ngopen
              </span>
            </div>
            <div className="text-sm text-zinc-400">© {new Date().getFullYear()} ngopen. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
