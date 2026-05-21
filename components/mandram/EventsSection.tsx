"use client"

import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar as CalendarIcon, 
  Image as ImageIcon, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Clock,
  ArrowRight,
  Sparkles,
  Search
} from "lucide-react"
import { firestore } from "@/lib/firebase"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import { driveToImageUrl } from "@/lib/utils"
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  subMonths,
  isToday,
  parseISO
} from "date-fns"
import { cn } from "@/lib/utils"

interface Event {
  id?: string
  title: string
  date: string
  image?: string
  description?: string
  type?: "upcoming" | "past" | string
  location?: string
  time?: string
}

interface EventsSectionProps {
  mandramSlug: string
  initialEvents: Event[]
}

export function EventsSection({ mandramSlug, initialEvents }: EventsSectionProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [isLive, setIsLive] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [activeEvent, setActiveEvent] = useState<Event | null>(null)

  // Subscribe to Firestore real-time updates
  useEffect(() => {
    if (!mandramSlug) return

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

        setEvents(liveEvents.length > 0 ? liveEvents : initialEvents)
        setIsLive(true)
      },
      (error) => {
        console.error("[EventsSection] Firestore listener error:", error)
      }
    )

    return () => unsubscribe()
  }, [mandramSlug, initialEvents])

  // Calendar Helpers
  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth))
    const end = endOfWeek(endOfMonth(currentMonth))
    return eachDayOfInterval({ start, end })
  }, [currentMonth])

  const filteredEvents = useMemo(() => {
    if (!searchQuery) return events
    return events.filter(e => 
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      e.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [events, searchQuery])

  const eventsOnSelectedDay = useMemo(() => {
    return filteredEvents.filter(event => {
      try {
        return isSameDay(parseISO(event.date), selectedDate)
      } catch {
        return false
      }
    })
  }, [filteredEvents, selectedDate])

  const hasEventsOnDay = (day: Date) => {
    return filteredEvents.some(event => {
      try {
        return isSameDay(parseISO(event.date), day)
      } catch {
        return false
      }
    })
  }

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-slate-100 shadow-sm text-primary text-xs font-black uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            நிகழ்வுகள் & காலண்டர்
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight"
          >
            மன்றத்தின் <span className="text-primary italic">நிகழ்வுகளைத்</span> திட்டமிடுங்கள்
          </motion.h2>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="நிகழ்வுகளைத் தேடுங்கள்..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-700 font-medium"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Calendar View */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Calendar Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-12">
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {format(currentMonth, "MMMM")}
                    <span className="text-primary ml-2 font-light">{format(currentMonth, "yyyy")}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    {format(selectedDate, "MMMM do, yyyy")}
                  </div>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button 
                    onClick={prevMonth}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 text-slate-900 hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center shadow-inner"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button 
                    onClick={nextMonth}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 text-slate-900 hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center shadow-inner"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                  <div key={day} className="text-center text-[10px] sm:text-[11px] font-black text-slate-300 uppercase tracking-widest sm:tracking-[0.2em]">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-3 md:gap-4">
                {days.map((day, i) => {
                  const isCurrentMonth = isSameMonth(day, currentMonth)
                  const isSelected = isSameDay(day, selectedDate)
                  const hasEvents = hasEventsOnDay(day)
                  const today = isToday(day)

                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => setSelectedDate(day)}
                      disabled={!isCurrentMonth}
                      className={cn(
                        "group relative aspect-square flex flex-col items-center justify-center rounded-lg sm:rounded-[1.25rem] transition-all duration-500 text-xs sm:text-sm font-bold",
                        !isCurrentMonth && "opacity-0 pointer-events-none",
                        isCurrentMonth && "text-slate-600 hover:bg-slate-50 hover:scale-110",
                        isSelected && "bg-primary text-white hover:bg-primary shadow-[0_20px_40px_-8px_rgba(var(--primary-rgb),0.4)] scale-110 z-10",
                        today && !isSelected && "ring-2 ring-primary/20 text-primary bg-primary/5"
                      )}
                    >
                      <span className="relative z-10">{format(day, "d")}</span>
                      
                      {hasEvents && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           <div className={cn(
                             "w-full h-full rounded-lg sm:rounded-[1.25rem] border transition-all duration-500",
                             isSelected ? "border-white/30 scale-90" : "border-primary/5 group-hover:border-primary/20"
                           )} />
                        </div>
                      )}

                      {hasEvents && (
                        <span className={cn(
                          "absolute bottom-1.5 sm:bottom-3 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-500",
                          isSelected ? "bg-white scale-150" : "bg-primary animate-bounce shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"
                        )} />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Events Detail Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary shadow-xl shadow-primary/20 flex items-center justify-center">
                    <CalendarIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                       {isToday(selectedDate) ? "Today's Agenda" : format(selectedDate, "MMM do, EEEE")}
                    </h4>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                       {eventsOnSelectedDay.length} Scheduled Activities
                    </p>
                  </div>
               </div>
            </div>

            <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-grow" style={{ maxHeight: '600px' }}>
              <AnimatePresence mode="popLayout">
                {eventsOnSelectedDay.length > 0 ? (
                  eventsOnSelectedDay.map((event, idx) => (
                    <motion.div
                      key={event.id || idx}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      transition={{ type: "spring", stiffness: 100, delay: idx * 0.1 }}
                      className="group bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border border-slate-50 hover:border-primary/20 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500"
                    >
                      <div className="flex flex-col gap-6">
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
                          {event.image ? (
                            <Image 
                              src={driveToImageUrl(event.image)} 
                              alt={event.title} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              unoptimized
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-slate-300">
                              <ImageIcon className="w-12 h-12" />
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                             <span className={cn(
                               "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] backdrop-blur-md shadow-xl",
                               event.type === 'upcoming' 
                                 ? "bg-emerald-500/90 text-white" 
                                 : "bg-slate-900/80 text-white"
                             )}>
                               {event.type === 'upcoming' ? 'Active' : 'Closed'}
                             </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="text-2xl font-black text-slate-900 leading-none group-hover:text-primary transition-colors">
                             {event.title}
                          </h5>
                          
                          <div className="flex flex-wrap gap-4">
                            {/* <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 text-xs font-bold">
                               <Clock className="w-4 h-4 text-primary" />
                               {event.time || "Time TBD"}
                            </div> */}
                            {/* <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-500 text-xs font-bold">
                               <MapPin className="w-4 h-4 text-primary" />
                               {event.location || "Online / Campus"}
                            </div> */}
                          </div>

                          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                            {event.description || "Join us for this exclusive mandram activity. More details will be shared during the session."}
                          </p>

                          <button 
                            onClick={() => setActiveEvent(event)}
                            className="group/btn flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-slate-900 text-white text-sm font-black hover:bg-primary transition-all duration-300 shadow-xl shadow-slate-900/10"
                          >
                             Explore Details
                             <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/40 backdrop-blur-sm rounded-[2.5rem] border-2 border-dashed border-slate-200"
                  >
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-8 text-slate-300">
                      <CalendarIcon className="w-12 h-12" />
                    </div>
                    <h5 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Empty Schedule</h5>
                    <p className="text-slate-400 text-sm max-w-[240px] mx-auto leading-relaxed font-medium">
                      No events found for this date. Try exploring other dates on the calendar.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {activeEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEvent(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-video w-full bg-slate-100">
                {activeEvent.image ? (
                  <Image 
                    src={driveToImageUrl(activeEvent.image)} 
                    alt={activeEvent.title} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-200">
                    <ImageIcon className="w-20 h-20" />
                  </div>
                )}
                <button 
                  onClick={() => setActiveEvent(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center border border-white/20"
                >
                  <span className="text-2xl font-bold">×</span>
                </button>
              </div>
              
              <div className="p-5 sm:p-8 md:p-10 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <span className={cn(
                       "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]",
                       activeEvent.type === 'upcoming' ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-600"
                     )}>
                       {activeEvent.type || "Event"}
                     </span>
                     <div className="flex items-center gap-2 text-gold font-bold text-sm">
                       <CalendarIcon className="w-4 h-4" />
                       {format(parseISO(activeEvent.date), "MMMM do, yyyy")}
                     </div>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {activeEvent.title}
                  </h3>
                </div>

                {/* <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                      <Clock className="w-4 h-4" /> Time
                    </div>
                    <p className="text-slate-900 font-black">{activeEvent.time || "Scheduled"}</p>
                  </div>
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                      <MapPin className="w-4 h-4" /> Venue
                    </div>
                    <p className="text-slate-900 font-black truncate">{activeEvent.location || "Campus Premises"}</p>
                  </div>
                </div> */}

                <div className="space-y-4">
                  <h4 className="text-lg font-black text-slate-900">Description</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {activeEvent.description || "Detailed description for this activity has not been provided yet. Please check back later for more information or contact the mandram coordinator."}
                  </p>
                </div>

                <div className="pt-6 flex gap-4">
                   <button 
                     onClick={() => setActiveEvent(null)}
                     className="flex-1 py-4 rounded-2xl border-2 border-slate-100 text-slate-900 font-black text-sm hover:bg-slate-50 transition-all"
                   >
                     Close View
                   </button>
                   <button className="flex-[2] py-4 rounded-2xl bg-primary text-white font-black text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
                     Register Now
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        :root {
          --primary-rgb: 15, 118, 110;
        }
      `}</style>
    </section>
  )
}
