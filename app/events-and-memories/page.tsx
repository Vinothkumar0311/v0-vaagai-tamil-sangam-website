import type { Metadata } from "next"
import Image from "next/image"
import { PageShell } from "@/components/layout/page-shell"
import { getAssetPath } from "@/lib/paths"
import { Sparkles, Camera, Image as ImageIcon, Heart } from "lucide-react"
import { EventsAndMemoriesClient } from "./events-and-memories-client"

export const metadata: Metadata = {
  title: "நிகழ்வுகளும் நினைவுகளும் - வாகை தமிழ்ச்சங்கம்",
  description: "வாகை தமிழ்ச்சங்கத்தின் ஆண்டு விழாக்கள், பட்டமளிப்பு விழாக்கள் மற்றும் இதர கலாச்சாரத் திருவிழாக்களின் அழகிய தருணங்கள் மற்றும் நினைவுகள்.",
}

export default function EventsAndMemoriesPage() {
  return (
    <PageShell>
      {/* Premium Hero Header Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-slate-900 border-b border-slate-800">
        {/* Background decorations & glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,160,89,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-primary/20" />
        <div 
          className="absolute top-0 left-0 right-0 h-[500px] bg-cover bg-center opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: `url(${getAssetPath("/images/tamil_heritage_bg.png")})` }}
        />
        
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Elegant Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-light text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-gold fill-gold" />
              <span>வாகை வரலாற்றுப் பதிவுகள்</span>
              <span className="text-white/30 px-1">|</span>
              <span className="text-white/80 font-medium">Moments & Memories</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight py-2">
              நிகழ்வுகளும் <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">நினைவுகளும்</span>
            </h1>

            {/* Subtitle */}
            <p className="text-center text-lg sm:text-xl md:text-2xl text-slate-300 font-semibold max-w-2xl mx-auto leading-relaxed">
              வாகை தமிழ்ச்சங்கத்தின் வரலாற்றுப் பயணங்கள், அழகிய தருணங்கள் மற்றும் மறக்க முடியாத விழா நினைவுகளின் தொகுப்பு.
            </p>

          </div>
        </div>
      </section>

      {/* Render the Interactive Client Component */}
      <EventsAndMemoriesClient />
    </PageShell>
  )
}
