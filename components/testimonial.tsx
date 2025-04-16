import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center space-y-6 rounded-xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
      <Quote className="h-12 w-12 text-emerald-400 opacity-50" />
      <p className="text-xl md:text-2xl font-medium text-center italic">"{quote}"</p>
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600" />
        <div className="mt-4 text-center">
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-zinc-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
