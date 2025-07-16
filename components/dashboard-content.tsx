"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { User } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface DashboardContentProps {
  user: User;
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const [copied, setCopied] = useState(false);
  const [apiKeys, setApiKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    setLoading(true);
    const res = await fetch("/api/auth/apikey");
    const data = await res.json();
    setApiKeys(data);
    setLoading(false);
  }

  async function createKey() {
    setCreating(true);
    const res = await fetch("/api/auth/apikey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description }),
    });
    setDescription("");
    setShowDialog(false);
    setCreating(false);
    fetchKeys();
  }

  async function deleteKey(id: number) {
    await fetch("/api/auth/apikey", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchKeys();
  }

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(user.authKey)
  //   setCopied(true)
  //   setTimeout(() => setCopied(false), 2000)
  // }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Authentication Key</CardTitle>
          <CardDescription>
            Use this key to authenticate with the ngopen application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            {/* <div className="bg-muted p-3 rounded-md font-mono text-sm flex-1 overflow-x-auto">{user.authKey}</div> */}
            {/* <Button variant="outline" size="icon" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button> */}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Keep this key secure. Do not share it with others.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Download ngopen</CardTitle>
          <CardDescription>
            Get started with ngopen on your platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full" asChild>
              <a href="/downloads/ngopen-latest.zip">
                <Download className="mr-2 h-4 w-4" /> Download Latest Version
              </a>
            </Button>

            <div className="text-sm text-muted-foreground">
              Version 1.2.0 | Released: April 10, 2025
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Manage your API authentication keys below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between items-center">
            <Button onClick={() => setShowDialog(true)}>Create API Key</Button>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.length > 0 &&
                  apiKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell>{key.id}</TableCell>
                      <TableCell className="font-mono text-xs max-w-xs truncate">
                        {key.key}
                      </TableCell>
                      <TableCell>{key.description}</TableCell>
                      <TableCell>
                        {key.createdAt
                          ? new Date(key.createdAt).toLocaleString()
                          : "-"}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteKey(key.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <DialogFooter>
                <Button onClick={createKey} disabled={creating}>
                  {creating ? "Creating..." : "Create"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Setup Instructions</h3>
            <div className="rounded-md bg-muted p-4 font-mono text-sm">
              ngopen config set auth-key {"<your-api-key>"}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Use the API key above to authenticate your ngopen client. Keep
              your keys secure and delete any that are no longer needed.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
