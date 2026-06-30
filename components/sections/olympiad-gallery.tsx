"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { getAssetPath } from "@/lib/paths"
import { Play, X, ChevronLeft, ChevronRight, Maximize2, ImageIcon, Film } from "lucide-react"

type MediaItem = {
  id: string
  src: string
  type: "image" | "video"
  category: "poster" | "exam"
  title: string
  description?: string
}

const mediaItems: MediaItem[] = [
  {
    id: "item_1",
    src: getAssetPath("/images/olympiad/item_1.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 1",
    description: "மாபெரும் தமிழ் ஒலிம்பியாட் தேர்வு அறிவிப்பு"
  },
  {
    id: "item_2",
    src: getAssetPath("/images/olympiad/item_2.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 2",
    description: "பதிவு மற்றும் தேர்வு விபரங்கள்"
  },
  {
    id: "item_3",
    src: getAssetPath("/images/olympiad/item_3.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 3",
    description: "அறிவிப்புகள் மற்றும் பரிசுகள் விபரம்"
  },
  {
    id: "item_4",
    src: getAssetPath("/images/olympiad/item_4.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 4",
    description: "மாணாக்கர் சேர்க்கை மற்றும் விபரங்கள்"
  },
  {
    id: "item_5_sub_1",
    src: getAssetPath("/images/olympiad/item_5_sub_1.jpg"),
    type: "image",
    category: "exam",
    title: "ஒலிம்பியாட் புத்தகங்கள் ஒப்படைத்தல்",
    description: "பள்ளித் தலைமையாசிரியரிடம் ஒலிம்பியாட் பாடப்புத்தகங்கள் ஒப்படைக்கும் தருணம் (சேலம் காமராஜர் பள்ளி)"
  },
  {
    id: "item_5_sub_2",
    src: getAssetPath("/images/olympiad/item_5_sub_2.jpg"),
    type: "image",
    category: "exam",
    title: "தேர்வு அறை 1 இருக்கை அமைப்புகள்",
    description: "மாணாக்கர்களுக்கான தேர்வு அறை 1 இருக்கை ஒழுங்குமுறை"
  },
  {
    id: "item_5_sub_3",
    src: getAssetPath("/images/olympiad/item_5_sub_3.jpg"),
    type: "image",
    category: "exam",
    title: "தேர்வு அறை 2A இருக்கை அமைப்புகள்",
    description: "மாணாக்கர்களுக்கான தேர்வு அறை 2A இருக்கை ஒழுங்குமுறை"
  },
  {
    id: "item_5_sub_4",
    src: getAssetPath("/images/olympiad/item_5_sub_4.jpg"),
    type: "image",
    category: "exam",
    title: "தேர்வு அறை 2B இருக்கை அமைப்புகள்",
    description: "மாணாக்கர்களுக்கான தேர்வு அறை 2B இருக்கை ஒழுங்குமுறை"
  },
  {
    id: "item_5_sub_5",
    src: getAssetPath("/images/olympiad/item_5_sub_5.jpg"),
    type: "image",
    category: "exam",
    title: "மாணாக்கர்கள் கையொப்பமிடுதல் (அறை 1)",
    description: "தேர்வு எழுத வருகை தந்து வருகைப் பதிவேட்டில் கையொப்பமிடும் மாணாக்கர்கள்"
  },
  {
    id: "item_5_sub_6",
    src: getAssetPath("/images/olympiad/item_5_sub_6.jpg"),
    type: "image",
    category: "exam",
    title: "மாணாக்கர்கள் கையொப்பமிடுதல் (அறை 2)",
    description: "தேர்வு எழுத வருகை தந்து வருகைப் பதிவேட்டில் கையொப்பமிடும் மாணாக்கர்கள்"
  },
  {
    id: "item_5_sub_7",
    src: getAssetPath("/images/olympiad/item_5_sub_7.jpg"),
    type: "image",
    category: "exam",
    title: "மாணாக்கர்களுக்கு விளக்கம் அளித்தல்",
    description: "தேர்வு விதிமுறைகள் குறித்து மாணாக்கர்களுக்கு ஒருங்கிணைப்பாளர் விளக்கம் அளித்தல்"
  },
  {
    id: "item_5_sub_8",
    src: getAssetPath("/images/olympiad/item_5_sub_8.jpg"),
    type: "image",
    category: "exam",
    title: "தேர்வு விடைத்தாள்கள் சேகரித்தல்",
    description: "தேர்வு நிறைவடைந்த பின் விடைத்தாள்களை சேகரிக்கும் பணி"
  },
  {
    id: "item_5_sub_9",
    src: getAssetPath("/images/olympiad/item_5_sub_9.jpg"),
    type: "image",
    category: "exam",
    title: "விடைத்தாள்கள் மதிப்பீடு செய்தல்",
    description: "ஒன்றாம் வகுப்பு முதல் மூன்றாம் வகுப்பு வரை உள்ள மாணாக்கர்களின் விடைத்தாள்கள் திருத்துதல்"
  },
  {
    id: "item_5_sub_10",
    src: getAssetPath("/images/olympiad/item_5_sub_10.jpg"),
    type: "image",
    category: "exam",
    title: "தலைமையாசிரியருக்கு பாராட்டுச் சான்றிதழ்",
    description: "தேர்வுக்கு பின் பள்ளித் தலைமையாசிரியருக்கு பாராட்டுச் சான்றிதழ் வழங்கி கௌரவித்தல்"
  },
  // {
  //   id: "item_5_sub_11",
  //   src: getAssetPath("/images/olympiad/item_5_sub_11.mp4"),
  //   type: "video",
  //   category: "exam",
  //   title: "தேர்வு அறை நிகழ்வுகள் மற்றும் விடைத்தாள்கள் சேகரிப்பு",
  //   description: "ஒலிம்பியாட் தேர்வு நிறைவடைந்து விடைத்தாள்கள் சேகரிக்கப்படும் காணொளி காட்சி"
  // },
  {
    id: "item_6",
    src: getAssetPath("/images/olympiad/item_6.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 5",
    description: "தமிழ் மொழி விழிப்புணர்வு மற்றும் ஒலிம்பியாட் தேர்வு சுவரொட்டி"
  },
  {
    id: "item_7",
    src: getAssetPath("/images/olympiad/item_7.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 6",
    description: "இணைய வழி ஒலிம்பியாட் பதிவு அறிவிப்பு"
  },
  {
    id: "item_8",
    src: getAssetPath("/images/olympiad/item_8.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 7",
    description: "தேர்வு மையங்கள் மற்றும் தொடர்புகொள்ளும் விபரம்"
  },
  {
    id: "item_9",
    src: getAssetPath("/images/olympiad/item_9.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நிகழ்வு சுவரொட்டி 8",
    description: "மதிப்பெண் மற்றும் வெற்றியாளர் அறிவிப்பு விவரம்"
  },
  {
    id: "item_10",
    src: getAssetPath("/images/olympiad/item_10.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 1",
    description: "வெற்றி பெற்ற மாணாக்கர்களுக்கு பரிசுகள் வழங்கும் தருணம்"
  },
  {
    id: "item_11",
    src: getAssetPath("/images/olympiad/item_11.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 2",
    description: "பள்ளிகள் வாரியாக வெற்றி பெற்ற மாணாக்கர்கள்"
  },
  {
    id: "item_12",
    src: getAssetPath("/images/olympiad/item_12.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 3",
    description: "பள்ளி நிர்வாகத்தினர் மற்றும் ஒருங்கிணைப்பாளர்கள்"
  },
  {
    id: "item_13",
    src: getAssetPath("/images/olympiad/item_13.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 4",
    description: "தலைமையாசிரியர்கள் மற்றும் ஆசிரியர்களின் சிறப்பான முன்னெடுப்பு"
  },
  {
    id: "item_14",
    src: getAssetPath("/images/olympiad/item_14.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 5",
    description: "சான்றிதழ்கள் மற்றும் பரிசுகள் பெற்ற மாணாக்கர்களின் மகிழ்ச்சி"
  },
  {
    id: "item_15",
    src: getAssetPath("/images/olympiad/item_15.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 6",
    description: "பள்ளி அளவில் முதலிடம் பெற்ற மாணாக்கர்களுக்கு கௌரவிப்பு"
  },
  {
    id: "item_16",
    src: getAssetPath("/images/olympiad/item_16.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 7",
    description: "பரிசளிப்பு விழாவில் சிறப்பு விருந்தினர்கள் உரை"
  },
  {
    id: "item_17",
    src: getAssetPath("/images/olympiad/item_17.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 8",
    description: "வெற்றி வாகை சூடிய மாணாக்கர்களின் குழு புகைப்படம்"
  },
  {
    id: "item_18",
    src: getAssetPath("/images/olympiad/item_18.jpg"),
    type: "image",
    category: "poster",
    title: "ஒலிம்பியாட் நினைவுகள் 9",
    description: "தமிழ் ஆர்வலர்கள் மற்றும் ஒருங்கிணைப்பாளர்களின் ஒருங்கிணைப்பு"
  }
]

export function OlympiadGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredItems = mediaItems

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex === null) return
    const nextIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
    setLightboxIndex(nextIdx)
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (lightboxIndex === null) return
    const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
    setLightboxIndex(nextIdx)
  }

  // Handle Keyboard Nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") setLightboxIndex(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxIndex])

  // Prevent scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxIndex])

  const activeMedia = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-border/50" id="olympiad-gallery">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            புகைப்படங்கள் & காணொளிகள்
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            ஒலிம்பியாட் நினைவுகள்
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            மாபெரும் தமிழ் ஒலிம்பியாட் தேர்வின் சிறப்பம்சங்கள் மற்றும் தேர்வு கள நினைவுகளின் தொகுப்பு.
          </p>
        </div>


        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl border border-black/5 overflow-hidden cursor-pointer aspect-4/3 transition-all duration-300"
                onClick={() => setLightboxIndex(index)}
              >
                {item.type === "video" ? (
                  <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                    {/* Placeholder image representation for video */}
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
                      <Film className="w-12 h-12 text-gold-light opacity-80" />
                      <div>
                        <div className="font-semibold text-sm line-clamp-2 px-2">{item.title}</div>
                        <div className="text-xs text-white/60 mt-1">காணொளி (காண கிளிக் செய்க)</div>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-primary ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                      <div className="text-white space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-1.5 text-xs text-gold-light font-medium">
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>ஒலிம்பியாட்</span>
                        </div>
                        <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
                        {item.description && (
                          <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md justify-between select-none"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 w-full text-white bg-gradient-to-b from-black/50 to-transparent z-10">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-gold-light font-semibold">
                    {activeMedia.type === "video" ? "காணொளி" : "புகைப்படம்"}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold">{activeMedia.title}</h3>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                  id="btn-lightbox-close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="relative flex-1 flex items-center justify-center p-4">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden md:flex"
                  aria-label="Previous Media"
                  id="btn-lightbox-prev"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Media Container */}
                <div
                  className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {activeMedia.type === "video" ? (
                    <video
                      ref={videoRef}
                      src={activeMedia.src}
                      controls
                      autoPlay
                      className="max-w-full max-h-full rounded-lg shadow-2xl object-contain bg-black"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={activeMedia.src}
                        alt={activeMedia.title}
                        fill
                        className="object-contain select-none"
                        sizes="100vw"
                        priority
                      />
                    </div>
                  )}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden md:flex"
                  aria-label="Next Media"
                  id="btn-lightbox-next"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Mobile Swipe / Controls Assist Indicator & Description */}
              <div className="p-6 text-center text-white bg-gradient-to-t from-black/50 to-transparent w-full space-y-4">
                {activeMedia.description && (
                  <p className="text-sm text-white/80 max-w-2xl mx-auto px-4 leading-relaxed">
                    {activeMedia.description}
                  </p>
                )}
                
                {/* Mobile Navigation Assist buttons */}
                <div className="flex md:hidden justify-center gap-6 pb-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
                    id="btn-lightbox-prev-mobile"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all"
                    id="btn-lightbox-next-mobile"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-xs text-white/50 font-medium">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
