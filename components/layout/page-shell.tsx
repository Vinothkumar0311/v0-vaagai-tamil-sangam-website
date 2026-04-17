import * as React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

interface PageShellProps {
  children: React.ReactNode
  mainClassName?: string
}

export function PageShell({ children, mainClassName }: PageShellProps) {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main className={cn("w-full", mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
}

