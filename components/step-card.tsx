interface StepCardProps {
  number: string
  title: string
  description: string
  code: string
}

export function StepCard({ number, title, description, code }: StepCardProps) {
  return (
    <div className="flex flex-col p-6 space-y-4 rounded-xl border border-zinc-800 bg-zinc-950 transition-all hover:border-zinc-700">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold">
          {number}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-zinc-400">{description}</p>
      <div className="p-3 rounded-md bg-black border border-zinc-800">
        <code className="text-sm text-emerald-400">{code}</code>
      </div>
    </div>
  )
}
