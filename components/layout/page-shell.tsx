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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-grow", mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
}

