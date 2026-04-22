"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Image as ImageIcon, RefreshCw } from "lucide-react"
import { firestore } from "@/lib/firebase"
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore"
import { driveToImageUrl } from "@/lib/utils"

interface Event {
  id?: string
  title: string
  date: string
  image?: string
  description?: string
  type?: "upcoming" | "past" | string
}

interface EventsSectionProps {
  /** Mandram slug used to filter events from Firestore in real-time */
  mandramSlug: string
  /** Server-rendered events passed as initial data to avoid flicker */
  initialEvents: Event[]
}

export function EventsSection({ mandramSlug, initialEvents }: EventsSectionProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    if (!mandramSlug) return

    // Subscribe to Firestore real-time updates for this mandram's events
    const q = query(
      collection(firestore, "events"),
      where("mandram", "==", mandramSlug)
    )

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const liveEvents = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Event))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

        // Prefer live events from DB; fall back to initial static events only if live is empty
        setEvents(liveEvents.length > 0 ? liveEvents : initialEvents)
        setIsLive(true)
      },
      (error) => {
        console.error("[EventsSection] Firestore listener error:", error)
        // Keep showing whatever we have on error
      }
    )

    return () => unsubscribe()
  }, [mandramSlug])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-flex items-center gap-4">
            <span className="w-8 h-1 bg-gold rounded-full" />
            நிகழ்வுகள்
            <span className="w-8 h-1 bg-gold rounded-full" />
          </h2>
          {isLive && (
            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-emerald-600 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              நேரடி புதுப்பிப்பு
            </div>
          )}
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.1, 0.4) }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border-0 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="relative w-full h-48 bg-slate-100">
                  {event.image ? (
                    <Image
                      src={driveToImageUrl(event.image)}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                      <ImageIcon className="w-12 h-12" />
                    </div>
                  )}
                  {event.type && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 text-xs font-bold leading-none bg-white text-primary rounded-full shadow-sm capitalize border border-slate-100">
                        {event.type === "upcoming" ? "வரவிருக்கும்" : "முடிந்தவை"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col">
                  <div className="flex items-center gap-2 text-gold font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="mt-1 text-sm text-slate-600 line-clamp-3">
                      {event.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border-2 border-dashed border-primary/20 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary/20">
              <Calendar className="w-8 h-8" />
            </div>
            <p className="text-xl text-foreground/50 font-medium italic">
              இன்னும் நிகழ்வுகள் சேர்க்கப்படவில்லை
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
