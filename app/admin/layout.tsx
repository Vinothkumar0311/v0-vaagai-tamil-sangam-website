"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getAssetPath } from "@/lib/paths"
import { LayoutDashboard, CalendarDays, ChevronRight, Loader2 } from "lucide-react"
import { LogoutButton } from "@/components/admin/LogoutButton"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const rawSession = localStorage.getItem("vaagai-session")
    if (!rawSession) {
      router.push("/login")
      return
    }
    
    try {
      const data = JSON.parse(rawSession)
      if (data.expiresAt < Date.now()) {
        localStorage.removeItem("vaagai-session")
        router.push("/login")
      } else {
        setSession(data)
      }
    } catch {
      router.push("/login")
    } finally {
      setLoading(false)
    }
  }, [router])

  if (loading || !session) {
    return <div className="min-h-screen flex items-center justify-center bg-muted/20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
  }

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-100 flex-shrink-0 flex flex-col shadow-xl z-10 sticky top-0 md:h-screen overflow-y-auto">
        <div className="p-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full shrink-0">
               <Image src={getAssetPath("/icon.svg")} alt="Logo" width={40} height={40} />
            </div>
            <div>
              <h2 className="font-bold text-sm tracking-wide text-gold">VAAGAI</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">{session.role} PANEL</p>
            </div>
          </Link>
        </div>

        <div className="p-4 flex-1">
          <div className="mb-6 px-3 py-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-400 mb-1">Logged in as</p>
            <p className="font-bold text-sm truncate">{session.name}</p>
            <div className="mt-2 flex items-center gap-2">
               <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary-400 text-[10px] border border-primary/30 font-semibold uppercase">
                 {session.role}
               </span>
               <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold text-[10px] border border-gold/20 font-semibold uppercase">
                 {session.mandram}
               </span>
            </div>
          </div>

          <nav className="space-y-2">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors group">
              <LayoutDashboard className="w-5 h-5 text-slate-400 group-hover:text-gold" />
              <span className="text-sm font-medium flex-1">Dashboard</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/admin/events" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors group">
              <CalendarDays className="w-5 h-5 text-slate-400 group-hover:text-gold" />
              <span className="text-sm font-medium flex-1">Manage Events</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <LogoutButton variant="sidebar" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden min-h-screen">
        <header className="bg-white px-8 py-5 border-b shadow-sm sticky top-0 z-0 flex items-center justify-between">
           <div>
             <h1 className="text-xl font-bold text-slate-800">Administration Management</h1>
             <div className="text-sm text-slate-500 font-medium">
               Vaagai Tamilsangam
             </div>
           </div>
           <LogoutButton variant="header" />
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

