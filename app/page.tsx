import Link from "next/link";
import {
  ArrowRight,
  Code,
  Github,
  Terminal,
  Lock,
  Globe,
  Zap,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { FeatureCard } from "@/components/feature-card";
import { StepCard } from "@/components/step-card";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src="/ngopen.png" alt="ngopen logo" className="h-6 w-6" />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              ngopen
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-zinc-700 text-white hover:bg-zinc-800 hover:text-white bg-zinc-900"
              asChild
            >
              <Link href="https://github.com/heysubinoy/ngopen">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white border-0"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-white via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                    Expose local servers.
                    <br />
                    Open tunnels.
                    <br />
                    Self-hosted freedom.
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    ngopen lets you create secure tunnels from your localhost to
                    the internet — no third-party servers, no limits.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white border-0"
                    asChild
                  >
                    <Link href="/get-started">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white bg-zinc-900"
                    asChild
                  >
                    <Link href="https://github.com/heysubinoy/ngopen">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-[500px] overflow-hidden rounded-xl border border-zinc-800 bg-black p-4 shadow-xl">
                  <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <div className="ml-2 text-sm text-zinc-400">terminal</div>
                  </div>
                  <CodeBlock
                    code={`$ go install github.com/heysubinoy/ngopen@latest
$ ngopen --local localhost:3000 --auth XXX
✓ Tunnel established
✓ Forwarding https://demo.n.sbn.lol -> localhost:3000
✓ Ready for connections`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800 bg-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ngopen provides all the tools you need to expose your local
                  services securely, with complete control.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <FeatureCard
                icon={<Server className="h-12 w-12 text-emerald-400" />}
                title="Self-hosted"
                description="Run on your own infrastructure. No third-party servers or cloud dependencies."
              />
              <FeatureCard
                icon={<Lock className="h-12 w-12 text-blue-400" />}
                title="Secure HTTPS"
                description="Automatic TLS certificate generation for secure HTTPS connections."
              />
              <FeatureCard
                icon={<Terminal className="h-12 w-12 text-purple-400" />}
                title="Developer-friendly CLI"
                description="Intuitive command-line interface designed for developers."
              />
              <FeatureCard
                icon={<Globe className="h-12 w-12 text-emerald-400" />}
                title="Custom domains 
                (Coming Soon)"
                description="Use your own domains and subdomains for a professional experience."
              />
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-blue-400" />}
                title="Lightweight & fast"
                description="Written in Go for maximum performance and minimal resource usage."
              />
              {/* <FeatureCard
                icon={<Code className="h-12 w-12 text-purple-400" />}
                title="API & webhooks"
                description="Programmatic control with a comprehensive API and webhook support."
              /> */}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800 bg-black"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple by design
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get up and running in minutes with our straightforward setup
                  process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-3">
              <StepCard
                number="01"
                title="Install CLI"
                description="Download and install the ngopen CLI with a single command."
                code={" go install github.com/heysubinoy/ngopen@latest"}
              />
              <StepCard
                number="02"
                title="Start tunnel"
                description="Expose your local server with a simple command."
                code="ngopen --local localhost:3000 --auth XXX"
              />
              <StepCard
                number="03"
                title="Access anywhere"
                description="Your local server is now accessible worldwide via a public URL."
                code="https://demo.n.sbn.lol -> http://localhost:3000"
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800 bg-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Loved by developers
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what developers are saying about ngopen.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Testimonial
                image="/testimonial/subhadip.webp"
                quote="Finally, a tunnel tool I control. ngopen fits right into my self-hosted stack."
                author="Subhadip Saha"
                role="Full Stack Developer"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-zinc-900 via-black to-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to take control?
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start exposing your local services with ngopen today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white border-0"
                  asChild
                >
                  <Link href="/get-started">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  // variant=""
                  className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white bg-zinc-900"
                  asChild
                >
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Code className="h-5 w-5 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                ngopen
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Self-hosted reverse tunneling and HTTP exposure service.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <div className="flex gap-4">
              <Link
                href="https://github.com/heysubinoy/ngopen"
                className="text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="/docs" className="text-zinc-400 hover:text-white">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Documentation</span>
              </Link>
            </div>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} ngopen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { FileText, MessageSquare } from "lucide-react";
