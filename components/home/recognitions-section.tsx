"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { recognitions, organizationInfo } from "@/data/recognitions"
import { getAssetPath } from "@/lib/paths"

export function RecognitionsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [selectedRecognition, setSelectedRecognition] = React.useState<typeof recognitions[0] | null>(null)
  const [isHovered, setIsHovered] = React.useState(false)

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

  React.useEffect(() => {
    if (selectedRecognition !== null || isHovered) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        
        // Wrap back to beginning if at the end of the scroll container
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth"
          })
        } else {
          scrollRef.current.scrollBy({
            left: 450,
            behavior: "smooth"
          })
        }
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [selectedRecognition, isHovered])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
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
              onClick={() => scroll("left")}
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
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-4 py-10 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {recognitions.map((recognition, index) => (
              <div
                key={recognition.id}
                className="flex-shrink-0 w-[290px] sm:w-[380px] md:w-[500px] snap-center perspective-1000 cursor-pointer"
                onClick={() => setSelectedRecognition(recognition)}
              >
                <Card className="group/card relative h-full overflow-hidden border-none bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-500 rounded-[2.5rem]">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                  <div className="absolute top-4 right-6 opacity-5 group-hover/card:opacity-10 transition-opacity">
                    <ShieldCheck className="w-24 h-24 text-primary" />
                  </div>

                  <CardContent className="p-0 flex h-full">
                    {/* Logo Section */}
                    <div className="w-[38%] bg-gray-50 flex flex-col items-center justify-center p-6 border-r border-gray-100">
                      <div className="relative w-full aspect-square bg-white rounded-3xl shadow-inner-lg p-4 flex items-center justify-center transform group-hover/card:scale-110 transition-transform duration-500">
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
                            <span className="text-primary font-black text-2xl">
                              {recognition.nameEn.slice(0, 1)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-[62%] p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-[#004D40] mb-4 leading-tight group-hover/card:text-primary transition-colors">
                          {recognition.name}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-6 group-hover/card:text-gray-700 transition-colors">
                          {recognition.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="h-1 w-12 bg-primary/20 rounded-full" />
                        <span className="text-[10px] font-bold text-gray-300">#00{index + 1}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
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
            <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
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

        {/* Organization Info Banner - Redesigned as a 'Seal of Excellence' */}
        {/* <div className="mt-24 max-w-5xl mx-auto">
          <div className="relative p-1 bg-gradient-to-r from-primary/30 via-[#007084]/20 to-primary/30 rounded-[3rem] shadow-xl">
            <div className="relative bg-white rounded-[2.9rem] p-8 md:p-12 overflow-hidden">
              {/* Background watermark *
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                <h4 className="text-[10rem] font-black whitespace-nowrap">VAAGAI TRUST</h4>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-[#007084] p-1 flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform">
                  <div className="w-full h-full rounded-full border-4 border-white/20 flex items-center justify-center bg-white overflow-hidden relative">
                    <Image
                      src={getAssetPath("/icon.svg")}
                      alt="Logo"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-[#004D40] mb-4">
                    நிர்வாகப் பொறுப்பாளர்கள் & <span className="text-primary">அங்கீகாரங்கள்</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    &quot;{organizationInfo.registrationNote}&quot;
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                    {["SRG NAMAKKAL 143", "NGO DARPAN REG", "MSME REGISTERED", "AICTE PARTNER", "IJVAAGAI JOURNAL"].map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
