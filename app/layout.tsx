import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ngopen',
  description: 'ngopen is a tool for local development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
