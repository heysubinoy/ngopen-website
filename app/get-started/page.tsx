import Link from "next/link";
import { ArrowLeft, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";

export default function GetStartedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/" className="flex items-center gap-2">
              <img src="/ngopen.png" alt="ngopen logo" className="h-6 w-6" />
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
            <Button
              variant="outline"
              className="bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-4">
                Get Started with ngopen
              </h1>
              <p className="text-zinc-400">
                Follow these steps to install and start using ngopen for your
                local development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Installation
                </h2>
                <p className="text-zinc-400">
                  Install ngopen using one of the following methods:
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Using Go</h3>
                  </div>
                  <CodeBlock code="go install github.com/heysubinoy/ngopen@latest" />
                </div>

                {/* <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Using Homebrew</h3>
                  </div>
                  <CodeBlock code="brew install ngopen/tap/ngopen" />
                </div>

                <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Using Docker</h3>
                  </div>
                  <CodeBlock code="docker pull ngopen/ngopen:latest" />
                </div> */}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Basic Usage
                </h2>
                <p className="text-zinc-400">
                  Once installed, you can start using ngopen with these
                  commands:
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Expose a local server</h3>
                  </div>
                  <CodeBlock code="ngopen --local localhost 3000" />
                  <p className="mt-2 text-sm text-zinc-400">
                    This will create a tunnel from your localhost:3000 to a
                    public URL.
                  </p>
                </div>

                {/* <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Use a custom subdomain</h3>
                  </div>
                  <CodeBlock code="ngopen -local 3000 --subdomain myapp" />
                  <p className="mt-2 text-sm text-zinc-400">This will make your app available at myapp.ngopen.io</p>
                </div> */}

                <div className="rounded-lg border border-zinc-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold">Use a custom domain</h3>
                  </div>
                  <CodeBlock code="ngopen --local localhost:3000 --host api.example.com" />
                  <p className="mt-2 text-sm text-zinc-400">
                    Make sure your DNS is configured to point to your ngopen
                    server. (Coming Soon)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Next Steps
                </h2>
                <p className="text-zinc-400">
                  Explore more advanced features and configurations:
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href="/docs"
                  className="rounded-lg border border-zinc-800 p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
                >
                  <h3 className="font-semibold mb-2">Read the Documentation</h3>
                  <p className="text-sm text-zinc-400">
                    Explore the full documentation to learn about all features
                    and options.
                  </p>
                </Link>

                <Link
                  href="https://github.com/heysubinoy/ngopen"
                  className="rounded-lg border border-zinc-800 p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
                >
                  <h3 className="font-semibold mb-2">Contribute on GitHub</h3>
                  <p className="text-sm text-zinc-400">
                    Check out the source code, report issues, or contribute to
                    the project.
                  </p>
                </Link>
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
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} ngopen. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
