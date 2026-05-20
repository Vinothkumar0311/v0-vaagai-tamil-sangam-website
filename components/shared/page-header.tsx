import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("bg-primary py-14 md:py-24", className)}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 pt-12">
          {title}
        </h1>
        {description ? (
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed break-words">{description}</p>
        ) : null}
      </div>
    </section>
  )
}

