import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 space-y-4 rounded-xl border border-zinc-800 bg-zinc-950 transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-emerald-500/5">
      <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}
