"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function LogoutButton({ variant = "sidebar" }: { variant?: "sidebar" | "header" }) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      localStorage.removeItem("vaagai-session")
      router.push("/login")
      router.refresh()
    } catch (e) {
      console.error(e)
    }
  }

  if (variant === "header") {
    return (
      <button 
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-100"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden sm:inline">Logout</span>
      </button>
    )
  }

  return (
    <button 
      onClick={handleLogout}
      className="flex items-center gap-3 px-3 py-3 w-full rounded-lg hover:bg-red-900/30 text-slate-300 hover:text-red-400 transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span className="text-sm font-medium">Logout</span>
    </button>
  )
}
