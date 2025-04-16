"use client"

import { useState } from "react"
import { Copy, Check, Download, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { User } from "@/lib/types"

interface DashboardContentProps {
  user: User
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user.authKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Authentication Key</CardTitle>
          <CardDescription>Use this key to authenticate with the ngopen application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="bg-muted p-3 rounded-md font-mono text-sm flex-1 overflow-x-auto">{user.authKey}</div>
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Keep this key secure. Do not share it with others.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Download ngopen</CardTitle>
          <CardDescription>Get started with ngopen on your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full" asChild>
              <a href="/downloads/ngopen-latest.zip">
                <Download className="mr-2 h-4 w-4" /> Download Latest Version
              </a>
            </Button>

            <div className="text-sm text-muted-foreground">Version 1.2.0 | Released: April 10, 2025</div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Installation Instructions</CardTitle>
          <CardDescription>Follow these steps to install and configure ngopen</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="go">
            <TabsList className="mb-4">
              <TabsTrigger value="go">Go</TabsTrigger>
              <TabsTrigger value="npm">NPM</TabsTrigger>
              <TabsTrigger value="docker">Docker</TabsTrigger>
            </TabsList>

            <TabsContent value="go" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Install ngopen using Go</div>
                    <div className="text-green-500 dark:text-green-400">go install github.com/ngopen/cli@latest</div>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Configure your authentication key</div>
                    <div className="text-green-500 dark:text-green-400">
                      ngopen config set auth-key {"{your-auth-key}"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Verify installation</div>
                    <div className="text-green-500 dark:text-green-400">ngopen --version</div>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <p className="font-medium">Additional Go-specific instructions:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Ensure your GOPATH is correctly set up</li>
                  <li>For development, you can clone the repository and build from source</li>
                  <li>Go version 1.18 or higher is recommended</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="npm" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Install ngopen using npm</div>
                    <div className="text-green-500 dark:text-green-400">npm install -g @ngopen/cli</div>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Configure your authentication key</div>
                    <div className="text-green-500 dark:text-green-400">
                      ngopen config set auth-key {"{your-auth-key}"}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="docker" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Pull the ngopen Docker image</div>
                    <div className="text-green-500 dark:text-green-400">docker pull ngopen/cli:latest</div>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start">
                  <Terminal className="h-5 w-5 mr-2 mt-0.5" />
                  <div className="font-mono text-sm">
                    <div># Run with your auth key</div>
                    <div className="text-green-500 dark:text-green-400">
                      docker run -e NGOPEN_AUTH_KEY={"{your-auth-key}"} ngopen/cli:latest
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
