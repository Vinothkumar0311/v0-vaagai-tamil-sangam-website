"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { recognitions, organizationInfo } from "@/data/recognitions"
import { getAssetPath } from "@/lib/paths"
import { motion } from "framer-motion"

// Helper function to calculate circular index difference for seamless looping
const getDiff = (index: number, activeIndex: number, total: number) => {
  let diff = index - activeIndex
  if (diff > total / 2) {
    diff -= total
  } else if (diff < -total / 2) {
    diff += total
  }
  return diff
}

export function RecognitionsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [selectedRecognition, setSelectedRecognition] = React.useState<typeof recognitions[0] | null>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(1200)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  React.useEffect(() => {
    if (selectedRecognition !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedRecognition])

  const handlePrev = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + recognitions.length) % recognitions.length)
  }, [])

  const handleNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % recognitions.length)
  }, [])

  React.useEffect(() => {
    if (selectedRecognition !== null || isHovered) return

    const interval = setInterval(() => {
      handleNext()
    }, 2000)

    return () => clearInterval(interval)
  }, [selectedRecognition, isHovered, handleNext])

  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  const translationOffset = isMobile ? 65 : isTablet ? 115 : 170
  const cardWidth = isMobile ? 240 : 300
  const cardHeight = isMobile ? 320 : 400
  const maxVisibleDiff = isMobile ? 1 : 2

  const handleCardClick = (index: number, recognition: typeof recognitions[0]) => {
    if (index === activeIndex) {
      setSelectedRecognition(recognition)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-[#FDFCF6] relative overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#004D40] mb-6 leading-tight">
            அங்கீகாரங்களும் <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007084] to-primary">
              அனுமதிகளும்
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            வாகை தமிழ்ச்சங்கம் பெற்றுள்ள அதிகாரப்பூர்வ அங்கீகாரங்கள் மற்றும் அரசு அனுமதிகள்
          </p>
        </div>

        {/* Recognitions Carousel Container */}
        <div className="relative group max-w-[1400px] mx-auto">
          {/* Left Navigation Button */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:scale-110"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Right Navigation Button */}
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:scale-110"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* 3D Stack Container */}
          <div
            className="relative w-full flex items-center justify-center overflow-visible py-10"
            style={{ 
              height: `${cardHeight + 80}px`,
              perspective: "1200px", 
              transformStyle: "preserve-3d" 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {recognitions.map((recognition, index) => {
              const total = recognitions.length
              const diff = getDiff(index, activeIndex, total)
              const absDiff = Math.abs(diff)
              const isActive = diff === 0
              const isVisible = absDiff <= maxVisibleDiff

              // Calculate 3D positioning
              const translateX = diff * translationOffset
              const rotateY = isActive ? 0 : (diff < 0 ? 32 : -32)
              const scale = isActive ? 1.05 : Math.max(0.7, 1 - absDiff * 0.1)
              const zIndex = 10 - absDiff

              let opacity = 0
              if (isVisible) {
                if (isActive) opacity = 1
                else if (absDiff === 1) opacity = 0.7
                else if (absDiff === 2) opacity = 0.4
              }

              return (
                <motion.div
                  key={recognition.id}
                  className="absolute cursor-pointer select-none"
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: zIndex,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  animate={{
                    x: translateX,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(event, info) => {
                    const threshold = 50
                    if (info.offset.x < -threshold) {
                      handleNext()
                    } else if (info.offset.x > threshold) {
                      handlePrev()
                    }
                  }}
                  onClick={() => handleCardClick(index, recognition)}
                >
                  <Card className={`relative w-full h-full overflow-hidden border border-gray-100 bg-white shadow-2xl rounded-[2.5rem] flex flex-col justify-between p-6 transition-shadow duration-300 ${isActive ? 'shadow-primary/10 hover:shadow-primary/20' : 'hover:shadow-black/10'}`}>
                    {/* Green border accent at top */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                    
                    {/* Watermark in background */}
                    <div className="absolute top-4 right-6 opacity-5">
                      <ShieldCheck className="w-24 h-24 text-primary" />
                    </div>

                    {/* Top section: Sequential Number */}
                    <div className="flex justify-between items-center w-full z-10">
                      <span className="text-[10px] font-black text-gray-300">#00{index + 1}</span>
                      {recognition.id && (
                        <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {recognition.id}
                        </span>
                      )}
                    </div>

                    {/* Center Section: Logo Container */}
                    <div className="flex-1 flex flex-col items-center justify-center my-4 z-10">
                      <div className="relative w-32 h-32 bg-white rounded-3xl shadow-inner border border-gray-50 p-4 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                        {recognition.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={recognition.logo}
                              alt={recognition.nameEn}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                            <span className="text-primary font-black text-3xl">
                              {recognition.nameEn.slice(0, 1)}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-black text-[#004D40] mt-5 text-center px-2 leading-tight">
                        {recognition.name}
                      </h3>
                      <p className="text-[11px] font-bold text-[#007084] mt-1 text-center uppercase tracking-wide">
                        {recognition.nameEn}
                      </p>
                    </div>

                    {/* Bottom: Pill Badge (Visible or more prominent on active card) */}
                    <div className="w-full flex justify-center z-10 h-10 items-end">
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-[#FDFCF6] hover:bg-primary hover:text-white text-primary rounded-full shadow-lg border border-primary/10 px-5 py-2 flex items-center gap-3 transition-colors duration-300"
                        >
                          {recognition.logo && (
                            <div className="relative w-4 h-4 rounded-full overflow-hidden bg-white border border-gray-100 flex-shrink-0">
                              <Image
                                src={recognition.logo}
                                alt=""
                                fill
                                className="object-contain p-0.5"
                              />
                            </div>
                          )}
                          <span className="text-[10px] font-black tracking-wider uppercase">
                            மேலும் அறிய ›
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Custom Interactive Modal for Detailed Recognition View */}
        {selectedRecognition && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
            {/* Modal Backdrop click to close */}
            <div 
              className="absolute inset-0 cursor-default" 
              onClick={() => setSelectedRecognition(null)} 
            />
            
            {/* Modal Content Card */}
            <div className="relative w-full max-w-2xl bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border border-gray-100 shadow-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedRecognition(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6 relative z-10 text-left">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100">
                  <div className="flex-shrink-0 relative w-24 h-24 bg-gray-50 rounded-3xl p-4 flex items-center justify-center border border-gray-100 shadow-inner">
                    {selectedRecognition.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={selectedRecognition.logo}
                          alt={selectedRecognition.nameEn}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
                        <span className="text-primary font-black text-3xl">
                          {selectedRecognition.nameEn.slice(0, 1)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-[#004D40] leading-tight">
                      {selectedRecognition.name}
                    </h3>
                    <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#007084] to-primary uppercase tracking-wider mt-2">
                      {selectedRecognition.nameEn}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="text-gray-600 leading-relaxed py-2">
                  <p className="text-gray-700 leading-relaxed text-base text-justify whitespace-pre-wrap">
                    {selectedRecognition.description}
                  </p>
                </div>

                {/* E-ISSN Badge if IJVAAGAI */}
                {selectedRecognition.id === "ijvaagai" && (
                  <div className="bg-gold/10 border border-gold/20 rounded-2xl p-4 flex items-center gap-4">
                    <span className="px-3 py-1 bg-gold text-white font-bold rounded-lg text-xs tracking-wider uppercase shadow-sm">
                      ISSN License
                    </span>
                    <span className="text-sm font-black text-gold">
                      E-ISSN: 3107-9202
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .shadow-inner-lg {
          box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  )
}
